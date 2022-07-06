import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameScalarWhereInput {

    @Field(() => [GameScalarWhereInput], {nullable:true})
    AND?: Array<GameScalarWhereInput>;

    @Field(() => [GameScalarWhereInput], {nullable:true})
    OR?: Array<GameScalarWhereInput>;

    @Field(() => [GameScalarWhereInput], {nullable:true})
    NOT?: Array<GameScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    trial_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    correct_count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    vocabulary_point?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    total_point?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;
}
