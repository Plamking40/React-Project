import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import SignInScreen from './components/SingInScreen';
import SignUpScreen from './components/SingUpScreen';

// import ConfirmEmailScreen from './components/ConfirmEmailScreen'; ยังไม่เสร็จ

import ForgotPassword from './components/ForgotPasswordScreen';
import NewPassword from './components/NewPasswordScreen';
import OrderInput from './components/OrderInput';
import OrderEdit from './components/OrderEdit';
import TabFooter from './components/TabFooter';
import Details from './components/Details';
import Status from './components/Status';



import Navigation from './components/navigation';
import NavigationStore from './components/navigationStore';

import Home from './components/HomeScreen';

const App = () => {
  return(
    <>
      <Navigation/>
    </>
  );
};

const styles = StyleSheet.create({
  root:{
     flex:1,
     
  },
 });

export default App;
