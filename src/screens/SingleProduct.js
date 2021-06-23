import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, ToastAndroid, Text, View, ActivityIndicator } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import * as lib from "../contants/ApiRoutes"
import Colors from "../contants/Colors"
import { ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'
import { WebView } from 'react-native-webview';
import axios from 'axios'
const SingleProduct = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [singleData, setSingleData] = useState();
    const [image, setImage] = useState(null)
    const [productTitle, setProductTitle] = useState()
    const [productQuantity, setProductQuantity] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productDescription, setProductDescription] = useState()
    const [myimage, setmyimage] = useState(`https://momento360.com/e/u/0a9da6bd48aa442594ec20bff3ca399f?utm_campaign=embed&utm_source=other&heading=-76.31&pitch=-1.38&field-of-view=75&size=medium`)
    const [loading, setLoading] = useState(true);
    const [bDisable, setBDisable] = useState(false)
    const [addToCartLoading, setAdddToCartLoading] = useState(false)
    useEffect(async () => {
        fetch(`${lib.url}//findSingleProduct/${itemId}`, {
            "method": "GET",
        }).then(res => res.json())
            .then(data => {
                console.log(data.data.view)
                setmyimage(data.data.view)
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
    async function addSingleProduct(ourdata) {
        try {
            const { data } = await axios.post(
                `${lib.url}/addtocartSingle`,
                ourdata
            );
            if (data.data) {
                ToastAndroid.showWithGravityAndOffset(
                    "You added to Cart Successfully!!!",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                    25,
                    50
                );
            }
            if (data.Err) {
                ToastAndroid.showWithGravityAndOffset(
                    "Sorry, You added to Cart Already!!!",
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                    25,
                    50
                );
            }
        } catch (error) {
            console.log(error);
        }

    }
    const addToCart = async () => {
        setAdddToCartLoading(true);
        const { data } = await axios.get(`${lib.url}//findSingleProduct/${itemId}`);
        const userEmail = await AsyncStorage.getItem("email")
        const email = { email: userEmail }
        var newData = data.data
        const ourdata = { ...newData, ...email }
        setAdddToCartLoading(false)
        // write error here for duplicate data
        addSingleProduct(ourdata);
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
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.chevronContainer}>
                        <Ionicons
                            name='chevron-back-outline'
                            size={hp("3.5%")}
                            color={Colors.primaryColor} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.insideInfoContainer}>
                    <View>
                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                            <View style={{ height: hp("10%") }}>
                                <View>
                                    <Text style={{
                                        ...styles.textStyle,
                                        fontSize: RFValue(22),
                                        fontWeight: 'bold',
                                        color: Colors.accentColor,
                                        textTransform: "capitalize"
                                    }}>{productTitle}</Text>
                                </View>
                                <View style={styles.productRsContainer}>
                                    <Text style={styles.RsTextStyle}>Rs. {productPrice}</Text>
                                </View>
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
                        <View style={{ height: hp("20%"), borderWidth: 1 }}>
                            <WebView
                    source={{
                        html:
                            `<iframe width="100%" height="100%" src=${myimage} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
                    }}
                    // style={{ marginTop: 20 }}
                />
                        </View>


                    </View>

                    <TouchableOpacity
                        onPress={() => addToCart()}
                        style={styles.appButtonContainer}>
                        {
                            addToCartLoading ? (
                                <ActivityIndicator size="small" color={Colors.accentColor} />
                            ) : (
                                <Text style={{
                                    ...styles.textStyle,
                                    fontSize: RFValue(20),
                                    fontWeight: "bold",
                                    color: Colors.accentColor,
                                }}>Add To Cart</Text>
                            )
                        }

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SingleProduct

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
