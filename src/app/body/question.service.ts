import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  allQuestion: Array<string> = [];
  selectedQuestion: Subject<Array<string>> = new Subject();
  questionsWeights: Array<any> = [];

  //////////////////////////////////////
  submitQuestions: Subject<boolean> = new Subject();
  YesNoWeight: number = 0;
  essayWeight: number = 0;
  mcqWeight: number = 0;
  baseWeight: number = 0;
  totalWeights: number = 0;
  constructor() {}
  SumWeights() {
    this.totalWeights = Number(this.essayWeight);
    console.log(this.totalWeights);

    this.questionsWeights.forEach((weight) => {
      console.log(weight.question);
    });
    console.log(this.questionsWeights);
  }
  deleteQuestion(question: any) {
    console.log( this.allQuestion,question)
    this.allQuestion.splice(this.allQuestion.findIndex(data=>data==question), 1);
    this.selectedQuestion.next(this.allQuestion);
  }
  addQuestion(question: any) {
    this.allQuestion.push(question);
    this.selectedQuestion.next(this.allQuestion);
  }
}
