import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
