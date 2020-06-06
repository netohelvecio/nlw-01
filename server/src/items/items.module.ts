import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemsRepository } from './items.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsRepository], 'PostgresConn')],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
