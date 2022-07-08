import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGameInput } from './dto/createGameInput.dto';
import { Game } from './games.entity';
import { GamesService } from './games.service';

@Resolver()
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => [Game], { name: 'games' })
  games(): Promise<Game[]> {
    return this.gamesService.findAllGames();
  }

  @Mutation(() => Game)
  createGame(
    @Args('gameInput') createGameInputDto: CreateGameInput,
  ): Promise<Game> {
    return this.gamesService.createNewGame(createGameInputDto);
  }
}
