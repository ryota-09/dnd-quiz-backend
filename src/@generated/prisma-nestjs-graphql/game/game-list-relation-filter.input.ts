import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';

@InputType()
export class GameListRelationFilter {

    @Field(() => GameWhereInput, {nullable:true})
    every?: GameWhereInput;

    @Field(() => GameWhereInput, {nullable:true})
    some?: GameWhereInput;

    @Field(() => GameWhereInput, {nullable:true})
    none?: GameWhereInput;
}
