import { Test, TestingModule } from '@nestjs/testing';
import { GuardianOnchainService } from './guardian-onchain.service';

describe('::GuardianOnchainService', () => {
  let service: GuardianOnchainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuardianOnchainService],
    }).compile();

    service = module.get<GuardianOnchainService>(GuardianOnchainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
