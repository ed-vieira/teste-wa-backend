import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Entities from './entities';

export default class EnvConfig {

  public isProduction(): boolean {
    return this.isEnvironmentType('production');
  }

  public isDevelopment(): boolean {
    return (
      this.isEnvironmentType('development') || this.isEnvironmentType('testing')
    );
  }

  public isEnvironmentType(envType): boolean {
    return process.env.NODE_ENV === envType;
  }

  public getEnvValue(key): string {
    return process.env[key];
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getEnvValue('DB_HOST'),
      port: parseInt(this.getEnvValue('DB_PORT')),
      username: this.getEnvValue('DB_USER'),
      password: this.getEnvValue('DB_PWD'),
      database: this.getEnvValue('DB_DATABASE'),
      entities: [Entities.Student],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: this.isProduction(),
    };
  }
}
