import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image, ActivityIndicator, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../contants/Colors'
import * as lib from "../contants/ApiRoutes"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
const YourBagScreen = () => {
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
    return (
        loading ?

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', alignItems: 'center', }}>
                <ActivityIndicator size="large" color="#330066" animating />
            </View>
            :
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View>
                        <View style={styles.yourBagContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(20),
                                fontWeight: "bold",
                            }}>Your Bag</Text>
                            <Text style={{
                                fontSize: RFValue(15),
                                fontWeight: "800", color: '#ccc',
                            }}>3 ITEMS</Text>
                        </View>
                        <View>
                            <FlatList
                                data={data}
                                keyExtractor={(data, index) => data._id}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{
                                            ...styles.singleItemContainer, height: hp("12%"),
                                        }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={styles.itemImageContainer}>
                                                    <Image style={styles.image}
                                                        source={{
                                                            uri: item.selectedFile,
                                                        }} />
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
                                                <View style={{ margin: wp("5%"), marginRight: wp("3%"), justifyContent: 'space-between' }}>
                                                    <TouchableOpacity
                                                        onPress={() => settingPrice(item.qty)} style={styles.incrementIconContainer}>
                                                        <Icon name="add-outline" size={hp("2%")} color="#000" />
                                                    </TouchableOpacity>
                                                    <View>
                                                        <Text style={{
                                                                ...styles.textStyle,
                                                                textAlign: 'center',
                                                                fontSize: RFValue(16)
                                                            }}>
                                                            {item.qty}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => setCount(count - 1)}
                                                        style={styles.incrementIconContainer}>
                                                        <Icon name="remove-outline" size={hp("2%")} color="#000" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    )
                                }}
                            />
                            <View style={{ ...styles.singleItemContainer, height: hp("9%") }}>
                                <View style={styles.totalContainer}>
                                    <View style={styles.freeTextAndContainer}>
                                        <IconTwo name="truck-delivery-outline" size={hp("4%")} color={Colors.accentColor} />
                                        <Text style={{
                                            ...styles.textStyle,
                                            fontSize: RFValue(18),
                                            fontWeight: "bold",
                                        }}>Free</Text>
                                    </View>
                                    <View style={{ margin: wp("4%") }}>
                                        <Text style={{ fontSize: RFValue(20), color: '#ccc', fontWeight: 'bold' }}>Total</Text>
                                        <Text style={{ fontSize: RFValue(20), fontWeight: 'bold' }}>$300.00</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                        <TouchableOpacity
                            style={styles.appButtonContainer}
                        >
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(20),
                                color: Colors.accentColor,
                                fontWeight: "bold"
                            }}>Check Out</Text>
                        </TouchableOpacity>
                </View>
            </View>
    )
}

export default YourBagScreen

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
        color: Colors.accentColor,
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
        width: wp("20%")
    },
    image: { width: '100%', height: '100%', borderRadius: 10 },
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
