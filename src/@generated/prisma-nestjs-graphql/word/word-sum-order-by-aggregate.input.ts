import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WordSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;
}
