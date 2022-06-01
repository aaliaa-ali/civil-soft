import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  allQuestion: Array<string> = [];
  selectedQuestion: Subject<Array<string>> = new Subject();
  submitQuestions: Subject<boolean> = new Subject();
  weightsSum!:number

  questionsWeight: Array<number> = [];
  calcQuestionWeight: Subject<Array<number>> = new Subject();
  constructor() {}
  addWeights(weight: any) {
    this.questionsWeight.push(weight);
    const add = (arr:Array<number>) => arr.reduce((a, b) => +a + +b, 0);
    var sum = add(this.questionsWeight);
    this.weightsSum=sum

  }
  deleteQuestion(question: any) {
    this.allQuestion.splice(
      this.allQuestion.findIndex((data) => data == question),
      1
    );
    this.selectedQuestion.next(this.allQuestion);
  }
  addQuestion(question: any) {
    this.allQuestion.push(question);
    this.selectedQuestion.next(this.allQuestion);
  }
}
