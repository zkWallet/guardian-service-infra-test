import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { GuardianModule } from './guardian/guardian.module';
import { Guardian } from './guardian/models/guardian.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URL,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Guardian],
      synchronize: true,
      useNewUrlParser: true,
    }),
    GuardianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
