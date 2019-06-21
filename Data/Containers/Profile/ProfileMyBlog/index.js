
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_image_psixteen.png';
const imageBG = 'https://antiqueruby.aliansoftware.net//Images/profile/background_main_psixteen.png';
const coverImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_bg_image_psixteen.png';

  export default class ProfileMyBlog extends Component {

    componentWillMount() {
      var that = this
      BackHandler.addEventListener('hardwareBackPress', function() {
        that.props.navigation.navigate('Profile')
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
        StatusBar.setBackgroundColor('transparent',true);
        StatusBar.setTranslucent(true);
      }

      var that = this;

      var data = [
        {
          id: 1,
          image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_friend_one_psixteen.png',
        },
        {
          id: 2,
          image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_friend_two_psixteen.png',
        },
        {
          id: 3,
          image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_friend_three_psixteen.png',
        },
        {
          id: 4,
          image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_friend_four_psixteen.png',
        },
        {
          id: 5,
          image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_friend_five_psixteen.png',
        },
      ]

      return(
        <Container style={styles.main}>
          <ImageBackground source={{uri:imageBG}} style={styles.imageBg}>
            <Header style={styles.header}>
                <Left style={styles.left}>
                  <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Profile')}>
                    <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                  </TouchableOpacity>
                </Left>
                <Body style={styles.body}>
                  <Text style={styles.textTitle}>Profiles</Text>
                </Body>
                <Right style={styles.right}>

                </Right>
            </Header>

            <Content style={styles.slidesec} scrollEnabled={false}>
              <View style={styles.profileContainer}>
                <Image source={{uri:coverImage}} style={styles.coverImage}/>
                <View style={styles.profileInfo}>
                  <Image source={{uri:ProfileImage}} style={styles.profile}/>
                  <View>
                    <Text style={styles.profileTitle}>Kristan Eppinger</Text>
                    <Text style={styles.profilePost}>Graphic Design</Text>
                  </View>
                </View>
              </View>
              <View style={styles.followContainer}>
                <View style={styles.followSec}>
                  <Text style={styles.followCount}>1434</Text>
                  <Text style={styles.followText}>Followers</Text>
                </View>
                <View style={styles.followSec}>
                  <Text style={styles.followCount}>1121</Text>
                  <Text style={styles.followText}>Following</Text>
                </View>
                <View style={styles.followSec}>
                  <Text style={styles.followCount}>4507</Text>
                  <Text style={styles.followText}>Likes</Text>
                </View>
              </View>
              <ScrollView style={styles.aboutSec}>
                <Text style={styles.status}>Lorem ipsum dolor sit amet, consectetur adipis elite, sed do eiusmod tempor incididunt uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
              </ScrollView>
              <View style={styles.friendsSec}>
                <Text style={styles.friendTitle}>Friends</Text>
                <View style={styles.friends}>
                {
                  data.map((item, index) => {
                    return (
                      <View key={index} style={styles.imageContainer}>
                        <Image source={{uri:item.image}} style={styles.imageShadow}/>
                      </View>
                    )
                  })
                }
                </View>
              </View>
              <View style={styles.buttonSec}>
                <TouchableOpacity style={styles.touchableBtn} onPress={()=>alert("Comment")}>
                  <Image style={styles.socialButton} source={Images.comments}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableBtn} onPress={()=>alert("Call")}>
                <Image style={styles.socialButton} source={Images.phone}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableBtn} onPress={()=>alert("Video call")}>
                <Image style={styles.socialButton} source={Images.video}/>
              </TouchableOpacity>
              </View>
            </Content>
          </ImageBackground>
        </Container>

      );
    }
  }
