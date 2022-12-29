import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollEntity } from './entities/poll.entity';
import { PollsResolver } from './polls.resolver';

@Module({
  controllers: [PollsController],
  providers: [PollsResolver, PollsService],
  imports: [TypeOrmModule.forFeature([PollEntity])],
})
export class PollsModule {}
