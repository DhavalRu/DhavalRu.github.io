import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; //Get the local variable nameInput
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
  	const ingName = this.nameInputRef.nativeElement.value; //Set this to whatever the user put for input #nameInput
  	const ingAmount = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingAmount);
  	this.ingredientAdded.emit(newIngredient); //Pass the new Ingredient object to the parent: shopping-list
  }

}
