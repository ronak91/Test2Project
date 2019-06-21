import React, { Component } from "react";
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground,ScrollView} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Metrics } from '../../../Themes/';
// Styles
import styles from './styles';
import Images from '../../../Themes/Images';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/drawer/profile_dtfive.jpg';
const bottomImage = "https://antiqueruby.aliansoftware.net//Images/drawer/musicpicdtsix.png";
const bgImage = "https://antiqueruby.aliansoftware.net//Images/drawer/backimgdtsix.png";

export default class ControlPanel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: 'SignUp',
    }
  }

  render() {
    const {activeMenuImage} = this.state
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.imgContainer}>
        <View style={styles.listProfileContainer}>
         <View style={styles.profileDataBg}>
          <Image source={{uri:ProfileImage}} style={styles.profileImg}/>
          <View style={styles.nameAddressTxt}>
            <Text style={styles.nameTxt}>Johnie Cornwall</Text>
            <Text style={styles.addressTxt}>Seattle,USA</Text>
          </View>
         </View>

         <View style={styles.scrollBg}>
         <ScrollView style={styles.menuListBg}>

          <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}} onPress={() => alert('Home')}>
            <SimpleLineIcons name="home" size={20} color="#919cae"/>
            <Text style={styles.menuListItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Articles')}>
            <Ionicons name="ios-document-outline" size={28} color="#919cae"/>
            <Text style={[styles.menuListItem,{marginLeft: (Metrics.WIDTH * 0.05)}]}>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Message')}>
            <SimpleLineIcons name="bubbles" size={20} color="#919cae"/>
            <Text style={styles.menuListItem}>Message</Text>
            <View style={styles.rowCountBg}>
              <Text style={styles.rowCountText}>128</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Activity')}>
            <SimpleLineIcons name="bell" size={20} color="#919cae"/>
            <Text style={styles.menuListItem}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Favorite')}>
            <SimpleLineIcons name="star" size={20} color="#919cae"/>
            <Text style={styles.menuListItem}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Friends')}>
            {/*<Image source={Images.myLikesIcon} style={styles.menuIcon}/>*/}
            <SimpleLineIcons name="people" size={20} color="#919cae"/>
            <Text style={styles.menuListItem}>Friends</Text>
          </TouchableOpacity>
         </ScrollView>
         </View>

        </View>
        <TouchableOpacity  onPress={() => alert('Logout')}>
        <View style={styles.bottomViewBg}>
          <Image style={styles.logoutImage} source={Images.logoutIcon}/>
          <Text style={[styles.menuListItem,{paddingTop: (Metrics.HEIGHT * 0.01)}]}>Logout</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}
