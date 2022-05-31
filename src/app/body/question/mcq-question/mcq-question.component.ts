import { Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.scss'],
})
export class McqQuestionComponent implements OnInit {
  submited: boolean = false;
  weight!: number;
  invalidField: boolean = false;
  @Input() questionType!: string;
  @ViewChild('Form') Form!: NgForm;

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.submited = true;
    });
  }
  addQuestion() {
    this.QuestionService.essayWeight = +this.weight;
  }
  deleteQuestion(event: any) {
    this.QuestionService.essayWeight = 0;
    this.QuestionService.deleteQuestion('Essay Question');
  }
}
