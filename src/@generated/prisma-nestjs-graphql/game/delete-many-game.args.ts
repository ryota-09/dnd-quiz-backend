import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGameArgs {

    @Field(() => GameWhereInput, {nullable:true})
    @Type(() => GameWhereInput)
    where?: GameWhereInput;
}
