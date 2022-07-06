import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Int, {nullable:true})
    trial_time?: number;

    @Field(() => Int, {nullable:true})
    correct_count?: number;

    @Field(() => Int, {nullable:true})
    vocabulary_point?: number;

    @Field(() => Int, {nullable:true})
    total_point?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
