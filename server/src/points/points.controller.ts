import {
  Controller, Post, UploadedFile, UseInterceptors, Body, Res, HttpStatus, Get, Param, Query,
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
      city, email, latitude, longitude, name, uf, whatsapp, items, image,
    } = createPointDto;
    // const { filename = null } = file;

    const emailExists = await this.pointsService.findEmail(email);

    if (emailExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'E-mail já está sendo utilizado.' });
    }

    const point = await this.pointsService.create({
      city,
      email,
      name,
      uf,
      image,
      latitude,
      longitude,
      whatsapp,
      items,
    });

    if (!point) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Erro ao criar ponto de coleta.' });
    }

    return res.status(HttpStatus.CREATED).json(point);
  }

  @Get('/points/:id')
  async findOnePoint(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const point = await this.pointsService.getOnePoint(id);

    if (!point) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Ponto de coleta não encontrado.' });
    }

    return res.status(HttpStatus.OK).json(point);
  }

  @Get('/points')
  async searchPoint(
    @Query('city') city: string,
    @Query('uf') uf: string,
    @Query('items') items: string,
    @Res() res: Response,
  ): Promise<any> {
    const parsedItems = items.split(',').map((item) => Number(item.trim()));

    const points = await this.pointsService.getPointWithFilter(uf, city, parsedItems);

    return res.status(HttpStatus.OK).json(points);
  }
}
