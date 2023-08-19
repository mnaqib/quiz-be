import { IsEnum, IsNumber } from 'class-validator';
import {
  QuestionTypes,
  QuestionDifficulties,
  CategoryNames,
} from 'open-trivia-db';

export class GetQuetionsDto {
  @IsEnum(QuestionTypes, {
    message: 'type must be one of the following: multiple, boolean',
  })
  type: string;

  @IsNumber()
  amount: number;

  @IsEnum(CategoryNames)
  category: string;

  @IsEnum(QuestionDifficulties, {
    message: 'difficulty must be one of the following: Easy, Medium, Hard',
  })
  difficulty: string;
}
