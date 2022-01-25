import { Component, Input } from '@angular/core'
import { Meal } from '../../store/meals.store'

@Component({
  selector: 'meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent {
  @Input() meal?: Meal
}
