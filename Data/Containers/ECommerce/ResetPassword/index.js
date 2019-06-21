import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Images, Fonts, Metrics, Colors } from '../../../Themes/';
import FloatingLabelInput from '../FloatingLabelInput';

export default class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: ''
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceForgotPassword");
      return true;
    });
  }

  render(){
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor('#0e1130',true);
		 StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={"#0e1130"}

          style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=> this.props.navigation.navigate('ECommerceForgotPassword')}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Reset Password</Text>
            </Body>
            <Right style={styles.right}>

            </Right>
        </Header>

        <Content>
          <View>

            <Text style={styles.noticeText}>You have requested to reset the password</Text>

          </View>

          <View style={[styles.divider,{marginTop: Metrics.HEIGHT * 0.001}]}></View>

          <View style={styles.floatingView}>

						<FloatingLabelInput
							label="New Password"
							value={this.state.newPassword}
							keyboardType='default'
              secureTextEntry={true}
							returnKeyType='done'
							maxLength={15}
							selectionColor={'#959595'}
							autoCapitalize='none'
							onChangeText={(newPassword) => this.setState({newPassword})}/>

							<View style={{height:10}}/>

              <FloatingLabelInput
  							label="Confirm New Password"
  							value={this.state.confirmPassword}
  							keyboardType='default'
                secureTextEntry={true}
  							returnKeyType='done'
  							maxLength={15}
  							selectionColor={'#959595'}
  							autoCapitalize='none'
  							onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>

						</View>
        </Content>

        <View style={styles.divider}></View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.resetBtnBg} onPress={() => this.props.navigation.navigate('ECommerceLogin')}>
            <Text style={styles.resetTxt}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
