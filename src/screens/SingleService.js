import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import * as lib from "../contants/ApiRoutes"
import Colors from "../contants/Colors"
import { ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const SingleService = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [singleData, setSingleData] = useState();
    const [image, setImage] = useState(null)
    const [productTitle, setProductTitle] = useState()
    const [productQuantity, setProductQuantity] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productDescription, setProductDescription] = useState()
    const [loading, setLoading] = useState(true);
    const [bDisable, setBDisable] = useState(false)
    useEffect(async () => {
        fetch(`${lib.url}//findSingleProduct/${itemId}`, {
            "method": "GET",
        }).then(res => res.json())
            .then(data => {
                setImage(data.data.selectedFile)
                setProductTitle(data.data.title)
                setProductPrice(data.data.price)
                setProductQuantity(data.data.qty)
                setProductDescription(data.data.description)
            })
    }, [])
    const settingPrice = (quan, operator) => {
        if (operator === "inc") {
            setBDisable(false)
            setProductQuantity(parseInt(quan) + 1)
        }
        if (operator === "dec") {
            if (quan <= 0) {
                setBDisable(true)
            }
            else {
                setBDisable(false)
                setProductQuantity(parseInt(quan) - 1)
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <ImageBackground
                    resizeMode="stretch"
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    source={{
                        uri: image
                    }}>
                    <View style={styles.chevronContainer}>
                        <Ionicons
                            name='chevron-back-outline'
                            size={hp("3.5%")}
                            color={Colors.whiteColor} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.insideInfoContainer}>
                    <View>
                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{ height: hp("15%") }}>
                                <View>
                                    <Text style={{
                                        ...styles.textStyle,
                                        fontSize: RFValue(20),
                                        color: Colors.accentColor,
                                        textTransform: "capitalize"
                                    }}>{productTitle}</Text>
                                </View>
                                <View style={styles.productRsContainer}>
                                    <Text style={styles.RsTextStyle}>Rs. {productPrice}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        ...styles.textStyle,
                                        fontSize: RFValue(20),
                                        color: Colors.accentColor,
                                        textTransform: "capitalize"
                                    }}>{productQuantity}</Text>
                                </View>
                            </View>
                            <View style={{
                                height: hp("15%"),
                                width: wp("10%"),
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <TouchableOpacity
                                    onPress={() => settingPrice(productQuantity, "inc")} style={styles.incrementIconContainer}>
                                    <Ionicons name="add-outline" size={hp("2%")} color="#000" />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{
                                        ...styles.textStyle,
                                        textAlign: 'center',
                                        fontSize: RFValue(16)
                                    }}>
                                        {productQuantity}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    disabled={bDisable}
                                    onPress={() => settingPrice(productQuantity, "dec")}
                                    style={styles.incrementIconContainer}>
                                    <Ionicons name="remove-outline" size={hp("2%")} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(14),
                                fontWeight: 'bold',
                                color: Colors.accentColor,
                            }}>Description</Text>
                        </View>
                        <View>
                            <Text style={{
                                ...styles.textStyle,
                                fontSize: RFValue(14),
                                color: Colors.accentColor,
                            }}>{productDescription}</Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        style={styles.appButtonContainer}>
                        <Text style={{
                            ...styles.textStyle,
                            fontSize: RFValue(20),
                            fontWeight: "bold",
                            color: Colors.accentColor,
                        }}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SingleService

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    backgroundImageContainer: {
        width: "100%",
        height: hp("40%")
    },
    chevronContainer: {
        margin: wp("5%")
    },
    infoContainer: {
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        bottom: hp("5%"),
        flex: 1,
        borderRadius: hp("2%"),
        elevation: 8,
        backgroundColor: Colors.whiteColor,
    },
    insideInfoContainer: {
        flex: 1,
        justifyContent: "space-between",
        margin: wp("5%")
    },
    incrementIconContainer: {
        height: hp("4.5%"),
        width: hp("4.5%"),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp("0.5%"),
        borderWidth: 1
    },
    productRsContainer: {
        marginTop: hp("1%")
    },
    RsTextStyle: {
        fontWeight: 'bold',
        fontSize: RFValue(25),
        color: Colors.primaryColor,
    },
    textStyle: {
        color: Colors.accentColor
    },
    appButtonContainer: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: "100%",
        height: hp("6%"),
    },
})
