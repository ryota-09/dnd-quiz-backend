import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameUpdateManyMutationInput } from './game-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GameWhereInput } from './game-where.input';

@ArgsType()
export class UpdateManyGameArgs {

    @Field(() => GameUpdateManyMutationInput, {nullable:false})
    @Type(() => GameUpdateManyMutationInput)
    data!: GameUpdateManyMutationInput;

    @Field(() => GameWhereInput, {nullable:true})
    @Type(() => GameWhereInput)
    where?: GameWhereInput;
}
