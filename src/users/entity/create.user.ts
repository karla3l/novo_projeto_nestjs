import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateUser {
  @PrimaryGeneratedColumn()
  id: string; // uuid
  @Column()
  name: string;
  @Column()
  age: number;
}
