import {useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

const database = openDatabase(
  {name: 'favorites.db'},
  () => {
    console.log('success');
  },
  () => {
    console.log('cannotopen');
  },
);

// create favorites table
export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
            CREATE TABLE IF NOT EXISTS favorites(
                id INTEGER PRIMARY KEY NOT NULL,
                original_title TEXT NOT NULL,
                overview TEXT NOT NULL,
                poster_path TEXT NOT NULL,
                release_date TEXT NOT NULL
            
            )`,
        [],
        () => {
          resolve();
          console.log('created');
        },
        (_, err) => {
          reject(err);
          console.log(err);
        },
      );
    });
  });
  return promise;
}

//insert favorite movie
export function insertFavoriteMovie(movie) {
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
       INSERT INTO favorites (id,original_title,overview,poster_path,release_date) 
       VALUES (?,?,?,?,?)
            `,
        [
          movie.id,
          movie.original_title,
          movie.overview,
          movie.poster_path,
          movie.release_date,
        ],
        (_, result) => {
          resolve();
        },
        (_, err) => {
          reject(err);
          console.log(err);
        },
      );
    });
  });
  return promise;
}
//get all movies
export function fetchFavoriteMovies() {
  let movies = [];
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
       SELECT * FROM favorites
            `,
        [],
        (_, result) => {
          for (let i = 0; i < result.rows.length; i++) {
            movies.push(result.rows.item(i));
          }
          resolve(movies);
        },
        (_, err) => {
          reject(err);
          console.log(err);
        },
      );
    });
  });
  return promise;
}
// delete movie
export function deleteFavoriteMovies(id) {
  let movies = [];
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `
        DELETE FROM favorites WHERE id = ?
             `,
        [id],
        (_, result) => {
          resolve();
        },
        (_, err) => {
          reject(err);
          console.log('delete', err);
        },
      );
    });
  });
  return promise;
}
