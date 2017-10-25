import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';

export default class List extends React.Component {

  navigateToImage = () => {
    this.props.navigation.navigate('Image');
  }

  render() {
    return (
      <ScrollView>
        <Text style={{ color: 'blue' }}> asdas Lsit </Text>
        <Button onPress={this.navigateToImage} title="Click here"/>
      </ScrollView>
    );
  }
}
