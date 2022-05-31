import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionService } from '../question.service';
import { McqQuestionComponent } from './mcq-question/mcq-question.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  allValid:boolean=false
  selectedQuestion: Array<string> = [];
  questionTypes: Array<string> = [
    'Essay Question',
    'Multiple Choices Question',
    'Yes or NO Question',
  ];
  weightError: boolean = false;
  weight!: number;
  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.selectedQuestion.subscribe((data: any) => {
      console.log(data);
      this.selectedQuestion = data;
    });
  }

  validateWeights() {
    this.QuestionService.SumWeights();
    console.log(this.QuestionService.totalWeights);
    if (this.QuestionService.totalWeights != this.weight) {
      this.weightError = true;
    } else {
      this.weightError = false;
    }
    this.QuestionService.submitQuestions.next(true);
  }
  validChild(event: any) {
    let values=[]
    values.push(event)
    if(!values.includes(false)&&!this.weightError){
          this.allValid=true
    }
    else  this.allValid=false
    console.log(event);
  }

  createQuestion(qesType: string) {
    this.QuestionService.addQuestion(qesType);
  }
}
