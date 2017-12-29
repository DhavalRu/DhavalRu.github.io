import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CmcHttpService {

  constructor(public http: HttpClient) { }

  public getTopTen() {
    // console.log(this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10'));
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }

}
