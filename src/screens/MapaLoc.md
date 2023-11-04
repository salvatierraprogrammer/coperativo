# Obejetivo: Abrir mapa para conocer ubicacion del usuario


## Detalle
_Inicialmente contiene el Header general que se creo para la aplicacion_

### Longitud de ingreso y latitud de ingreso
`const { longitud_ingreso, latitud_ingreso } = route.params;`

> Esta seccion de codigo recibe la locacion, la cual esta reprecentada por cordenadas del usario: longitud_ingreso y latitud_ingreso.


### Funcion zoomToMarker
```
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




```
### Asignacion de variable
`const mapViewRef = useRef(null);`
> La línea de código se utiliza para crear una referencia mutable utilizando el gancho useRef de React. A continuación, te explico en detalle qué hace y por qué se usa en el contexto del código proporcionado


### Detalle de funcion
> La función zoomToMarker tiene la finalidad de realizar una animación en un mapa para centrarlo en una ubicación específica, que en este caso son las coordenadas de latitud y longitud proporcionadas en latitud_ingreso y longitud_ingreso. A continuación, se detalla qué hace esta función:

1. Verifica si mapViewRef.current es válido, lo que significa que se está haciendo referencia a un componente MapView en la interfaz de usuario. Si la referencia no es válida, la función no realizará ninguna acción.

2. Si mapViewRef.current es válido, se llama al método animateToRegion en el componente MapView. Este método toma un objeto que define la región en la que se debe centrar y el nivel de zoom que se debe aplicar.

3. El objeto pasado al método animateToRegion tiene las siguientes propiedades:

latitude y longitude: Estas propiedades se establecen en las coordenadas de latitud y longitud proporcionadas en latitud_ingreso y longitud_ingreso. El mapa se centrará en esta ubicación.
latitudeDelta y longitudeDelta: Estas propiedades controlan el nivel de zoom del mapa. En este caso, se establecen en 0.02, lo que significa que se aplicará un nivel de zoom relativamente cercano. Puedes ajustar estos valores según tus preferencias para controlar cuánto se acerca el mapa.
4. Finalmente, se establece la duración de la animación en milisegundos utilizando la propiedad 1000, lo que significa que la animación tomará 1 segundo en completarse.

### Componente Pressable 

```
<Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="caretleft" size={24} color={colors.mediumBlue} />
      </Pressable>
```

> Este codigo realiza la funcion de ir volver a la pantalla anterior   `onPress={() => navigation.goBack()}`

### Componente MapView y Marker

```
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
```
> MapView
- Se encarga de mostrar el mapa en la interfaz de usuario y configurar su región inicial, mientras que Marker se utiliza para agregar un marcador en una ubicación específica en el mapa y personalizar su apariencia 

> Marker
- Se utiliza para agregar marcadores o icono en el mapa representando ubicaciones específicas.



