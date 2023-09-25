import React from 'react';
import { StyleSheet, ScrollView, Dimensions, Pressable, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';
import MedicationElement from '../components/MedicationElement';


const Home = () => {
  return (
    <SafeAreaView style={{ marginTop: 15 }}>
    
      <Header title="Home"/>

      <View style={styles.container} >
        <View style={styles.wideBox}>
           <Pressable onPress={() => console.log("Ver Medicacion")}>
             <MedicationElement/>
           </Pressable>
           <Categories />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
 
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  wideBox: {
    backgroundColor: 'blue',
    
    padding: 16,
    height: 500,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    height: 300,
  },
  
});

export default Home;