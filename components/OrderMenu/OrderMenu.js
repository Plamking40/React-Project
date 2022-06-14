import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import LogoProfile from '../../assets/logoProfile.jpg'

import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import { TextInput } from 'react-native-gesture-handler';

const OrderMenu = ({ navigation }) => {


    function renderHeade() {
        return (
             <View style={{ borderBottomWidth: 1,  flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={LogoProfile}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, }}>
                    <View
                        style={{
                            width: '40%',
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >

                        <Text style={{ fontSize: 20 }}>Kita Yainam</Text>
                    </View>
                </View>

            </View>
        )
    }

    const onEditPressed = () => {
        navigation.navigate('OrderEdit');
      }
    const onInSertPressed = () => {
        navigation.navigate('OrderInput');
    }
    
    return (

        <SafeAreaView style={{ paddingTop: Constants.statusBarHeight }}>

            {renderHeade()}
            <Text></Text>
            <View style={{alignItems:'center',height:35,padding:4}} >
            <Text style={{fontSize:20,fontWeight:'bold',color:'#463A3A'}}>รายการคำสั่งซื้อจากลูกค้า </Text>
            <TouchableOpacity style={{backgroundColor:'#F4D4D4',height:60,width:'100%',borderBottomWidth: 1}} onPress={onEditPressed}>
            <Text>เทส Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#F4D4D4',height:60,width:'100%',borderBottomWidth: 1}} onPress={onInSertPressed}>
            <Text>เทส Insert</Text>
            </TouchableOpacity>
                      
             
            </View>
            

        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    input: {
        
        height: 40,
        
        //พื้นหลัง
        backgroundColor: 'white',
        width: '60%',
        //เส้นขอบ
        borderColor: '#e8e8e8',
        borderWidth: 5,
        borderRadius: 20,
        //ระยะห่าง
        paddingHorizontal: 20,
        marginVertical: 1,
    },
})

export default OrderMenu;