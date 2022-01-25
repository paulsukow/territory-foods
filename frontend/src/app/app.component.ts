import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject, take, takeUntil } from 'rxjs'
import { Meal, MealStore } from './store/meals.store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ MealStore ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public mealTypesControl = new FormControl()
  public mealTagsControl = new FormControl()
  public mealTagOptions: string[] = []
  public mealTypeOptions: string[] = []

  public meals: Meal[] = []

  private readonly destroy$ = new Subject()

  constructor(private mealStore: MealStore) {}

  public ngOnInit(): void {
    this.mealStore.loadMeals()

    this.mealStore.selectFilteredMeals$.pipe(takeUntil(this.destroy$))
      .subscribe((collection) => this.meals = collection)

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

  public triggerMealTagsSelected(values: string[]) {
    this.mealStore.setFilteredTags(values)
  }

  public triggerMealTypesSelected(values: string[]) {
    this.mealStore.setFilteredMealTypes(values)
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
