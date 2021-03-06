import { Component, OnInit, OnDestroy } from '@angular/core';
import { CmcHttpService } from './services/cmc.http.service';
import { CmcModel } from './models/cmc.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, public cmcService: CmcHttpService) {
   }

  ngOnInit() {
    this.cmcService.saveData();
  }

}
