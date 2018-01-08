import { Component, OnInit } from '@angular/core';
import { CmcModel } from '../models/cmc.model';
import { CmcHttpService } from '../services/cmc.http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cmc: CmcModel[];
  constructor(public cmcService: CmcHttpService) {
    this.cmc = this.cmcService.cmc;
/*     if (this.cmc.length === 0) {
      this.cmcService.saveData();
      this.cmc = this.cmcService.cmc;
    } */
  }

  ngOnInit() {
  }

}
