import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGame_historyInput } from './user-create-without-game-history.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGame_historyInput } from './user-create-or-connect-without-game-history.input';
import { UserUpsertWithoutGame_historyInput } from './user-upsert-without-game-history.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutGame_historyInput } from './user-update-without-game-history.input';

@InputType()
export class UserUpdateOneRequiredWithoutGame_historyNestedInput {

    @Field(() => UserCreateWithoutGame_historyInput, {nullable:true})
    @Type(() => UserCreateWithoutGame_historyInput)
    create?: UserCreateWithoutGame_historyInput;

    @Field(() => UserCreateOrConnectWithoutGame_historyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGame_historyInput)
    connectOrCreate?: UserCreateOrConnectWithoutGame_historyInput;

    @Field(() => UserUpsertWithoutGame_historyInput, {nullable:true})
    @Type(() => UserUpsertWithoutGame_historyInput)
    upsert?: UserUpsertWithoutGame_historyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGame_historyInput, {nullable:true})
    @Type(() => UserUpdateWithoutGame_historyInput)
    update?: UserUpdateWithoutGame_historyInput;
}
