import { PartialType } from '@nestjs/mapped-types';
import { CreatePollDto } from './create-poll.dto';

export class UpdatePollDto extends PartialType(CreatePollDto) {
  id: number;
  title: string;
  description: string;
  upVotes: number;
  downVotes: number;
}
