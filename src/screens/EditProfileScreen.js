// import React, {useState} from 'react'
// import { ScrollView } from 'react-native'
// import { StyleSheet, Dimensions, TouchableOpacity, Image, Text, View, Animated } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
// import {Input} from 'react-native-elements'
// import { Header } from 'react-native-elements'

// const EditProfileScreen = () => {
//     const [showPass, setShowPass] = useState(true);
//     const [press, setPress] = useState(false);
//     const [showPassconfirm, setShowPassConfirm] = useState(true);
//     const [pressConfirm, setPressConfirm] = useState(false);
//     const [emailEnterColor, setEmailEnterColor] = useState('#8c94a3');
//     const [UserNameColor, setUserNameColor] = useState('#8c94a3');
//     const [passwordEnterColor, setPasswordEnterColor] = useState('#8c94a3');
//     const [re_passwordEnterColor, setRe_passwordEnterColor] = useState('#8c94a3');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const scrolY = new Animated.Value(0)
//     const translateY = scrolY.interpolate({
//         inputRange: [0, 45],
//         outputRange: [0, 45]
//     })

//     const showPassword = () => {
//         if (press === false) {
//             setPress(true)
//             setShowPass(false)
//         }
//         else {
//             setPress(false)
//             setShowPass(true)
//         }
//     }
//     const showPasswordConfirm = () => {
//         if (pressConfirm === false) {
//             setPressConfirm(true)
//             setShowPassConfirm(false)
//         }
//         else {
//             setPressConfirm(false)
//             setShowPassConfirm(true)
//         }
//     }
//     return (
//         <ScrollView
//             onScroll={(e) => {
//                 scrolY.setValue(e.nativeEvent.contentOffset.y)
//             }}
//             style={{ flex: 1, }}>
//             <Animated.View>
//                 <Header
//                     containerStyle={{
//                         height: Dimensions.get('window').height < 600 ? 90 : 250,
//                         borderBottomLeftRadius: Dimensions.get('window').height * 0.3,
//                         borderBottomRightRadius: Dimensions.get('window').height * 0.3,
//                         // borderBottomStartRadius:  Dimensions.get('window').height *2,

//                         backgroundColor: '#ffb400',
//                     }}
//                     leftComponent={<Icon style={{ left: 10, }} name="chevron-back-outline" size={20} color='#ccc' />}
//                     leftContainerStyle={{ marginTop: Dimensions.get('window').height < 600 ? 17 : 40 }}
//                     centerComponent={
//                         <View style={{ justifyContent: 'center', alignItems: 'center', }}>

//                             <View style={{
//                                 height: Dimensions.get('window').width * 0.25,
//                                 marginTop: Dimensions.get('window').height < 600 ? 200 : 190,
//                                 width: Dimensions.get('window').width * 0.25,
//                                 borderRadius: Dimensions.get('window').width * 0.25 / 2,
//                                 justifyContent: 'center', alignItems: 'center',
//                             }}>
//                                 <View style={{
//                                     height: Dimensions.get('window').width * 0.24,
//                                     width: Dimensions.get('window').width * 0.24, zIndex: 2, position: 'absolute', justifyContent: 'flex-end',
//                                     borderRadius: Dimensions.get('window').width * 0.24 / 2, overflow: 'hidden'
//                                 }}>
//                                     <TouchableOpacity style={{
//                                         width: '100%', height: '30%',
//                                         backgroundColor: 'rgba(0,0,0,0.2)',
//                                         alignItems: 'center'
//                                     }}>
//                                         <Icon name="camera" color="grey" size={24} />
//                                     </TouchableOpacity>
//                                 </View>
//                                 <Image style={{
//                                     height: Dimensions.get('window').width * 0.24,
//                                     width: Dimensions.get('window').width * 0.24,
//                                     borderRadius: Dimensions.get('window').width * 0.24 / 2, zIndex: 1
//                                 }}
//                                     source={require('../images/user.png')} />
//                             </View>
//                             <Text style={{ textAlign: 'center', fontSize: 20 }}>User123</Text>

//                         </View>
//                     }
//                 />
//             </Animated.View>
//             <View style={{ marginTop: 50, alignItems: 'center', margin: 30 }}>
//                 {/* <Text style={{ textAlign: 'center', fontSize: 20 }}>User123</Text> */}
//             </View>
//             <View style={{ margin: 15, flex: 1, }}>
//                 <View style={{ justifyContent: 'space-between', flex: 1, }}>
//                 <View style={{
//                     }}>
//                         <Input
//                             placeholder="Username"

