import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordWhereInput } from './word-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyWordArgs {

    @Field(() => WordWhereInput, {nullable:true})
    @Type(() => WordWhereInput)
    where?: WordWhereInput;
}
