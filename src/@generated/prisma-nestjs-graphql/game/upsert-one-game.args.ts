import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Type } from 'class-transformer';
import { GameCreateInput } from './game-create.input';
import { GameUpdateInput } from './game-update.input';

@ArgsType()
export class UpsertOneGameArgs {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    @Type(() => GameWhereUniqueInput)
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateInput, {nullable:false})
    @Type(() => GameCreateInput)
    create!: GameCreateInput;

    @Field(() => GameUpdateInput, {nullable:false})
    @Type(() => GameUpdateInput)
    update!: GameUpdateInput;
}
