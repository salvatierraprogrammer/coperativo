import React from 'react';
import { StyleSheet, FlatList,ScrollView, Dimensions, Pressable, View, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import MedicationElement from '../components/MedicationElement';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { categories } from '../data/categories';
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/ecApi';
import CategoryElement from '../components/CategoryElemnt';

const Home = ({ navigation }) => {
  // const categories = useSelector(state => state.homeSlice.allCategories);

  const { data: categories, isLoading, isError, error, } = useGetCategoriesQuery();
  // const categories = datos.data;
  console.log(categories);
  // const isLoading = false;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <Header title="Vivienda Asistida" navigation={navigation} />
          <ScrollView style={styles.container}>
          {/* <MedicationElement /> */}
            <FlatList
              data={categories}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => <CategoryElement navigation={navigation} item={item} />}
            />
            
          </ScrollView>
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
    height: 900,
    // width: "100%",
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
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