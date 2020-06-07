import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';
import { Items } from 'src/items/items.entity';
import { Points } from './points.entity';
import { PointsRepository } from './points.repository';
import { CreatePointDto } from './createPoint.dto';

@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(Points, 'PostgresConn')
    private readonly pointsRepository: PointsRepository,
  ) {}

  async create(data: CreatePointDto): Promise<Points> {
    return this.pointsRepository.save(data);
  }

  async findEmail(email: string): Promise<Points> {
    return this.pointsRepository.findOne({ email });
  }

  async getOnePoint(id: number) {
    return this.pointsRepository.findOne(id, { relations: ['items'] });
  }

  async getPointWithFilter(uf: string, city: string, itemId: number): Promise<Points[]> {
    const items = await this.pointsRepository.createQueryBuilder('points')
      .where('points.city = :city', { city })
      .andWhere('points.uf = :uf', { uf })
      .leftJoinAndMapMany(
        'points.items',
        'points.items',
        'items',
        'items.id = :itemId', { itemId },
      )
      .getMany();

    const removeItemEmptys = items.filter((item) => item.items.length);

    return removeItemEmptys;
  }
}
