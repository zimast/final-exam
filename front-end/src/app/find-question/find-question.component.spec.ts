import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindQuestionComponent } from './find-question.component';

describe('FindQuestionComponent', () => {
  let component: FindQuestionComponent;
  let fixture: ComponentFixture<FindQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
