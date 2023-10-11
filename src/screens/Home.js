import React from 'react';
import { StyleSheet, FlatList, Dimensions, Pressable, View, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import MedicationElement from '../components/MedicationElement';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { categories } from '../data/categories';
import CategoryElemnt from '../components/CategoryElemnt';
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/ecApi';

const Home = ({ navigation }) => {
  // const categories = useSelector(state => state.homeSlice.allCategories);

  const { data: categories, isLoading, isError, error, } = useGetCategoriesQuery();
  // const categories = datos.data;
  console.log(categories);
  // const isLoading = false;
  return (
    <SafeAreaView style={{ marginTop: 15, flex: 1 }}>
  { isLoading ? (
    <View  style={{ flex:1, justifyContent: "center", alignContent: "center" }}
    >
    <ActivityIndicator size="large" color="#0000ff" /> 
    </View>
  ) : (
  <>
  <Header title="Home" navigation={navigation}/>
  <View style={styles.container} >
   <View style={styles.wideBox}>
      {/* <Pressable onPress={() => console.log("Ver Medicacion")}> */}
        <MedicationElement/>
      {/* </Pressable> */}
      <View>
      <FlatList
       data={categories}
       keyExtractor={(item) => item.name} // Utiliza item.name como clave única
       renderItem={({ item }) => (
         <CategoryElemnt navigation={navigation} item={item} />
       )}
     />
       </View>
   </View>
 </View>
  </>
  )}
     
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
    fontFamily: "DancingBold",
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