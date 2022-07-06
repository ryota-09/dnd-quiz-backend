import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordUpdateManyMutationInput } from './word-update-many-mutation.input';
import { Type } from 'class-transformer';
import { WordWhereInput } from './word-where.input';

@ArgsType()
export class UpdateManyWordArgs {

    @Field(() => WordUpdateManyMutationInput, {nullable:false})
    @Type(() => WordUpdateManyMutationInput)
    data!: WordUpdateManyMutationInput;

    @Field(() => WordWhereInput, {nullable:true})
    @Type(() => WordWhereInput)
    where?: WordWhereInput;
}
