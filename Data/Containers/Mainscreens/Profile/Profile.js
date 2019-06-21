import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform, I18nManager} from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends React.Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('FirstScreen')
      return true;
    });
  }
  render() {
    var that=this
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }
    return (
      <Container>
      <Header style={styles.header}>
          <Left style={styles.left}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Icon name='ios-menu' />
          </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Title>Antiqueruby Profile</Title>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FirstScreen')} style={styles.backArrow}>
            {
              (I18nManager.isRTL)
              ?
                <Ionicons name="ios-arrow-round-forward-outline" size={30} color="#000000"/>
              :
                <Ionicons name="ios-arrow-round-back-outline" size={30} color="#000000"/>
            }
            </TouchableOpacity>
          </Right>
        </Header>

          <Content>
            <View style={styles.container}>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_01')}>
                  <Text style={styles.buttonText}>Profile News Feed</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_02')}>
                  <Text style={styles.buttonText}>Profile Interior</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_03')}>
                  <Text style={styles.buttonText}>Profile Music</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_04')}>
                  <Text style={styles.buttonText}>Profile Payment</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_05')}>
                  <Text style={styles.buttonText}>Profile Realtor</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_06')}>
                  <Text style={styles.buttonText}>Profile Social</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_07')}>
                  <Text style={styles.buttonText}>Profile Discovery</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_08')}>
                  <Text style={styles.buttonText}>Profile Blog</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_09')}>
                  <Text style={styles.buttonText}>Profile Blog Two</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_10')}>
                  <Text style={styles.buttonText}>Profile Account Info</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_11')}>
                  <Text style={styles.buttonText}>Profile Social Two</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_12')}>
                  <Text style={styles.buttonText}>Profile Social Three</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_13')}>
                  <Text style={styles.buttonText}>Profile Realtor Two</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_14')}>
                  <Text style={styles.buttonText}>Profile News Feed Two</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_15')}>
                  <Text style={styles.buttonText}>Profile Portfolio</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_16')}>
                  <Text style={styles.buttonText}>Profile My Blog</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_17')}>
                  <Text style={styles.buttonText}>Profile Social Collapse</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_18')}>
                  <Text style={styles.buttonText}>Profile News Feed Three</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_19')}>
                  <Text style={styles.buttonText}>Profile Scroll Over</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_20')}>
                  <Text style={styles.buttonText}>Profile Overlay</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_21')}>
                  <Text style={styles.buttonText}>Profile About</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_22')}>
                  <Text style={styles.buttonText}>Profile Chat</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_23')}>
                  <Text style={styles.buttonText}>Profile Collapse</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_24')}>
                  <Text style={styles.buttonText}>Profile Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_25')}>
                  <Text style={styles.buttonText}>Profile Gallery</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_26')}>
                  <Text style={styles.buttonText}>Profile Slide Up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_27')}>
                  <Text style={styles.buttonText}>Profile Discovery Two</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_28')}>
                  <Text style={styles.buttonText}>Profile Fitness</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Profile_29')}>
                  <Text style={styles.buttonText}>Profile Friends</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyles} onPress={()=>that.props.navigation.navigate('Profile_30')}>
                  <Text style={styles.buttonText}>Profile Hotel</Text>
                </TouchableOpacity>
              </View>

            </View>
          </Content>

      </Container>
    );
  }
}

export default ProfileScreen
