import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersService],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
