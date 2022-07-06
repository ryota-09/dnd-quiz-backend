import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { User } from '../../users/users.entity';
import { AuthService } from '../auth.service';
import { LoginUserInput } from '../dto/loginUserInput.dto';

// strategyの後に名前が必要.

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    // デフォルトではusernameを認証に使うので、ここで変更している。
    super({
      usernameField: 'email',
    });
  }

  async validate(loginUserDto: LoginUserInput): Promise<User> {
    const { isValid, user } = await this.authService.validateUser(loginUserDto);

    if (!isValid) {
      throw new UnauthorizedException('パスワードが間違っています。');
    }

    return user;
  }
}
