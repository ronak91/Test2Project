import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform, I18nManager} from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

class DrawerScreen extends React.Component {

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
            <Title>Antiqueruby Drawer</Title>
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
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_01')}>
                <Text style={styles.buttonText}>Drawer Social</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_02')}>
                <Text style={styles.buttonText}>Drawer Social 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_03')}>
                <Text style={styles.buttonText}>Drawer Social Custom</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_04')}>
                <Text style={styles.buttonText}>Drawer Social Notification</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_05')}>
                <Text style={styles.buttonText}>Drawer Social Dark</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_06')}>
                <Text style={styles.buttonText}>Drawer Social FullScreen</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_07')}>
                <Text style={styles.buttonText}>Drawer SlideUp</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_08')}>
                <Text style={styles.buttonText}>Drawer Social Wallpaper</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_09')}>
                <Text style={styles.buttonText}>Drawer Top</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_10')}>
                <Text style={styles.buttonText}>Drawer Top Icon</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_11')}>
                <Text style={styles.buttonText}>Drawer Bottom SlideUp</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_12')}>
                <Text style={styles.buttonText}>Drawer Social Small</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_13')}>
                <Text style={styles.buttonText}>Drawer Small Icon</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_14')}>
                <Text style={styles.buttonText}>Drawer Editable</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_15')}>
                <Text style={styles.buttonText}>Drawer Bottom Icon</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_16')}>
                <Text style={styles.buttonText}>Drawer Ecom</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_17')}>
                <Text style={styles.buttonText}>Drawer Ecom 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_18')}>
                <Text style={styles.buttonText}>Drawer Top SlideDown</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_19')}>
                <Text style={styles.buttonText}>Drawer Top SlideDown 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_20')}>
                <Text style={styles.buttonText}>Drawer Duo Navigation</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_21')}>
                <Text style={styles.buttonText}>Drawer FAB Icon</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_22')}>
                <Text style={styles.buttonText}>Drawer Expanding</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_23')}>
                <Text style={styles.buttonText}>Drawer Expanding Full</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_24')}>
                <Text style={styles.buttonText}>Drawer Expanding with Swiper</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsec}>
              <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_25')}>
                <Text style={styles.buttonText}>Drawer Music</Text>
              </TouchableOpacity>
            </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_26')}>
                  <Text style={styles.buttonText}>Drawer Music 2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_27')}>
                  <Text style={styles.buttonText}>Drawer Ecom 3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_28')}>
                  <Text style={styles.buttonText}>Drawer Music 3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_29')}>
                  <Text style={styles.buttonText}>Drawer Chat</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyles} onPress={()=>that.props.navigation.navigate('Drawer_30')}>
                  <Text style={styles.buttonText}>Drawer Ecom Tabs</Text>
                </TouchableOpacity>
              </View>
              {/*
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_22')}>
                  <Text style={styles.buttonText}>Drawer 22</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_sample')}>
                  <Text style={styles.buttonText}>Drawer Sample</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_18')}>
                  <Text style={styles.buttonText}>Drawer 18</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Drawer_19')}>
                  <Text style={styles.buttonText}>Drawer 19</Text>
                </TouchableOpacity>
              </View>


               */}

            </View>
          </Content>

      </Container>
    );
  }
}

export default DrawerScreen
