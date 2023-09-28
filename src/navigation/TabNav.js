import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import RootNavigation from './RootNavigation';
import Profile from '../screens/Profile';
import { Entypo } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title:"", headerShown: false }}>
        <Tab.Screen  name="rootNavigation" component={RootNavigation}  />
        <Tab.Screen  
        options={{ tabBarIcon: () => (
            <Entypo name="user" size={24} color="black" />
        ), }}
        name="profile" component={Profile}  />
    </Tab.Navigator>
  );
}

export default TabNav;
