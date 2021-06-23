// import React, {useState, useEffect} from 'react'
// import { ScrollView } from 'react-native'
// import { StyleSheet, Dimensions, TouchableOpacity, Image, Text, View, Animated } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
// import { Header } from 'react-native-elements'
// import * as lib from "../contants/ApiRoutes"
// const ProfileScreen = () => {
//     const [id, setId] =useState('')
//     const scrolY = new Animated.Value(0)
//     const translateY = scrolY.interpolate({
//         inputRange: [0, 45],
//         outputRange: [0, 45]
//     })
//     useEffect(async()=>{
//         // const token   = await AsyncStorage.getItem("token")
//         // setId(token)
//         // fetch("http://d74ab2aaf4e0.ngrok.io/", {
//         //     headers: new Headers({
//         //         Authorization: "Bearer "+token
//         //     })
//         // }).then(res=> res.json())
//         // .then(data=> {
//         //     console.log(data)
//         //     setUserName(data.userName)
//         // })

//     },[])
//     const logout = ()=>{
//         AsyncStorage.removeItem("token").then(()=>{
//             navigate('Signin')
//         })
//     }
//     return (
//         <View
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
//                             <Text style={{ textAlign: 'center', fontSize: 20 }}>{lib.id}</Text>

//                         </View>
//                     }
//                 />
//             </Animated.View>
//             <View style={{ marginTop: 50, alignItems: 'center', margin: 30 }}>
//                 {/* <Text style={{ textAlign: 'center', fontSize: 20 }}>User123</Text> */}
//             </View>
//             <View style={{ margin: 15, flex: 1, }}>
//                 <View style={{justifyContent: 'space-between', flex: 1,}}>
//                     <View>
//                     <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="person-outline" color="#757f91" size={24} />
//                     </View>
//                     <View style={{ marginLeft: 30 }}>
//                         <Text style={{ textAlign: 'center', fontSize: 20 }}>Anna Avetisyan</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="calendar-outline" color="#757f91" size={24} />
//                     </View>
//                     <View style={{ marginLeft: 30 }}>
//                         <Text style={{ textAlign: 'center', fontSize: 20 }}>Birthday</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="phone-portrait-outline" color="#757f91" size={24} />
//                     </View>
//                     <View style={{ marginLeft: 30 }}>
//                         <Text style={{ textAlign: 'center', fontSize: 20 }}>81838181</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="logo-instagram" color="#757f91" size={24} />
//                     </View>
//                     <View style={{ marginLeft: 30 }}>
//                         <Text style={{ textAlign: 'center', fontSize: 20 }}>instagram account</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="mail-outline" color="#757f91" size={24} />
//                     </View>
//                     <View style={{ marginLeft: 30 }}>
//                         <Text style={{ textAlign: 'center', fontSize: 20 }}>infoappplusdesign@.com</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', height: 50,
//                     alignItems: 'center',
//                     borderBottomWidth: 1
//                 }}>
//                     <View>
//                         <Icon name="eye-outline" color="#757f91" size={24} />
//                     </View>
//                     <View style={{
//                         marginLeft: 30, flexDirection: 'row',
//                         alignItems: 'center', justifyContent: 'space-between', flex: 1
//                     }}>
//                         <View>
//                             <Text style={{ textAlign: 'center', fontSize: 20 }}>Password</Text>
//                         </View>
//                         <View>
//                             <Icon name="refresh-outline" color="#757f91" size={24} />
//                         </View>
//                     </View>
//                 </View>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.appButtonContainer}>
//                             <Text style={styles.appButtonText}>Edit Profile</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default ProfileScreen

// const styles = StyleSheet.create({
//     appButtonText: {
//         fontSize: Dimensions.get('window').width > 600 ? 15 : 20,
//         color: "#051035",
//         fontWeight: 'bold',
//         alignSelf: "center",
//         // textTransform: "uppercase"
//     },
//     appButtonContainer: {
//         // elevation: 8,
//         width: '100%',
//         height: Dimensions.get('window').height > 600 ? 60 : 40,
//         backgroundColor: '#ffb400',
//         justifyContent: 'center'
//     },
// })
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View>
            <Text>PROFILE SCREEN</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
