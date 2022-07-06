import { WordsService } from './words.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WordsResolver } from './words.resolver';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [PrismaModule],
  providers: [WordsResolver, WordsService],
})
export class WordsModule {}
