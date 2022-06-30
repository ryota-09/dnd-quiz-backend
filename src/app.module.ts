import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WordsModule } from './words/words.module';
@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
      playground: false,
      // debug: process.env.NODE_ENV === 'production' ? false : true,
      // playground: process.env.NODE_ENV === 'production' ? false : true,
    }),
    WordsModule,
    // WordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
