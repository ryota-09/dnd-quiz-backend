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

  @Query(() => [Game], { name: 'getGamesTopThree' })
  getGamesTopThree(): Promise<Game[]> {
    return this.gamesService.findGamesTopThree();
  }

  @Query(() => [Game], { name: 'getGameListByUerId' })
  getGameListByUserId(@Args('userId') userId: string): Promise<Game[]> {
    return this.gamesService.findGamesByUserId(userId);
  }

  @Mutation(() => Game, { name: 'createGame' })
  createGame(
    @Args('gameInput') createGameInputDto: CreateGameInput,
  ): Promise<Game> {
    return this.gamesService.createNewGame(createGameInputDto);
  }

  @Mutation(() => Boolean, { name: 'deleteGamesByUserId' })
  deleteGamesByUserId(@Args('userId') userId: string): Promise<boolean> {
    return this.gamesService.deleteGamesByUserId(userId);
  }
}
