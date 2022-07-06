import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEthereumAddress,
  IsNumberString,
  IsUrl,
} from 'class-validator';

export class CreateGuardianDto {
  @ApiProperty()
  registrationNumber: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsEthereumAddress()
  wallet: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  zip: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  phonenumber: string;

  @ApiProperty()
  @IsUrl()
  website: string;

  @ApiProperty()
  identityCommitment?: string;
}

export class UpdateGuardianDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  registrationNumber?: string;

  @ApiProperty()
  displayName?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  @IsEthereumAddress()
  wallet?: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  city?: string;

  @ApiProperty()
  state?: string;

  @ApiProperty()
  zip?: string;

  @ApiProperty()
  country?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNumberString()
  phonenumber?: string;

  @ApiProperty()
  @IsUrl()
  website?: string;

  @ApiProperty()
  identityCommitment?: bigint;
}

export class PublicGuardianDto {
  @ApiProperty()
  registrationNumber: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  website: string;
}

export class PrivateGuardianDTO {
  @ApiProperty()
  registrationNumber: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  wallet: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  zip: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phonenumber: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  identityCommitment: string;

  @ApiProperty()
  isApproved: boolean;

  @ApiProperty()
  creationAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
