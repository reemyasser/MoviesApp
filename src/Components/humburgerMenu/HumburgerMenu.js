import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text} from 'react-native';
import {HomeScreen} from '../../screen/HomeScreen';
import {FavouriteList} from '../favourite/FavoriteList';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export function HumbugerMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: '#306EFF',
          headerStyle: {
            backgroundColor: '306EFF',
          },
        }}>
        <Drawer.Screen
          options={{
            title: 'Home',
            unmountOnBlur: true,
            drawerIcon: ({focused, size}) => (
              <Text style={{fontSize: 20}}> {focused ? '🏠' : '🏚'}</Text>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />

        <Drawer.Screen
          options={{
            title: 'Favorites',
            drawerIcon: ({focused, size}) => (
              <Text style={{fontSize: 20}}> {focused ? '💖' : '🤍'}</Text>
            ),
          }}
          name="Favorites"
          component={FavouriteList}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
