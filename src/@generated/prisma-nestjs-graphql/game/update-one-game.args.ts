import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameUpdateInput } from './game-update.input';
import { Type } from 'class-transformer';
import { GameWhereUniqueInput } from './game-where-unique.input';

@ArgsType()
export class UpdateOneGameArgs {

    @Field(() => GameUpdateInput, {nullable:false})
    @Type(() => GameUpdateInput)
    data!: GameUpdateInput;

    @Field(() => GameWhereUniqueInput, {nullable:false})
    @Type(() => GameWhereUniqueInput)
    where!: GameWhereUniqueInput;
}
