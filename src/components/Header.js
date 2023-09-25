import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:colors.lightBlue,
        marginBottom: 10,
        marginTop: 10,
    },
    headerText: {
      fontSize: 25,
      fontWeight: "600",
      color: colors.white,
      // fontFamily: "Dancing",

    },  
});

export default Header;