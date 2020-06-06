import {
  Controller, Post, Body, UseInterceptors, UploadedFile, Res, HttpStatus, Get, Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';
import { CreateItemDto } from './createItem.dto';
import { ItemsService } from './items.service';

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('/items')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = file.originalname.replace(/\.[^.]*$/, '');

        cb(null, `${filename}${Date.now()}${extname(file.originalname)}`);
      },
    }),
  }))
  async createItem(
    @UploadedFile() file: any,
    @Body() createItemDto: CreateItemDto,
    @Res() res: Response,
  ): Promise<any> {
    const data = { ...createItemDto, ...file };

    const result = await this.itemsService.create({ image: data.filename, title: data.title });

    if (!result) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Erro ao criar item.' });
    }

    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get('/items')
  async findOneItem(@Res() res: Response) : Promise<any> {
    const items = await this.itemsService.findAll();

    if (!items.length) {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Nenhum item encontrado.' });
    }

    const serializedItems = items.map((item) => ({ ...item, image_url: `${process.env.BASE_URL}image/${item.image}` }));

    return res.status(HttpStatus.OK).json(serializedItems);
  }

  @Get('/image/:image')
  async getImage(@Param('image') image: string, @Res() res: Response) : Promise<any> {
    return res.sendFile(image, { root: 'uploads' });
  }
}
