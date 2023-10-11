import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import Medication from './src/screens/Medication';
import { useFonts } from 'expo-font';
import MedicacionDetail from './src/screens/MedicacionDetail';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import TabNav from './src/navigation/TabNav';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Registre from './src/screens/Registre';
import Login from './src/screens/Login';
import AuthNav from './src/navigation/AuthNav';
import MainNav from './src/navigation/MainNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    DancingBold: require("./assets/Fonts/DancingScript-Bold.ttf"),
    BebasNeue: require("./assets/Fonts/BebasNeue-Regular.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      <MainNav/>
    </Provider>
   
  );
};

const styles = StyleSheet.create({
 
});
