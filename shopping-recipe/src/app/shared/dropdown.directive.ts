import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; //Attach class open when isOpen is true

    //Listen for click event where this directive is, and toggle isOpen value
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}