import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SettingHomeScreen from '../screens/settingsScreens/settingHome'
import AccountScreen from '../screens/settingsScreens/account'
import HelpCenterScreen from '../screens/settingsScreens/helpCenter'
import PreferenceScreen from '../screens/settingsScreens/preferences'
import WhatWorksScreen from '../screens/settingsScreens/whatWorksScreen'


const Stack = createStackNavigator();

export const SettingsStack = () => (

   <Stack.Navigator>
      <Stack.Screen name="Settings Home" component={SettingHomeScreen} />
      <Stack.Screen name="Preferences" component={PreferenceScreen} />
      <Stack.Screen name="What Works" component={WhatWorksScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Help Center" component={HelpCenterScreen} />
  </Stack.Navigator>

);