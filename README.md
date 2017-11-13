<div align="left">
  <a href="https://github.com/juanroldan1989/ionic-movie-quotes">
    <img width="136" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/logo.png" alt="ionic_movie_quoteslogo" />
    <img width="136" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/plus-logo.jpg" alt="ionic_movie_quoteslogo" />
    <img width="136" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/ionic-logo.png" alt="ionic_movie_quoteslogo" />
    <img width="136" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/plus-logo.jpg" alt="ionic_movie_quoteslogo" />
    <img width="136" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/angular2-logo.png" alt="ionic_movie_quoteslogo" />
  </a>
 
</div>

# MovieQuotes Ionic App

Ionic app interacting with [MovieQuotes](https://movie-quotes-app.herokuapp.com) API.

## Features

* Fetch well known quotes from more than 500 movies.
* Search through movie quotes by `actors`, `characters`, `movies`, `genres` and even pieces of quotes.

## Development

1. Setup Node 6.9.0 or higher, together with NPM 3 or higher, Angular2 and Ionic2 frameworks.

2. Clone repository:

```
git clone git@github.com:juanroldan1989/ionic-movie-quotes.git
```

3. Get a API Key (free). Please send an email to `juanroldan1989@gmail.com`

4. Place API Key on this file:

```ruby
# /app/services/quotes.service.ts

...
authHeader:string = "Token token=AAABBB111222";
...
```

5. Launch server:
```
$ cd ionic-movie-quotes
$ ionic serve
```

## Demo

Searching quotes by `actors`, `characters`, `movies`, `genres` and even pieces of quotes. Please click on image to checkout the demo:


<a href="https://drive.google.com/file/d/1BZFjo18BpPfmXwxDgERaeMwVBRlRziI3/view?usp=sharing">
  <img width="300" src="https://github.com/juanroldan1989/ionic-movie-quotes/raw/master/src/assets/imgs/movie-quotes-ionic-screenshot.png" />
</a>

## Q&A

Questions or problems? Please post them on the [issue tracker](https://github.com/juanroldan1989/ionic-movie-quotes/issues). You can contribute changes by forking the project and submitting a pull request.
