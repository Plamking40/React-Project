import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import Logo from '../../assets/logo-image.png';
import { back } from 'react-native/Libraries/Animated/Easing';

import Constants from 'expo-constants';

const OrderInput = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onConfirmPressed = () => {
    console.warn("ยืนยันรอเขียนฟังก์ชั่นเพิ่มข้อมูล");
  }

  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false} style={{paddingTop: Constants.statusBarHeight}}>
      <View style={styles.root}>
        <Text style={styles.title}>เพิ่มเมนูอาหาร</Text>

        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text>เพิ่มรูป</Text>
        <CustomInput
          placeholder="ระบุชื่ออาหาร"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="หมวกหมู่"
          value={email}
          setValue={setEmail}
        />

        <CustomInput
          placeholder="ระบุราคา"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="ระบุหมายเหตุ"
          value={email}
          setValue={setEmail}
        />

        <CustomButton text="ยืนยัน" onPress={onConfirmPressed} />

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
    color: 'black',
    margin: 10,
  },
  text: {
    color: 'grat',
    marginVertical: 10,
  },
  
  link: {
    color: '#FDB075'
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 100,
  },
});

export default OrderInput;