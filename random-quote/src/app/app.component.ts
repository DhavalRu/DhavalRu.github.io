import { Component } from '@angular/core';
import { QuoteService } from './../services/quote.service';
import { Quote } from './../models/quote.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public quote = new Quote('', '');
    public today = new Date();

    constructor(public quoteService: QuoteService) {
        this.getQuote();
    }

    public getQuote() {
        this.quoteService.getRandomQuote().subscribe((data: Quote) => {
            this.quote = new Quote(data.quote, data.author);
        });
    }

}
