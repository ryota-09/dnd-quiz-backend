import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class WordScalarWhereWithAggregatesInput {

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => [WordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WordScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: IntWithAggregatesFilter;
}
