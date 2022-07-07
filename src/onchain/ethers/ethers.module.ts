import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EthersService } from './ethers.service';

@Module({
  providers: [ConfigService, EthersService],
  exports: [EthersService],
})
export class EthersModule {}
