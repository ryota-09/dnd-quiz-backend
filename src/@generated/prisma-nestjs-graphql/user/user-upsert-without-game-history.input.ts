import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutGame_historyInput } from './user-update-without-game-history.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGame_historyInput } from './user-create-without-game-history.input';

@InputType()
export class UserUpsertWithoutGame_historyInput {

    @Field(() => UserUpdateWithoutGame_historyInput, {nullable:false})
    @Type(() => UserUpdateWithoutGame_historyInput)
    update!: UserUpdateWithoutGame_historyInput;

    @Field(() => UserCreateWithoutGame_historyInput, {nullable:false})
    @Type(() => UserCreateWithoutGame_historyInput)
    create!: UserCreateWithoutGame_historyInput;
}
