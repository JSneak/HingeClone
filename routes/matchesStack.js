import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import MatchesHome from '../screens/matchesScreens/matchesHome'
import MatchesDetails from '../screens/matchesScreens/matchesDetails'


const Stack = createStackNavigator();

export const MessageStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Matches Home" component={MatchesHome} />
      <Stack.Screen name="Matches Details" component={MatchesDetails} />
  </Stack.Navigator>
  
);