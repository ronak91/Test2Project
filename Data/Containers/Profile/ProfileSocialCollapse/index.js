
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
// Screen Styles
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_row_profile_pseventeen.png';
const coverImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_bg_image_psixteen.png';

  export default class ProfileSocialCollapse extends Component {

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

      return(
        <Container style={styles.main}>
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

          <Content style={styles.slidesec}>
            <View style={styles.profileSec}>
              <View style={styles.profileContainer}>
                <Image source={{uri:coverImage}} style={styles.coverImage}/>
                <LinearGradient locations={[0,1]} colors={['transparent', 'rgba(0,0,0,0.75)']} style={styles.profileInfo}>
                  <Text style={styles.profileTitle}>Kristan Eppinger</Text>
                  <Text style={styles.profilePost}>Graphic Design</Text>
                </LinearGradient>
              </View>
              <View style={styles.aboutProfile}>
                <View style={{flexDirection: 'row'}}>
                  <Entypo name="location-pin" size={18} color='#0691ce'/>
                  <Text style={styles.aboutText}>1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA</Text>
                </View>
                <View style={styles.mailContainer}>
                  <Zocial name="email" size={16} color='#0691ce' />
                  <Text style={styles.aboutText}>kristan_eppinger@gmail.com</Text>
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
            </View>
            <TouchableOpacity style={styles.flatButton} onPress={()=>alert('Follow')}>
              <SimpleLineIcons name="user-follow" size={26} color='white' style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
            </TouchableOpacity>
            <View style={styles.postSec}>
              <View style={styles.postHeaderSec}>
                <View style={styles.postProfileDetail}>
                  <Image source={{uri:ProfileImage}} style={styles.postProfileImage}/>
                  <View style={styles.postProfileMain}>
                    <Text style={styles.postName}>Calandra Herwig</Text>
                    <Text style={styles.postedTime}>15 mins</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.moreButton} onPress={()=>alert('More options')}>
                  <Icon name='ios-more' style={styles.moreIcon}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.postedComment}>LoreLorem ipsum dolor sit amet, consectetur adipisi, sed do eiusmod tempor incididunt ut labore.</Text>
            </View>
          </Content>
        </Container>
      );
    }
  }
