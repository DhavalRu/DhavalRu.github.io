import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private shoppingListService: ShoppingListService) {}

  storeRecipes() {
    // Make sure HTTP put request is the right request if using a different back end
    return this.http.put('https://ng-recipe-book-12187.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  storeShoppingList() {
    return this.http.put('https://ng-recipe-book-12187.firebaseio.com/shoppingList.json', this.shoppingListService.getIngredients());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-12187.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          let recipes: Recipe[] = response.json();
          if (!recipes) {
            // recipes = [new Recipe('', '', '', [new Ingredient('', 0)])];
            recipes = [];
          }
          // Because ingredients property gets deleted in firebase if there are no ingredients
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  getShoppingList() {
    this.http.get('https://ng-recipe-book-12187.firebaseio.com/shoppingList.json')
    .map(
      (response: Response) => {
        let ingredients: Ingredient[] = response.json();
        if (!ingredients) {
          ingredients = [];
        }
        return ingredients;
      }
    )
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.shoppingListService.setIngredients(ingredients);
      }
    );
  }
}
