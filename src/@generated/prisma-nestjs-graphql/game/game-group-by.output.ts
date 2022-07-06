import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GameCountAggregate } from './game-count-aggregate.output';
import { GameAvgAggregate } from './game-avg-aggregate.output';
import { GameSumAggregate } from './game-sum-aggregate.output';
import { GameMinAggregate } from './game-min-aggregate.output';
import { GameMaxAggregate } from './game-max-aggregate.output';

@ObjectType()
export class GameGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => GameCountAggregate, {nullable:true})
    _count?: GameCountAggregate;

    @Field(() => GameAvgAggregate, {nullable:true})
    _avg?: GameAvgAggregate;

    @Field(() => GameSumAggregate, {nullable:true})
    _sum?: GameSumAggregate;

    @Field(() => GameMinAggregate, {nullable:true})
    _min?: GameMinAggregate;

    @Field(() => GameMaxAggregate, {nullable:true})
    _max?: GameMaxAggregate;
}
