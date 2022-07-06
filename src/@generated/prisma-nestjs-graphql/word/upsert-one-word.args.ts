import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { Type } from 'class-transformer';
import { WordCreateInput } from './word-create.input';
import { WordUpdateInput } from './word-update.input';

@ArgsType()
export class UpsertOneWordArgs {

    @Field(() => WordWhereUniqueInput, {nullable:false})
    @Type(() => WordWhereUniqueInput)
    where!: WordWhereUniqueInput;

    @Field(() => WordCreateInput, {nullable:false})
    @Type(() => WordCreateInput)
    create!: WordCreateInput;

    @Field(() => WordUpdateInput, {nullable:false})
    @Type(() => WordUpdateInput)
    update!: WordUpdateInput;
}
