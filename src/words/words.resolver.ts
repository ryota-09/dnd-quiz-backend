import { Query, Resolver } from '@nestjs/graphql';
import { Word } from './words.entity';
import { WordsService } from './words.service';

@Resolver()
export class WordsResolver {
  constructor(private readonly wordsService: WordsService) {}

  @Query(() => [Word], { name: 'words' })
  words(): Promise<Word[]> {
    return this.wordsService.findAll();
  }
}
