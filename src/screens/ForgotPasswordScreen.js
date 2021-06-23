import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Input, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import NavLink from '../components/NavLink';

const ForgotPasswordScreen = ({ navigation }) => {
    
    const [showPass, setShowPass] = useState(true);
    const [press, setPress] = useState(false);
    const [showPassconfirm, setShowPassConfirm] = useState(true);
    const [pressConfirm, setPressConfirm] = useState(false);
    const [email, setEmail] = useState('');
    const [emailEnterColor, setEmailEnterColor] = useState('#8c94a3');
    const [passwordEnterColor, setPasswordEnterColor] = useState('#8c94a3');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

  

    const onPressEmailEnterColor = () => {
        setEmailEnterColor('#ffb400')
    }

    const showPassword = () => {
        if (press === false) {
            setPress(true)
            setShowPass(false)
        }
        else {
            setPress(false)
            setShowPass(true)
        }
    }
    const showPasswordConfirm = () => {
        if (pressConfirm === false) {
            setPressConfirm(true)
            setShowPassConfirm(false)
        }
        else {
            setPressConfirm(false)
            setShowPassConfirm(true)
        }
    }
    const confirmPasswordFun = () => {
        password.length >= 6 ?
            password !== confirmPassword ?
                setText('Password not Match')
                :
                Alert.alert('Password match')
            :
            setText('Password must  be minimum 6 digit long!')
    }
    const checkBoxCheck= ()=>{
        checked=== false ?
        setChecked(true)
        : 
        setChecked(false)
        
    }
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View>
                    <View style={styles.containerTwo}>
                        <Text style={{
                            fontSize: Dimensions.get('window').width < 400 ? 30 : 35,
                            fontWeight: "bold", color: '#051035',
                        }}>Forgot Password</Text>
                        
                    </View>
                    <View style={{alignItems: 'center' , marginBottom: Dimensions.get('window').height < 600 ? 20 : 30}}>
                    <Text style={{fontSize: Dimensions.get('window').width < 400 ? 16 : 18, color: '#cccccc', width: '85%', textAlign: 'center' }}>
            Enter the email address you used to create your account and we will email you a link to reset your password</Text>
                    </View>
                    <View style={{
                        marginTop: Dimensions.get('window').height < 600 ? 0 : 15,
                        margin: Dimensions.get('window').width > 500 ? 15 : 15,
                        marginBottom: Dimensions.get('window').height < 600 ? 20 : 30
                    }}>
                        <Input
                            onPressIn={onPressEmailEnterColor}
                            placeholder="Email"
                            placeholderTextColor="#cccccc"
                            style={{ fontSize: Dimensions.get('window').height < 500 ? 14 : 18 }}
                            leftIcon={
                                <Icon
                                    name='mail-outline'
                                    size={Dimensions.get('window').height < 500 ? 14 : 24}
                                    color='#757f91'
                                />
                            }
                            inputContainerStyle={styles.inputContainerStyle}
                            containerStyle={{
                                backgroundColor: '#ffff',
                                elevation: 10,
                                borderWidth: 1,
                                borderColor: emailEnterColor,
                                shadowColor: 'black',
                                justifyContent: 'center',
                                height: Dimensions.get('window').height < 500 ? 30 : 60,
                                marginBottom: 20
                            }} />
                        
                    </View>
                </View>
                <View>
                    <View style={{
                        margin: Dimensions.get('window').width < 500 ? 10 : 15,
                        marginBottom: Dimensions.get('window').height < 600 ? 15 : 25,
                    }}>
                        <TouchableOpacity style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        alignItems: 'center', marginBottom: Dimensions.get('window').height < 600 ? 10 : 20,
                    }}>
                        {/*  <Text style={{
                            fontSize: Dimensions.get('window').width < 400 ? 10 : 14,
                            color: '#626589',
                        }}>By creating an account, you agree to our </Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{
                                fontSize: Dimensions.get('window').width < 400 ? 10 : 14,
                                color: '#ff8870',
                            }}>Terms of service</Text>
                            <Text style={{
                                fontSize: Dimensions.get('window').width < 400 ? 10 : 14,
                                color: '#626589',
                            }}> and</Text>
                            <Text style={{
                                fontSize: Dimensions.get('window').width < 400 ? 10 : 14,
                                color: '#ff8870',
                            }}> Privacy Policy</Text>
                        </View> */}
                    </View> 
                </View>




            </View>
            {/* <View style={{ margin: Dimensions.get('window').height > 600 ? 20 : 15, marginTop: 5 }}>
                <NavLink
                    routeName="Signin"
                    text="Already have an account? "
                    linkButtonTrext="Sign in"
                    onSubmit={() => navigation.navigate('Signin')}
                />
            </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    containerTwo: {
        alignItems: 'flex-start',
        marginTop: Dimensions.get('window').height < 600 ? 40 : 60,
        marginBottom: Dimensions.get('window').height < 600 ? 20 : 30,
        margin: Dimensions.get('window').height > 600 ? 15 : 10,
    },
    inputContainerStyle: {
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        paddingTop: 25,
    },
    containerStyle: {
        backgroundColor: '#ffff',
        elevation: 10,
        // shadowColor: '#5f85db',
        justifyContent: 'center',
        height: 60,
        marginBottom: 20
    }, appButtonText: {
        fontSize: Dimensions.get('window').width > 600 ? 15 : 20,
        color: "#051035",
        fontWeight: 'bold',
        alignSelf: "center",
        // textTransform: "uppercase"
    },
    appButtonContainer: {
        // elevation: 8,
        width: '100%',
        height: Dimensions.get('window').height > 600 ? 60 : 40,
        backgroundColor: '#ffb400',
        justifyContent: 'center'
    },
})
export default ForgotPasswordScreen


