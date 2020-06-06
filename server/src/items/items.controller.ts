import {
  Controller, Post, Body, UseInterceptors, UploadedFile, Res, HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';
import { CreateItemDto } from './createItem.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly crudService: ItemsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = file.originalname.replace(/\.[^.]*$/, '');

        cb(null, `${filename}${Date.now()}${extname(file.originalname)}`);
      },
    }),
  }))
  async create(
    @UploadedFile() file: any,
    @Body() createItemDto: CreateItemDto,
    @Res() res: Response,
  ): Promise<any> {
    const data = { ...createItemDto, ...file };

    const result = await this.crudService.create({ image: data.filename, title: data.title });

    if (!result) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Erro ao criar item.' });
    }

    return res.status(HttpStatus.CREATED).json(result);
  }
}
