import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-yes-no-question',
  templateUrl: './yes-no-question.component.html',
  styleUrls: ['./yes-no-question.component.scss'],
})
export class YesNoQuestionComponent implements OnInit {

  weight!: any;
  submited: boolean = false;
  invalidField: boolean = false;
  answerType: string = 'prefered';
  selectError: boolean = false;
  @Output() childValidation=new  EventEmitter<boolean>()
  @Input() questionType!: string;

  @Input() submit!: Subject<boolean>;
  @ViewChild('Form') Form!: NgForm;
  @ViewChild('opt1') opt1!: ElementRef;
  @ViewChild('opt2') opt2!: ElementRef;

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.submited = true;
      this.childValidation.emit(this.Form.valid ||false )
      console.log(this.Form.invalid)
    });
  }
  addQuestion() {
    this.QuestionService.YesNoWeight = +this.weight;
  }
  deleteQuestion() {
    this.QuestionService.YesNoWeight = 0;
  }
  validate() {
    console.log(this.Form.controls);
    if (this.Form.invalid) {
      console.log('enter rquired fields');
      this.invalidField = true;
    }
  }
  log(event: any) {
    if (this.opt1.nativeElement.classList.contains('checked')) {
      event.classList.toggle('checked');
      this.opt1.nativeElement.classList.toggle('checked');
      this.selectError = true;
    } else if (this.opt2.nativeElement.classList.contains('checked')) {
      this.opt2.nativeElement.classList.remove('checked');
      event.classList.toggle('checked');
      this.selectError = true;
    } else event.classList.toggle('checked');
  }
}
