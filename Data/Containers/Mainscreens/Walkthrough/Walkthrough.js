import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform, I18nManager} from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {

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
            <Title>Antiqueruby Walkthrough</Title>
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
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_01')}>
                <Text style={styles.buttonText}>Walkthrough Investment</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_02')}>
                <Text style={styles.buttonText}>Walkthrough Shopping</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_03')}>
                <Text style={styles.buttonText}>Walkthrough Travel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_04')}>
                <Text style={styles.buttonText}>Walkthrough Discover Place</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_05')}>
                <Text style={styles.buttonText}>Walkthrough Journey</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_06')}>
                <Text style={styles.buttonText}>Walkthrough Get Ride</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_07')}>
                <Text style={styles.buttonText}>Walkthrough App Usage Hints</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_08')}>
                <Text style={styles.buttonText}>Walkthrough TrackRide</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_09')}>
                <Text style={styles.buttonText}>Walkthrough Recipe</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_10')}>
                <Text style={styles.buttonText}>Walkthrough Historical Place</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_11')}>
                <Text style={styles.buttonText}>Walkthrough Voice Control</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_12')}>
                <Text style={styles.buttonText}>Walkthrough Chat</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_13')}>
                <Text style={styles.buttonText}>Walkthrough Get Started</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_14')}>
                <Text style={styles.buttonText}>Walkthrough Creative Things</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_15')}>
                <Text style={styles.buttonText}>Walkthrough California Dream</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_16')}>
                <Text style={styles.buttonText}>Walkthrough News Feed</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_17')}>
                <Text style={styles.buttonText}>Walkthrough Fitness</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_18')}>
                <Text style={styles.buttonText}>Walkthrough Hotel Service</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_19')}>
                <Text style={styles.buttonText}>Walkthrough Travel Tour</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_20')}>
                <Text style={styles.buttonText}>Walkthrough Sea Food</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_21')}>
                <Text style={styles.buttonText}>Walkthrough Realtor</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_22')}>
                <Text style={styles.buttonText}>Walkthrough Coffee Shop</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_23')}>
                <Text style={styles.buttonText}>Walkthrough Restaurant</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_24')}>
                <Text style={styles.buttonText}>Walkthrough Residence</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_25')}>
                <Text style={styles.buttonText}>Walkthrough Events</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_26')}>
                <Text style={styles.buttonText}>Walkthrough Event Handler</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_27')}>
                <Text style={styles.buttonText}>Walkthrough Discovery</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_28')}>
                <Text style={styles.buttonText}>Walkthrough Trace Location</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Walkthrough_29')}>
                <Text style={styles.buttonText}>Walkthrough Ticket Booking</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyles} onPress={()=>that.props.navigation.navigate('Walkthrough_30')}>
                <Text style={styles.buttonText}>Walkthrough Chat App</Text>
              </TouchableOpacity>
            </View>
            </View>
          </Content>

      </Container>
    );
  }
}

export default HomeScreen
