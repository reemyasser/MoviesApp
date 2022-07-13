import React, {useCallback, useEffect, useState} from 'react';

import {FlatList, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {
  deleteFavoriteMovies,
  insertFavoriteMovie,
} from '../../../util/database';

import Item from '../Items/Item';
import {Loading} from '../loading/Loading';
import {Search} from '../SearchBar/Search';
import {styles} from './ListItemCss';

function ListItem({filterName, favoriteMovies, setfavoriteMovies}) {
  // fetch data from api using filter name
  let fetchMovie = useCallback(
    async queryFunctionContext => {
      const filterName = queryFunctionContext.queryKey[1];
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${filterName}?api_key=d3798961c3c7427170a2a070fddea357`,
      );
      return response.json();
    },
    [filterName],
  );

  let {status, data} = useQuery(['fetchmovies', filterName], fetchMovie);

  let [inputSearch, setInputSearch] = useState();
  // state to set movies
  let [movies, setMovies] = useState();

  useEffect(() => {
    if (status === 'success' && !inputSearch) {
      setMovies(data.results);
    }
  }, [inputSearch, status]);

  //remove favorite movie from favorite list  then update in state
  const removeFromFavorite = id => {
    deleteFavoriteMovies(id)
      .then(async () => {
        setfavoriteMovies(favoriteMovies.filter(movie => movie.id !== id));

        console.log('deleted');
      })
      .catch(() => {
        console.log('can not delete');
      });
  };
  //add favorite movie to favorite list  then update in state

  const addToFavorite = movie => {
    insertFavoriteMovie(movie)
      .then(async () => {
        setfavoriteMovies(old => [...old, movie]);

        console.log('insert');
      })
      .catch(() => {
        console.log('can not insert');
      });
  };
  return (
    <View style={styles.listContainer}>
      <Search setInputSearch={setInputSearch} setMovies={setMovies} />
      {status === 'success' && favoriteMovies?.length > 0 ? (
        movies?.length > 0 ? (
          <FlatList
            data={movies}
            renderItem={({item}) => {
              return (
                <Item
                  removeFromFavorite={removeFromFavorite}
                  addtoFavorite={addToFavorite}
                  movie={{
                    ...item,
                    fav_flag: favoriteMovies.some(m => m.id === item.id),
                  }}
                />
              );
            }}
            keyExtractor={(item, index) => `${index}`}
          />
        ) : (
          <View style={styles.NotFoundContainer}>
            <Text style={styles.NotFound}>not found</Text>
          </View>
        )
      ) : (
        <Loading />
      )}
    </View>
  );
}

export default ListItem;
