import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import Medication from './src/screens/Medication';
// import { useFonts } from 'expo-font';
import MedicacionDetail from './src/screens/MedicacionDetail';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import TabNav from './src/navigation/TabNav';

   
export default function App() {

  // const [fontsLoaded] = useFonts({
  //   Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
  //   DancingBold: require("./assets/Fonts/DancingScript-Bold.ttf"),
  //   BebasNeue: require("./assets/Fonts/BebasNeue-Regular.ttf"),
  // });

  // if (fontsLoaded === false) {
  //   return;
  // }

  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});
