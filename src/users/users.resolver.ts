import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUserInput.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  users(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Query(() => User, { name: 'oneUser' })
  oneUser(@Args('userId') userId: string): Promise<User> {
    return this.userService.findUserById(userId);
  }

  @Mutation(() => User)
  createUser(@Args('user') userDto: CreateUserInput): Promise<User> {
    return this.userService.createNewUser(userDto);
  }
}
