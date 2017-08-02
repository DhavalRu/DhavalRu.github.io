import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	//Custom event, to enable this event to be listeneted to from outside
	//the header component, use @Output()
	@Output() featureSelected = new EventEmitter<string>();

	//Called when user clicks recipe/shopping-list in the navigation
	onSelect(feature: string) {
		//Fires the featureSelected event, which lets the parent (app component) know that
		//recipe or shopping-list was selected
		this.featureSelected.emit(feature);
	}
}