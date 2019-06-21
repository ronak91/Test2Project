
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Right, Left, ListItem, Content, Header, Body, Title, Icon} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images,Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social20 extends Component {

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

    const postImageOne = "https://antiqueruby.aliansoftware.net//Images/social/image_one_sotwenty.png";
    const postImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/image_three_sotwenty.png";
    const postImageThree = "https://antiqueruby.aliansoftware.net//Images/social/image_two_sotwenty.png";
    const postImageFour = "https://antiqueruby.aliansoftware.net//Images/social/image_four_sotwenty.png";
    const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";
    const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/social/profile_four_sotwenty.png";
    const profileImageFive = "https://antiqueruby.aliansoftware.net//Images/social/profile_five_sotwenty.png";

    var data = [
      {
        id: 1,
        cityName: 'New York City',
        temprature: '25',
        postImage: {uri:postImageOne},
        profileImages: [
          {image: {uri:profileImageOne}, priority:10},
          {image: {uri:profileImageThree}, priority:9},
          {image: {uri:profileImageFour}, priority:8},
          {image: {uri:profileImageFive}, priority:7},
        ]
      },
      {
        id: 2,
        cityName: 'Las Vegas',
        temprature: '25',
        postImage: {uri:postImageTwo},
        profileImages: [
          {image: {uri:profileImageThree}, priority:10},
          {image: {uri:profileImageFour}, priority:9},
          {image: {uri:profileImageFive}, priority:8},
        ]
      },
      {
        id: 3,
        cityName: 'Washington, DC',
        temprature: '25',
        postImage: {uri:postImageThree},
        profileImages: [
          {image: {uri:profileImageOne}, priority:10},
          {image: {uri:profileImageTwo}, priority:9},
          {image: {uri:profileImageThree}, priority:8},
          {image: {uri:profileImageFour}, priority:7},
          {image: {uri:profileImageFive}, priority:6},
        ]
      },
      {
        id: 4,
        cityName: 'New York City',
        temprature: '25',
        postImage: {uri:postImageFour},
        profileImages: [
          {image: {uri:profileImageOne}, priority:10},
          {image: {uri:profileImageTwo}, priority:9},
          {image: {uri:profileImageThree}, priority:8},
          {image: {uri:profileImageFour}, priority:7},
          {image: {uri:profileImageFive}, priority:6},
        ]
      }
    ]

    return(
      <Container style={styles.main}>
      <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity  style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
            {
              (I18nManager.isRTL)
              ?
                  <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                  <MaterialIcons name="chevron-left" size={25} color='white'/>
            }

            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Discovery</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
      </Header>
        <Content>
          <View style={styles.listMainView} animation="bounceInDown" duration={1100} delay={1400}>
          {
            data.map((item, index) => {
              return (
                <View style={styles.rowBg} key={index} >
                  <Image source={item.postImage} style={styles.bgImage}/>
                  <TouchableOpacity style={styles.discoveryContent}>
                    <View style={styles.tempSec}>
                      <Text style={styles.temp}>{item.temprature}</Text>
                      <Text style={styles.tempDegree}>O</Text>
                      <Image source={Images.cloude} style={styles.cloudeIcon}/>
                    </View>

                    <View style={styles.aboutSec}>
                      <Text style={styles.cityName}>{item.cityName}</Text>
                      <View style={styles.profileView}>
                      {
                        item.profileImages.map((itemimage, index) => {
                          return (
                            <View key={index} style={styles.profileImageView}>
                              <Image source={itemimage.image} style={styles.profile}/>
                            </View>
                          )
                        })
                      }
                      </View>
                    </View>
                  </TouchableOpacity>
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
