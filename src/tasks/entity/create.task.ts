import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateTask {
  @PrimaryGeneratedColumn()
  id: string; // uuid
  @Column()
  name: string;
  @Column()
  age: number;
}
