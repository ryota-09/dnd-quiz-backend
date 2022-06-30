import { WordsService } from './words.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WordsResolver } from './words.resolver';

@Module({
  imports: [PrismaModule],
  providers: [WordsResolver, WordsService],
})
export class WordsModule {}
