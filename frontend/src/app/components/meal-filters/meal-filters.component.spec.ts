import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealFiltersComponent } from './meal-filters.component';

describe('MealFiltersComponent', () => {
  let component: MealFiltersComponent;
  let fixture: ComponentFixture<MealFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
