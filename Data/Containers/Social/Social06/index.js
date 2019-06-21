
import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,FlatList,TextInput, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import {View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import { Images } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social06 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);

 		this.state = {};
 	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/card_profile_one_socialsix.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_propic02_s21_29.png";
    const postImageOne = "https://antiqueruby.aliansoftware.net//Images/social/story_image_one_socialsix.png";
    const postImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/story_image_two_socialsix.png";

    var data = [
      {
        id: 1,
        name: 'Calandra Herwig',
        postImage: {uri:postImageOne},
        profileImage: {uri:profileImageTwo},
        time: '15 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Ariane Sutherlin',
        postImage: {uri:postImageTwo},
        profileImage: {uri:profileImageThree},
        time: '30 mins',
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      },
      {
        id: 3,
        name: 'Calandra Herwig',
        postImage: {uri:postImageOne},
        profileImage: {uri:profileImageTwo},
        time: '45 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
      <Container style={styles.main}>

        <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={25} color='white'/>
                :
                    <FontAwesome name="angle-left" size={25} color='white'/>
              }

              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>

              <View style={styles.searchView}>
                <Ionicons name="ios-search" size={18} color='#9c9c9c' />
              </View>

              <TextInput style={styles.searchText}
                placeholder = "I'm looking for..."
                placeholderTextColor = "#c3c3c3"
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                keyboardType = "default"
                selectionColor={'#6f6f6f'}></TextInput>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>alert("User Group")}>
                <Image style={styles.userGroupIcon} source={Images.userGroup}></Image>
              </TouchableOpacity>
            </Right>
        </Header>

        <View style={styles.profilePicView}>

          <Image style={styles.profileImg} source={{uri:profileImageOne}}></Image>
          <Text style={styles.headerText}>Whats on your mind?</Text>
          <Right>
          <TouchableOpacity styele={styles.cameraView} onPress={()=>alert("Camera")}>
            <Foundation name="camera" size={30} color="#d4d4d4" />
          </TouchableOpacity></Right>
        </View>
        <Content>
        <View style={styles.mainListView} animation="zoomIn" duration={1100} delay={700}>
        {
        data.map((item, index) => {
         return (
           <View style={styles.rowBg} key={index}>
             <View style={styles.rowHeaderView}>
               <Image style={styles.profileImg} source={item.profileImage}/>
               <View style={styles.rowHeaderNameView}>
                 <Text style={styles.rowNameTxt}>{item.name}</Text>
                 <Text style={styles.rowTimeTxt}>{item.time}</Text>
               </View>
               <Right style={styles.moreIcon}>
                 <TouchableOpacity onPress={()=>alert("More")}>
                   <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                 </TouchableOpacity>
               </Right>
             </View>
             <View style={styles.dividerHorizontal}/>
             <View style={styles.rowDescriptionView}>
               <Text style={styles.rowDescTxt}>{item.description}</Text>
             </View>
             {
               (item.postImage == '') ? null :
               <Image style={styles.postDescImg} source={item.postImage}></Image>
             }
            <View style={styles.dividerHorizontal}/>
            <View style={styles.likeCommentShareView}>
              <View style={styles.likeView}>
                <TouchableOpacity onPress={()=>alert("Like")}>
                  <FontAwesome name="heart" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Like</Text>
                <Right><View style={styles.dividerVertical}/></Right>
              </View>
              <View style={styles.commentView}>
                <TouchableOpacity onPress={()=>alert("Comment")}>
                  <Image style={styles.likeCommentShareImage} source={Images.comments}/>
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Comment</Text>
                <Right><View style={styles.dividerVertical}/></Right>
              </View>
              <View style={styles.shareView}>
                <TouchableOpacity onPress={()=>alert("Share")}>
                  <MaterialIcons name="share" size={18} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.likeCommentShareText}>Share</Text>
              </View>
            </View>
   				</View>
         )
        })
      }
      </View>
      </Content>
      </Container>
    );
  }
}
