# URL Shortener Microservice

Free Code Camp challenge: https://www.freecodecamp.com/challenges/url-shortener-microservice

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### User stories

* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* When I visit that shortened URL, it will redirect me to my original link.

#### Example usage
```
https://localhost/new/https://www.google.com
```
Example creation output:

```
{ "original_url":"https://www.google.com", "short_url":"http://localhost/8170" }
```

##### Usage
```
https://localhost/8170
```
Will redirect to:
```
https://www.google.com
```

## Built With

* [Express generator](https://www.npmjs.com/package/express-generator) - The web framework used
* [Hogan.js](http://twitter.github.io/hogan.js/) - Template for the views
* [valid-url](https://www.npmjs.com/package/valid-url) - package for checking url validation
* [dot-env](https://www.npmjs.com/package/dotenv) - package for loading environment variables from a .env variable


## Author

* **Giovanni Fontana**
