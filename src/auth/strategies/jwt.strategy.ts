import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { User } from '../../users/users.entity';
import { UsersService } from '../../users/users.service';
import { LoginUserInput } from '../dto/loginUserInput.dto';
import { JwtPayload } from '../types/auth-types.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }
  async validate(email: string, password: string): Promise<User | null> {
    const payloadInputDto: LoginUserInput = {
      email: email,
      password: password,
    };
    return this.userService.findUserByEmail(payloadInputDto);
  }
}
