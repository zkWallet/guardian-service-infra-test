import { INestApplication } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_NAME, SWAGGER_ROUTE } from './constants/app-strings';
import * as fs from 'fs';
import * as yaml from 'yaml';

export function setupSwagger(app: INestApplication) {
  const version = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
  ).version;
  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription('Resource Server')
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, options);

  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  const yamlString: string = yaml.stringify(document, {});
  fs.writeFileSync('./swagger-spec.yml', yamlString);

  SwaggerModule.setup(SWAGGER_ROUTE, app, document);
}
