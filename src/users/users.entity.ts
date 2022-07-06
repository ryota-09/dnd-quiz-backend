import { ObjectType } from '@nestjs/graphql';
import { Game } from '@prisma/client';

@ObjectType()
export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  img_path?: string;
  created_at: Date;
  updated_at: Date;
  game_history?: Game[];
}
