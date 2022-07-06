import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { stringify } from 'querystring';

import { User } from '../../users/users.entity';
import { UsersService } from '../../users/users.service';
import { LoginUserInput } from '../dto/loginUserInput.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }
  async validate(payload: {
    email: string;
    sub: string;
  }): Promise<User | null> {
    const payloadInputDto: LoginUserInput = {
      email: payload.email,
      password: payload.sub,
    };
    return this.userService.findUserByEmail(payloadInputDto);
  }
}
