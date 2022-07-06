import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCreateInput } from './game-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneGameArgs {

    @Field(() => GameCreateInput, {nullable:false})
    @Type(() => GameCreateInput)
    @ValidateNested()
    @Type(() => GameCreateInput)
    data!: GameCreateInput;
}
