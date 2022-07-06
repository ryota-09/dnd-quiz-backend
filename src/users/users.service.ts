import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/createUserInput.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async createNewUser({
    username,
    email,
    password,
  }: CreateUserInput): Promise<User> {
    const salt = await bcrypt.genSalt();
    const newUser = await this.prisma.user.create({
      data: {
        id: uuid(),
        username: username,
        email: email,
        password: await bcrypt.hash(password, salt),
        img_path: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    return newUser;
  }
}
