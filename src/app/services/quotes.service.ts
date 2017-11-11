import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  // $ curl -H "Authorization: Token token=REPLACE_WITH_API_KEY" http://movie-quotes-app.herokuapp.com/api/v1/quotes
  authHeader:string = "Token token=REPLACE_WITH_API_KEY";
  baseUrl:string    = "http://movie-quotes-app.herokuapp.com/api/v1/quotes";

  constructor( private http:Http ) { }

  getQuotes( term:string ) {
    let headers = new Headers();

    headers.append( 'Authorization', this.authHeader );

    // searching by movie_title, actor_name, character_name, content and categories
    let query = `?multiple=${ term }`;
    let url   = this.baseUrl + query;

    console.log("URL: " + url);

    return this.http.get(url, { headers })
      .map( response => {
        console.log(response.json());

        return response.json();
      })
  }
}
