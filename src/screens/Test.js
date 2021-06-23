import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';
const Test = () => {
    return (
        <WebView
            source={{
                html:
                    '<iframe width="100%" height="50%" src="https://momento360.com/#ud/dde67945aceb43c28ef6bfeac9752506" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
            }}
            style={{ marginTop: 20 }}
        />
    )
}

export default Test

const styles = StyleSheet.create({})
