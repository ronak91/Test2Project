import React from 'react';
import Images from '../../../Themes/'

import {
  StyleSheet,
  Image
} from 'react-native';

export default class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={Images.sliderIcon}
        resizeMode='contain'
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});
