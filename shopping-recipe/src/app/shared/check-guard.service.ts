import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';

@Injectable()
export class CheckGuardService implements CanDeactivate<RecipeEditComponent> {

  constructor() { }

  /* canActivate(): boolean {
    return confirm('Are you sure you want to navigate away from the page?');
  } */

  canDeactivate(): boolean {
    return confirm('Are you sure you want to navigate away from the page?');
  }

}
