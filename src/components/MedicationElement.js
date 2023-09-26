import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const MedicationElement = () => {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Javier Milton</Text>
          <Text style={styles.title}>Proxima medicación: 12:00</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Última medicación: 08:00</Text>
          <Text style={styles.subtitle}>- Respiridona 2 mg</Text>
          <Text style={styles.subtitle}>- Balcote 1/2 mg</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.heavyBlue,
    padding: 10,
    borderRadius: 20,
    marginVertical: 7,
    marginHorizontal: 0,
    shadowColor: '#000',
    marginBottom: 200,
    height: 150,
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderRadius: 10,

  },
  cardContainer: {
    flex: 1, 
    padding: 8, 
    backgroundColor: colors.lightBlue,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  subtitle:{
    fontSize: 16, 
    color: 'white',
  },
});

export default MedicationElement;