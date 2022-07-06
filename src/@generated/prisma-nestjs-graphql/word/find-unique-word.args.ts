import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereUniqueInput } from './word-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueWordArgs {

    @Field(() => WordWhereUniqueInput, {nullable:false})
    @Type(() => WordWhereUniqueInput)
    where!: WordWhereUniqueInput;
}
