import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>(); // Same as eventemitter
    private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice(); // Return a copy, not the original private object
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /*
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        */
        // Spread each ingredient object from array individually (better than emitting tons of events)
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}