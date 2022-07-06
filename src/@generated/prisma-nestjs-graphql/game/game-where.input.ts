import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GameWhereInput {

    @Field(() => [GameWhereInput], {nullable:true})
    AND?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    OR?: Array<GameWhereInput>;

    @Field(() => [GameWhereInput], {nullable:true})
    NOT?: Array<GameWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

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
