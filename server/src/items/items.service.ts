import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsRepository } from './items.repository';
import { Items } from './items.entity';
import { CreateItemDto } from './createItem.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items, 'PostgresConn')
    private readonly itemRepository: ItemsRepository,
  ) {}

  async create(data: CreateItemDto): Promise<Items> {
    const { image, title } = data;

    return this.itemRepository.save({ image, title });
  }

  async findAll(): Promise<Items[]> {
    return this.itemRepository.find();
  }
}
