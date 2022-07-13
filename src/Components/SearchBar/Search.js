import React, {useCallback, useEffect, useState} from 'react';

import {Image, Text, TextInput, View} from 'react-native';
import {useQuery} from 'react-query';

import {styles} from './SearchCss';

export function Search({setMovies, setInputSearch}) {
  // state to set search text
  let [searchInput, setSearchInput] = useState();
  //onchange text
  let updateSearch = text => {
    setSearchInput(text);
    setInputSearch(text);
  };
  // fetch movies  by search
  let searchMovies = useCallback(
    async ({queryKey}) => {
      let searchInput = queryKey[1];

      if (searchInput) {
        let response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=d3798961c3c7427170a2a070fddea357&query=${searchInput}`,
        );
        return response.json();
      }
    },
    [searchInput],
  );

  let {status, data} = useQuery(['searchMovie', searchInput], searchMovies);
  useEffect(() => {
    if (status === 'success' && data) {
      setMovies(data.results);
    }
  }, [searchInput, status]);

  return (
    <View style={styles.SearchContainer}>
      <Image
        source={require('../../../asset/images/Search_Icon.png')} //Change your icon image here
        style={styles.ImageStyle}
      />
      <TextInput
        style={styles.SearchInput}
        placeholder="Type here ..."
        onChangeText={updateSearch}
        value={searchInput}></TextInput>
    </View>
  );
}
