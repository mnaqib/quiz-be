import { Body, Controller, Get, Post } from '@nestjs/common';
import { TriviaService } from 'src/common/trivia/trivia.service';
import { GetQuetionsDto } from '../dto/get-quetions.dto';

@Controller()
export class AppController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Post('/questions')
  getQuestions(@Body() options: GetQuetionsDto) {
    return this.triviaService.getQuestions(options);
  }

  @Get('/options')
  getOptions() {
    return this.triviaService.getOptions();
  }
}
