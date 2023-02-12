import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from 'src/users/services/users/users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @Post()
  // addUser(@Body() user: createUserDto) {
  //   return this.userService.addNewUser(user);
  // }
  @Get()
  allUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/status/:status')
  getUsersByStatus(@Param('status') status: string) {
    return this.userService.getUsersByStatus(status);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Patch(':id')
  updateUser(@Param('id') id: string) {
    return this.userService.updateUser(id);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
