import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { LoginUserInput } from 'src/auth/dto/loginUserInput.dto';
import { CreateUserInput } from './dto/createUserInput.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  users(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Query(() => User, { name: 'oneUser' })
  @UseGuards(JwtAuthGuard)
  oneUser(@Args('user') loginUserDto: LoginUserInput): Promise<User> {
    return this.userService.findUserByEmail(loginUserDto);
  }

  @Mutation(() => User)
  createUser(@Args('user') userDto: CreateUserInput): Promise<User> {
    return this.userService.createNewUser(userDto);
  }
}
