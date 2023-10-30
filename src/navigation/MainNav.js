import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MainNav = () => {
    const [checkedUser, setCheckedUser ] = useState(null);
    const user = useSelector((state) => state.authSlice.user);

    useEffect(() => {
      const checkedUser = async () =>{
        try {
          const userEmail = await AsyncStorage.getItem("userEmail");
          userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);
          // console.log("userEmail", userEmail);
        } catch (error) {
          console.log(error)
        }
      };
      checkedUser();
      }, [user])

  return (
    <NavigationContainer>
      { checkedUser ? <TabNav/> : <AuthNav/> }
      </NavigationContainer>
    );
  
};

export default MainNav;