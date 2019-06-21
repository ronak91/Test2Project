import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Images, Fonts, Metrics, Colors } from '../../../Themes/';
import FloatingLabelInput from '../FloatingLabelInput';

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("ECommerceLogin");
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
              <TouchableOpacity style={styles.backArrow} onPress={()=> this.props.navigation.navigate('ECommerceLogin')}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Forgot Password</Text>
            </Body>
            <Right style={styles.right}>

            </Right>
        </Header>

        <Content>
          <View>

            <Text style={styles.noticeText}>Enter your email address to reset your password.</Text>

          </View>

          <View style={[styles.divider,{marginTop: Metrics.HEIGHT * 0.001}]}></View>

          <View style={styles.floatingView}>

						<FloatingLabelInput
							label="Email"
							value={this.state.email}
							keyboardType='email-address'
							returnKeyType='done'
							maxLength={40}
							selectionColor={'#959595'}
							autoCapitalize='none'
							onChangeText={(email) => this.setState({email})}/>

							<View style={{height:10}}/>

						</View>
        </Content>

        <View style={styles.divider}></View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.sendBtnBg} onPress={() => this.props.navigation.navigate('ECommerceResetPassword')}>
            <Text style={styles.sendTxt}>Send</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
