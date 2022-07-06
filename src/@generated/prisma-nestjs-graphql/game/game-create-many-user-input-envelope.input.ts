import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateManyUserInput } from './game-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class GameCreateManyUserInputEnvelope {

    @Field(() => [GameCreateManyUserInput], {nullable:false})
    @Type(() => GameCreateManyUserInput)
    data!: Array<GameCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
