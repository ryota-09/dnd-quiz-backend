import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Type } from 'class-transformer';
import { GameUpdateWithoutUserInput } from './game-update-without-user.input';
import { GameCreateWithoutUserInput } from './game-create-without-user.input';

@InputType()
export class GameUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    @Type(() => GameWhereUniqueInput)
    where!: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutUserInput, {nullable:false})
    @Type(() => GameUpdateWithoutUserInput)
    update!: GameUpdateWithoutUserInput;

    @Field(() => GameCreateWithoutUserInput, {nullable:false})
    @Type(() => GameCreateWithoutUserInput)
    create!: GameCreateWithoutUserInput;
}
