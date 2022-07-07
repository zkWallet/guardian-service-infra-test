import { Injectable } from '@nestjs/common';
import { BigNumberish, Contract } from 'ethers';
import { EthersService } from 'src/onchain/ethers/ethers.service';
import { ChainType, IGuardianFacet, Guardian } from 'src/chain/types';

@Injectable()
export class GuardianOnchainService {
  constructor(private readonly ethersService: EthersService) {}

  async getGuardians(
    walletAddress: string,
    includePendingAddition: boolean,
    chain?: ChainType,
  ): Promise<Guardian[]> {
    const guardianFacet: Contract | IGuardianFacet = this._getGuardianFacet(
      walletAddress,
      chain,
    );

    return guardianFacet.getGuardians(includePendingAddition);
  }

  async getGuardian(
    walletAddress: string,
    hashId: BigNumberish,
    chain?: ChainType,
  ): Promise<Guardian> {
    const guardianFacet: Contract | IGuardianFacet = this._getGuardianFacet(
      walletAddress,
      chain,
    );

    return guardianFacet.getGuardian(hashId, chain);
  }

  _getGuardianFacet(
    walletAddress: string,
    chain?: ChainType,
  ): Contract | IGuardianFacet {
    return this.ethersService.getGuardianFacet(walletAddress, chain);
  }
}
