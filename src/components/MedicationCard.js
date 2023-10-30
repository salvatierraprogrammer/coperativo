// MedicationCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
  

const MedicationCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.cardContent}>
        <View style={styles.info}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.clockIcon}> {item.time}</Text>
          <Text style={styles.cardsub}>{item.subtitle} </Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    card: {
      borderRadius: 25,
      backgroundColor: '#478F8F',
      marginBottom: 20,
      padding: 10,
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: "auto",
      width: "100%",
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'aliceblue',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 15,
      marginRight: 10,
    },
    image2: {
      width: 80,
      height: 80,
      borderRadius: 15,
      marginLeft: 22,
      alignItems: 'center',
      marginTop: 10,
    },
    clockIcon: {
      fontSize: 20,
      color: 'aliceblue',
    },
    info: {
      flex: 1,
      padding: 10,
    },
    cardsub: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'aliceblue',
    },
  });

export default MedicationCard;