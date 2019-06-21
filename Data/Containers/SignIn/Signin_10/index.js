import React, { Component } from 'react';
import { Platform, StatusBar, Dimensions, View, Image, ImageBackground, Alert, TouchableOpacity, BackHandler,I18nManager } from 'react-native';
import { Container, Content, Form,Label, Item,Text, Input,  Button, Icon,Header, Left, Right, Body, Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class App extends Component<{}> {

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Home')
	   	return true;
	  });
	}

  facebook = () =>{alert('facebook');}
  twitter = () =>{alert('twitter');}

  render() {
    // Set image
    let pic = {
     uri: 'https://antiqueruby.aliansoftware.net//Images/signin/image_bg_signin_ten.jpg'
    };
    let ic_logo={
      uri: 'https://antiqueruby.aliansoftware.net//Images/signin/ic_logo_mountify_signin_ten.png'
    };
    StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
   }
    return (
      <Container>
        <ImageBackground source={pic} style={styles.backgroundImage}>
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

          <View style={ styles.view01 }>
            <Image source={ic_logo} style={ styles.logo10 }/>
          </View>

          <View style={ styles.view02 }>
            <Text style={styles.headertext}>
              Connect and discovery our awesome UI Kit
            </Text>
          </View>

          <View style={ styles.view03 }>
            <TouchableOpacity style={styles.fbButton} onPress = {() => this.facebook()}>
              <View iconRight  style={styles.fbview}>
                <FontAwesome name="facebook-f" size={23} color="white"/>
                <Text style={styles.fbButtonText}>Connect with facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.twButton} onPress = {() => this.twitter()}>
              <View iconRight style={styles.twview}>
              <FontAwesome name="twitter" size={23} color="white"/>
                <Text style={styles.twButtonText}>Connect with twitter</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Container>

    );
  }
}
