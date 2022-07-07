import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EthersService } from './ethers.service';

const configService = {
  get: jest.fn().mockReturnValue('http://localhost:8545'),
};

describe('::Ethersservice', () => {
  let service: EthersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EthersService,
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    service = module.get<EthersService>(EthersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getProvider', () => {
    it('should return a provider for bsc', () => {
      jest.spyOn(configService, 'get').mockImplementation((val) => {
        switch (val) {
          case 'DEFAULT_CHAIN':
            return 'BSC';
          case 'BSC_RPC_URI':
            return 'http://localhost:8545';
        }
      });
      expect(service.getProvider()).toBeDefined();
      expect(configService.get).toHaveBeenCalledWith('BSC_RPC_URI');
    });
    it('should return a web3 with eth', () => {
      jest.spyOn(configService, 'get');
      expect(service.getProvider({ type: 'ETH' })).toBeDefined();
      expect(configService.get).toHaveBeenCalledWith('ETH_RPC_URI');
    });
  });
  describe('getGuardianFacet', () => {
    it('should return a guardianfacet', () => {
      const guardians = service.getGuardianFacet(
        '0xc5291b63d2b3795f2387b7b8c4e2152a488a8cd0',
        { type: 'BSC' },
      );
      expect(guardians).toBeDefined();
    });
  });
});
