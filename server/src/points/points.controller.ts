import {
  Controller, Post, UploadedFile, UseInterceptors, Body, Res, HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorageConfig } from 'src/utils/diskStorage';
import { PointsService } from './points.service';
import { CreatePointDto } from './createPoint.dto';

@Controller()
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Post('/points')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorageConfig,
  }))
  async createItem(
    @UploadedFile() file: any,
    @Body() createPointDto: CreatePointDto,
    @Res() res: Response,
  ): Promise<any> {
    const {
      city, email, latitude, longitude, name, uf, whatsapp,
    } = createPointDto;
    const { filename } = file;

    const emailExists = await this.pointsService.findEmail(email);

    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'E-mail já está sendo utilizado.' });
    }

    const point = await this.pointsService.create({
      city,
      email,
      name,
      uf,
      image: filename,
      latitude: Number(latitude),
      longitude: Number(longitude),
      whatsapp,
    });

    if (!point) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Erro ao criar ponto de coleta.' });
    }

    return res.status(HttpStatus.CREATED).json(point);
  }
}
