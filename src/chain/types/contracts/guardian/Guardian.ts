import type { BigNumberish } from 'ethers';
import type { PromiseOrValue } from '../../common';

export type Guardian = {
  hashId: PromiseOrValue<BigNumberish>;
  status: PromiseOrValue<BigNumberish>;
  timestamp: PromiseOrValue<BigNumberish>;
};
