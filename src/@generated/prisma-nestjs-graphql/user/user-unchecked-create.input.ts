import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { GameUncheckedCreateNestedManyWithoutUserInput } from '../game/game-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(8)
    password!: string;

    @Field(() => String, {nullable:false})
    img_path!: string;

    @HideField()
    hashedRefreshToken?: string;

    @HideField()
    created_at?: Date | string;

    @HideField()
    updated_at?: Date | string;

    @Field(() => GameUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    game_history?: GameUncheckedCreateNestedManyWithoutUserInput;
}
