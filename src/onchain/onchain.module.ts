import { Module } from '@nestjs/common';
import { EthersModule } from './ethers/ethers.module';
import { GuardianOnchainService } from './services/guardian-onchain.service';
import { GuardianOnchainController } from './controller/guardian-onchain.controller';

@Module({
  imports: [EthersModule],
  providers: [GuardianOnchainService],
  exports: [GuardianOnchainService],
  controllers: [GuardianOnchainController],
})
export class OnchainModule {}
