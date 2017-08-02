import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	//Have to go up to the parent (recipe component). That's why I emit from recipe-item to recipe-list to recipe
	@Output() recipeWasSelected = new EventEmitter<Recipe>(); 
	recipes: Recipe[] = [
		new Recipe('A test recipe', 'Test recipe desc', 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg'),
		new Recipe('Another test recipe', 'Test recipe desc', 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg')
	];
	constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  	//Emit this event when the recipe-item event (recipeSelected) is fired
  	this.recipeWasSelected.emit(recipe);
  }

}
