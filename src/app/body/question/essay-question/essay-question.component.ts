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
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-question-esay',
  templateUrl: './essay-question.component.html',
  styleUrls: ['./essay-question.component.scss'],
})
export class QuestionEsayComponent implements OnInit {
  QuestionType: string = 'Essay Question';
  weight!: any;
  invalidField: boolean = false;
  submited: boolean = false;
  @Input() questionType!: string;
  @ViewChild('Form') Form!: NgForm;
  @Output() childValidation = new EventEmitter<boolean>();

  constructor(private QuestionService: QuestionService) {}

  ngOnInit(): void {
    this.QuestionService.submitQuestions.subscribe(() => {
      this.submited = true;
      this.childValidation.emit(this.Form.valid || false);
      console.log(this.Form.invalid);
    });
  }
  addQuestion() {
    this.QuestionService.essayWeight = +this.weight;
  }
  deleteQuestion(event: any) {
    this.QuestionService.essayWeight = 0;
    this.QuestionService.deleteQuestion(this.questionType);
  }
}
