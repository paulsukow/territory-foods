import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { take } from 'rxjs'
import { MealStore } from '../../store/meals.store'

@Component({
  selector: 'meal-filters',
  templateUrl: './meal-filters.component.html',
  styleUrls: ['./meal-filters.component.scss'],
  host: {'class': 'meal-filters'},
})
export class MealFiltersComponent implements OnInit {
  public mealTypesControl = new FormControl()
  public mealTagsControl = new FormControl()
  public mealTagOptions: string[] = []
  public mealTypeOptions: string[] = []

  constructor(private mealStore: MealStore) { }

  public ngOnInit(): void {
    this.setInitialFormValues()
  }

  public triggerMealTagsSelected(values: string[]) {
    this.mealStore.setFilteredTags(values)
  }

  public triggerMealTypesSelected(values: string[]) {
    this.mealStore.setFilteredMealTypes(values)
  }

  private setInitialFormValues() {
    this.mealStore.selectTags$.pipe(take(1))
      .subscribe((collection) => {
        this.mealTagOptions = collection
        this.mealTagsControl.setValue(collection)
      })
    this.mealStore.selectMealTypes$.pipe(take(1))
      .subscribe((collection) => {
        this.mealTypeOptions = collection
        this.mealTypesControl.setValue(collection)
      })
  }
}
