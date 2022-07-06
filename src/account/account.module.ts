import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './models/account.model';
import { AccountService } from './service/account.service';
import { AccountController } from './controller/account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
