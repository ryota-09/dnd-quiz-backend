import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    trial_time?: true;

    @Field(() => Boolean, {nullable:true})
    correct_count?: true;

    @Field(() => Boolean, {nullable:true})
    vocabulary_point?: true;

    @Field(() => Boolean, {nullable:true})
    total_point?: true;
}
