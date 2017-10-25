import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Tile } from 'react-native-elements';

export default class ImageFull extends React.Component {
  render() {
    const { image_url } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Tile imageSrc={{ uri: image_url }} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});