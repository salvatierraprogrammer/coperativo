import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import MedicationItem from '../components/MedicationItem';
import { AntDesign } from "@expo/vector-icons";
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';
import { useGetMedicacionsQuery } from '../services/ecApi';



const Medication = ( { route, navigation} ) => {
  const [categoryMedicat, setCategoryMedicat] = useState([]);
  const [text, setText] = useState(null);
  const {item} = route.params;

  const medicacions = useSelector((state) => state.homeSlice.allMedicacions );
  
const {data, isLoading, isError } = useGetMedicacionsQuery();

console.log("Data",data);


  const medicationsFilterByCategory = useSelector(
    (state) => state.homeSlice.medicationsFilterByCategory
  );
  // console.log(medicationsFilterByCategory);

  useEffect(() => {
    setCategoryMedicat(medicationsFilterByCategory); 
    
    if (text) {
      const titleMedic = medicacions.filter(
        (el) => el.usuario.toLowerCase() === text.toLowerCase()
        );
      setCategoryMedicat(titleMedic);
    }
    
  }, [text, item]);
  
  return (
    <SafeAreaView>
        <Header title={item.name} navigation={navigation}/>
        <Pressable 
        style={{ marginLeft: 15, marginBottom: 10 }}
        onPress={() => navigation.goBack()}>
          <AntDesign name="caretleft" size={24} color={colors.mediumBlue} />
     </Pressable>
     <Search text={text} setText={setText} />
        <FlatList 
            data={categoryMedicat} 
            keyExtractor={medicacions.id}
            renderItem={({ item }) =>  
            <MedicationItem navigation={navigation} item={item} />}
        />
        
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({

});

export default Medication;