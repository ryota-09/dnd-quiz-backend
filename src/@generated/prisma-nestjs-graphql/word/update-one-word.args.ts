import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordUpdateInput } from './word-update.input';
import { Type } from 'class-transformer';
import { WordWhereUniqueInput } from './word-where-unique.input';

@ArgsType()
export class UpdateOneWordArgs {

    @Field(() => WordUpdateInput, {nullable:false})
    @Type(() => WordUpdateInput)
    data!: WordUpdateInput;

    @Field(() => WordWhereUniqueInput, {nullable:false})
    @Type(() => WordWhereUniqueInput)
    where!: WordWhereUniqueInput;
}
