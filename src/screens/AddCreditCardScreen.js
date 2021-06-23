import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-elements'
import { Input } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import Colors from '../contants/Colors'

const AddCreditCardScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: wp("2%") }}>
                <View style={styles.containerTwo}>
                    <View style={{ flexDirection: 'row', height: hp("5%"), alignItems: 'center', }}>
                        <TouchableOpacity>
                            <Icon name="chevron-back-outline" size={hp("3%")} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: RFValue(20),
                            fontWeight: "bold", color: '#051035',
                        }}>Add Credit Card</Text>
                    </View>
                    <View>
                    </View>
                </View>
                <View style={{ width: wp("90%"), backgroundColor: 'pink', height: hp('25%'), borderWidth: 1 }}>
                    <View style={{
                        backgroundColor: Colors.primaryColor, marginTop: hp("3%"), height: hp("5%"), alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: RFValue(20), fontWeight: 'bold', color: Colors.accentColor }}>CARD NUMBER</Text>
                    </View>
                    <View style={{ margin: wp("3%"), justifyContent: 'flex-end', flex: 1 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={{ fontSize: RFValue(14), color: '#fff' }}>Expires Date</Text>
                                <Text style={{ fontSize: RFValue(14), color: '#fff' }}>**/**</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: RFValue(14), color: '#fff' }}>CVV</Text>
                                <Text style={{ fontSize: RFValue(14), color: '#fff' }}>***</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20, }}>
                    <View>
                        <Input
                            keyboardType="decimal-pad"
                            label="Card Number"
                            labelStyle={{ fontWeight: 'normal', color: '#ccc' }}
                        />
                        <Input
                            label="Card Holder"
                            labelStyle={{ fontWeight: 'normal', color: '#ccc' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Input
                                label="Expires Date"
                                labelStyle={{ fontWeight: 'normal', color: '#ccc' }}
                            />
                        </View>
                        <View style={{ width: wp("30%") }}>
                            <Input
                                label="CVV"
                                labelStyle={{ fontWeight: 'normal', color: '#ccc' }}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: hp("2%") }}>
                        <TouchableOpacity style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AddCreditCardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    containerTwo: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp("2%")
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
})
