import { Controller, Get, Body, Param, UseGuards } from '@nestjs/common';
import { BigNumberish } from 'ethers';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GuardianOnchainService } from 'src/onchain/services/guardian-onchain.service';
import { ChainType, Guardian } from 'src/chain/types';

export type GetGuardianDTO = {
  walletAddress: string;
  includePendingAddition: boolean;
  chain?: ChainType;
};

@Controller('guardians-onchain')
export class GuardianOnchainController {
  constructor(
    private readonly guardianOnchainService: GuardianOnchainService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardians(
    @Body() getGuardianDTO: GetGuardianDTO,
  ): Promise<Guardian[]> {
    return this.guardianOnchainService.getGuardians(
      getGuardianDTO.walletAddress,
      getGuardianDTO.includePendingAddition,
      getGuardianDTO.chain,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getGuardian(
    @Param('walletAddress') walletAddress: string,
    @Param('hashId') hashId: BigNumberish,
    @Param('chain') chain: ChainType,
  ): Promise<Guardian> {
    return this.guardianOnchainService.getGuardian(
      walletAddress,
      hashId,
      chain,
    );
  }
}
