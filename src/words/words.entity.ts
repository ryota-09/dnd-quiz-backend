import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Word {
  id: string;
  text: string;
  level: number;
}
