import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createWordInput {
  @Field()
  text: string;

  @Field()
  level: number;
}
