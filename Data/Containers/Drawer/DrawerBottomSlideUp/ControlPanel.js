import React, { Component } from 'react';
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import styles from './styles';

export default class ControlPanel extends Component {
  _handlePress(text){
    alert(text);
  }
  render() {
    return (
      <Container style={styles.bottomModal}>
        <View style={styles.mainview}>
          <TouchableOpacity onPress={() => this._handlePress('Home')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-home-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._handlePress('Articles')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-document-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Articles</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._handlePress('Message')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-chatbubbles-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Message</Text>
              <View style={styles.badgeview}>
               <Text style={styles.badgetext}>128</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._handlePress('Activity')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-notifications-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Activity</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._handlePress('Favourite')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-star-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Favourite</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this._handlePress('Friends')} >
            <View style={styles.listrow}>
              <Ionicons name="ios-contacts-outline" size={Fonts.moderateScale(20)} color={'#919cae'} style={ styles.rowicon} />
              <Text style={styles.rowtxt}>Friends</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeview} onPress={this.props.closeDrawer} >
             <View style={styles.mainclose}>
               <Icon name='ios-close-outline' style={styles.closeicon} />
             </View>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }

}
