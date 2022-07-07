import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GamesResolver } from './games.resolver';
import { GamesService } from './games.service';

@Module({
  imports: [PrismaModule],
  providers: [GamesResolver, GamesService],
  exports: [GamesModule, GamesService],
})
export class GamesModule {}
