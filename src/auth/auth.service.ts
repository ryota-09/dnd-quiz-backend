import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginUserInput } from './dto/loginUserInput.dto';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity';
import { User as PrismaUser } from '@prisma/client';
import { LoginResponse } from './dto/loginResponse.dto';
import { JwtPayload, Tokens } from './types/auth-types.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    const userDto: LoginUserInput = { email: email, password: password };
    const user = await this.usersService.findUserByEmail(userDto);
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('パスワードが間違っています！');
    }
    return { isValid, user };
  }

  async login(user: User): Promise<LoginResponse> {
    const tokens = await this.getTokens(user);
    await this.updateHashedRefreshToken(user, tokens.refresh_token);

    return {
      ...tokens,
      user: user,
    };
  }

  async getTokens(user: User): Promise<Tokens> {
    const payload: LoginUserInput = {
      email: user.email,
      password: user.password,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET_KEY,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET_KEY,
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async updateHashedRefreshToken(
    user: User,
    refreshToken: string,
  ): Promise<void> {
    const prismaUser: PrismaUser = {
      ...user,
      hashedRefreshToken: refreshToken,
      img_path: '',
    };
    const salt = await bcrypt.genSalt();
    const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
    await this.usersService.updateUserRefreshToken(
      prismaUser,
      hashedRefreshToken,
    );
  }

  async refreshToken(
    user: PrismaUser,
    authorizationText: string,
  ): Promise<LoginResponse> {
    const refreshToken = authorizationText.replace('Bearer', '').trim();
    const isValid = await bcrypt.compare(refreshToken, user.hashedRefreshToken);
    if (!isValid) {
      throw new UnauthorizedException('リフレッシュトークンエラー');
    }
    const tokens = await this.getTokens(user);
    await this.updateHashedRefreshToken(user, tokens.refresh_token);
    return {
      ...tokens,
      user: user,
    };
  }

  async logout(user: PrismaUser): Promise<boolean> {
    await this.usersService.updateUserRefreshToken(user, null);
    return true;
  }
}
