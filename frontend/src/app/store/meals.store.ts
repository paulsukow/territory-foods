import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Observable } from 'rxjs'

export interface Meal {
  id: string
  title: string
  description: string
  img: string
  tags: string[]
  mealType: string[]
  chef: string,
  price: string,
}

export interface State {
  meals: Meal[]
}

const initialState: State = {
  meals: [
    {
      "id": "1",
      "title": "Tofu Pad Thai",
      "description": "Grilled tofu, eggs, sauteed vegetables & rice noodles tossed in a peanut sauce.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/12d5f9d6-4bab-4342-9846-01ad83fae271/2774.jpg",
      "tags": [
        "vegetarian"
      ],
      "mealType": [
        "breakfast"
      ],
      "chef": "the greek table",
      "price": "14.95"
    },
    {
      "id": "2",
      "title": "Chipotle Turkey Chili & Quinoa Bowl",
      "description": "A hearty ground turkey chili w/ corn & chipotle chilies, served over quinoa & garnished w/ charred jalapenos & grape tomatoes.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/e667d5b2-3330-4dd3-aa79-0b6bba32e4e9/2374.jpg",
      "tags": [
        ""
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "the greek table",
      "price": "13.95"
    },
    {
      "id": "3",
      "title": "Asian-Style Chop Salad",
      "description": "Delicious chicken marinated w/ coconut aminos, sesame oil, & honey, atop a chopped salad of cabbage, edamame, carrot, & toasted black sesame seeds. Served w/ a side of cilantro lime vinaigrette.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/bf251c31-8cbd-4687-81b9-83aac35f9ab9/2415.jpg",
      "tags": [
        "paleo"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef rachelle",
      "price": "14.95"
    },
    {
      "id": "4",
      "title": "Shrimp Scampi Over Brown Rice",
      "description": "Sauteed shrimp in white wine sauce & tomatoes, over brown rice. Accompanied by a side of green beans w/ almonds.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/9543675d-53c2-4d20-9eff-6a2fd8625ff8/2783.jpg",
      "tags": [
        ""
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "priceless caterings",
      "price": "12.95"
    },
    {
      "id": "5",
      "title": "Keto Taco Salad (Spicy)",
      "description": "Ground beef seasoned w/ southwestern spices, tossed w/ spiced grilled veggies & served over a bed of greens. Served w/ a side of cilantro vinaigrette.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/3b06c4df-19b0-4407-bf15-1dfda83e42f5/keto_taco_salad_2.jpg",
      "tags": [
        "keto",
        "paleo"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "the greek table",
      "price": "12.95"
    },
    {
      "id": "6",
      "title": "Almond Crusted Salmon w/ White Wine Sauce",
      "description": "Salmon filet crusted w/ Dijon mustard & almonds over a bed of roasted veggies, served w/ a side of white wine sauce.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/c250d88f-47ef-467c-b17d-3d585100893d/2781.jpg",
      "tags": [
        ""
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef damian",
      "price": "13.95"
    },
    {
      "id": "7",
      "title": "Spinach & Mushroom Enchiladas w/ Ranchero Sauce",
      "description": "A super lean vegetarian version of your favorite enchiladas w/ ranchero sauce! Wrapped in organic corn tortillas & served w/ a southwestern-style veggie medley & black beans to complete this Tex-Mex meal!",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/73feb4bf-aaae-4b2f-a6c9-e7a705463e19/2640.jpg",
      "tags": [
        "vegetarian"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef damian",
      "price": "14.95"
    },
    {
      "id": "8",
      "title": "Vegan Mapo Tofu",
      "description": "Grilled tofu served over a broccoli salad w/ a side of chili",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/e1c90840-195f-497e-bf31-7abca1544015/2075.jpg",
      "tags": [
        "vegetarian",
        "vegan"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "the greek table",
      "price": "12.95"
    },
    {
      "id": "9",
      "title": "Key West Chicken w/ Pineapple Fried Rice",
      "description": "Citrus & spice marinated chicken grilled to perfection mixed w/ \"fried\" rice packed w/ grilled pineapple & squash.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/0621123f-9099-459d-bbf7-9457027426a9/2191.jpg",
      "tags": [
        "mediterranean"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef meski",
      "price": "12.95"
    },
    {
      "id": "10",
      "title": "Pistachio Crusted Salmon w/ Quinoa & Sauteed Spinach",
      "description": "Pistachio crusted salmon roasted in white wine, served w/ garlic sautéed spinach & fluffy quinoa.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/5d2178c9-ab70-433f-9107-ac0c147709f9/2787.jpg",
      "tags": [
        "mediterranean"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "relish catering",
      "price": "12.95"
    },
    {
      "id": "11",
      "title": "Chicken Taco Bowl",
      "description": "A tasty blend of quinoa, peppers, black beans & zesty shredded chicken.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/b65e7272-3b69-4b2f-94e1-a08b968896a3/2714.jpg",
      "tags": [
        "mediterranean"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "relish catering",
      "price": "13.95"
    },
    {
      "id": "12",
      "title": "Vegan Mediterranean Loaded Sweet Potato",
      "description": "Perfectly roasted sweet potato topped w/ a Mediterranean-style chickpea filling laden w/ spices & sun-dried tomatoes. Served w/ a creamy dill sauce to balance the flavors.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/2b34bd28-c528-45be-a234-b99943225e36/2394.jpg",
      "tags": [
        "mediterranean",
        "vegan"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef andy",
      "price": "12.95"
    },
    {
      "id": "13",
      "title": "Grilled Shrimp Tacos w/ Siete Tortillas & Chipotle Avacodo Crema (Spicy)",
      "description": "Paleo grilled cilantro shrimp tacos served w/ Siete Brand cassava tortillas, cabbage & red bell pepper slaw & a chipotle avocado crema.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/f6831a74-3f10-41e2-911f-eee14cfe2f0f/2458.jpg",
      "tags": [
        "mediterranean"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "the greek table",
      "price": "14.95"
    },
    {
      "id": "14",
      "title": "Curry Chicken Bowl w/ Cardamom Rice",
      "description": "Slow braised chicken cooked in creamy yellow curry sauce. Served w/ a medley of squashes & seasonal vegetables & a side of cardamom basmati rice.",
      "img": "https://territory-assets.s3.amazonaws.com/photography-meals/8bd2d8b1-156c-4541-bfbe-0fd2a1887f97/2474.jpg",
      "tags": [
        "mixitarian"
      ],
      "mealType": [
        "lunch",
        "dinner"
      ],
      "chef": "chef andy",
      "price": "12.95"
    }
  ]
}

@Injectable()
export class MealStore extends ComponentStore<State> {

  constructor() {
    super(initialState)
  }

  readonly selectState$: Observable<State> = this.select(state => state)

  readonly selectMeals$: Observable<Meal[]> = this.select(this.selectState$,(state) => state.meals)
}
