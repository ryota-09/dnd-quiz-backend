import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordCreateInput } from './word-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneWordArgs {

    @Field(() => WordCreateInput, {nullable:false})
    @Type(() => WordCreateInput)
    @ValidateNested()
    @Type(() => WordCreateInput)
    data!: WordCreateInput;
}
