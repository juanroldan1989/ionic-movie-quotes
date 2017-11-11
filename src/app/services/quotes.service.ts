import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  // $ curl -H "Authorization: Token token=KLrVd4ojztrmS9xkBZNFHQtt" http://movie-quotes-api.herokuapp.com/v1/quotes
  // api_key
  authHeader:string = "Token token=KLrVd4ojztrmS9xkBZNFHQtt";
  baseUrl:string    = "http://movie-quotes-api.herokuapp.com/v1/quotes";

  constructor( private http:Http ) { }

  getQuotes( term:string ) {
    let headers = new Headers();

    headers.append( 'Authorization', this.authHeader );

    let query = `?content=${ term }`;
    let url   = this.baseUrl + query;

    console.log("URL: " + url);

    return this.http.get(url, { headers })
      .map( response => {
        console.log(response.json());

        return response.json();
      })
  }
}
