import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-question-repeated-part',
  templateUrl: './question-repeated-part.component.html',
  styleUrls: ['./question-repeated-part.component.scss'],
})
export class QuestionRepeatedPartComponent implements OnInit {
  inputType: string = 'english';
  weight!: any;
  allweight!: any;
  submited: boolean = false;
  @Input() questionType!: string;
  @ViewChild('form') form!: NgForm;
  @ViewChild('body') body!: ElementRef;

  @Output() childValidation = new EventEmitter<boolean>();
  @Output() questionWeight = new EventEmitter<boolean>();

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.allweight.push(this.weight);
      this.submited = true;
      if (this.form.valid) {
        this.childValidation.emit(true);
      } else {
        this.childValidation.emit(false);
      }
      this.questionWeight.emit(this.weight);
    });
    this.allweight = [];
  }
  addQuestion() {
    this.QuestionService.calcQuestionWeight.next(this.weight);
  }
  deleteQuestion(event: any) {
    this.QuestionService.deleteQuestion(this.questionType);
  }
  patternTest(value: any) {
    let rjex = new RegExp('[A-Za-z0-9]');
    let aRrjex = new RegExp('[ء-ي]+');

    if (value.match(rjex)) {
      this.inputType = 'english';
    }
    else if (value.match(aRrjex)) {
      this.inputType = 'arabic';
    }
  }
}
