import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGame_historyInput } from './user-create-without-game-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGame_historyInput } from './user-create-or-connect-without-game-history.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutGame_historyInput {

    @Field(() => UserCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => UserCreateWithoutGame_historyInput)
    create?: UserCreateWithoutGame_historyInput;

    @Field(() => UserCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: UserCreateOrConnectWithoutGame_historyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
