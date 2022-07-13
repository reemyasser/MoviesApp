import React, {useEffect, useState} from 'react';

import {FlatList, View} from 'react-native';
import {fetchFavoriteMovies} from '../../../util/database';
import {Loading} from '../loading/Loading';
import {FavItem} from '../favoriteItem/FavItem';

export function FavouriteList() {
  //state to set favorite movies
  const [favoriteMovies, setfavoriteMovies] = useState();
  //state to check fetch data or loading..
  const [isloaded, setloaded] = useState(true);

  const loaddata = async () => {
    //fetch data from local storage and set to state
    setfavoriteMovies(await fetchFavoriteMovies());
    setloaded(false);
  };
  useEffect(() => {
    loaddata();
  }, [favoriteMovies]);
  return (
    <View>
      {isloaded ? (
        <Loading />
      ) : (
        <FlatList
          data={favoriteMovies}
          renderItem={({item}) => {
            return <FavItem movie={item} />;
          }}
          keyExtractor={(item, index) => `${index}`}
        />
      )}
    </View>
  );
}
