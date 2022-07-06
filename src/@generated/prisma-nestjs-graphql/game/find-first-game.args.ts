import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { Type } from 'class-transformer';
import { GameOrderByWithRelationInput } from './game-order-by-with-relation.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameScalarFieldEnum } from './game-scalar-field.enum';

@ArgsType()
export class FindFirstGameArgs {

    @Field(() => GameWhereInput, {nullable:true})
    @Type(() => GameWhereInput)
    where?: GameWhereInput;

    @Field(() => [GameOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GameOrderByWithRelationInput>;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    cursor?: GameWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameScalarFieldEnum>;
}
