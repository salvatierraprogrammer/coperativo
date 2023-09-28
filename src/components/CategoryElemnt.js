import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
import { setCategory } from '../redux/slice/homeSlice';
import { useDispatch } from 'react-redux';

const CategoryElement = ({ item, navigation }) => {
  
    const dispatch = useDispatch(); 

    const onHandleItem = () => {
      dispatch(setCategory(item));
      navigation.navigate("medications", { item: item });
    };

  return (
    <View style={styles.row}>
      <View style={styles.box}>
        <Pressable onPress={() => onHandleItem()}>
          <View style={styles.containerBox}>
            <Image source={{ uri: item.image }} style={styles.image} /> 
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
  
  },
  image: {
    width: 100, 
    height: 100, 
    marginRight: 16, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    height: 150,
   
  },
  box: {
    backgroundColor: 'lightblue',
    flex: 1,
    borderWidth: 1,
    marginRight: 8,
    padding: 16,
    borderRadius: 8,
    // Sombras para Android
    elevation: 4,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    // fontFamily: "Arial",
    fontSize: 22,
    fontWeight: '600',
  },
});

export default CategoryElement;