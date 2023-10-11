import {  View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Pressable } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { firebase_auth } from '../firebase/firebase_auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from "../redux/slice/authSlice";

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
      // console.log(response);
    } catch (e) {
      console.log("Error en Login", e);
    }
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Inicio de Sesión</Text>
    <TextInput
      placeholder="Correo"
      style={styles.input}
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    <TextInput
      placeholder="Contraseña"
      secureTextEntry
      style={styles.input}
      value={password}
        onChangeText={(text) => setPassword(text)}

    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Iniciar Sesión</Text>
    </TouchableOpacity >
    <Pressable onPress={()=> { navigation.navigate("registre")}} >
      <Text style={styles.registroText}>No tienes cuenta? Registrate</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
title: {
  fontSize: 24,
  marginBottom: 20,
},
input: {
  width: "85%",
  height: 50,
  borderColor: colors.heavyBlue,
  borderWidth: 2,
  borderRadius: 5,
  marginBottom: 20,
  paddingHorizontal: 10,
  fontSize: 17,
},
button: {
  backgroundColor: colors.mediumBlue,
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},
buttonText: {
  color: "white",
  fontSize: 20,
  fontWeight: "600",
},
registroText: {
  marginTop: 30,
  fontSize: 18,
  color: colors.heavyBlue,
},
});

export default Login;