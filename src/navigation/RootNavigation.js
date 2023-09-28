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
    <Stack.Navigator initialRouteName="home"
    screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Medication} name="medications" />
        <Stack.Screen component={MedicacionDetail} name="medicacionDetail" />

    </Stack.Navigator>
  );
};

export default RootNavigation;