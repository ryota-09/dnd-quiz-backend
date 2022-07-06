import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGame_historyInput } from './user-create-without-game-history.input';

@InputType()
export class UserCreateOrConnectWithoutGame_historyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutGame_historyInput)
    create!: UserCreateWithoutGame_historyInput;
}
