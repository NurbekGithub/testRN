import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import  {List, ListItem } from 'react-native-elements';

export default class ImagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

  }

  componentDidMount() {
    return fetch("https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF")
      .then( res => res.json())
        .then( (data) => {
          this.setState({ 
            images: data.photos }) 
          }).catch( err => console.log("err", err));
  }

  navigateToImage = (image) => {
    console.log('click');
    this.props.navigation.navigate('ImageFull', {...image});
  }

  renderImage = (image) => {
    return (
      <ListItem 
        key={image.id}
        avatar={{ uri: image["image_url"] }}
        title={ image.name }
        subtitle={ image.user.firstname + ' ' + image.user.lastname }
        onPress={() => this.navigateToImage(image)}
      />
    )
  }

  render() {
    const { images } = this.state;

    return (
      <ScrollView>
        <List>
          {images.map(this.renderImage)}
        </List>
      </ScrollView>
    );
  }
}
