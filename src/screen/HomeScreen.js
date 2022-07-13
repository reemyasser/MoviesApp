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
  }, []);
  //component to filter movies
  const ListMovies = ({route}) => (
    <ListItem
      filterName={route.params.filterName}
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
      <Tab.Screen
        name="Top Movies"
        initialParams={{filterName: 'top_rated'}}
        component={ListMovies}
      />
      <Tab.Screen
        name="upcoming movies"
        initialParams={{filterName: 'upcoming'}}
        component={ListMovies}
      />
      <Tab.Screen
        name="now playing movies"
        initialParams={{filterName: 'now_playing'}}
        component={ListMovies}
      />
    </Tab.Navigator>
  );
}
