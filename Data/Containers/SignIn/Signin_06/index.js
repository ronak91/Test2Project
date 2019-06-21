import React, { PropTypes, Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Platform ,StatusBar, BackHandler,I18nManager } from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';

// Screen Styles
import styles from './styles';
import { Images } from '../../../Themes/';

export default class SignIn_06 extends Component {

	componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Home')
	   	return true;
	  });
	}

	onClick(data) {
     data.checked = !data.checked;
     let msg=data.checked? 'you checked ':'you unchecked '
	 }

	render() {
		StatusBar.setBarStyle('light-content', true);
    if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
   	}
		var temp = [
        {
        "path": "Android",
        "name": "Android",
        "checked": true
      },
    ]
    var leftText = temp.name;

    const imageUri = "https://antiqueruby.aliansoftware.net/Images/signin/homescreenssix.png";
		return (
			<Container>
				<ImageBackground style={styles.imgContainer} source={{uri:imageUri}}>
					<Header style={styles.header}>
						<Left style={styles.left}>
							<TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Home')}>
								<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#fff"/>
							</TouchableOpacity>
						</Left>
						<Body style={styles.body}>
							<Text style={styles.textTitle}>Sign In</Text>
						</Body>
						<Right style={styles.right}/>
					</Header>
					<View>
						<View style={styles.inputFieldSec}>
							<TextInput
								style={styles.textInput}
								placeholder = "Email"
								placeholderTextColor = "#b7b7b7"
								underlineColorAndroid = "transparent"
								autoCapitalize = "none"
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								keyboardType = "email-address"/>

							<TextInput
								style={styles.textInput}
								secureTextEntry = {true}
								placeholder = "Password"
								placeholderTextColor = "#b7b7b7"
								underlineColorAndroid = "transparent"
								autoCapitalize = "none"
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								keyboardType = "default"/>
						</View>
						<View style={styles.chboxConatiner}>
							<CheckBox
								style={styles.chboxRemember}
								onClick={()=>this.onClick(temp)}
								isChecked={true}
								checkBoxColor={'#fff'}
								checkedImage={<Image source={Images.chbox_selected} style={{height:22,width:22}}/>}
							/>
							<Text style={styles.textRememberMe}>Remember me</Text>
							<Right>
								<TouchableOpacity onPress={()=>alert("Forgot password")}>
									<Text style={styles.textForgotPwd}>Forgot password?</Text>
								</TouchableOpacity>
							</Right>
						</View>
						<View style={styles.signInSec}>
							<TouchableOpacity style={styles.buttonSignIn} onPress = {() => alert('Sign In')}>
								<Text style={styles.textWhite}>Sign In</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.createAccount}>
							<Text style={styles.textWhite}>Don&apos;t have an account? </Text>
							<TouchableOpacity onPress={()=>alert("Sign up")}>
								<Text style={styles.textSignUp}>Sign up</Text>
							</TouchableOpacity>
						</View>

					</View>
				</ImageBackground>
			</Container>
		);
	}
}
