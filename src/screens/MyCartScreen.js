import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Modal, ActivityIndicator, TextInput,
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, Dimensions
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Avatar } from 'react-native-elements'
import Colors from '../contants/Colors'
import * as lib from "../contants/ApiRoutes"
import { RFValue } from 'react-native-responsive-fontsize'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage'
import { CardField, useStripe } from '@stripe/stripe-react-native';

import _ from 'lodash'
import axios from 'axios'
const MyCartScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const [cartList, setCartList] = useState([])
    const [bDisable, setBDisable] = useState(false)
    const [buyModalVisible, setByModalVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [paymentModalVisible, setPaymentModalVisible] = useState(false)
    const [itemId, setItemId] = useState(null)
    const [itemTitle, setItemTitle] = useState(null)
    const [itemPrice, setItemPrice] = useState(null)
    const [itemQuantity, setItemQuantity] = useState(null)
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState()
    useEffect(async () => {
        const email = await AsyncStorage.getItem("email")
        setInput({ ...input, email: email })
        getData()
    }, [])
    const getData = async () => {
        setLoading(true)
        const email = await AsyncStorage.getItem("email")
        try {
            const { data } = await axios.get(`${lib.url}/getallcartSingle/${email}`);
            if (data.data.length !== 0) {
                setCartList(data.data[0].products);
                setLoading(false)
            }
            if (data !== null) {

            }
        } catch (error) {
            console.log(error)
        }
    };
    const settingPrice = (quan, operator) => {
        if (operator === "inc") {
            setBDisable(false)
            setItemQuantity(parseInt(quan) + 1)
        }
        if (operator === "dec") {
            if (quan <= 0) {
                setBDisable(true)
            }
            else {
                setBDisable(false)
                setItemQuantity(parseInt(quan) - 1)
            }
        }
    }
    const onPressIncDecButton = async (itemID) => {
        const user = await AsyncStorage.getItem("email")
        const email = { user }
        const { data } = await axios.post(`${lib.url}/findSingleCartProduct/${itemID}`, email);
        // console.log(data)
        setItemId(data.data._id)
        setItemTitle(data.data.title)
        setItemPrice(data.data.price)
        setItemQuantity(data.data.qty)
        setByModalVisible(!buyModalVisible)

    }
    const proceedBtn = async () => {
        // setInput({...input, qty: itemQuantity})
        // console.log(itemQuantity)
        // console.log(input)
        // console.log(input)
        const { data } = await axios.put(`${lib.url}/cartqtyUpdate/${itemId}`, input
        );
        setByModalVisible(!buyModalVisible)
        setModalVisible(!modalVisible)
        getData()
    }
    const onToken = (token) => {
        console.log("hello")
        // fetch('/save-stripe-token', {
        //     method: 'POST',
        //     body: JSON.stringify(token),
        // }).then(response => {
        //     response.json().then(data => {
        //         alert(`We are in business, ${data.email}`);
        //     });
        // });
    }
    var totalPrice = _.sum(cartList.map((val) => (val.price * val.qty)))
    const PaymentScreen = () => {
        // ...
        return (
            <View>
                <CardField
                    postalCodeEnabled={true}
                    placeholder={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: '#FFFFFF',
                        textColor: '#000000',
                    }}
                    style={{
                        width: '100%',
                        height: 50,
                        marginVertical: 30,
                    }}
                    onCardChange={(cardDetails) => {
                        console.log('cardDetails', cardDetails);
                    }}
                    onFocus={(focusedField) => {
                        console.log('focusField', focusedField);
                    }}
                />
            </View>
        );
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={{
                    marginTop: hp("2%"),
                    marginLeft: wp("2%"),
                }}>
                    <Text style={{
                        fontSize: RFValue(30),
                        fontWeight: "bold", color: '#051035',
                    }}>My Cart</Text>
                </View>
                <View style={{ height: hp("65%") }}>
                    {
                        loading ?
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                <ActivityIndicator size="large" color={Colors.primaryColor} />
                            </View>
                            :
                            <ScrollView>
                                {
                                    cartList.map((item, index) => (
                                        <View key={index} style={styles.cartItemContainer}>
                                            <View style={{ flexDirection: 'row', margin: wp("2%"), alignItems: 'center' }}>
                                                <View style={styles.itemImageContainer}>
                                                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                                        source={{ uri: item.selectedFile }} />
                                                </View>
                                                <View style={styles.titleAndRsContainer}>
                                                    <Text style={styles.cartTitle}>{item.title}</Text>
                                                    <Text style={styles.cartItemRs}>Quantity {item.qty}</Text>
                                                    <Text style={styles.cartItemRs}>Rs. {item.price * item.qty}</Text>
                                                </View>
                                                <View style={{ height: '80%', justifyContent: 'flex-end' }}>
                                                    <TouchableOpacity
                                                        onPress={() => onPressIncDecButton(
                                                            // item.title,
                                                            // item.qty,
                                                            // item.price,
                                                            item._id
                                                        )} style={styles.editButtonContainer}>
                                                        <Text style={styles.editButtonText}>Edit</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    ))
                                }
                            </ScrollView>
                    }

                </View>
                <View style={styles.subTotalContainer}>
                    <View style={{ margin: wp("2%") }}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <View>
                                <Text style={{ color: '#ffb400', fontSize: RFValue(20), fontWeight: 'bold' }}>Total</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#ffb400', fontSize: RFValue(20), fontWeight: 'bold' }}>Rs.{totalPrice}/-</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: hp("2%") }}>
                            <TouchableOpacity
                                onPress={() => setPaymentModalVisible(!paymentModalVisible)}
                                style={styles.appButtonContainer}>
                                <Text style={styles.appButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={paymentModalVisible}
                    onRequestClose={() => {
                        setPaymentModalVisible(!paymentModalVisible);
                    }}
                >
                    <View style={styles.paymentmodalcenteredView}>
                        <View style={styles.paymentmodalmodalView}>
                            <View style={styles.paymentmodalinsidemodalView}>
                                    <CardField
                                        postalCodeEnabled={true}
                                        placeholder={{
                                            number: '4242 4242 4242 4242',
                                        }}
                                        cardStyle={{
                                            backgroundColor: '#FFFFFF',
                                            textColor: '#000000',
                                        }}
                                        style={{
                                            width: '100%',
                                            height: 50,
                                            marginVertical: 30,
                                        }}
                                        onCardChange={(cardDetails) => {
                                            console.log('cardDetails', cardDetails);
                                        }}
                                        onFocus={(focusedField) => {
                                            console.log('focusField', focusedField);
                                        }}
                                    />
                                <TouchableOpacity
                                    onPress={() => setPaymentModalVisible(!paymentModalVisible)}
                                    style={styles.modalButtonContainer}>
                                    <Text style={styles.modalButtonText}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={buyModalVisible}
                    onRequestClose={() => {
                        setByModalVisible(!buyModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.insidemodalView}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.modaltitleText}>{itemTitle}</Text>
                                    <Text style={{ ...styles.congratsText, color: Colors.accentColor, }}>Rs. {itemQuantity * itemPrice}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: hp("2%"), width: wp("40%"), alignItems: 'center', justifyContent: 'space-between' }}>
                                        <TouchableOpacity
                                            disabled={bDisable}
                                            onPress={() => {
                                                if (itemQuantity <= 0) {
                                                    setBDisable(true)
                                                }
                                                else {
                                                    setBDisable(false)
                                                    setItemQuantity(parseInt(itemQuantity) - 1)
                                                    setInput({ ...input, qty: parseInt(itemQuantity) - 1 })
                                                }
                                            }
                                            }
                                            style={styles.decrementButtonContainer}>
                                            <Ionicons name="remove-outline" size={hp("2%")} color="#000" />
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={{
                                                ...styles.textStyle,
                                                textAlign: 'center',
                                                fontSize: RFValue(20)
                                            }}>
                                                {itemQuantity}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setBDisable(false)
                                                setItemQuantity(parseInt(itemQuantity) + 1)
                                                setInput({ ...input, qty: parseInt(itemQuantity) + 1 })
                                            }
                                            }
                                            style={styles.incrementButtonContainer}>
                                            <Ionicons name="add-outline" size={hp("2%")} color="#000" />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => proceedBtn()}
                                    style={styles.modalButtonContainer}>
                                    <Text style={styles.modalButtonText}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.insidemodalView}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ ...styles.congratsText, color: Colors.primaryColor, }}>Congratulation!!!</Text>
                                    <Text style={styles.belowcongratsText}>Your Order is posted Successfully</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Feather
                                        name='check-circle'
                                        size={hp("6%")}
                                        color={Colors.primaryColor} />
                                </View>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    style={styles.modalButtonContainer}>
                                    <Text style={styles.modalButtonText}>Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </ScrollView>
    )
}

