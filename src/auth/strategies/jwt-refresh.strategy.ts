import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

import { User } from '../../users/users.entity';
import { LoginUserInput } from '../dto/loginUserInput.dto';

@Injectable()
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

  async validate(payload: LoginUserInput): Promise<User | null> {
    const user = this.usersService.findUserByEmail(payload);

    if (!user) {
      throw new UnauthorizedException('ストラテジー内のエラー');
    }

    return user;
  }
}
