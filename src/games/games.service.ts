import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameInput } from './dto/createGameInput.dto';
import { Game } from './games.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllGames(): Promise<Game[]> {
    return await this.prisma.game.findMany({
      orderBy: {
        total_point: 'desc',
      },
    });
  }

  async findGamesTopThree(): Promise<Game[]> {
    return await this.prisma.game.findMany({
      orderBy: {
        total_point: 'desc',
      },
      take: 3,
    });
  }

  async findGamesByUserId(userId: string): Promise<Game[]> {
    const targetGames: Game[] = await this.prisma.game.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    return targetGames;
  }

  async createNewGame(createGameInputDto: CreateGameInput): Promise<Game> {
    const newGame = await this.prisma.game.create({
      data: {
        id: uuid(),
        user_id: createGameInputDto.user_id,
        trial_time: createGameInputDto.trial_time,
        correct_count: createGameInputDto.correct_count,
        vocabulary_point: createGameInputDto.vocabulary_point,
        total_point: createGameInputDto.total_point,
        created_at: new Date(),
      },
    });
    return newGame;
  }
}
