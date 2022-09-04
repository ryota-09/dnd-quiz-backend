import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/createUserInput.dto';
import { User } from '@prisma/client';
import { LoginUserInput } from 'src/auth/dto/loginUserInput.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUserByEmail(loginUser: LoginUserInput): Promise<User> {
    const targetUser = await this.prisma.user.findUnique({
      where: {
        email: loginUser.email,
      },
    });
    return targetUser;
  }

  async getUserById(userId: string): Promise<User> {
    const targetUser = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return targetUser;
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

  async updateUserRefreshToken(user: User, hashedRefreshToken: string | null) {
    const updatedUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashedRefreshToken: { set: hashedRefreshToken },
      },
    });
    return updatedUser;
  }
}
