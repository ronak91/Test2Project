import React, { Component } from "react";
import { AsyncStorage, Image, StatusBar, View, TouchableOpacity, Linking, Alert,Platform, ImageBackground,ScrollView} from "react-native";
import {Header, Button, Text, Container, List, ListItem, Content, Icon, top, Left, Right,Title,Body} from "native-base";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Images from '../../../Themes/Images';
// Styles
import styles from './styles';

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
      <Container style={styles.container}>
        <ImageBackground style={styles.imgContainer} source={{uri:bgImage}}>
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

             <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}} onPress={() => alert('Add Song')}>
               <Ionicons name="ios-musical-notes-outline" size={30} color="white"/>
               <Text style={styles.menuListItem}>Add Song</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Playlist')}>
               <SimpleLineIcons name="playlist" size={20} color="white"/>
               <Text style={styles.menuListItem}>Playlist</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Library')}>
               <Image source={Images.libraryIcon} style={styles.menuIcon}/>
               <Text style={styles.menuListItem}>Library</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Radio')}>
               <Image source={Images.radioIcon} style={styles.menuIcon}/>
               <Text style={styles.menuListItem}>Radio</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('Feed')}>
               <Ionicons name="ios-albums-outline" size={30} color="white"/>
               <Text style={styles.menuListItem}>Feed</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.menuListItemBg} onPress={() => alert('My Likes')}>
               <Image source={Images.myLikesIcon} style={styles.menuIcon}/>
               <Text style={styles.menuListItem}>My Likes</Text>
             </TouchableOpacity>

           </ScrollView>
           </View>

          </View>

          <View style={styles.bottomWithSeekbarBg}>
            <View style={styles.seekBarBg}>
              <MultiSlider
                allowOverlap
                snapped
                selectedStyle={{backgroundColor: '#fff'}}
                unselectedStyle={{backgroundColor: '#fff4'}}
                markerStyle={styles.markerStyle}
                />
            </View>

            <View style={styles.bottomViewBg}>
               <View style={styles.bottomImageDataBg}>
                 <Image source={{uri:bottomImage}} style={styles.bottomImage}/>
                 <View style={styles.bottomDataBg}>
                   <Text style={styles.imagineDragonTxt}>Imagine Dragons</Text>
                   <Text style={styles.bottomNameTxt}>Daniel Wayen</Text>
                 </View>
               </View>
               <View style={styles.playMusicImgBg}>
                 <Image source={Images.musicIcon} style={styles.playMusicImg}/>
               </View>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
