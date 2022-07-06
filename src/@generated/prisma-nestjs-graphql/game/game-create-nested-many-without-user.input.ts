import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutUserInput } from './game-create-without-user.input';
import { Type } from 'class-transformer';
import { GameCreateOrConnectWithoutUserInput } from './game-create-or-connect-without-user.input';
import { GameCreateManyUserInputEnvelope } from './game-create-many-user-input-envelope.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedManyWithoutUserInput {

    @Field(() => [GameCreateWithoutUserInput], {nullable:true})
    @Type(() => GameCreateWithoutUserInput)
    create?: Array<GameCreateWithoutUserInput>;

    @Field(() => [GameCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GameCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GameCreateOrConnectWithoutUserInput>;

    @Field(() => GameCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GameCreateManyUserInputEnvelope)
    createMany?: GameCreateManyUserInputEnvelope;

    @Field(() => [GameWhereUniqueInput], {nullable:true})
    @Type(() => GameWhereUniqueInput)
    connect?: Array<GameWhereUniqueInput>;
}
