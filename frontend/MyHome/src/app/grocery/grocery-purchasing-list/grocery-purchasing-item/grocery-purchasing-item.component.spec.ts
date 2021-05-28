import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPurchasingItemComponent } from './grocery-purchasing-item.component';

describe('GroceryPurchasingItemComponent', () => {
  let component: GroceryPurchasingItemComponent;
  let fixture: ComponentFixture<GroceryPurchasingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryPurchasingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPurchasingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
