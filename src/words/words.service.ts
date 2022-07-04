import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { PrismaService } from 'src/prisma/prisma.service';
import { createWordInput } from './dto/createWordInput.dto';

@Injectable()
export class WordsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.word.findMany();
  }

  async createNewWord({ text, level }: createWordInput) {
    const newWord = await this.prisma.word.create({
      data: {
        id: uuid(),
        text: text,
        level: level,
      },
    });
    return newWord;
  }
}
