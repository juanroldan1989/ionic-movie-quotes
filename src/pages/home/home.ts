import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuotesService } from '../../app/services/quotes.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quotes:any         = [];
  Searchterm:string  = "";

  constructor(
    private _quotesService:QuotesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }

  searchQuotes() {
    this._quotesService.getQuotes(this.Searchterm).subscribe(
      data => { this.quotes = data }
    );
  }

}
