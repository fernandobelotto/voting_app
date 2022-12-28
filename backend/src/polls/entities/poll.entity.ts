import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PollEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;

  @Column()
  upVotes: number;
  @Column()
  downVotes: number;
}
