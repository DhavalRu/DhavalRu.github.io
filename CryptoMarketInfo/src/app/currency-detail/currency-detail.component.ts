import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmcHttpService } from './../services/cmc.http.service';
import { CmcModel } from '../models/cmc.model';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit, OnDestroy {

  public selectedCoin: string;
  private observerRef: any;
  public cmc: CmcModel[];
  public selectedCoinDetails: CmcModel;

  constructor(private route: ActivatedRoute, public cmcService: CmcHttpService) {
  }

  ngOnInit() {
    this.observerRef = this.route.params.subscribe(params => {
      this.selectedCoin = params['id'];
    });
    this.cmcService.cmc$.subscribe((cmc: CmcModel[]) => {
      this.cmc = cmc;
      for (let i = 0; i < this.cmc.length; i++) {
        if (this.cmc[i].name === this.selectedCoin) {
          this.selectedCoinDetails = this.cmc[i];
          break;
        }
      }
    } );
  }

  ngOnDestroy() {
    this.observerRef.unsubscribe();
  }

}
