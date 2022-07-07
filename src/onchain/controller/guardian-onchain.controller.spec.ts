import { Test, TestingModule } from '@nestjs/testing';
import { GuardianOnchainController } from './guardian-onchain.controller';

describe('OnchainController', () => {
  let controller: GuardianOnchainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuardianOnchainController],
    }).compile();

    controller = module.get<GuardianOnchainController>(
      GuardianOnchainController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
