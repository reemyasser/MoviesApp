/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {init} from './util/database';
import {Loading} from './src/Components/loading/Loading';
import {FavouriteList} from './src/Components/favourite/FavoriteList';
import {HomeScreen} from './src/screen/HomeScreen';
import {HumbugerMenu} from './src/Components/humburgerMenu/HumburgerMenu';

const App = () => {
  const [initialized, setinitialized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setinitialized(true);
        console.log('suc');
      })
      .catch(err => {
        console.log('error');
        console.log(err);
      });
  }, []);
  const queryClient = new QueryClient();

  return (
    <>
      {!initialized ? (
        <Loading />
      ) : (
        <QueryClientProvider client={queryClient}>
          <HumbugerMenu />
        </QueryClientProvider>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
