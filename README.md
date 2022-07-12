# Movies app
the Movie App can Show movies with a filter for
To switch between (Best Movies - Upcoming Movies - Now Playing
Movies), search for a movie, a movie can be added to the favorites list and deleted
## Screenshots

![App Screenshot](https://github.com/reemyasser/MoviesApp/blob/main/screenshots/1.jpeg)
![App Screenshot](https://github.com/reemyasser/MoviesApp/blob/main/screenshots/2.jpeg)

![App Screenshot](https://github.com/reemyasser/MoviesApp/blob/main/screenshots/3.jpeg)



## API Reference
### TheMovieDB APIs. https://www.themoviedb.org/documentation/api
#### Get (top movies - upcoming movies - now playing movies)

```http
  GET /movie/top_rated
  GET /movie/upcoming
  GET /movie/now_playing

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



#### Get movies by search

```http
  GET search/movie
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query`      | `string` | **Required**. query of search text to fetch |




## Run Locally

Clone the project

```bash
  git clone https://github.com/reemyasser/MoviesApp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
 npx react-native run-android
```

