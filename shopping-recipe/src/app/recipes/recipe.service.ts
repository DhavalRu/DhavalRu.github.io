import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.servive";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 
        'Test recipe 1 description', 
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
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

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
        //TODO: If I keep clicking add to shopping list, it will keep adding duplicates...fix this
    }
}