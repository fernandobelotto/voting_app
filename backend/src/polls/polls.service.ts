import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { PollEntity } from './entities/poll.entity';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(PollEntity) private repo: Repository<PollEntity>,
  ) {}

  create(createPollDto: CreatePollDto) {
    const pollEntity = this.repo.create({
      ...createPollDto,
      upVotes: 0,
      downVotes: 0,
    });
    return this.repo.save(pollEntity);
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: Partial<UpdatePollDto>) {
    const poll = await this.findOne(id);

    if (!poll) {
      throw new NotFoundException('Poll not found');
    }

    const newPoll = this.repo.create({ ...poll, ...attrs });

    return this.repo.save(newPoll);
  }

  async upVote(id: number) {
    return this.updateVotes(id, 'upVotes');
  }

  async downVote(id: number) {
    return this.updateVotes(id, 'downVotes');
  }

  async updateVotes(id: number, type: 'upVotes' | 'downVotes') {
    const poll = await this.findOne(id);

    if (!poll) {
      throw new NotFoundException('Poll not found');
    }

    poll && poll[type]++;

    const newPoll = this.repo.create({ ...poll });

    return this.repo.save(newPoll);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
