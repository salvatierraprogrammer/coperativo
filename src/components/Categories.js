import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { categories } from '../data/categories';
import CategoryElemnt from './CategoryElemnt';


const Categories = () => {
  return (
    <View>
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (<CategoryElemnt item={item} /> )}
    />
  </View>
  );
};

export default Categories

const styles = StyleSheet.create({})