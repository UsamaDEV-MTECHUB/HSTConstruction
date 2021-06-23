import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image, ActivityIndicator, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../contants/Colors'
import * as lib from "../contants/ApiRoutes"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
const ServicesScreen = ({navigation}) => {
    const [count, setCount] = useState(1);
    const [data, setData] = useState();
    const [input, setInput] = useState(0)
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        fetch(`${lib.url}/getProduct`, {
            "method": "GET",
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data)
                setLoading(false)
            })

    }, [])
    function settingPrice(e) {
        setInput({ ...input, qty: e });
    }
    const singleItemOnPress=(id)=>{
        navigation.navigate("SingleService" ,{
        itemId: id})
    }
    return (
        loading ?

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center', }}>
                <ActivityIndicator size="large" color="#330066" animating />
            </View>
            :
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                        <View>
                            <FlatList
                                data={data}
                                keyExtractor={(data, index) => data._id}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                        onPress={()=> singleItemOnPress(item._id)}
                                         style={{
                                            ...styles.singleItemContainer, height: hp("12%"),
                                        }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={styles.itemImageContainer}>
                                                    <Image 
                                                    resizeMode="contain"
                                                    style={styles.image}
                                                        source={{
                                                            uri: item.selectedFile,
                                                        }}
                                                         />
                                                </View>
                                                <View style={{
                                                    marginLeft: wp("5%"), margin: wp("5%"),
                                                    flex: 1
                                                }}>
                                                    <View style={{ justifyContent: 'space-between', flex: 1, }}>
                                                        <View>
                                                            <Text style={{
                                                                ...styles.textStyle,
                                                                textTransform: "capitalize",
                                                                fontWeight: "bold",
                                                                fontSize: RFValue(20)
                                                            }}>{item.title}</Text>
                                                        </View>
                                                        <View style={{
                                                        }}>
                                                            <Text style={{
                                                                ...styles.textStyle,
                                                                textTransform: "capitalize",
                                                                fontWeight: "bold",
                                                                fontSize: RFValue(18)
                                                            }}>Rs {item.price}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
            </View>
    )
}

export default ServicesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    mainContainer: {
        marginTop: hp("2%"),
        margin: wp("4%"),
        justifyContent: 'space-between', flex: 1
    },
    yourBagContainer: {
        alignItems: 'center',
    },
    textStyle: {
        color: Colors.accentColor
    },
    singleItemContainer: {
        margin: wp("2%"),
        backgroundColor: '#ffff',
        elevation: wp("1%"),
        shadowColor: '#5f85db',
        justifyContent: 'center',
        borderRadius: hp("1%"),
    },
    itemImageContainer: {
        height: hp("12%"),
        width: wp("20%"),
        borderRadius: 9,
        overflow: "hidden"
    },
    image: { width: '100%', height: '100%',},
    incrementIconContainer: {
        height: hp("2.5%"),
        width: hp("2.5%"),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp("0.5%"),
        borderWidth: 1
    },
    totalContainer: {
        flexDirection: 'row', alignItems: 'center',
        height: hp("9%"),
    },
    freeTextAndContainer: {
        width: wp("20%"),
        backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center',
        height: hp("9%"),
        borderRadius: hp("0.5%"),
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
