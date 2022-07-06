import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WordCreateManyInput } from './word-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyWordArgs {

    @Field(() => [WordCreateManyInput], {nullable:false})
    @Type(() => WordCreateManyInput)
    data!: Array<WordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
