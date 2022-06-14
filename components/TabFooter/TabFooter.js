import * as React from 'react';
import { Button, Text, View,TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Iconicons from 'react-native-vector-icons/Ionicons'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../HomeScreen';
import SignInScreen from '../SingInScreen/SingInScreen';
import SignUpScreen from '../SingUpScreen/SingUpScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import Details from '../Details';
import Status from '../Status';

import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Feed() {
  const navigation = useNavigation();
  function LogOut(){
    navigation.navigate('SignIn');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={LogOut}>
        <View style={{backgroundColor:'red',height:50,padding:15,borderRadius:10,}}>
        <Text style={{color:'white',fontWeight:'bold'}}>ออกจากระบบ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="หน้าแรก"component={HomeScreen} options={{tabBarIcon:({color,size})=>(<Iconicons name='home'color={color} size={size}/>)}} />
        <Tab.Screen name="ตะกร้า" component={Details} options={{tabBarIcon:({color,size})=>(<FontAwesome name='shopping-basket' color={color} size={size} />)}} />
        <Tab.Screen name="สถานะการสั่งซื้อ" component={Status} options={{tabBarIcon:({color,size})=>
            (<MaterialCommunityIcons name="bell" color={color} size={size} />)}} />
        <Tab.Screen name="เพิ่มเติม" component={Feed} options={{tabBarIcon:({color,size})=>
            (<FontAwesome5 name='bars' color={color} size={size} />) }} />
      </Tab.Navigator>
    
  );
}