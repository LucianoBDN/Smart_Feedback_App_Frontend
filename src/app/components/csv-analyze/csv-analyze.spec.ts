import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvAnalyze } from './csv-analyze';

describe('CsvAnalyze', () => {
  let component: CsvAnalyze;
  let fixture: ComponentFixture<CsvAnalyze>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvAnalyze]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvAnalyze);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
