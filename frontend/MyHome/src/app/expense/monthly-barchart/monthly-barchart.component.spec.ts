import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBarchartComponent } from './monthly-barchart.component';

describe('MonthlyBarchartComponent', () => {
  let component: MonthlyBarchartComponent;
  let fixture: ComponentFixture<MonthlyBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
