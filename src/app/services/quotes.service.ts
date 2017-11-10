import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  // $ curl -H "Authorization: Token token=3dvoD6MQYeqvH0HHa3AfXAtt" http://movie-quotes-app.herokuapp.com/api/v1/quotes
  // api_key
  authHeader:string = "Token token=3dvoD6MQYeqvH0HHa3AfXAtt";
  baseUrl:string    = "https://movie-quotes-app.herokuapp.com/api/v1/quotes";

  constructor( private http:Http ) { }

  getQuotes( term:string ) {
    let headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");
    headers.append( 'Authorization', this.authHeader );

    // let query = `?content=${ term }`;
    let query = `?content=day`;
    let url   = this.baseUrl + query;

    console.log(url);

    return this.http.get(url, { headers })
      .map( response => {
        console.log(response.json().quotes);

        return response.json().quotes;
      })
  }
}
