// user.controller.ts

import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from 'src/models';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllBooks() {
    return this.usersService.getAllUsers();
  }

}
