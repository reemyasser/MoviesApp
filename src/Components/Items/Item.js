import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './ItemCss';

function Item({movie, addtoFavorite, removeFromFavorite}) {
  let Favorite = movie.fav_flag;

  const toggleFavoriteList = () => {
    if (Favorite) removeFromFavorite(movie.id);
    else addtoFavorite(movie);
  };

  return (
    <View style={styles.containeritem}>
      <Image
        style={styles.imagemovie}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />
      <View style={styles.textcontainer}>
        <Text style={styles.movieName}>{movie.original_title}</Text>
        <Text numberOfLines={3} style={styles.movieOverview}>
          {movie.overview}
        </Text>
      </View>

      <View style={styles.favorite}>
        <TouchableOpacity onPress={toggleFavoriteList} style={styles.BtnLike}>
          <Text>{movie.fav_flag ? '❤liked' : '🤍like'} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Item;
