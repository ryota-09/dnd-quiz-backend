import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
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
  // デフォルトはemailとpasswordで認証する。
  async validate(email: string, password: string): Promise<User> {
    const payload: LoginUserInput = { email: email, password: password };
    const { isValid, user } = await this.authService.validateUser(payload);

    if (!isValid) {
      throw new UnauthorizedException('パスワードが間違っています。');
    }

    return user;
  }
}
