import { Injectable, NotFoundException } from '@nestjs/common';
import {
  BadRequestException,
  ConflictException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { User } from 'src/users/schemas/user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

  async checkUserName(userName: string) {
    let user = await this.userModel.findOne({ userName }, { password: 0 });
    if (!user) {
      return false;
    }
    return true;
  }

  async hashAndSave(user: IUser) {
    const salt = 10;
    let savedUser: IUser;
    let password: string = await bcrypt.hash(user.password, salt);
    user.password = password;
    savedUser = await user.save();
    return savedUser;
  }

  async findUserByUserName(userName: string) {
    let user: IUser;
    try {
      user = await this.userModel.findOne({ userName });
    } catch (err) {
      throw new NotFoundException('User Not Found');
    }

    return user;
  }

  async findUserById(id: string) {
    let user: IUser;
    try {
      user = await this.userModel.findOne({ id }, { password: 0 });
    } catch (err) {
      throw new NotFoundException('User Not Found');
    }
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  async addNewUser(user: createUserDto) {
    let newUser = new this.userModel(user);
    let savedUser: IUser;
    let isUserNameUnique: boolean;
    isUserNameUnique = await this.checkUserName(newUser.userName);
    if (isUserNameUnique) {
      throw new ConflictException('UserName already Exist');
    } else {
      try {
        savedUser = await this.hashAndSave(newUser);
      } catch (err) {
        throw new BadRequestException('Bad Request');
      }
    }
    if (!savedUser) {
      throw new BadRequestException('Bad Request');
    }
    return savedUser;
  }

  async getAllUsers() {
    let users: IUser[];

    try {
      users = await this.userModel.find({}, { password: 0 });
    } catch (err) {
      throw new NotFoundException('Users Not Found');
    }

    if (!users || users.length == 0) {
      throw new NotFoundException('Users Not Found');
    }
    return users;
  }

  async getUserById(id: string) {
    let user;
    try {
      user = this.userModel.findById(id, { password: 0 });
    } catch (err) {
      throw new NotFoundException('User Not Found');
    }
    if (!user) {
      throw new NotFoundException('User Not Found Exception');
    }
    return user;
  }

  async getUsersByStatus(conditon: string) {
    let status: boolean;
    let users: IUser[];

    if (conditon == 'approved') {
      status = true;
    } else if (conditon == 'pending') {
      status = false;
    }

    try {
      users = await this.userModel.find({ status }, { password: 0 });
    } catch (err) {
      throw new NotFoundException('Users Not Found');
    }
    if (!users || users.length == 0) {
      throw new NotFoundException('Users Not Found');
    }
    return users;
  }
  async updateUser(id: string) {
    let updatedUser: IUser;
    try {
      updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        { status: true },
        { new: true },
      );
      updatedUser = await this.hashAndSave(updatedUser);
    } catch (err) {
      throw new NotFoundException('User Not Found Exception');
    }
    return updatedUser;
  }

  async deleteUser(id: string) {
    let user: IUser;
    try {
      user = await this.userModel
        .findOneAndDelete({ id }, { password: 0 })
        .exec();
    } catch (err) {
      throw new NotFoundException('User Not Found');
    }
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
  }
}
