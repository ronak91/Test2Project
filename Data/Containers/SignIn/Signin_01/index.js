
import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, ImageBackground, BackHandler,I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';
// import { Images } from '../../../Themes/';

export default class Signin_01 extends Component {

	componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Home')
	   	return true;
	  });
	}

  render(){
		let BG_Image = { uri : 'https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png'};
		StatusBar.setBarStyle('dark-content', true);

		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor('transparent',true);
		 StatusBar.setTranslucent(true);
		}
		var that = this;

    return(
			<Container>
				<ImageBackground style={styles.backgroundImage} source={BG_Image}>
					<Header style={styles.header}>
							<Left style={styles.left}>
								<TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Home')}>
							 		<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#6f6f6f"/>
								</TouchableOpacity>
							</Left>
							<Body style={styles.body}>
								<Text style={styles.textTitle}>Sign In</Text>
							</Body>
							<Right style={styles.right}/>
					</Header>
					<View style={styles.containMainBg}>
						<View style={styles.containFbBg}>
							<Button iconRight style={styles.fbButton} onPress={() => alert("FaceBook")}>
								<FontAwesome name="facebook" size={28} color="#ffffff" />
								<Text style={styles.fbButtonText}>Sign in with facebook</Text>
							</Button>
						</View>
						<View style={styles.containEmail}>
							<Input
			            ref='email'
			            style={styles.inputEmail}
			            editable={true}
			            keyboardType='email-address'
			            returnKeyType='next'
			            autoCapitalize='none'
			            autoCorrect={false}
			            underlineColorAndroid='transparent'
			            placeholder='Email'
									textAlign={I18nManager.isRTL ? 'right' : 'left'}
			            placeholderTextColor="rgba(0,0,0,0.20)" />
						</View>
						<View style={styles.containPassword}>
						  <Input
					        ref='password'
					        style={styles.inputEmail}
					        editable={true}
					        keyboardType='default'
					        returnKeyType='next'
					        autoCapitalize='none'
					        autoCorrect={false}
					        underlineColorAndroid='transparent'
					        placeholder='Password'
  								textAlign={I18nManager.isRTL ? 'right' : 'left'}
					        placeholderTextColor="rgba(0,0,0,0.20)"
									secureTextEntry={true}/>
						</View>
						<Button style={styles.signInBtn} onPress={() => alert("SignIn")}>
								<Text style={styles.signInBtnText}>Sign In</Text>
						</Button>
						<Text style={styles.forgotPassword} onPress={() => alert("Forgot Password")}>Forgot your password?</Text>
					</View>
			</ImageBackground>
		</Container>
    );
  }
}
