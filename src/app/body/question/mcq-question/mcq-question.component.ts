import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.scss'],
})
export class McqQuestionComponent implements OnInit {
  reusablePartValidation!: boolean;
  submited: boolean = false;
  weight!: number;
  @Input() questionType!: string;
  @ViewChild('Form') Form!: NgForm;
  @Output() childValidation = new EventEmitter<boolean>();

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.submited = true;
    });
  }
  validateReusablePart(event: any) {
    console.log(event);
    this.reusablePartValidation = event;
    if (event) {
      this.childValidation.emit(this.Form.valid || false);
    } else {
      this.childValidation.emit(false);
    }
  }
  calcWeights(event: any) {
    this.QuestionService.addWeights(event);
  }
}
