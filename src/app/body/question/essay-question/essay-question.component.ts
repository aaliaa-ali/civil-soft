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
  selector: 'app-question-esay',
  templateUrl: './essay-question.component.html',
  styleUrls: ['./essay-question.component.scss'],
})
export class QuestionEsayComponent implements OnInit {
  reusablePartValidation!: boolean;
  submited: boolean = false;
  weight!:any
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
  calcWeights(event: any){
    this.QuestionService.addWeights(event)
  }
}
