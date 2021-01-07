import React from 'react';
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Popular from '../screens/popular';


const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const { navigation } = props;

const buttonLeft = (screen) => {
    // switch (screen) {
    //   case 'search':
    //   case 'movie':
    //     return (
    //       <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
    //     );
    //   default:
        return (
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
        );
    // }
  };

const buttonRight = () => {
  return(
    <IconButton
      icon="magnify"
      onPress={() => console.log(Buscador) }
    />
  )
}

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'TheMovieApp',
          headerLeft: () => buttonLeft('home'),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonLeft('movie'),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Películas Populares',
          headerLeft: () => buttonLeft('popular'),
          headerRight: () => buttonRight(),
        }}
      />
    </Stack.Navigator>
  );
}
