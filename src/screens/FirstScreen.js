import React from 'react'
import { StyleSheet, Text, View, Image, Pressable,TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Colors from "../contants/Colors"
const FirsrScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ alignItems: 'center', }}>
          <Text style={styles.welcomeText}>
            Welcome to
                </Text>
          <Text style={styles.otherText}>
            HST Engineering 
                </Text>
          <Text style={styles.otherText}>
            and Construction
                </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
          resizeMode="contain"
           style={styles.image} source={require('../images/logo.png')} />
        </View>
        <TouchableOpacity style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.appButtonText}>Start</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}
export default FirsrScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },

  mainContainer: {
    flex: 1,alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp("10%"),
    marginBottom: hp("4%"),
    margin: wp("4%"),
  },
  welcomeText: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: Colors.accentColor,
  },
  otherText: {
    fontSize: RFValue(30),
    fontWeight: "bold",
     color: Colors.accentColor,
  },
  logoContainer:{
    height: hp('40%'),
    width: wp('70%'),
  },
  image:{
    width: "100%",
    height: "100%",
  },
  appButtonContainer: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: hp("6%"),
  },
  appButtonText: {
    fontSize: RFValue(20),
        color: Colors.accentColor,
        fontWeight: 'bold',
        // alignSelf: "center",
  }
})
