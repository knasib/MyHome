import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPurchasingListComponent } from './grocery-purchasing-list.component';

describe('GroceryPurchasingListComponent', () => {
  let component: GroceryPurchasingListComponent;
  let fixture: ComponentFixture<GroceryPurchasingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryPurchasingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPurchasingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
