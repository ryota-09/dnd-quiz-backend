import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { User } from '../../users/users.entity';
import { AuthService } from '../auth.service';
import { LoginUserInput } from '../dto/loginUserInput.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
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
// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy } from "passport-local";
// import { User } from "src/@generated/prisma-nestjs-graphql/user/user.model";
// import { AuthService } from "src/auth/auth.service";

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//     constructor(private readonly authService: AuthService) {
//         super({ usernameField: 'email' })
//     }

//     async validate(email: string, password: string): Promise<User> {
//         const user = this.authService.validateUser(email, password);

//         if (!user) {
//             throw new UnauthorizedException();
//         }

//         return user;
//     }
// }
