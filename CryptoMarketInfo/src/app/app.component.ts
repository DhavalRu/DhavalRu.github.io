import { Component } from '@angular/core';
import { CmcHttpService } from './services/cmc.http.service';
import { CmcModel } from './models/cmc.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cmc: CmcModel[] = [];
  constructor(public cmcService: CmcHttpService) {
    this.cmcService.getTopTen().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.cmc.push(new CmcModel(data[i].name, data[i].symbol, data[i].rank,
          data[i].price_usd, data[i].price_btc, data[i]['24h_volume_usd'],
          data[i].market_cap_usd, data[i].available_supply, data[i].total_supply,
          data[i].percent_change_1h, data[i].percent_change_24h, data[i].percent_change_7d));
      }
      // console.log(this.cmc);
    });
  }
}
