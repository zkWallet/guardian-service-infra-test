import { Controller, Get, UseGuards } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GuardianOnchainService } from 'src/onchain/services/guardian-onchain.service';
import { Guardian } from 'src/chain/types';

@Controller('guardian-onchain')
export class GuardianOnchainController {
  constructor(
    private readonly guardianOnchainService: GuardianOnchainService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardians(
    walletAddress: string,
    includePendingAddition: boolean,
  ): Promise<Guardian[]> {
    return this.guardianOnchainService.getGuardians(
      walletAddress,
      includePendingAddition,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardian(
    walletAddress: string,
    hashId: BigNumberish,
  ): Promise<Guardian> {
    return this.guardianOnchainService.getGuardian(walletAddress, hashId);
  }
}
