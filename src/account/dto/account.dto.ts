import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 24)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 24)
  password: string;
}
