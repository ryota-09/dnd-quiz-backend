import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameScalarWhereInput } from './game-scalar-where.input';
import { Type } from 'class-transformer';
import { GameUpdateManyMutationInput } from './game-update-many-mutation.input';

@InputType()
export class GameUpdateManyWithWhereWithoutUserInput {

    @Field(() => GameScalarWhereInput, {nullable:false})
    @Type(() => GameScalarWhereInput)
    where!: GameScalarWhereInput;

    @Field(() => GameUpdateManyMutationInput, {nullable:false})
    @Type(() => GameUpdateManyMutationInput)
    data!: GameUpdateManyMutationInput;
}
