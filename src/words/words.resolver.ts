import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createWordInput } from './dto/createWordInput.dto';
import { Word } from './words.entity';
import { WordsService } from './words.service';

@Resolver()
export class WordsResolver {
  constructor(private readonly wordsService: WordsService) {}

  @Query(() => [Word], { name: 'words' })
  words(): Promise<Word[]> {
    return this.wordsService.findAll();
  }

  @Mutation(() => Word)
  createWord(@Args('word') wordDto: createWordInput) {
    return this.wordsService.createNewWord(wordDto);
  }
}
