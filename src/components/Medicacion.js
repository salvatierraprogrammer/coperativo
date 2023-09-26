import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../theme/colors';
import medicacion from '../data/medicacion';

const MedicationElement = () => {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>

        <View style={styles.cardContainer}>
          <FlatList 
          data={medicacion}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (<Text item={item} /> )}/>
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.title}>Última medicación: 08:00</Text>
          <Text style={styles.subtitle}>- Respiridona 2mg</Text>
          <Text style={styles.subtitle}>- Balcote 1/2mg</Text>
          <Image></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.heavyBlue,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row', // Display items side by side
    justifyContent: 'space-between', // Space evenly between the containers
  },
  cardContainer: {
    flex: 1, // Equal width for both containers
    padding: 8, // Padding inside each container
    backgroundColor: colors.lightBlue,
    width: 10,
    height: 100,
    borderRadius: 3,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  subtitle:{
    fontSize: 19,
    color: "white",
  },
});

export default MedicationElement;