import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginUserInput } from './dto/loginUserInput.dto';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity';
import { LoginResponse } from './dto/loginResponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(loginUserDto: LoginUserInput) {
    const user = await this.usersService.findUserByEmail(loginUserDto);
    const isValid = await bcrypt.compare(loginUserDto.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('パスワードが間違っています！');
    }
    return { isValid, user };
  }

  async login(user: User): Promise<LoginResponse> {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
