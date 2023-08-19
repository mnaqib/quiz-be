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
  }

  async getQuestions(options: GetQuetionsDto) {
    return await getQuestions({
      session: this._session,
      amount: options.amount ?? 10,
      category: CategoryNames[options.category],
      difficulty: QuestionDifficulties[options.difficulty],
      type: QuestionTypes[options.type],
    });
  }

  getOptions() {
    return {
      categories: Object.keys(CategoryNames),
      difficulties: Object.keys(QuestionDifficulties),
      types: Object.keys(QuestionTypes),
    };
  }
}
