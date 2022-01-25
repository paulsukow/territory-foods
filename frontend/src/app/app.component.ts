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
  public meals: Meal[] = []

  private readonly destroy$ = new Subject()

  constructor(private mealStore: MealStore) {}

  public ngOnInit(): void {
    this.loadData()
    this.initSubscriptions()
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  private loadData(): void {
    this.mealStore.loadMeals()
  }

  private initSubscriptions(): void {
    this.mealStore.selectFilteredMeals$.pipe(takeUntil(this.destroy$))
      .subscribe((collection) => this.meals = collection)
  }
}
