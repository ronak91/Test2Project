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
          <TouchableOpacity style={styles.listrow} onPress={() => alert('Articles')} >
            <Ionicons name="ios-document" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Articles</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Message')} >
            <Ionicons name="ios-chatbubbles" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Activity')} >
            <Ionicons name="ios-notifications" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Activity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Favorite')} >
            <FontAwesome name="star" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Favorite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listrow} onPress={() => alert('Friends')} >
            <Entypo name="users" size={Fonts.moderateScale(20)} color="white" style={ styles.rowicon} />
            <Text style={styles.rowtxt}>Friends</Text>
          </TouchableOpacity>
        </Content>

      </Container>
    )
  }

}
