import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Pressable, View, Text, TouchableOpacity, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage'
import Colors from "../contants/Colors"

import { Avatar, Badge, withBadge } from 'react-native-elements'
const DashboardScreen = ({ navigation }) => {
    const [email, setEmail] = useState("User Name")
    useEffect(async () => {
        const email = await AsyncStorage.getItem("email")
        setEmail(email)
        // setId(token)
        // fetch("http://d74ab2aaf4e0.ngrok.io/", {
        //     headers: new Headers({
        //         Authorization: "Bearer "+token
        //     })
        // }).then(res=> res.json())
        // .then(data=> {
        //     console.log(data)
        //     setUserName(data.userName)
        // })

    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={{
                            ...styles.textStyle,
                            fontSize: RFValue(30),
                            fontWeight: "bold",
                        }}>Dashboard</Text>
                    </View>
                    <View style={styles.headerIconsContainer}>
                        <TouchableOpacity>
                            <Icon name="chatbubble-outline" size={hp("3%")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            {/* <Badge
                                value="2"
                                status="warning"
                                containerStyle={{ position: 'absolute', top: -10, right: -8 }}
                            /> */}
                            <Icon name="cart-outline" size={hp("3%")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.userInfoHeaderContainer}>
                    <View style={styles.insideUserInfoHeaderContainer}>
                        <View style={styles.imageAndOtherInfoContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image
                                    resizeMode="contain"
                                    style={{
                                        height: "100%",
                                        width: "100%"
                                    }}
                                    source={require('../images/avatarImage.png')} />
                            </View>
                            <View style={{ marginLeft: wp("3%") }}>
                                <Text style={{
                                    ...styles.profileTextStyle,
                                    fontSize: RFValue(18),
                                }}>
                                    Welcome!...</Text>
                                <Text style={{
                                    ...styles.profileTextStyle,
                                    fontSize: RFValue(20), fontWeight: "bold"
                                }}>
                                    {email}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name="chevron-forward-outline" size={hp("5%")} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={{
                        ...styles.textStyle,
                        fontSize: RFValue(23),
                        fontWeight: "bold",
                    }}>Services</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Services")}
                        style={styles.listButtonStyle}>
                        <Text style={{
                            ...styles.textStyle,
                            fontSize: RFValue(10),
                            fontWeight: "bold",
                        }}>See All Services</Text>
                    </Pressable>
                </View>
                <View style={styles.itemsContainer}>
                    <View>
                        <View style={styles.servicesSingleItemContainer}>
                            <Icon name="heart" size={hp("8%")} color="#ffb300" />
                        </View>
                        <View style={styles.servicesSingleItemLabelContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(12),
                            }}>Service 1</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.servicesSingleItemContainer}>
                            <Icon name="heart" size={hp("8%")} color="#ffb300" />
                        </View>
                        <View style={styles.servicesSingleItemLabelContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(12),
                            }}>Service 2</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.servicesSingleItemContainer}>
                            <Icon name="heart" size={hp("8%")} color="#ffb300" />
                        </View>
                        <View style={styles.servicesSingleItemLabelContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(12),
                            }}>Service 3</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.headingContainer}>
                    <Text style={{
                        ...styles.textStyle,
                        fontSize: RFValue(23),
                        fontWeight: "bold",
                    }}>Products</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Products')}
                        style={styles.listButtonStyle}>
                        <Text style={{
                            ...styles.textStyle,
                            fontSize: RFValue(10),
                            fontWeight: "bold",
                        }}>See All Products</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemsContainer}>
                    <View style={styles.productItemSingleContainer}>
                        <View style={styles.productSingleItemImageContainer}>
                            <Image
                                resizeMode="stretch"
                                style={{
                                    width: "100%",
                                    height: '100%',
                                }} source={require('../images/default.jpg')} />
                        </View>
                        <View style={styles.productTitleAndPriceContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                            }}>Title</Text>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                                fontWeight: "bold",
                            }}>Rs. 400</Text>
                        </View>
                    </View>
                    <View style={styles.productItemSingleContainer}>
                        <View style={styles.productSingleItemImageContainer}>
                            <Image
                                resizeMode="stretch"
                                style={{
                                    width: "100%",
                                    height: '100%',
                                }} source={require('../images/default.jpg')} />
                        </View>
                        <View style={styles.productTitleAndPriceContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                            }}>Title</Text>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                                fontWeight: "bold",
                            }}>Rs. 400</Text>
                        </View>
                    </View>
                    <View style={styles.productItemSingleContainer}>
                        <View style={styles.productSingleItemImageContainer}>
                            <Image
                                resizeMode="stretch"
                                style={{
                                    width: "100%",
                                    height: '100%',
                                }} source={require('../images/default.jpg')} />
                        </View>
                        <View style={styles.productTitleAndPriceContainer}>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                            }}>Title</Text>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(10),
                                fontWeight: "bold",
                            }}>Rs. 400</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff'
    },
    mainContainer: {
        marginTop: hp("2%"),
        marginBottom: hp("3%"),
        margin: wp("4%"),
        justifyContent: 'space-between',
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfoHeaderContainer: {
        backgroundColor: Colors.accentColor,
        marginTop: hp("1%"),
        height: hp("11%"),
        elevation: hp("1%"),
        justifyContent: 'center'
    },
    insideUserInfoHeaderContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: wp("3%"),
        alignItems: "center",
        justifyContent: 'space-between'
    }, imageAndOtherInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImageContainer: {
        width: hp("6.5%"),
        height: hp("6.5%"),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp("6.5%") / 2
    },
    profileTextStyle: {
        color: '#fff',
    },
    headingContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp("2%"),
    },
    listButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center', justifyContent: 'center',
        width: wp("30%"),
        height: hp("5%")
    },
    servicesSingleItemContainer: {
        height: hp("14.5%"),
        width: hp("14.5%"),
        borderColor: Colors.primaryColor,
        borderWidth: 1, alignItems: 'center', justifyContent: 'center'
    },
    servicesSingleItemLabelContainer: {
        marginTop: hp("0.5%"),
        alignItems: 'center'
    },
    itemsContainer: {
        flexDirection: 'row',
        width: "100%",
        marginTop: hp("2%"),
        justifyContent: 'space-between'
    },
    productItemSingleContainer: {
        height: hp("16.5%"),
        justifyContent: 'space-between',
        width: hp("14.5%"), borderColor: '#ffb300',
        borderWidth: 1,
    },
    productSingleItemImageContainer: {
        margin: wp("2%"),
        marginBottom: 0,
        height: hp("8%")
    },
    productTitleAndPriceContainer: {
        marginTop: 0,
        margin: wp("2%"),
    },
    textStyle: {
        color: Colors.accentColor,
    }
})
export default DashboardScreen


