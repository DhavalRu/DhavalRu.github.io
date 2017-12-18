export class Ingredient {
    // public name: string;
    // public amount: number;

    constructor(public name: string, public amount: number) {
        // Putting public in constructor parameter is shortcut for:
        // this.name = name;
        // this.amount = amount;
    }
}
