import {
  IsNotEmpty, IsString, MaxLength, IsEmail, IsNumber, IsLatitude, IsLongitude, IsArray,
} from 'class-validator';
import { Items } from 'src/items/items.entity';

export class CreatePointDto {
  image: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  whatsapp: string;

  @IsNotEmpty()
  @IsNumber()
  @IsLatitude()
  latitude: number

  @IsNotEmpty()
  @IsNumber()
  @IsLongitude()
  longitude: number

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  city: string;

  @IsString()
  @MaxLength(2)
  @IsNotEmpty()
  uf: string;

  @IsArray()
  @IsNotEmpty()
  items: Items[];
}
