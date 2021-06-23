import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import NavLink from '../components/NavLink';
import AsyncStorage from '@react-native-community/async-storage'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import * as lib from "../contants/ApiRoutes"
import { Item, Input, CheckBox } from 'native-base';
import Colors from '../contants/Colors';
import { ToastAndroid } from 'react-native';
const SignupScreen = ({ navigation }) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pSec, setPSec] = useState(true);
    const [CpSec, setCPSec] = useState(true);
    const [loading, setLoading] = useState(false);
    const sendCred = async () => {
        setLoading(true)
        fetch(`${lib.url}/signup`, {
            "method": "POST",
            "headers": {
                "Content-type": "application/json"
            },
            "body": JSON.stringify({
                "email": email,
                // "userName": userName,
                "cpassword": confirmPassword,
                "password": password,
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {


                    if (data.passerr) {
                        ToastAndroid.showWithGravityAndOffset(
                            "please enter same password",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER,
                            25,
                            50
                        );
                    } if (data.code) {
                        ToastAndroid.showWithGravityAndOffset(
                            "this email is already exist",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER,
                            25,
                            50
                        );
                    }
                    if (data.name === "ValidationError") {
                        ToastAndroid.showWithGravityAndOffset(
                            "ypur email is not valid",
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER,
                            25,
                            50
                        );
                        setLoading(false)
                    }
                    if (!data.errors && !data.passerr && !data.code) {
                        await AsyncStorage.setItem('email', data)
                        navigation.navigate('Dashboard')
                        setLoading(false)
                    }
                } catch (e) {
                    console.log("error hai", e)
                }
            })
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
                        }}>Sign Up</Text>
                    </View>
                    <View style={styles.inputFieldsContainer}>
                        <Item style={styles.textInputContainerStyle}>
                            <Icon
                                name='person-outline'
                                size={hp("3.5%")}
                                color='#757f91' />
                            <Input value={userName}
                                onChangeText={text => setUserName(text)}
                                placeholder="enter user name"
                                placeholderTextColor="lightgray"
                                style={{
                                    paddingLeft: wp("3%"),
                                    paddingRight: wp("3%"),
                                }}
                            />
                        </Item>
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
                                placeholder="enter password"
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
                        <Item style={styles.textInputContainerStyle}>
                            <Icon
                                name='lock-closed-outline'
                                size={hp("3.5%")}
                                color='#757f91' />
                            <Input
                                value={confirmPassword}
                                onChangeText={text => {
                                    setConfirmPassword(text);
                                }}
                                placeholder="re enter password"
                                placeholderTextColor="lightgray"
                                style={{
                                    paddingLeft: wp("3%"),
                                    paddingRight: wp("3%"),
                                }}
                                secureTextEntry={CpSec}
                            />
                            <Icon
                                onPress={() => setCPSec(!CpSec)}
                                name={CpSec ? 'eye-off-outline' : 'eye-outline'}
                                size={hp("3.5%")}
                                color='#757f91'
                            />
                        </Item>
                    </View>
                </View>
                <View>
                    <View style={{ alignItems: 'center', marginBottom: hp("1%") }}>
                        <NavLink
                            routeName="Signin"
                            text="Already have an account? "
                            linkButtonTrext="Sign In"
                            onSubmit={() => navigation.navigate('Signin')}
                        />
                    </View>
                    <TouchableOpacity style={styles.appButtonContainer}
                        onPress={() => sendCred()}>
                        {
                            loading ? (
                                <ActivityIndicator size="small" color={Colors.accentColor} />
                            ) : (
                                <Text style={{
                                    ...styles.textStyle,
                                    fontSize: RFValue(20),
                                    color: Colors.accentColor,
                                }}>Create My Account</Text>
                            )
                        }

                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: hp("1%") }}>
                        <Text style={{
                            fontSize: RFValue(13),
                            color: '#626589',
                        }}>By creating an account, you agree to our </Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{
                                fontSize: RFValue(13),
                                color: '#ff8870',
                            }}>Terms of service</Text>
                            <Text style={{
                                fontSize: RFValue(13),
                                color: '#626589',
                            }}> and</Text>
                            <Text style={{
                                fontSize: RFValue(13),
                                color: '#ff8870',
                            }}> Privacy Policy</Text>
                        </View>
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
        marginBottom: hp("3%"),
        margin: wp("4%"),
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
    appButtonContainer: {
        // elevation: 8,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: hp("6%"),
    },
})
export default SignupScreen


