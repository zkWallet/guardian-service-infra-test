import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateAccountDto } from '../dto/account.dto';
import { Account } from '../models/account.model';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: MongoRepository<Account>,
  ) {}

  async findOne(username: string): Promise<Account | undefined> {
    return this.accountRepository.findOneBy({ username });
  }

  async create(createAccountDto: CreateAccountDto): Promise<CreateAccountDto> {
    const passwordHash = encodePassword(createAccountDto.password);
    return this.accountRepository.save({ ...createAccountDto, passwordHash });
  }
}
