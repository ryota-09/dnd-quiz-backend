import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCreateManyInput } from './game-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGameArgs {

    @Field(() => [GameCreateManyInput], {nullable:false})
    @Type(() => GameCreateManyInput)
    data!: Array<GameCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
