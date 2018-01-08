import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CmcModel } from '../models/cmc.model';

@Injectable()
export class CmcHttpService {

  public cmc: CmcModel[] = [];

  constructor(public http: HttpClient) { }

  public getTopTen() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }

  public saveData() {
    this.getTopTen().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.cmc.push(new CmcModel(data[i].name, data[i].symbol, data[i].rank,
          data[i].price_usd, data[i].price_btc, data[i]['24h_volume_usd'],
          data[i].market_cap_usd, data[i].available_supply, data[i].total_supply,
          data[i].percent_change_1h, data[i].percent_change_24h, data[i].percent_change_7d));
      }
    });
  }

}
