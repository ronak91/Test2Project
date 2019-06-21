import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform, I18nManager} from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SocialScreen extends React.Component {

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
            <Title>Antiqueruby Social</Title>
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
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_01')}>
                  <Text style={styles.buttonText}>Social 1</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_02')}>
                  <Text style={styles.buttonText}>Social 2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_03')}>
                  <Text style={styles.buttonText}>Social 3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_04')}>
                  <Text style={styles.buttonText}>Social 4</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_05')}>
                  <Text style={styles.buttonText}>Social 5</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_06')}>
                  <Text style={styles.buttonText}>Social 6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_07')}>
                  <Text style={styles.buttonText}>Social 7</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_08')}>
                  <Text style={styles.buttonText}>Social 8</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_09')}>
                  <Text style={styles.buttonText}>Social 9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_10')}>
                  <Text style={styles.buttonText}>Social 10</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_11')}>
                  <Text style={styles.buttonText}>Social 11</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_12')}>
                  <Text style={styles.buttonText}>Social 12</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_13')}>
                  <Text style={styles.buttonText}>Social 13</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_14')}>
                  <Text style={styles.buttonText}>Social 14</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_15')}>
                  <Text style={styles.buttonText}>Social 15</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_16')}>
                  <Text style={styles.buttonText}>Social 16 & 17</Text>
                </TouchableOpacity>
              </View>
              {/*<View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_17')}>
                  <Text style={styles.buttonText}>Social 17</Text>
                </TouchableOpacity>
              </View>*/}
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_18')}>
                  <Text style={styles.buttonText}>Social 18</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_19')}>
                  <Text style={styles.buttonText}>Social 19</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('Social_20')}>
                  <Text style={styles.buttonText}>Social 20</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsec}>
                <TouchableOpacity style={styles.btnStyles} onPress={()=>that.props.navigation.navigate('Social_21')}>
                  <Text style={styles.buttonText}>Social 21</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>

      </Container>
    );
  }
}

export default SocialScreen
