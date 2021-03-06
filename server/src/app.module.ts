import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './database';
import { PointsModule } from './points/points.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig.getTypeOrmConfig()), PointsModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
