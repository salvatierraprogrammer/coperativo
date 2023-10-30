import React, { useRef } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const MapaLoc = ({ navigation, route }) => {
  const { longitud_ingreso, latitud_ingreso } = route.params;
  const mapViewRef = useRef(null);

  const zoomToMarker = () => {
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion(
        {
          latitude: latitud_ingreso,
          longitude: longitud_ingreso,
          latitudeDelta: 0.02, // Ajusta el nivel de zoom según tus preferencias
          longitudeDelta: 0.02, // Ajusta el nivel de zoom según tus preferencias
        },
        1000 // Duración de la animación en milisegundos
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Ubicacion" navigation={navigation} />
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="caretleft" size={24} color={colors.mediumBlue} />
      </Pressable>
      <MapView
        ref={mapViewRef}
        showsUserLocation={true}
        style={styles.map}
        initialRegion={{
          latitude: latitud_ingreso,
          longitude: longitud_ingreso,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Agrega el marcador con el icono de localización */}
        <Marker
          coordinate={{
            latitude: latitud_ingreso,
            longitude: longitud_ingreso,
          }}
          onPress={zoomToMarker}
        >
          {/* Personaliza el marcador con un icono (debes tener el icono disponible) */}
          <AntDesign name="shake" size={28} color="blue" />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  backButton: {
    marginLeft: 15,
    marginBottom: 10,
    zIndex: 1,
  },
});

export default MapaLoc;