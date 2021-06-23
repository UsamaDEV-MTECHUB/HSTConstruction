import React,{useEffect, useState} from 'react'
import { StyleSheet, Text,Button, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
const HomeScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    // useEffect(async()=>{
    //     const token   = await AsyncStorage.getItem("token")
    //     fetch("http://519d7a829fdf.ngrok.io/", {
    //         headers: new Headers({
    //             Authorization: "Bearer "+token
    //         })
    //     }).then(res=> res.json())
    //     .then(data=> {
    //         console.log(data)
    //         setEmail(data.email)
    //     })

    // },[])
    const logout = ()=>{
        AsyncStorage.removeItem("token").then(()=>{
            navigation.replace('Signin')
        })
    }
    const gotoSignup = ()=>{
        AsyncStorage.removeItem("token").then(()=>{
            navigation.replace('Signup')
        })
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>your email is {email}</Text>
            <Button title="Logout"
        onPress={() => logout()} />
            <Button title="Go to Sign Up"
        onPress={() => gotoSignup()}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
      }
})
