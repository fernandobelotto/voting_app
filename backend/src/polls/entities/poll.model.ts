import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'poll ' })
export class PollModel {
  @Field(() => Int)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;
}
