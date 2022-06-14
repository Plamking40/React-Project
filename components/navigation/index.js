import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import SignInScreen from '../SingInScreen';
import HomeScreen from '../TabFooter';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import SingUpScreen from '../SingUpScreen';

import TabFooterStore from '../TabFooterStore';
import TabFooter from '../TabFooter';

import OrderEdit from '../OrderEdit';
import OrderInput from '../OrderInput';



const Stack = createNativeStackNavigator();


const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
            <Stack.Screen name="SignUp" component={SingUpScreen} />
            <Stack.Screen name="TabStore" component={TabFooterStore} />
            <Stack.Screen name="TabCustomer" component={TabFooter} />
            <Stack.Screen name="OrderEdit" component={OrderEdit} />
            <Stack.Screen name="OrderInput" component={OrderInput} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default Navigation;