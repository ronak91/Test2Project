
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableHighlight,TouchableOpacity, BackHandler,I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, Left, Body, Title, Content, Form, Label} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts, Metrics, Colors } from '../../../Themes/';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 *  Profile Screen
 */
export default class Signup_13 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('SignUp')
      return true;
    });
  }
  SignUp = () =>
  {
      alert('Create Account');
  }

  login = () =>
  {
      alert('I already have an account');
  }
  render(){

		StatusBar.setBarStyle('light-content', true);

		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

		let BG_Image = {
			uri : 'https://antiqueruby.aliansoftware.net/Images/signup/transparent_background_suthirteen.png'
		};
    let BG_Image2 = {
      uri : 'https://antiqueruby.aliansoftware.net/Images/signup/background_base_suthirteen.png'
    };
    let Profile_Image = {
      uri : "https://antiqueruby.aliansoftware.net/Images/signup/profile_pic_suthirteen.png"
    };
const profileImageUri = "https://antiqueruby.aliansoftware.net//Images/signup/profile_pic_suseven.png";
    return(
        <Container style={{}}>
        <LinearGradient colors={[ 'rgba(68,71,130,0.5)', 'rgba(80,68,148,0.75)', 'rgba(85,67,158,1.0)']} style={styles.ImageBackground} >
        <ImageBackground style={styles.ImageBackground} source={BG_Image} >
        <Header style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('SignUp')}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
          </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
        </Body>
        <Right style={styles.right}/>
      </Header>

        <Content style={styles.content} >
        <Image style={styles.profileImage} source={{uri:profileImageUri}}/>
        <Form style={styles.form}>
        <Item fixedLabel style={styles.itemstyle} last>
        <Input placeholder='Full Name' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholderTextColor='#b7b7b7' style={styles.input1}  />
        </Item>
        <Item fixedLabel style={styles.itemstyle} last>
        <Input placeholder='Email' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholderTextColor='#b7b7b7' style={styles.input1}  />
        </Item>
        <Item fixedLabel style={styles.itemstyle} last>
        <Input placeholder='Password' textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholderTextColor='#b7b7b7' style={styles.input1}  />
        </Item>
        <Item fixedLabel style={styles.itemstyle} last>
        <Input placeholder='Confirm password' textAlign={I18nManager.isRTL ? 'right' : 'left'} secureTextEntry={true} placeholderTextColor='#b7b7b7' style={styles.input1}  />
        </Item>
        </Form>
        <TouchableHighlight  info style={styles.buttonlogin} onPress={() => { this.SignUp() }}>
        <Text autoCapitalize="words" style={styles.loginbutton}>Create Account</Text>
        </TouchableHighlight>
        <TouchableHighlight  info style={styles.buttonsignup} onPress={() => {this.login()} }>
        <Text autoCapitalize="words"  style={styles.signupbutton}>I already have an account</Text>
        </TouchableHighlight>
        </Content>

        </ImageBackground>
</LinearGradient>
        </Container>
    );
  }
}
