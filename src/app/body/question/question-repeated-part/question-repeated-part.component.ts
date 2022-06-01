import {
  Component,
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
  weight!: any;
  allweight!: any;
  submited: boolean = false;
  @Input() questionType!: string;
  @ViewChild('form') form!: NgForm;
  @Output() childValidation = new EventEmitter<boolean>();
  @Output() questionWeight = new EventEmitter<boolean>();

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.allweight.push(this.weight);
      console.log(this.allweight);
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
    // this.QuestionService.essayWeight = 0;
    this.QuestionService.deleteQuestion(this.questionType);
  }
}
