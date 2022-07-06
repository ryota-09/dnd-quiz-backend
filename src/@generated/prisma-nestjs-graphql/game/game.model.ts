import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Game {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    trial_time!: number;

    @Field(() => Int, {nullable:false})
    correct_count!: number;

    @Field(() => Int, {nullable:false})
    vocabulary_point!: number;

    @Field(() => Int, {nullable:false})
    total_point!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;
}
