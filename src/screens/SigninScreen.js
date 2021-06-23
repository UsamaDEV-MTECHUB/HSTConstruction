import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
// import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import * as lib from "../contants/ApiRoutes"
import NavLink from '../components/NavLink';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage'
import Colors from "../contants/Colors"
import { Item, Input, CheckBox } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [pSec, setPSec] = useState(true);
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const sendCred = async () => {
        setLoading(true)
        fetch(`${lib.url}/signin`, {
            "method": "POST",
            "headers": {
                "Content-type": "application/json"
            },
            "body": JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    if (data.success) {
                        // lib.id = data.user
                        await AsyncStorage.setItem('email', data.user)
                        // console.log(data.user)
                        navigation.replace('Dashboard')
                        setLoading(false)
                    } if (data.err) {
                        setLoading(true)
                        ToastAndroid.showWithGravityAndOffset(
                            "Invalid email or password",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER,
                            25,
                            50
                        );
                        setLoading(false)
                    }

                } catch (e) {
                    console.log("error hai", e)
                }
            })
    }

    const checkBoxCheck = () => {
        checked === false ?
            setChecked(true)
            :
            setChecked(false)

    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.containerTwo}>
                        <Text style={{
                            ...styles.textStyle,
                            fontSize: RFValue(30),
                            color: Colors.accentColor
                        }}>Log In</Text>
                    </View>
                    <View style={styles.inputFieldsContainer}>
                        <Item style={styles.textInputContainerStyle}>
                            <Icon
                                name='mail-outline'
                                size={hp("3.5%")}
                                color='#757f91' />
                            <Input value={email}
                                autoCapitalize="none"
                                onChangeText={text => setEmail(text)}
                                placeholder="example@gmail.com"
                                placeholderTextColor="lightgray"
                                style={{
                                    paddingLeft: wp("3%"),
                                    paddingRight: wp("3%"),
                                }}
                            />
                        </Item>
                        <Item style={styles.textInputContainerStyle}>
                            <Icon
                                name='lock-closed-outline'
                                size={hp("3.5%")}
                                color='#757f91' />
                            <Input
                                value={password}
                                onChangeText={text => {
                                    setPassword(text);
                                }}
                                placeholder="*******"
                                placeholderTextColor="lightgray"
                                style={{
                                    paddingLeft: wp("3%"),
                                    paddingRight: wp("3%"),
                                }}
                                secureTextEntry={pSec}
                            />
                            <Icon
                                onPress={() => setPSec(!pSec)}
                                name={pSec ? 'eye-off-outline' : 'eye-outline'}
                                size={hp("3.5%")}
                                color='#757f91'
                            />
                        </Item>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: "center"
                            }}
                            onPress={checkBoxCheck}>
                            <CheckBox
                                onPress={checkBoxCheck}
                                checked={checked}
                                color={Colors.accentColor}
                                style={styles.checkBoxButtonStyle}
                            />
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(15),
                                fontWeight: "bold",
                                paddingLeft: wp("5%")
                            }}>
                                Keep me signed in
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                    disabled={loading}
                    onPress={() => sendCred()}
                        style={styles.appButtonContainer}>
                        {loading ? (
                               <ActivityIndicator size="small" color={Colors.accentColor}/>
                        ) : (
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(20),
                                color: Colors.accentColor,
                            }}>Sign In</Text>
                        )}
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: hp("1%") }}>
                        <NavLink
                            routeName="Signin"
                            text="Dont have an account? "
                            linkButtonTrext="Sign Up"
                            onSubmit={() => navigation.navigate('Signup')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    mainContainer: {
        marginTop: hp("2%"),
        marginBottom: hp("3%"), margin: wp("4%"),
        justifyContent: 'space-between', flex: 1
    },
    containerTwo: {
        alignItems: 'flex-start',
        marginBottom: hp("2%"),
    },
    textStyle: {
        color: '#051035',
        fontWeight: 'bold',
    },
    inputFieldsContainer: {
        marginTop: hp("0%"),
        marginBottom: hp("2%"),
        // margin: wp("4%"),
    },
    textInputContainerStyle: {
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: 'black',
        justifyContent: 'center',
        paddingLeft: wp("3%"),
        paddingRight: wp("3%"),
        height: hp("7%"),
        marginBottom: hp("2%")
    },
    checkBoxButtonStyle: {
        width: wp("6%"), height: wp("6%"), borderRadius: wp("1%"),
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonContainer: {
        // elevation: 8,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: "100%",
        height: hp("6%"),
    },
})
export default SigninScreen


