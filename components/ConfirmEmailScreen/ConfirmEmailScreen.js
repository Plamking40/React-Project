import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import SocialSignInButtons from '../SocialSingInButton/SocialSingInButton';

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn("onConfirmPressed");
  }

  const onSignInPressed = () => {
    console.warn("Don't have an account? Create one");
  }

  const onResendPressed = () => {
    console.warn("onResendPressed");
  }


  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        <CustomInput
          placeholder="Enter your confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        
        {/* <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        /> */}
        
        <CustomButton
          text="Back to Sing in"
          onPress={onSignInPressed}
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color:'grat',
    marginVertical: 10,
  },
  link:{
    color: '#FDB075'
  }
});

export default ConfirmEmailScreen;