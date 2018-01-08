import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmcHttpService } from './../services/cmc.http.service';
import { CmcModel } from '../models/cmc.model';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit, OnDestroy {

  public selectedCoin: string;
  private observerRef: any;
  public cmc: CmcModel[];
  public selectedCoinDetails: CmcModel = new CmcModel('', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  constructor(private route: ActivatedRoute, public cmcService: CmcHttpService) {
  }

  ngOnInit() {

    // Doesn't work when I refresh app: Temp? workaround is to just redirect app to home on refresh
    this.cmc = this.cmcService.cmc;
    this.observerRef = this.route.params.subscribe(params => {
      this.selectedCoin = params['id'];
    });
    for (let i = 0; i < this.cmc.length; i++) {
      if (this.cmc[i].name === this.selectedCoin) {
        this.selectedCoinDetails = this.cmc[i];
        break;
      }
    }
  }

  ngOnDestroy() {
    this.observerRef.unsubscribe();
  }

}
