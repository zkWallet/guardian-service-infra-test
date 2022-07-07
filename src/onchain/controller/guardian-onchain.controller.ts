import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GuardianOnchainService } from 'src/onchain/services/guardian-onchain.service';
import { ChainType, Guardian } from 'src/chain/types';

@Controller('guardians-onchain')
export class GuardianOnchainController {
  constructor(
    private readonly guardianOnchainService: GuardianOnchainService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardians(
    @Param('walletAddress') walletAddress: string,
    @Param('includePendingAddition') includePendingAddition: boolean,
    @Param('chain') chain?: ChainType,
  ): Promise<Guardian[]> {
    return this.guardianOnchainService.getGuardians(
      walletAddress,
      includePendingAddition,
      chain,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardian(
    @Param('walletAddress') walletAddress: string,
    @Param('hashId') hashId: BigNumberish,
    @Param('chain') chain?: ChainType,
  ): Promise<Guardian> {
    return this.guardianOnchainService.getGuardian(
      walletAddress,
      hashId,
      chain,
    );
  }
}
