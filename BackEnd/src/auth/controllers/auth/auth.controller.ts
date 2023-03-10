import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { createUserDto } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginData) {
    return this.authService.login(loginData);
  }
  @Post('/signup')
  async signup(@Body() authDto: createUserDto) {
    return this.authService.signup(authDto);
  }
  @Post('/logout')
  async logout() {
    return this.authService.logout();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/protected')
  @Roles('superadmin')
  async protected(@Req() req: Request) {
    return req.user;
  }
}
