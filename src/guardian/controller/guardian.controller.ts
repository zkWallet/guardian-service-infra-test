import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { GuardianService } from '../service/guardian.service';
import {
  CreateGuardianDto,
  PrivateGuardianDTO,
  PublicGuardianDto,
} from '../dto/guardian.dto';

@Controller('guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Get()
  getAllGuardians(): Promise<PublicGuardianDto[]> {
    return this.guardianService.findAll();
  }

  @Get('/:id')
  getGuardianById(@Param('id') id: string): Promise<PublicGuardianDto> {
    return this.guardianService.findOneBy(id);
  }

  // @Post()
  // addGuardian(
  //   @Body() createGuardianDto: CreateGuardianDto,
  // ): Promise<CreateGuardianDto> {
  //   console.log('createGuardianDto', createGuardianDto);
  //   return this.guardianService.create(createGuardianDto);
  // }
}
