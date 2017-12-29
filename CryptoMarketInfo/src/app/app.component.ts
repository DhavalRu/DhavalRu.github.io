import { Component } from '@angular/core';
import { CmcHttpService } from './services/cmc.http.service';
import { CmcModel } from './models/cmc.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cmc = new CmcModel('');
  constructor(public cmcService: CmcHttpService) {
    this.cmcService.getTopTen().subscribe((data: any) => {
      this.cmc = new CmcModel(data[0].name);
    });
  }
}
