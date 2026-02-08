import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeText } from './analyze-text';

describe('AnalyzeText', () => {
  let component: AnalyzeText;
  let fixture: ComponentFixture<AnalyzeText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
