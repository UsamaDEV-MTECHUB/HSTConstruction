import React, { useState, useEffect } from 'react'
import { ImageBackground } from 'react-native'
import {
    StyleSheet, Text, View,
    Image, TouchableOpacity, FlatList, Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import * as lib from "../contants/ApiRoutes"
const YouBagListScreen = () => {
    const [data, setData] = useState();
    useEffect(async()=>{
        fetch(`${lib.url}/getProduct`, {
            "method": "GET",
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })

    },[])
    const list = [
        { id: 'c1', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c2', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c3', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c4', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c5', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c6', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c7', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c8', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c9', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c10', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c11', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c12', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
        { id: 'c13', cost: '$299.00', text: 'Lorem Ipsum is simply dummy text ', image: require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg') },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
            <FlatList
                data={list}
                keyExtractor={(data, index) => data.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={{justifyContent: 'space-between', flex: 1,
                         marginTop:hp("3%"),}}>
                            <View>
                                <ImageBackground style={{
                                    width: Dimensions.get('window').width * 0.45,
                                    height: Dimensions.get('window').width * 0.6,
                                    borderRadius: 30,
                                    overflow: 'hidden'
                                }}
                                    source={item.image}>
                                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1 }}>

                                        </View>
                                        <View style={{ right: 10 }}>
                                            <Icon size={28} name="ellipsis-horizontal"
                                                color="#000" />
                                        </View>
                                    </View>
                                </ImageBackground>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ width: 180 }}>{item.text}</Text>
                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.cost}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
                }
            />
            </View>
        </View>
    )
}

export default YouBagListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainContainer: {
        marginTop: 20,
        margin: wp("4%"),
        marginBottom: 0,
        flex: 1
    },
})
