// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/users.dto';
import { User } from './entity/create.user';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: User) {
    this.usersRepository.create(user);
    this.usersRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    // busca todos os elementos do bd
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }

  async update(UserToUpdate: UserDto, id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    const updated = Object.assign(UserToUpdate, user);

    return await this.usersRepository.save(updated);
  }
}
