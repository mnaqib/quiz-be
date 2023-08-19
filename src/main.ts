import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const env: string = configService.get<string>('app.env');
  const port: number = configService.get<number>('app.http.port');
  const globalPrefix: string = configService.get<string>('app.globalPrefix');
  const versioningPrefix: string = configService.get<string>(
    'app.versioning.prefix',
  );
  const version: string = configService.get<string>('app.versioning.version');

  // enable
  const httpEnable: boolean = configService.get<boolean>('app.http.enable');
  const versionEnable: string = configService.get<string>(
    'app.versioning.enable',
  );

  const logger = new Logger();
  process.env.NODE_ENV = env;

  // Global
  app.setGlobalPrefix(globalPrefix);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Versioning
  if (versionEnable) {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: version,
      prefix: versioningPrefix,
    });
  }

  // Listen
  await app.listen(port);

  logger.log(`==========================================================`);

  logger.log(
    `Http is ${httpEnable}, ${
      httpEnable ? 'routes registered' : 'no routes registered'
    }`,
    'NestApplication',
  );
  logger.log(`Http versioning is ${versionEnable}`, 'NestApplication');

  logger.log(`Http Server running on ${await app.getUrl()}`, 'NestApplication');

  logger.log(`==========================================================`);
}
bootstrap();
