import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListItem from '../Components/List/ListItem';
import {fetchFavoriteMovies} from '../../util/database';

const Tab = createMaterialTopTabNavigator();

export function HomeScreen({navigation}) {
  const [favoriteMovies, setfavoriteMovies] = useState([]);
  useEffect(() => {
    fetchFavoriteMovies().then(data => {
      setfavoriteMovies(data);
    });
    console.log('homescreen');
  }, []);
  const Top_rated = () => (
    <ListItem
      filterName={'top_rated'}
      favoriteMovies={favoriteMovies}
      setfavoriteMovies={setfavoriteMovies}
    />
  );
  const Upcoming = () => (
    <ListItem
      filterName={'upcoming'}
      favoriteMovies={favoriteMovies}
      setfavoriteMovies={setfavoriteMovies}
    />
  );
  const Now_playing = () => (
    <ListItem
      filterName={'now_playing'}
      favoriteMovies={favoriteMovies}
      setfavoriteMovies={setfavoriteMovies}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        lazy: true,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Top Movies') {
            iconName = focused ? '🎖' : '🎥';
          } else if (route.name === 'upcoming movies') {
            iconName = focused ? '🎬' : '📽';
          } else if (route.name === 'now playing movies') {
            iconName = focused ? '▶' : '📺';
          }

          return <Text style={{fontSize: 20}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: '#306EFF',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Top Movies" component={Top_rated} />
      <Tab.Screen name="upcoming movies" component={Upcoming} />
      <Tab.Screen name="now playing movies" component={Now_playing} />
    </Tab.Navigator>
  );
}
