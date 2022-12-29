import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewPollInput } from './dto/new-poll.input';
import { PollModel } from './entities/poll.model';
import { PollsService } from './polls.service';

@Resolver(() => PollModel)
export class PollsResolver {
  constructor(private readonly pollsService: PollsService) {}

  @Mutation(() => PollModel)
  create(@Args('newPollData') createPollDto: NewPollInput) {
    console.log('createPollDto', createPollDto, 'from the graphql resolver');
    return this.pollsService.create(createPollDto);
  }

  @Query(() => [PollModel])
  findAll() {
    return this.pollsService.findAll();
  }

  @Query(() => PollModel)
  findOne(@Args('id') id: string) {
    return this.pollsService.findOne(+id);
  }

  // @Mutation(() => PollModel)
  // update(@Args('id') id: string, @Body() updatePollDto: UpdatePollDto) {
  //   return this.pollsService.update(+id, updatePollDto);
  // }

  // @Patch(':id/upvote')
  @Mutation(() => PollModel)
  upvote(@Args('id') id: string) {
    return this.pollsService.upVote(+id);
  }

  // @Patch(':id/downvote')
  @Mutation(() => PollModel)
  downvote(@Args('id') id: string) {
    return this.pollsService.downVote(+id);
  }

  @Mutation(() => PollModel)
  remove(@Args('id') id: string) {
    return this.pollsService.remove(+id);
  }
}
