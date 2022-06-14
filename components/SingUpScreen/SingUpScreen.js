import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import SocialSignInButtons from '../SocialSingInButton/SocialSingInButton';

const SignUpScreen = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn("onRegisterPressed");
  }

  const onSignInPressed = () => {
    console.warn("Don't have an account? Create one");
  }

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  }

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  }

  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          
        />

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        <CustomButton text="Sign in" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering,you confirm that you accept our {' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use  </Text>
          and
          <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy </Text>
        </Text>

        {/* <SocialSignInButtons/> */}

        <CustomButton
          text="Have an account?Sign in"
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
    padding: 60,
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

export default SignUpScreen;