import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewPollInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;
}
