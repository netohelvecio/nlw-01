import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class DatabaseConfig {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [],
      migrationsTableName: 'migrations',
      migrations: ['src/database/migrations/*.ts'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    };
  }
}

export const databaseConfig = new DatabaseConfig();
