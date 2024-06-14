// users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find({where : {isAdmin : false}});
  }

  async findByUsername(username: string, password: string): Promise<User> {
    return this.usersRepository.findOneBy({userName: username, password, isAdmin: true});
  }

  // Add other user-related methods here
}
