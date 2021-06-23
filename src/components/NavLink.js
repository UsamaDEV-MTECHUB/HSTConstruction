import React from 'react';
import { Text, StyleSheet, View,Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../contants/Colors';
const NavLink = ({ text, linkButtonTrext, onSubmit }) => {
  return (
    <View style={{
      flexDirection: 'row', justifyContent: 'center',
    }}>
      <Text style={styles.dontHaveButton}>{text}</Text>
      <Pressable onPress={onSubmit}>
        <Text style={styles.signUpButton}>{linkButtonTrext}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  signUpButton: {
    fontSize: RFValue(17),
    color: Colors.primaryColor,
    fontWeight: "bold",
    alignSelf: "center",
  },
  dontHaveButton: {
    fontStyle: 'normal',
    fontSize: RFValue(17),
    color: "#cccccc",
    fontWeight: "bold",
    alignSelf: "center",
  },
})
export default NavLink;