import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import RootNavigation from './RootNavigation';
import Profile from '../screens/Profile';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';  
import Medicacion from '../screens/Medicacion';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title:"", headerShown: false }}>
        <Tab.Screen  
        options={{ tabBarIcon: () => (
          <Entypo name="home" size={24} color="black" />
        ), }}
        name="rootNavigation" component={RootNavigation}  />
        <Tab.Screen  
        options={{ tabBarIcon: () => (
            <Entypo name="user" size={24} color="black" />
        ), }}
        name="profile" component={Profile}  />
          <Tab.Screen  
        options={{ tabBarIcon: () => (
            <Fontisto name="pills" size={24} color="black" />
        ), }}
        name="medicacion" component={Medicacion}  />

    </Tab.Navigator>
  );
}

export default TabNav;
