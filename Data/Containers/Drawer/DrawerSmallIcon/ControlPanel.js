import React, { Component } from 'react';
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import styles from './styles';

export default class ControlPanel extends Component {

  render() {
    const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg';
    return (
      <Container style={{ width: Metrics.WIDTH * 0.3, backgroundColor: '#302f39', height: Metrics.HEIGHT}}>

        <View style={styles.profileBody}>
          <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
        </View>

        <Content style={styles.mainview} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Home')}>
            <View style={[styles.itemBg, {backgroundColor: '#ef4836'}]}>
              <Ionicons name="ios-document" size={Fonts.moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Chat')}>
            <View style={[styles.itemBg, {backgroundColor: '#8e44ad'}]}>
              <Ionicons name="ios-chatbubbles" size={Fonts.moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Notification')}>
            <View style={[styles.itemBg, {backgroundColor: '#22a7f0'}]}>
              <Ionicons name="ios-notifications" size={Fonts.moderateScale(30)} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Favorite')}>
            <View style={[styles.itemBg, {backgroundColor: '#2ecc71'}]}>
              <FontAwesome name="star" size={Fonts.moderateScale(25)} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Friends')}>
            <View style={[styles.itemBg, {backgroundColor: '#f9bf3b'}]}>
              <Entypo name="users" size={Fonts.moderateScale(20)} color="white" />
            </View>
          </TouchableOpacity>
        </Content>

      </Container>
    )
  }

}
