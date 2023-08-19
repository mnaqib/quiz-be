import { Global, Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';

@Global()
@Module({
  providers: [TriviaService],
  exports: [TriviaService],
})
export class TriviaModule {}
