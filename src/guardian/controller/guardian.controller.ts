import { Controller, Body, Get, Post, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GuardianService } from '../service/guardian.service';
import {
  CreateGuardianDto,
  PrivateGuardianDTO,
  PublicGuardianDto,
} from '../dto/guardian.dto';

@Controller('guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllGuardians(): Promise<PublicGuardianDto[]> {
    return this.guardianService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getGuardianById(@Param('id') id: string): Promise<PrivateGuardianDTO> {
    return this.guardianService.findOneBy(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addGuardian(
    @Body() createGuardianDto: CreateGuardianDto,
  ): Promise<CreateGuardianDto> {
    return this.guardianService.create(createGuardianDto);
  }
}
