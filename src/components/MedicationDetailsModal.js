import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Avatar, Modal, Portal, Button, Card } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';

const MedicationDetailsModal = ({ visible, item, hideModal, navigation }) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
        <Text style={styles.modalTitle}>Detalles</Text>
        {item && (
          <Card style={styles.cardAsisten}>
            <Card.Title
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.image }} />}
              titleStyle={{ fontSize: 19, fontWeight: 'bold' }}
              subtitleStyle={{ fontSize: 16 }}
            />
            <Card.Content>
              {item.asistencias && item.asistencias.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>Mis Asistencias:</Text>
                </View>
              )}
              {item.asistencias &&
                item.asistencias.map((asistencia, index) => (
                  <View key={index} style={styles.asistenciaItem}>
                    <View style={styles.asistenciaDetails}>
                      <Text>
                        Fecha Ingreso: {asistencia.fecha_ingreso}, Hora: {asistencia.hora_ingreso}
                      </Text>
                      {asistencia.fecha_salida && (
                        <Text>
                          Fecha Salida: {asistencia.fecha_salida}, Hora: {asistencia.hora_salida}
                        </Text>
                      )}
                    </View>
                    <View style={styles.ubicacionButtons}>
                      <Button
                        style={styles.modalButton}
                        icon="map-marker"
                        mode="contained"
                        onPress={() =>
                          navigation.navigate('mapaLoc', {
                            longitud_ingreso: asistencia.longitud_ingreso,
                            latitud_ingreso: asistencia.latitud_ingreso,
                          })
                        }
                      >
                        Ubi.. Ingreso
                      </Button>
                      {asistencia.ubicacion_salida && (
                        <Button
                          style={styles.modalButton}
                          icon="map-marker"
                          mode="contained"
                          onPress={() =>
                            navigation.navigate('mapaLoc', {
                              longitud_ingreso: asistencia.longitud_salida,
                              latitud_ingreso: asistencia.latitud_salida,
                            })
                          }
                        >
                          Ubi.. Salida
                        </Button>
                      )}
                    </View>
                  </View>
                ))}
            </Card.Content>
            <Card.Content>
              {item.tomada && item.tomada.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>Medicación Tomada:</Text>
                </View>
              )}
              {item.tomada &&
                item.tomada.map((tomada, index) => (
                  <View key={index} style={styles.asistenciaItem}>
                    <View style={styles.asistenciaDetails}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.asistenciaContent}>
                          <Text >Responsable: {tomada.subtitle}</Text>
                          <Text>{`${tomada.title}, Hora: ${tomada.time}`}</Text>
                        </View>
                        <Image source={{ uri: tomada.image }} style={styles.image2} />
                      </View>
                    </View>
                  </View>
                ))}
            </Card.Content>
            <Card.Content>
              {item.aTomar && item.time && item.aTomar.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>{`Hora: ${item.time}`}</Text>
                  <Text>Próxima medicación:</Text>
                </View>
              )}
              {item.aTomar &&
                item.aTomar.map((medicacion, index) => (
                  <View key={index} style={styles.asistenciaItem}>
                    <View style={styles.asistenciaDetails}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.asistenciaContent}>
                          <Text>
                            <Fontisto name="pills" size={24} color="black" />{` ${medicacion.nombreMedicacion} (mg): ${medicacion.mg}`}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
            </Card.Content>
            <Card.Actions>
              <Button mode="outlined" onPress={hideModal}>
                Cancelar
              </Button>
            </Card.Actions>
          </Card>
        )}
      </Modal>
    </Portal>
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


export default MedicationDetailsModal;