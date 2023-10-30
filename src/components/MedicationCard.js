import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MedicationCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <View style={styles.cardContent}>
        <View style={styles.info}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.clockIcon}>{item.time}</Text>
          <Text style={styles.cardSubTitle}>{item.subtitle}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
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
  cardSubTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'aliceblue',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 10,
  },
  modalButon: {
    flex: 1,
    marginBottom: 5,
    marginTop: 10,
    marginHorizontal: 5,
  },
  ubicacionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardAsisten: {
    width: "100%",
  },
});


export default MedicationCard;