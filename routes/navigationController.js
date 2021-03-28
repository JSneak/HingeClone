import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

import Likes from '../screens/likes';
import { HomeStack } from './homeStack';
import { StandoutsStack } from './standoutsStack'

// import { MatchesStack } from './matchesStack';
// import { SettingsStack } from './settingsStack';

const Tab = createBottomTabNavigator();
  
  
export const Navigator = () => {
    return (
        <NavigationContainer style={styles.footer}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        if (route.name === 'Discover') {
                            return <AntDesign name="Trophy" size={36} color="black" />
                        } else if (route.name === 'Settings') {
                            return <AntDesign name="user" size={36} color="black" />
                        } else if (route.name === 'Standouts') {
                            return <AntDesign name="staro" size={36} color="black" />
                        } else if (route.name === 'Matches') {
                            return <AntDesign name="inbox" size={36} color="black" />
                        } else if (route.name === 'Likes') {
                            return <AntDesign name="hearto" size={36} color="black" />
                        }
                    },
                    })}
                tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                style: {
                    height: 60
                }
                }}
            >
                <Tab.Screen name="Discover" component={HomeStack} />
                <Tab.Screen name="Standouts" component={StandoutsStack} />
                <Tab.Screen name="Likes" component={Likes} />
                <Tab.Screen name="Matches" component={Likes} />
                <Tab.Screen name="Settings" component={Likes} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 100,
    }
})