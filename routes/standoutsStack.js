import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Standouts from '../screens/standouts'
import StandoutsHeader from '../components/standoutsHeader.js';

const Stack = createStackNavigator();

export const StandoutsStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Standouts" component={Standouts}
        options={{
            headerTitle: () => <StandoutsHeader />,
            headerTitleAlign: "center",
            }} 
        />
  </Stack.Navigator>

);