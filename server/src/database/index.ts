import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class DatabaseConfig {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    };
  }
}

export const databaseConfig = new DatabaseConfig();
