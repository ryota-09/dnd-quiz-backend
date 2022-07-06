import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGameArgs {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    @Type(() => GameWhereUniqueInput)
    where!: GameWhereUniqueInput;
}
