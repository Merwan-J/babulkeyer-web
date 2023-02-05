import { IsNotEmpty, IsEmail } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  subject: string;
  @IsNotEmpty()
  statement: string;
}
