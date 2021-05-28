import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPurchasedListComponent } from './grocery-purchased-list.component';

describe('GroceryPurchasedListComponent', () => {
  let component: GroceryPurchasedListComponent;
  let fixture: ComponentFixture<GroceryPurchasedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryPurchasedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPurchasedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
