import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameAvgAggregate {

    @Field(() => Float, {nullable:true})
    trial_time?: number;

    @Field(() => Float, {nullable:true})
    correct_count?: number;

    @Field(() => Float, {nullable:true})
    vocabulary_point?: number;

    @Field(() => Float, {nullable:true})
    total_point?: number;
}
