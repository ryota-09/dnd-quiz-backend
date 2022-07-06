import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WordWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
