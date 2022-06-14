import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import firestore from '../../firestore';

export default function Testfirebase(){

   const [product, setProduct] = useState([]);

   async function GetProduct() {

      console.log('Test');

      const collRef = firestore.collection('product');

      const col = await collRef.get();

      col.forEach((doc) => setProduct(doc.data()));

      col.forEach((doc) => console.log(doc.data()));

   }

   useEffect(() => {
      GetProduct();
   }, []);


   return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
         <Text>{product.name}</Text>
      </View>
   );
};

