import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const ForgotPasswordScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSendPressed = () => {
    console.warn("onSendPressed");
  }

  const onSignInPressed = () => {
    console.warn("Don't have an account? Create one");
  }



  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />


        <CustomButton text="Send" onPress={onSendPressed} />


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
    color: 'grat',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  }
});

export default ForgotPasswordScreen;