import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  allQuestion: Array<string> = [];
  selectedQuestion: Subject<Array<string>> = new Subject();
  questionsWeights: Array<any> = [];
  submitQuestions: Subject<boolean> = new Subject();

  questionWeight: Array<number> = [];
  calcQuestionWeight: Subject<Array<number>> = new Subject();
  constructor() {}
  addWeights(weight: any) {
    this.questionWeight.push(weight);
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
