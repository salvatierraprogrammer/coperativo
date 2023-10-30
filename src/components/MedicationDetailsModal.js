import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Avatar, Modal, Portal, Button, Card, IconButton } from 'react-native-paper';
import { Fontisto } from '@expo/vector-icons';

const MedicationDetailsModal = ({ visible, item, hideModal, navigation }) => {
  const [selectedItem, setSelectedItem] = useState(item);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
        <Text style={styles.modalTitle}>Detalles hola</Text>
        {selectedItem ? (
          <Card style={styles.cardAsisten}>
            <Card.Title
              title={selectedItem.title}
              subtitle={selectedItem.subtitle}
              time={selectedItem.time}
              left={(props) => <Avatar.Image {...props} source={{ uri: selectedItem.image }} />}
              titleStyle={{ fontSize: 19, fontWeight: 'bold' }}
              subtitleStyle={{ fontSize: 16 }}
            />
            <Card.Content>
              {selectedItem.asistencias && selectedItem.asistencias.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>Mis Asistencias:</Text>
                </View>
              )}
              {selectedItem.asistencias &&
                selectedItem.asistencias.map((asistencia, index) => (
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
                        style={styles.modalButon}
                        icon="map-marker"
                        mode="contained"
                        onPress={() => navigation.navigate('mapaLoc', {
                          longitud_ingreso: asistencia.longitud_ingreso,
                          latitud_ingreso: asistencia.latitud_ingreso,
                        })}
                      >
                        Ubi.. Ingreso
                      </Button>
                      {asistencia.ubicacion_salida && (
                        <Button
                          style={styles.modalButon}
                          icon="map-marker"
                          mode="contained"
                          onPress={() =>  navigation.navigate('mapaLoc', {
                            longitud_ingreso: asistencia.longitud_salida,
                            latitud_ingreso: asistencia.latitud_salida,
                          })}
                        >
                          Ubi.. Salida
                        </Button>
                      )}
                    </View>
                  </View>
                ))}
            </Card.Content>
            <Card.Content>
              {selectedItem.tomada && selectedItem.tomada.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>Medicación Tomada:</Text>
                </View>
              )}
              {selectedItem.tomada &&
                selectedItem.tomada.map((tomada, index) => (
                  <View key={index} style={styles.asistenciaItem}>
                    <View style={styles.asistenciaDetails}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.asistenciaContent}>
                          <Text>Responsable: {tomada.subtitle}</Text>
                          <Text>{`${tomada.title}, Hora: ${tomada.time}`}</Text>
                        </View>
                        <Image source={{ uri: tomada.image }} style={styles.image2} />
                      </View>
                    </View>
                  </View>
                ))}
            </Card.Content>
            <Card.Content>
              {selectedItem.aTomar && selectedItem.time && selectedItem.aTomar.length > 0 && (
                <View style={styles.asistenciaItem}>
                  <Text>{`Hora: ${selectedItem.time}`}</Text>
                  <Text>Próxima medicación:</Text>
                </View>
              )}
              {selectedItem.aTomar &&
                selectedItem.aTomar.map((medicacion, index) => (
                  <View key={index} style={styles.asistenciaItem}>
                    <View style={styles.asistenciaDetails}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.asistenciaContent}>
                          <Text>  <Fontisto name="pills" size={24} color="black" /> {`${medicacion.nombreMedicacion} (mg): ${medicacion.mg}`}</Text>
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
        ) : null}
      </Modal>
    </Portal>
  );
};
 
const styles = StyleSheet.create({
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