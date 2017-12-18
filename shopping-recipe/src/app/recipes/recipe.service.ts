import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe 1',
        'Test recipe 1 description',
        'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 3)
        ]),
        new Recipe('Another test recipe 2',
        'Test recipe 2 description',
        'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) { // Called when getting data from firebase
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        /* let bool: boolean;
        let slIngredientsArray = this.slService.getIngredients();
        for (let ingredient of ingredients) {
            for (let shopIngredient of slIngredientsArray) {
                bool = true;
                // If the ingredient already exists in the shopping list, add both the amounts
                if (shopIngredient.name === ingredient.name) {
                    shopIngredient.amount += ingredient.amount;
                    bool = false;
                    break;
                }
            }
            // If we can't find the ingredient name in the shopping list, append it.
            if (bool) {
                this.slService.addIngredient(ingredient);
            }
        } */
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
