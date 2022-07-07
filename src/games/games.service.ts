import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameInput } from './dto/createGameInput.dto';
import { Game } from './games.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllGames(): Promise<Game[]> {
    return await this.prisma.game.findMany();
  }

  async createNewGame(createGameInput: CreateGameInput): Promise<Game> {
    const newGame = await this.prisma.game.create({
      data: {
        id: uuid(),
        user_id: createGameInput.user_id,
        trial_time: createGameInput.trial_time,
        correct_count: createGameInput.correct_count,
        vocabulary_point: createGameInput.vocabulary_point,
        total_point: createGameInput.total_point,
        created_at: new Date(),
      },
    });
    return newGame;
  }
}
