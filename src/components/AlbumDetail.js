import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  //Destructuring props object
  const { title, artist, thumbnail_image, image, url } = album;
  //Destructuring stylex object
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
            Buy Now
          </Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }

};

export default AlbumDetail;
