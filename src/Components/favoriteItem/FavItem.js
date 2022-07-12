import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {deleteFavoriteMovies} from '../../../util/database';

import {styles} from '../Items/ItemCss';

export function FavItem({movie}) {
  const deleteFavoriteMovie = async () => {
    await deleteFavoriteMovies(movie.id);
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

      <View style={styles.deletefav}>
        <TouchableOpacity onPress={deleteFavoriteMovie} style={styles.BtnLike}>
          <Text>❌ </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
