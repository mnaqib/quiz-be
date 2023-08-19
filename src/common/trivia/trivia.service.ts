import { Injectable } from '@nestjs/common';
import {
  Session,
  getQuestions,
  CategoryNames,
  QuestionDifficulties,
  QuestionTypes,
} from 'open-trivia-db';
import { GetQuetionsDto } from 'src/app/dto/get-quetions.dto';

@Injectable()
export class TriviaService {
  private _session: Session;

  constructor() {
    this._session = new Session();
    this._session.start();
  }

  async getQuestions(options: GetQuetionsDto) {
    return await getQuestions({
      ...options,
      session: this._session,
      amount: options.amount ?? 10,
    });
  }

  getOptions() {
    return {
      categories: CategoryNames,
      difficulties: QuestionDifficulties,
      types: QuestionTypes,
    };
  }
}
