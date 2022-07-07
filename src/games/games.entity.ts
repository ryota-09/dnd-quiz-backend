import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Game {
  id: string;
  user_id: string;
  trial_time: number;
  correct_count: number;
  vocabulary_point: number;
  total_point: number;
  created_at: Date;
}
