import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-elements'

const PaymentOptionsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 15 }}>

                <View style={styles.containerTwo}>
                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', }}>
                        <TouchableOpacity>
                            <Icon name="chevron-back-outline" size={Dimensions.get('window').height < 500 ? 14 : 24} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: Dimensions.get('window').width < 400 ? 20 : 25,
                            fontWeight: "bold", color: '#051035',
                        }}>Payment Options</Text>
                    </View>
                    <View>
                    </View>
                </View>
                        <View style={{width: '90%',backgroundColor: 'pink', height: '30%', borderWidth: 1, borderRadius: 20}}>
                        <View style={{margin: 20, justifyContent: 'space-between', flex: 1}}>

                             <View>
                            <Text  style={{color: '#fff'}}>Holder Name</Text>
                            <Text  style={{color: '#fff'}}>YOUR NAME HERE</Text>
                             </View>
                            
                             <View>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>CARD NUMBER</Text>
                             </View>
                             <View style={{flexDirection: 'row',
                             justifyContent: 'space-between'}}>
                                 <View>
                                 <Text style={{color: '#fff'}}>Expires Date</Text>
                             <Text style={{color: '#fff'}}>**/**</Text>
                                 </View>
                                 <View>
                                 <Text style={{color: '#fff'}}>Expires Date</Text>
                             <Text style={{color: '#fff'}}>***</Text>
                                 </View>
                             
                             </View>
                        </View>
                        </View>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <Text>Add new payment method</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', height: 50, 
                    borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{height: 30, width: 50,}}>
                               <Image style={{width: '100%', height: '100%'}} source={require('../images/applePay.png')} />
                            </View>
                            <View style={{marginLeft: 30}}>
                                <Text>Apple Pay</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center', justifyContent: 'center',
                                height: Dimensions.get('window').height * 0.03,
                                width: Dimensions.get('window').height * 0.03, 
                                borderRadius: 5,
                                borderWidth: 1
                            }}>
                            <Icon name="add-outline" size={25} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', height: 50, 
                    borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{height: 30, width: 50,}}>
                            <Image style={{width: '100%', height: '100%'}} source={require('../images/Visa.png')} />
                            </View>
                            <View style={{marginLeft: 30}}>
                                <Text>VISA</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center', justifyContent: 'center',
                                height: Dimensions.get('window').height * 0.03,
                                width: Dimensions.get('window').height * 0.03, 
                                borderRadius: 5,
                                borderWidth: 1
                            }}>
                            <Icon name="add-outline" size={25} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', height: 50, 
                    borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{height: 30, width: 50,}}>
                            <Image style={{width: '100%', height: '100%'}} source={require('../images/MasterCard.png')} />
                            </View>
                            <View style={{marginLeft: 30}}>
                                <Text>Master Card</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center', justifyContent: 'center',
                                height: Dimensions.get('window').height * 0.03,
                                width: Dimensions.get('window').height * 0.03, 
                                borderRadius: 5,
                                borderWidth: 1
                            }}>
                            <Icon name="add-outline" size={25} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', height: 50, 
                    borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{height: 30, width: 50 , }}>
                               <Icon name="card-outline" size={30}/>
                            </View>
                            <View style={{marginLeft: 30}}>
                                <Text>Local Debit</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center', justifyContent: 'center',
                                height: Dimensions.get('window').height * 0.03,
                                width: Dimensions.get('window').height * 0.03, 
                                borderRadius: 5,
                                borderWidth: 1
                            }}>
                            <Icon name="add-outline" size={25} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 10}}>

                    <TouchableOpacity style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Complate</Text>
                </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PaymentOptionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    containerTwo: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('window').height < 600 ? 15 : 20,
    },
    appButtonText: {
        fontSize: Dimensions.get('window').width > 600 ? 15 : 20,
        color: "#051035",
        fontWeight: 'bold',
        alignSelf: "center",
        // textTransform: "uppercase"
    },
    appButtonContainer: {
        // elevation: 8,
        width: '100%',
        height: Dimensions.get('window').height < 600 ? 35 : 40,
        backgroundColor: '#ffb400',
        justifyContent: 'center'
    },
})
