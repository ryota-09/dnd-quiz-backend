import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutGame_historyInput } from '../user/user-create-nested-one-without-game-history.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class GameCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutGame_historyInput, {nullable:false})
    user!: UserCreateNestedOneWithoutGame_historyInput;

    @Field(() => Int, {nullable:false})
    trial_time!: number;

    @Field(() => Int, {nullable:false})
    correct_count!: number;

    @Field(() => Int, {nullable:false})
    vocabulary_point!: number;

    @Field(() => Int, {nullable:false})
    total_point!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
