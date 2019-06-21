import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {  Images,Fonts, Metrics, Colors } from '../../../Themes/';

export default class FAQGeneralEnquiries extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceFAQ');
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
              <TouchableOpacity style={styles.backArrow} onPress={()=> this.props.navigation.navigate('ECommerceFAQ')}>
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={35} color="white" style={{paddingRight: 20}}/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>General Enquiries</Text>
            </Body>
            <Right style={styles.right}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>alert('Search')}>
              <EvilIcons name="search" size={30} color="white"/>
            </TouchableOpacity>
            </Right>
        </Header>

        <Content>
          <View style={styles.mainView}>
            <Text style={styles.textRowQue}>
                      How do i place an order?
            </Text>
            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
              Orders are placed vai our website. Should you have an issue placing an order, you could also reach out to our friendly Customer Exprience team at
              <Text style={styles.textPhoneNo}> +1 1234 5678</Text>
              . We aould be most happy to assist by placing an order via phone for you.
            </Text>

            <Text style={[styles.textRowQue, {marginTop: Metrics.HEIGHT * 0.04}]}>
                      How do i create an account?
            </Text>
            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      Follow these 3 simple steps to create an account
            </Text>

            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.05}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={10} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Click on Login
                </Text>
            </View>
            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.020}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={10} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Select Register
                </Text>
            </View>
            <View style={[styles.stepView, {marginTop: Metrics.HEIGHT * 0.020}]}>
                <View style={styles.arrowView}>
                    <FontAwesome name="chevron-right" size={10} color="white"/>
                </View>
                <Text style={styles.textRowAns}>
                          Fill in particulars and click "Submit"
                </Text>
            </View>

            <Text style={[styles.textRowQue, {marginTop: Metrics.HEIGHT * 0.05}]}>
                      How can i be notified of the latest discounts and promotions?
            </Text>
            <Text style={[styles.textRowAns, {marginTop: Metrics.HEIGHT * 0.015}]}>
                      The best and fastest way to receive the latest updates from us is to subscribe to our newsletter! New to ZALORA? Get a $10* voucher for your ZALORA purchase when you sign up.
            </Text>


          </View>
        </Content>

      </Container>
    )
  }
}
