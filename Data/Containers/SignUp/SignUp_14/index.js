
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableHighlight, BackHandler,TouchableOpacity,I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Signup_14 extends Component {
  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('SignUp')
      return true;
    });
  }
  facebook = () =>
  {
      alert('Facebook');
  }

  signup = () =>
  {
      alert('Sign Up');
  }

  login = () =>
  {
      alert('Login');
  }

  render(){

		StatusBar.setBarStyle('light-content', true);

		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

		let BG_Image = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/signup/ic_background_s14.png'
		};
    let BG_logo = {
      uri : 'https://antiqueruby.aliansoftware.net//Images/signup/ic_logo_s14.png'
    };
    let Profile_Image = {
      uri : "https://antiqueruby.aliansoftware.net/Images/signup/profile_pic_suthirteen.png"
    };

    return(
      <ImageBackground source={BG_Image} style={styles.mainbg}>
        <Container>
          <View style={styles.logosec}>
          <TouchableOpacity style={styles.backarrow} onPress={()=>this.props.navigation.navigate('SignUp')}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
          </TouchableOpacity>
             <Image source={BG_logo} style={ styles.logo14 }/>
          </View>

          <View style={styles.slidemain}>
            <View style={styles.slidersec}>

            <Swiper showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2.5}
                    activeDot={<View style={styles.activeDot} />}
                    dot={<View style={styles.dot} />}>
                  <View style={styles.slide1}>
                    <Text style={styles.headertext}>
                    Connect and discovery our Awesome UI Kit
                    </Text>
                    <Text style={styles.desctext}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    </Text>
                  </View>
                  <View style={styles.slide2}>
                      <Text style={styles.headertext}>
                      Connect and discovery our Awesome UI Kit
                      </Text>
                      <Text style={styles.desctext}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      </Text>
                  </View>
                  <View style={styles.slide3}>
                      <Text style={styles.headertext}>
                      Connect and discovery our Awesome UI Kit
                      </Text>
                      <Text style={styles.desctext}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      </Text>
                  </View>
            </Swiper>

            </View>
          </View>

          <View style={styles.btnsec}>
            <TouchableHighlight  info style={styles.buttonlogin} onPress = {() => this.facebook()}>
              <Text autoCapitalize="words" style={styles.loginbutton}>Connect with Facebook</Text>
            </TouchableHighlight>

            <View style={styles.bottomsec}>
              <TouchableHighlight  info style={styles.buttonsignup01} onPress = {() => this.signup()}>
                <Text autoCapitalize="words"  style={styles.signupbutton}>Sign Up</Text>
              </TouchableHighlight>
              <TouchableHighlight  info style={styles.buttonsignup01} onPress = {() => this.login()}>
                <Text autoCapitalize="words"  style={styles.signupbutton}>Login</Text>
              </TouchableHighlight>
          </View>

        </View>
      </Container>
    </ImageBackground>

    );
  }
}
