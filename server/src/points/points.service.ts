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

  async getPointWithFilter(uf: string, city: string, items: number[]): Promise<Points[]> {
    const itemTest: Items = {
      id: 4,
      image: 'eletronicos1591428616281.svg',
      title: 'Eletrônicos',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.pointsRepository.find({
      relations: ['items'],
      where: { uf, city, items },

    });
  }
}
