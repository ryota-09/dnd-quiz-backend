import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class WordWhereInput {

    @Field(() => [WordWhereInput], {nullable:true})
    AND?: Array<WordWhereInput>;

    @Field(() => [WordWhereInput], {nullable:true})
    OR?: Array<WordWhereInput>;

    @Field(() => [WordWhereInput], {nullable:true})
    NOT?: Array<WordWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    level?: IntFilter;
}
