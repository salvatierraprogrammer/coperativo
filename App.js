import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Shearch from './src/components/Shearch';
import Home from './src/screens/Home';
import Medication from './src/screens/Medication';
import { useFonts } from 'expo-font';


export default function App() {

 const [fonstLoaded] = useFonts({
    Dancing: require("./assets/Fonts/DancingScript-Regular.ttf"),
    DancingBold: require("./assets/Fonts/DancingScript-Bold.ttf"),
    BebasNeue: require("./assets/Fonts/BebasNeue-Regular.ttf"),
  });
  if(fonstLoaded === false){
    return;
  }  
  return (
    <View>
      {/* <Home /> */}
      <Medication category="Medicacion" />
    </View>
  );
};

const styles = StyleSheet.create({
 
});
