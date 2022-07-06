import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class GameUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

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
