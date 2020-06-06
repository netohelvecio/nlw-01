import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {
  image: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;
}
