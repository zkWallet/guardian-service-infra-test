import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import { GuardianFacet, IGuardianFacet } from '../../types';

// import { GuardianFacet, IGuardianFacet } from '../types/';

import GuardianFacetAbi from '../../abi/GuardianFacet.sol/GuardianFacet.json';
//'../../GuardianFacet.sol/GuardianFacet.json';

export class GuardianFacet__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IGuardianFacet {
    return new Contract(
      address,
      GuardianFacetAbi.abi,
      signerOrProvider,
    ) as IGuardianFacet;
  }
}
