import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../assets/logo1.png';
import Constants from 'expo-constants';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';



const SignInScreen = () => {

  const { height } = useWindowDimensions(); //ปรับตามหน้าจอ 30% 
  const navigation = useNavigation();


  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    if ( username == "store" ){
    navigation.navigate('TabStore');
    } else if ( username == "customer" ) {
      navigation.navigate('TabCustomer');
    }
  }

  const onForgotPasswordPressed = () => {
    // console.warn("Forgot password?");
    navigation.navigate('Forgot');
  }

  const onSignUpPressed = () => {
   // console.warn("Don't have an account? Create one");
    navigation.navigate('SignUp');
  }




  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false} style={{paddingTop: Constants.statusBarHeight}}>

      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.6 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          onChangeText={(val) => setValue(val)}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sing in" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />



        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />

      </View>


    </ScrollView>
  );
};


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#49FFDE',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,

  },
});

export default SignInScreen;