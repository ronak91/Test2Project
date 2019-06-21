import React, { PropTypes, Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Platform ,StatusBar, BackHandler,I18nManager } from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';

// Screen Styles
import styles from './styles';
import { Images } from '../../../Themes/';

export default class SignIn_08 extends Component {

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

    const imageUri = "https://antiqueruby.aliansoftware.net/Images/signin/image_bg_signin_eight.jpg";
    let logo13 = { uri: 'https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountifysthirteen.png' };
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
							<Text style={styles.textTitle}></Text>
						</Body>
						<Right style={styles.right}/>
					</Header>
					<View>
            <Image source={logo13} style={styles.logostyle}/>
						<View style={styles.inputFieldSec}>
              <Item underline style={styles.itememail}>
                <Input placeholderTextColor='#929597' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Email' keyboardType="email-address" style={styles.inputemail} />
              </Item>
              <Item underline style={styles.itempassword}>
                <Input placeholderTextColor='#929597' textAlign={I18nManager.isRTL ? 'right' : 'left'} placeholder='Password' secureTextEntry={true} style={styles.inputpassword} />
              </Item>
						</View>

						<View style={styles.signInSec}>
              <TouchableOpacity info style={styles.buttondialogsignup} onPress={() => alert("Sign In")}>
                <Text autoCapitalize="words" style={styles.buttonsignin}>Sign In</Text>
              </TouchableOpacity>
						</View>
						<View>
							<TouchableOpacity onPress={()=>alert("Forgot password")}>
								<Text style={styles.forgotpass}>Forgot password?</Text>
							</TouchableOpacity>
						</View>

					</View>
				</ImageBackground>
			</Container>
		);
	}
}
