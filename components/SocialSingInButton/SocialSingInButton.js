import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {

    const onSignInFacebook = () => {
        console.warn("Sign In Facebook");
    }

    const onSignInGoogle = () => {
        console.warn("Sign In Google");
    }

    const onSignInApple = () => {
        console.warn("Sign In Apple");
    }

    return (
        <>
            <CustomButton
                text="Test 01"
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton
                text="Test 02"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButton
                text="Test 03"
                onPress={onSignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />
        </>
    )
}

export default SocialSignInButtons

