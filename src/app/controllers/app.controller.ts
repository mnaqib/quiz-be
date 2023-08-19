import { Body, Controller, Get } from '@nestjs/common';
import { TriviaService } from 'src/common/trivia/trivia.service';
import { GetQuetionsDto } from '../dto/get-quetions.dto';

@Controller()
export class AppController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Get('/questions')
  getQuestions(@Body() options: GetQuetionsDto) {
    return this.triviaService.getQuestions(options);
  }

  @Get('/options')
  getOptions() {
    return this.triviaService.getOptions();
  }
}
