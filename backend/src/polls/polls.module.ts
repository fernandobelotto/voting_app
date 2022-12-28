import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollEntity } from './entities/poll.entity';

@Module({
  controllers: [PollsController],
  providers: [PollsService],
  imports: [TypeOrmModule.forFeature([PollEntity])],
})
export class PollsModule {}
