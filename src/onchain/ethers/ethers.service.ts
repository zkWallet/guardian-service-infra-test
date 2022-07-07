import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import {
  ChainType,
  GuardianFacet__factory,
  IGuardianFacet,
} from '../../chain/types';

@Injectable()
export class EthersService {
  constructor(private readonly config: ConfigService) {}

  getProvider(chain?: ChainType) {
    if (!chain) {
      const defaultChain = this.config.get('DEFAULT_CHAIN');
      chain = { type: defaultChain };
    }
    const RPC_URI = this.config.get(chain.type + '_RPC_URI');
    return ethers.getDefaultProvider(RPC_URI);
  }

  getGuardianFacet(walletAddress: string, chain?: ChainType): IGuardianFacet {
    const provider = this.getProvider(chain);

    const guardianFacet: IGuardianFacet = GuardianFacet__factory.connect(
      walletAddress,
      provider,
    );

    console.log('getGuardianFacet', guardianFacet);
    return guardianFacet;
  }
}
