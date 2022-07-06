import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trial_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    correct_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vocabulary_point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;
}
