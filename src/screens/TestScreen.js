import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, Dimensions } from 'react-native';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

const spacing = 10;
const width = (Dimensions.get('window').width - 4 * 10) / 2;

const TestScreen =()=> {
const data= [
      {
        id: '1',
        text: 'lorem ipsum',
        height: 100,
      },
      {
        id: '2',
        text: 'lorem ipsum dorem lorem ipsum lorem ipsum',
        height: 200,
      },
      {
        id: '3',
        text: 'lorem ipsum lorem ipsum',
        height: 200,
      },
    ]  
  keyExtractor = (item) => item.id;
  
  renderItem = ({ item }) => (
    <Card
      image={require('../images/louisse-lemuel-enad-XR6o0Gb5kSU-unsplash.jpg')}
      imageStyle={{ height: 50 }}
      containerStyle={[styles.card, { height: item.height }]}
    >
      <Text style={{margin: 10}}>
        {item.text}
      </Text>
    </Card>
  );
  
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        style={styles.container}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />
    );
}
export default TestScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    justifyContent: 'space-around',
  },
  column: {
    flexShrink: 1,
  },
  card: {
    width: width,
    margin: spacing,
  },
});
