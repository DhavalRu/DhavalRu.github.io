import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //The recipe-list component sends the recipe data to this variable
  @Input() recipe: Recipe; //A single recipe from the list
  @Output() recipeSelected = new EventEmitter<void>(); 
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	//When the user clicks on a list item link, emit the event
  	this.recipeSelected.emit();
  }
}