//                             // onPressIn={onPressUserNameColor}
//                             placeholderTextColor="#cccccc"
//                             value="Anna Avetisyan"
//                             // onChangeText={setUserName}
//                             leftIcon={
//                                 <Icon
//                                     name='person-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: UserNameColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             // onPressIn={onPressEmailEnterColor}
//                             placeholder="Birthday"
//                             // placeholderTextColor="#cccccc"
//                             // value={email}
//                             // onChangeText={setEmail}
//                             style={{ fontSize: Dimensions.get('window').height < 500 ? 14 : 18 }}
//                             leftIcon={
//                                 <Icon
//                                     name='calendar-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: emailEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             // onPressIn={onPressEmailEnterColor}
//                             placeholder="Birthday"
//                             // placeholderTextColor="#cccccc"
//                             value="01234667"
//                             // onChangeText={setEmail}
//                             style={{ fontSize: Dimensions.get('window').height < 500 ? 14 : 18 }}
//                             leftIcon={
//                                 <Icon
//                                     name='phone-portrait-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: emailEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             // onPressIn={onPressEmailEnterColor}
//                             placeholder="Instagram Account"
//                             // placeholderTextColor="#cccccc"
//                             // value={email}
//                             // onChangeText={setEmail}
//                             style={{ fontSize: Dimensions.get('window').height < 500 ? 14 : 18 }}
//                             leftIcon={
//                                 <Icon
//                                     name='logo-instagram'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: emailEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             // onPressIn={onPressEmailEnterColor}
//                             placeholder="Birthday"
//                             // placeholderTextColor="#cccccc"
//                             value="Test@test123.com"
//                             // onChangeText={setEmail}
//                             style={{ fontSize: Dimensions.get('window').height < 500 ? 14 : 18 }}
//                             leftIcon={
//                                 <Icon
//                                     name='mail-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: emailEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             placeholder="Password"
//                             // onPressIn={onPressPasswordEnterColor}
//                             secureTextEntry={showPass}
//                             placeholderTextColor="#cccccc"
//                             // value={password}
//                             // onChangeText={(text) => setPassword(text)}
//                             leftIcon={
//                                 <Icon
//                                     name='lock-closed-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             rightIcon={<TouchableOpacity
//                                 onPress={() => showPassword()}>
//                                 <Icon name={press === false ? 'eye-off-outline' : 'eye-outline'}
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24} color={'#757f91'} />
//                             </TouchableOpacity>}
//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: passwordEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: 20
//                             }} />
//                         <Input
//                             placeholder="Confirm Password"
//                             // onPressIn={onPressReEnterPasswordColor}
//                             secureTextEntry={showPassconfirm}
//                             // value={confirmPassword}
//                             // onChangeText={(text) => setConfirmPassword(text)}
//                             placeholderTextColor="#cccccc"
//                             leftIcon={
//                                 <Icon
//                                     name='lock-closed-outline'
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24}
//                                     color='#757f91'
//                                 />
//                             }
//                             rightIcon={<TouchableOpacity
//                                 onPress={() => showPasswordConfirm()}>
//                                 <Icon name={pressConfirm === false ? 'eye-off-outline' : 'eye-outline'}
//                                     size={Dimensions.get('window').height < 500 ? 14 : 24} color={'#757f91'} />
//                             </TouchableOpacity>}

//                             inputContainerStyle={styles.inputContainerStyle}
//                             containerStyle={{
//                                 backgroundColor: '#ffff',
//                                 elevation: 10,
//                                 borderWidth: 1,
//                                 // borderColor: re_passwordEnterColor,
//                                 shadowColor: 'black',
//                                 justifyContent: 'center',
//                                 height: Dimensions.get('window').height < 500 ? 30 : 60,
//                                 marginBottom: Dimensions.get('window').height < 600 ? 0 : 0
//                             }} />
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.appButtonContainer}>
//                             <Text style={styles.appButtonText}>Edit Profile</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// export default EditProfileScreen

// const styles = StyleSheet.create({
//     inputContainerStyle: {
//         borderBottomWidth: 0,
//         paddingHorizontal: 10,
//         paddingTop: 25,
//     },
//     appButtonText: {
//         fontSize: Dimensions.get('window').width > 600 ? 15 : 20,
//         color: "#051035",
//         fontWeight: 'bold',
//         alignSelf: "center",
//         // textTransform: "uppercase"
//     },
//     appButtonContainer: {
//         // elevation: 8,
//         marginTop: Dimensions.get('window').height < 600 ? 40 : 40,
//         width: '100%',
//         height: Dimensions.get('window').height > 600 ? 60 : 40,
//         backgroundColor: '#ffb400',
//         justifyContent: 'center'
//     },
// })
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EditProfileScreen = () => {
    return (
        <View>
            <Text>EDIT PROFILE SCREEN</Text>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({})