export default MyCartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    cartItemContainer: {
        margin: wp("2%"),
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: '#5f85db',
        justifyContent: 'center',
        height: hp("13%"),
        // height: Dimensions.get('window').height < 600 ? 40 : 60,
        borderRadius: hp("1%"),
        marginBottom: 10
    },
    itemImageContainer: {
        height: hp("10%"),
        width: wp("20%"),
        borderRadius: hp("1%"),
        overflow: "hidden"
    },
    cartTitle: {
        color: Colors.primaryColor,
        fontSize: RFValue(20),
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    cartItemRs: {
        color: Colors.accentColor,
        fontSize: RFValue(16),
        fontWeight: 'bold'
    },
    titleAndRsContainer: {
        margin: wp("3%"), justifyContent: 'space-between',
        height: hp("10%"), flex: 1
    },
    incrementButtonContainer: {
        alignItems: 'center', justifyContent: 'center',
        height: hp("5%"),
        width: hp("5%"), borderRadius: hp("0.5%"),
        borderWidth: 1
    },
    decrementButtonContainer: {
        alignItems: 'center', justifyContent: 'center',
        height: hp("5%"),
        width: hp("5%"), borderRadius: hp("0.5%"),
        borderWidth: 1
    },
    subTotalContainer: {
        margin: wp("2%"),
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: '#5f85db',
        justifyContent: 'center',
        borderRadius: hp("1%"),
    },
    appButtonText: {
        fontSize: RFValue(20),
        color: "#051035",
        fontWeight: 'bold',
        alignSelf: "center",
        // textTransform: "uppercase"
    },
    appButtonContainer: {
        // elevation: 8,
        width: '100%',
        height: hp("5%"),
        backgroundColor: '#ffb400',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: hp("28%"),
        width: hp("35%"),
        backgroundColor: "white",
        borderRadius: hp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    insidemodalView: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        margin: wp("3.5%"),
        flex: 1
    },
    modalButtonContainer: {
        // elevation: 8,
        height: hp("4%"),
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center'
    },
    modalButtonText: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: Colors.accentColor,
        alignSelf: "center",
    },
    congratsText: {
        fontSize: RFValue(16),

        fontWeight: 'bold',
    },
    belowcongratsText: {
        fontSize: RFValue(12),
        color: Colors.primaryColor,
        fontWeight: 'bold',
    },
    modaltitleText: {
        fontSize: RFValue(24),
        textTransform: 'capitalize',
        color: Colors.primaryColor,
        fontWeight: 'bold',
    },
    editButtonText: {
        fontSize: RFValue(14),
        color: Colors.accentColor,
        alignSelf: "center",
    },
    editButtonContainer: {
        width: wp("18%"),
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center'
    },
    paymentmodalcenteredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: "center",
        alignItems: "center",
    },
    paymentmodalmodalView: {
        height: hp("28%"),
        width: hp("49%"),
        backgroundColor: "white",
        borderRadius: hp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    paymentmodalinsidemodalView: {
        // alignItems: 'center',
        justifyContent: 'space-between',
        margin: wp("3.5%"),
        flex: 1
    },
})
