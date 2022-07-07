import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateGameInput {
  @Field(() => String, { nullable: false })
  user_id: string;

  @Field(() => Number, { nullable: false })
  trial_time: number;

  @Field(() => Number, { nullable: false })
  correct_count: number;

  @Field(() => Number, { nullable: false })
  vocabulary_point: number;

  @Field(() => Number, { nullable: false })
  total_point: number;
}
