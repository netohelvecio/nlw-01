import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { PointsRepository } from './points.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PointsRepository], 'PostgresConn')],
  controllers: [PointsController],
  providers: [PointsService],
})
export class PointsModule {}
