import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuotesService } from '../../app/services/quotes.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quotes:any         = [];
  searchTerm:string  = "";

  constructor(
    private _quotesService:QuotesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.searchQuotes();
  }

  searchQuotes() {
    this._quotesService.getQuotes(this.searchTerm).subscribe(
      data => { this.quotes = data; console.log("quotes: " + data); }
    );
  }

}
