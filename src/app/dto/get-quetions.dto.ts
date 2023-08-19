import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import {
  QuestionTypes,
  QuestionDifficulties,
  CategoryNames,
} from 'open-trivia-db';

export class GetQuetionsDto {
  @IsEnum(QuestionTypes, {
    message: 'type must be one of the following: multiple, boolean',
  })
  type: QuestionTypes;

  @IsNumber()
  @IsOptional()
  amount: number;

  @IsEnum(CategoryNames)
  category: CategoryNames;

  @IsEnum(QuestionDifficulties, {
    message: 'difficulty must be one of the following: easy, medium, hard',
  })
  difficulty: QuestionDifficulties;
}
