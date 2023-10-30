import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Modal, Portal, Button, Provider, Card, IconButton } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';  
import { medicacion } from '../data/medicacion';
import { useNavigation } from '@react-navigation/native';
import MedicationDetailsModal from './MedicationDetailsModal';
import MedicationCard from './MedicationCard';

const MedicationElement = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [item] = useState(null);

  const navigation = useNavigation();

 
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setSelectedItem(null);
  };

  return (
      
    <Provider>
      <View style={styles.container}>
        {medicacion.map((item) => (
          <MedicationCard key={item.id} item={item} onPress={handleCardClick} />
        ))}
      </View>

      <MedicationDetailsModal visible={visible} item={selectedItem} hideModal={hideModal} navigation={navigation} />

    </Provider>
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
  cardsub: {
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

export default MedicationElement;




//     <Provider>
//       <View style={styles.container}>
//         {medicacion.map((item) => (
//           <TouchableOpacity key={item.id} style={styles.card} onPress={() => handleCardClick(item)}>
//             <View style={styles.cardContent}>
//               <View style={styles.info}>
//                 <Text style={styles.cardTitle}>{item.title}</Text>
//                 <Text style={styles.clockIcon}> {item.time}</Text>
//                 <Text style={styles.cardsub}>{item.subtitle} </Text>
//               </View>
//               <Image source={{ uri: item.image }} style={styles.image} />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>

//     <MedicationDetailsModal />
//     </Provider>
//   );
// };
// MedicationElement.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Provider, Button } from 'react-native-paper';
// import MedicationCard from './MedicationCard';
// import MedicationDetailsModal from './MedicationDetailsModal';

// const MedicationElement = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const medicacion = [
//     {
//       id: '1',
//       title: 'Echeverria',
//       subtitle: 'Juan Ignacio Gonzales',
//       time: 'Ingreso 08:00:00 ⏰',
//       image: "https://cdn-icons-png.flaticon.com/512/8362/8362024.png",
//       asistencias: [
//         {
//           fecha_ingreso: '2023-10-01',
//           hora_ingreso: '08:00:00',
//           ubicacion_ingreso: 'Ubicación A',
//           fecha_salida: '2023-10-05',
//           ubicacion_salida: 'Ubicación B',
//           hora_salida: '18:00:00',
//         },
//         {
//           fecha_ingreso: '2023-10-05',
//           hora_ingreso: '08:00:00',
//           ubicacion_ingreso: 'Ubicación B',
//           fecha_salida: '2023-10-05',
//           ubicacion_salida: 'Ubicación B',
//           hora_salida: '18:00:00',
//         },
//       ],
//     },
//     {
//       id: '2',
//       title: 'Usuario',
//       subtitle: 'Javier Milton',
//       image: "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg",
//     },
//     {
//       id: '3',
//       title: 'Última Medicación',
//       subtitle: 'Maria Lopez',
//       time: ' 22:00:00 ⏰',
//       image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
//       tomada: [
//         {
//           title: 'Tomada',
//           subtitle: 'Elena Peralta',
//           time: ' 18:00:00 ⏰',
//           image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
//         },
//         {
//           title: 'Tomada',
//           subtitle: 'Marcelo Alvear',
//           time: ' 12:00:00 ⏰',
//           image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
//         },
//       ],
//     },
//     {
//       id: '4',
//       title: 'Proxima medicacion',
//       time: '08:00:00 ⏰',
//       image: "https://play-lh.googleusercontent.com/f9NuCxoRwJvMRmn7NkBzNlaE-QUZs9uQJGUZtmUYIXCRZ7rQ-1x1lKeD88hG2M5T9g",
//       aTomar: [
//         {
//           nombreMedicacion: 'Loperidol',
//           mg: '1',
//         },
//         {
//           nombreMedicacion: 'Carbamazepina',
//           mg: '1/2',
//         },
//         {
//           nombreMedicacion: 'Lorazepam',
//           mg: '1/4',
//         },
//         {
//           nombreMedicacion: 'Respiridona',
//           mg: '1/2',
//         },
//       ],
//     },
//   ];

//   const handleCardClick = (item) => {
//     setSelectedItem(item);
//     setVisible(true);
//   };

//   const hideModal = () => {
//     setVisible(false);
//     setSelectedItem(null);
//   };

//   return (
//     <Provider>
//       <View style={styles.container}>
//         {medicacion.map((item) => (
//           <MedicationCard key={item.id} item={item} onPress={handleCardClick} />
//         ))}
//       </View>

//       <MedicationDetailsModal visible={visible} item={selectedItem} hideModal={hideModal} />
//     </Provider>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   card: {
//     borderRadius: 25,
//     backgroundColor: '#478F8F',
//     marginBottom: 20,
//     padding: 10,
//     flexDirection: 'row',
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 6,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   cardContent: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: "auto",
//     width: "100%",
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'aliceblue',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 15,
//     marginRight: 10,
//   },
//   image2: {
//     width: 80,
//     height: 80,
//     borderRadius: 15,
//     marginLeft: 22,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   clockIcon: {
//     fontSize: 20,
//     color: 'aliceblue',
//   },
//   info: {
//     flex: 1,
//     padding: 10,
//   },
//   cardsub: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'aliceblue',
//   },
//   modal: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     margin: 10,
//   },
//   modalButon: {
//     flex: 1,
//     marginBottom: 5,
//     marginTop: 10,
//     marginHorizontal: 5,
//   },
//   ubicacionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cardAsisten: {
//     width: "100%",
//   },
// });

// export default MedicationElement;