import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/Login";
import Registre from '../screens/Registre';
const Stack = createNativeStackNavigator()

export default class AuthNav extends Component {
  render() {
    return (
    
        <Stack.Navigator screenOptions={ { headerShown: false } }>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="registre" component={Registre} />
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})