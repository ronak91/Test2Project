import React, { Component } from 'react';
import { Platform, StatusBar, Dimensions, View, Image, ImageBackground, TextInputAlert, Alert, TouchableOpacity, BackHandler,I18nManager } from 'react-native';
import { Container, Content, Form,Label, Text, Button,Header, Left, Right, Body, Title } from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class App extends Component {

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Home')
	   	return true;
	  });
	}

  _handleFb = () => {
		alert("FaceBook");
  }

  render() {

    // Set image
    let pic = {
     uri: 'https://antiqueruby.aliansoftware.net//Images/signin/image_bg_signin_eleven.jpg'
    };
    let ic_logo={
      uri: 'https://antiqueruby.aliansoftware.net//Images/signin/ic_logo_mountify_signin_eleven.png'
    };

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }

    return (
      <ImageBackground source={pic} style={styles.backgroundImage}>
        <Container>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Home')}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}></Text>
            </Body>
            <Right style={styles.right}/>
          </Header>

          <Image source={ic_logo} style={ styles.logo10 }/>

            <Text style={styles.headertext}>
              Connect and discovery our awesome UI Kit
            </Text>

            <Button iconRight style={styles.gsButton}  onPress={()=>alert('GET STARTED')}>
              <Text style={styles.gsButtonText}>GET STARTED</Text>
            </Button>
        </Container>
      </ImageBackground>
    );
  }
}
