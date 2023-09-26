import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { medicacions } from '../data/medicacions';
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons';  
import { colors } from '../theme/colors';

 
const MedicacionDetail = ( { route, navigation} ) => {
    const selectedItem =route.params.selectedItem;

  return (
    <SafeAreaView>
      <Header title="Detalles"/>
      <View style={styles.containerImage}>
      <Image 
        style={styles.image}
        source={{ uri: selectedItem.images[0], }}
        // source={{ uri: medicacions[0].images,  }}
      />
      <View style={styles.containerMedicacion}>
         <Text style={styles.cardTitle}>Plan Famrmacologico</Text>
         <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}> {selectedItem.medicacionManiana}
            </Text>
            <Text style={styles.cardText}>{selectedItem.planFamrmacologicoMa}</Text>
         </View>
         <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{selectedItem.medicacionMedidiodia}</Text>
            <Text style={styles.cardText}>{selectedItem.planFamrmacologicoMe}</Text>
         </View>
         <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{selectedItem.medicacionTarde}</Text>
            <Text style={styles.cardText}>{selectedItem.planFamrmacologicoT}</Text>
         </View>
         <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{selectedItem.medicacionNoche}</Text>
            <Text style={styles.cardText}>{selectedItem.planFamrmacologicoN}</Text>
         </View>
      </View>

      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    image:{
        height: 150,
        width: 150,
    },
    containerImage:{
        alignItems: "center",
    },
    containerMedicacion: {
        width: "100%",
        shadowRadius: 10,
        alignItems: "center",
    },
    cardContainer: {
        width: "97%",
     
        backgroundColor: colors.lightBlue,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Elevación para sombras en Android
      },
      cardTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        
        // fontFamily: "DancingBold",
      },
      cardText: {
        fontSize: 16,
        color: '#333',
      },
});

export default MedicacionDetail