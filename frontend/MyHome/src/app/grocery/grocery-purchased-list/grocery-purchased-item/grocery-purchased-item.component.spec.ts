import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPurchasedItemComponent } from './grocery-purchased-item.component';

describe('GroceryPurchasedItemComponent', () => {
  let component: GroceryPurchasedItemComponent;
  let fixture: ComponentFixture<GroceryPurchasedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryPurchasedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPurchasedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
