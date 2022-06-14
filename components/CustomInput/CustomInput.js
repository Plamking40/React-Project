import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        margin: 12,
        padding: 10,
        //พื้นหลัง
        backgroundColor: 'white',
        width: '100%',
        //เส้นขอบ
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        //ระยะห่าง
        paddingHorizontal:10,
        marginVertical:5,
    },
    
    input: {

    },

})

export default CustomInput;