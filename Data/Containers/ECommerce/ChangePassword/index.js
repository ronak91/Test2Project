
import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, ImageBackground, BackHandler, ScrollView,AsyncStorage, I18nManager} from 'react-native';
import { Content,Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title, Segment,Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import {  Fonts,Metrics, Colors } from '../../../Themes/';
import Globals from '../Globals';
import FloatingLabelInput from '../FloatingLabelInput';

export default class ChangePassword extends Component {

	constructor(props) {
 		super(props);
 		this.state = {
			old_pwd: '',
			new_pwd: '',
			confirm_pwd: '',
			login_Id: ''
		};
 	}

	componentWillMount() {

		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMyInformation');
			return true;
		});

		AsyncStorage.multiGet(['user_id']).then((data) => {
      this.setState({
        login_Id: data[0][1],
        // oldPassword: data[1][1],
      });
    });
  }

  render(){
		StatusBar.setBarStyle('light-content', true);

		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor("#0e1130",true);
		 StatusBar.setTranslucent(true);
		}

    return(
			<Container style={styles.container}>
				<Header
					androidStatusBarColor={"#0e1130"}
					style={styles.header}>
					<Left style={styles.left}>
						<TouchableOpacity style={styles.backArrow} onPress={()=> this.props.navigation.navigate('ECommerceMyInformation')}>
							<FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={Fonts.moderateScale(30)} color="white" style={{paddingRight: 20}}/>
						</TouchableOpacity>
					</Left>
					<Body style={styles.body}>
						<Text style={styles.textTitle}>Change Password</Text>
					</Body>
					<Right style={styles.right}>
					</Right>
				</Header>

					<View style={styles.content}>

					<KeyboardAwareScrollView>

						<View style={styles.floatingView}>

							<FloatingLabelInput
								label="Old Password"
								value={this.state.old_pwd}
								keyboardType='default'
								secureTextEntry={true}
								returnKeyType='done'
								maxLength={40}
								selectionColor={'#959595'}
								autoCapitalize='none'
								onChangeText={(old_pwd) => this.setState({old_pwd})}/>

								<View style={{height:10}}/>

								<FloatingLabelInput
									label="New Password"
									value={this.state.new_pwd}
									keyboardType='default'
									secureTextEntry={true}
									returnKeyType='done'
									maxLength={40}
									selectionColor={'#959595'}
									autoCapitalize='none'
									onChangeText={(new_pwd) => this.setState({new_pwd})}/>

									<View style={{height:10}}/>

									<FloatingLabelInput
										label="Confirm New Password"
										value={this.state.confirm_pwd}
										keyboardType='default'
										secureTextEntry={true}
										returnKeyType='done'
										maxLength={40}
										selectionColor={'#959595'}
										autoCapitalize='none'
										onChangeText={(confirm_pwd) => this.setState({confirm_pwd})}/>

							</View>

						</KeyboardAwareScrollView>

					</View>

				<View style={styles.divider}></View>

				<View style={styles.bottomView}>
 				 <TouchableOpacity style={styles.changeBtnBG} onPress={() => alert('Change Password')}>
 					 <Text style={styles.changeBtnTxt}>Change</Text>
 				 </TouchableOpacity>
				</View>
			</Container>
    );
  }
}
