import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import * as Express from 'express';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { GLOBAL_API_PREFIX } from './constants/app-strings';
import * as bodyParser from 'body-parser';

const server = Express();
server.get('/', (req, res) => res.send('ok'));
server.get('/_ah/health', (req, res) => res.send('ok'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: {
      origin: [
        'http://localhost:8080',
        'http://localhost:3000',
        /https?:\/\/(([^\/]+\.)?simplicy\.io)$/i,
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
  });
  app.setGlobalPrefix(GLOBAL_API_PREFIX);

  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
