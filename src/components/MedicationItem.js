import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';

const MedicationItem = ({ item } ) => {
  return (
    <View style={styles.container}>
    {/* <Pressable onPress={() => console.log("Botn")} > */}
      <Text style={styles.textItem}> {item.usuario} </Text>
      <Image tyle={styles.image} height={80} width={80} source={{ uri: item.images[0] }} 
      resizeMode="cover"
      />
      {/* </Pressable> */}
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.heavyBlue,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    textItem: {
        fontSize: 20,
        fontWeight: "900",
        marginLeft: 10,
        width: "70%",
        alignItems: "center",
      },
      image:{
        marginRight: 10,
      },
});

export default MedicationItem;