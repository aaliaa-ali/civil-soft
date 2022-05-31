import { TestBed } from '@angular/core/testing';

import { CalcQuestionWeightsService } from './body/calc-question-weights.service';

describe('CalcQuestionWeightsService', () => {
  let service: CalcQuestionWeightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcQuestionWeightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
