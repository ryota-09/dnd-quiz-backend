import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

import { User } from '../../users/users.entity';
import { LoginUserInput } from '../dto/loginUserInput.dto';
import { JwtPayload } from '../types/auth-types.type';

export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_REFRESH_SECRET_KEY,
    });
  }

  async validate(payload: JwtPayload): Promise<User | null> {
    const loginUserInput: LoginUserInput = {
      email: payload.email,
      password: '',
    };
    const user = this.usersService.findUserByEmail(loginUserInput);

    if (!user) {
      throw new UnauthorizedException('ストラテジー内のエラー');
    }

    return user;
  }
}
