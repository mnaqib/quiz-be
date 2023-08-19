import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
})
export class AppModule {}
