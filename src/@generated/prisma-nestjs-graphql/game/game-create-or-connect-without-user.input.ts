import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Type } from 'class-transformer';
import { GameCreateWithoutUserInput } from './game-create-without-user.input';

@InputType()
export class GameCreateOrConnectWithoutUserInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    @Type(() => GameWhereUniqueInput)
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutUserInput, {nullable:false})
    @Type(() => GameCreateWithoutUserInput)
    create!: GameCreateWithoutUserInput;
}
