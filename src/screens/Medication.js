import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Shearch from '../components/Shearch';
import { medicacions } from '../data/medicacions';
import MedicationItem from '../components/MedicationItem';

const Medication = ( {category} ) => {
  const [categoryMedicat, setCategoryMedicat] = useState([]);
  const [text, setText] = useState(null);

  
  console.log("TEXTO", text);
  console.log("CategoryMedi", categoryMedicat);

  useEffect(() => {
    const categoryMedications = medicacions.filter((el) => el.category === category);
    setCategoryMedicat(categoryMedications); 
    
    if (text) {
      const titleMedic = medicacions.filter(
        (el) => el.usuario.toLowerCase() === text.toLowerCase()
        );
      console.log(titleMedic);
      setCategoryMedicat(titleMedic);
    }
    
  }, [category, text]);
  
  return (
    <SafeAreaView>
        <Header title="Medicacion"/>
        <Shearch text={text} setText={setText} />

        <FlatList 
            data={categoryMedicat} 
            keyExtractor={medicacions.id}
            renderItem={({ item }) => <MedicationItem item={item} />}
        />
        
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({

});

export default Medication;