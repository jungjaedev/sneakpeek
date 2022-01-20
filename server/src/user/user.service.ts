import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(
    // id: number,
    // account: string,
    // email: string,
    // password: string,
    // languageId: number,
    user: User
  ) {
    // const newData = {
    //   id, account,email,password,languageId
    // }
    console.log('--------', user)
    return await this.userRepository.save(user)
  }
}
