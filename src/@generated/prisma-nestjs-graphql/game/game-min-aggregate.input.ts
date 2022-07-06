import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    trial_time?: true;

    @Field(() => Boolean, {nullable:true})
    correct_count?: true;

    @Field(() => Boolean, {nullable:true})
    vocabulary_point?: true;

    @Field(() => Boolean, {nullable:true})
    total_point?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;
}
