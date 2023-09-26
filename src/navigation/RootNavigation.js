import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Medication from '../screens/Medication';
import MedicacionDetail from '../screens/MedicacionDetail';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName=''>
        <Stack.Screen 
            component={Home} 
            name="home"
            options={{
                headerShown:false,
            }} />
        <Stack.Screen 
            component={Medication} 
            name="medication" 
            options={{
                headerShown:false,
            }}
            />
        <Stack.Screen 
            component={MedicacionDetail} 
            name="medicacionDetail" 
            options={{
                headerShown:false,
            }}
            />
            <Stack.Screen 
            component={Header} 
            name="header" 
            />

    </Stack.Navigator>
  );
};

export default RootNavigation;