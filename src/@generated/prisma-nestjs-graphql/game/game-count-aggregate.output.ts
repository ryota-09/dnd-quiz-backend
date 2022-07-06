import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    trial_time!: number;

    @Field(() => Int, {nullable:false})
    correct_count!: number;

    @Field(() => Int, {nullable:false})
    vocabulary_point!: number;

    @Field(() => Int, {nullable:false})
    total_point!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
