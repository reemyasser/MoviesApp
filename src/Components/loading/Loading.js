import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './loadingCss';

export function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <Image
        style={styles.loadingImg}
        source={require('../../../asset/images/movie.jpg')}
      />
    </View>
  );
}
