import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import Logo from '../../assets/logo-edit.png';
import { back } from 'react-native/Libraries/Animated/Easing';

import Constants from 'expo-constants';

const OrderInput = () => {

  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [print, setPrint] = useState('');
  const [list, setList] = useState('');

  const onConfirmPressed = () => {
    console.warn("ยืนยันรอเขียนฟังก์ชั่นแก้ไขข้อมูล");
  }

  return (//showsHorizontalScrollIndicator ปิดscrollข้างๆให้ไม่เห็น
    <ScrollView showsHorizontalScrollIndicator={false} style={{paddingTop: Constants.statusBarHeight}}>
      <View style={styles.root}>
        <Text style={styles.title}>แก้ไขเมนูอาหาร</Text>

        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
          
        />
        <Text>เพิ่มรูป</Text>
        <CustomInput
          placeholder="ชื่ออาหาร"
          value={order}
          setValue={setOrder}
        />
        <CustomInput
          placeholder="หมวกหมู่"
          value={type}
          setValue={setType}
        />

        <CustomInput
          placeholder="ราคา"
          value={print}
          setValue={setPrint}
        />

        <CustomInput
          placeholder="หมายเหตุ"
          value={list}
          setValue={setList}
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