import {
  Injectable,
  ForbiddenException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  async signup(authDto: createUserDto) {
    try {
      const user = await this.userService.addNewUser(authDto);
      return user;
    } catch (e) {
      throw e;
    }
  }

  @HttpCode(HttpStatus.CREATED)
  async login(loginData) {
    console.log(loginData, 'loginData');
    const { userName, password } = loginData;
    const user = await this.userService.findUserByUserName(userName);

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    const match = await compare(password, user.password);

    if (!user.status) {
      console.log('on pending');
      throw new ForbiddenException('Account on Pending State');
    }
    if (!match) {
      console.log("passowrd don't match");

      throw new ForbiddenException('Access Denied');
    }

    const token = await this.getToken(userName, user._id);

    return { id: user._id, name: user.name, userName: user.userName, ...token };
  }

  async getToken(username: string, id: string) {
    const payload = { username, sub: id };
    const token = await this.jwtService.sign(payload, {
      secret: this.configService.get('jwt_key'),
      expiresIn: 3600 * 24 * 7, // for 7 days
    });

    return { access_token: token };
  }
  async logout() {}
}
