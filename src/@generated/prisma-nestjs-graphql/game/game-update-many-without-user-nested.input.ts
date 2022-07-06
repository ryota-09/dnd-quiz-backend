import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutUserInput } from './game-create-without-user.input';
import { Type } from 'class-transformer';
import { GameCreateOrConnectWithoutUserInput } from './game-create-or-connect-without-user.input';
import { GameUpsertWithWhereUniqueWithoutUserInput } from './game-upsert-with-where-unique-without-user.input';
import { GameCreateManyUserInputEnvelope } from './game-create-many-user-input-envelope.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithWhereUniqueWithoutUserInput } from './game-update-with-where-unique-without-user.input';
import { GameUpdateManyWithWhereWithoutUserInput } from './game-update-many-with-where-without-user.input';
import { GameScalarWhereInput } from './game-scalar-where.input';

@InputType()
export class GameUpdateManyWithoutUserNestedInput {

    @Field(() => [GameCreateWithoutUserInput], {nullable:true})
    @Type(() => GameCreateWithoutUserInput)
    create?: Array<GameCreateWithoutUserInput>;

    @Field(() => [GameCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GameCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GameCreateOrConnectWithoutUserInput>;

    @Field(() => [GameUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GameUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GameUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => GameCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GameCreateManyUserInputEnvelope)
    createMany?: GameCreateManyUserInputEnvelope;

    @Field(() => [GameWhereUniqueInput], {nullable:true})
    @Type(() => GameWhereUniqueInput)
    set?: Array<GameWhereUniqueInput>;

    @Field(() => [GameWhereUniqueInput], {nullable:true})
    @Type(() => GameWhereUniqueInput)
    disconnect?: Array<GameWhereUniqueInput>;

    @Field(() => [GameWhereUniqueInput], {nullable:true})
    @Type(() => GameWhereUniqueInput)
    delete?: Array<GameWhereUniqueInput>;

    @Field(() => [GameWhereUniqueInput], {nullable:true})
    @Type(() => GameWhereUniqueInput)
    connect?: Array<GameWhereUniqueInput>;

    @Field(() => [GameUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GameUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GameUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [GameUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GameUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GameUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [GameScalarWhereInput], {nullable:true})
    @Type(() => GameScalarWhereInput)
    deleteMany?: Array<GameScalarWhereInput>;
}
