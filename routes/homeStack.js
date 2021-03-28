import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import DiscoverHeader from '../components/discoverHeader.js';

const Stack = createStackNavigator();

export const HomeStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Discover" component={Home}
        options={{
            headerTitle: () => <DiscoverHeader />,
            headerTitleAlign: "center",
            }} 
        />
  </Stack.Navigator>

);