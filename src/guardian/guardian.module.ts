import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guardian } from './models/guardian.model';
import { GuardianService } from './service/guardian.service';
import { GuardianController } from './controller/guardian.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Guardian])],
  providers: [GuardianService],
  controllers: [GuardianController],
})
export class GuardianModule {}
