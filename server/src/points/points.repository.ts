import { EntityRepository, Repository } from 'typeorm';
import { Points } from './points.entity';

@EntityRepository(Points)
export class PointsRepository extends Repository<Points> {
}
