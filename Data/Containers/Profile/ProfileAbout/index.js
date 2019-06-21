import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/user_p06.png';
const profileImgOne = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user1.png";
const profileImgTwo = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user2.png";
const profileImgThree = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user3.png";
const profileImgFour = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user4.png";
const profileImgFive = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user5.png";
const galleryImagOne = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_one_ptwelve.png";
const galleryImgTwo = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_two_ptwelve.png";
const galleryImgThree = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_three_ptwelve.png";

export default class ProfileAbout extends Component {

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
                <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='#363636'/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Profiles</Text>
            </Body>
            <Right style={styles.right}>

            </Right>
        </Header>

        <Content style={styles.contentBg}>

        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileBodySec}>
              <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
              <View style={styles.profileDetail}>
                <Text style={styles.profileName}>Johnie Cornwall</Text>
                <Text style={styles.post}>Graphic Design</Text>
              </View>
            </View>
            <TouchableOpacity style={(this.state.isFavorite) ? styles.activeButton : styles.normalButton} onPress={()=>this.setState({isFavorite: !this.state.isFavorite})}>
              <Text style={(this.state.isFavorite) ? styles.activeButtonTxt : styles.normalButtonTxt}>Follow</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.followContainer}>
            <View style={styles.followSec}>
              <Text style={styles.followCount}>1434</Text>
              <Text style={styles.followText}>Followers</Text>
            </View>
            <View style={styles.verticalSeparator}/>

            <View style={styles.verticalSeparator} />
            <View style={styles.followSec}>
              <Text style={styles.followCount}>1121</Text>
              <Text style={styles.followText}>Following</Text>
            </View>
            <View style={styles.verticalSeparator}/>
            <View style={styles.verticalSeparator} />
            <View style={styles.followSec}>
              <Text style={styles.followCount}>4507</Text>
              <Text style={styles.followText}>Likes</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardBg}>
          <Text style={styles.aboutLabelTxt}>ABOUT</Text>
          <Text style={styles.aboutDescriptionTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan lacus lectus, in pellentesque est vehicula a. Donec venenatis commodo porttitor. Sed mollis enim pellentesque tincidunt posuere.
          </Text>
          <View style={styles.dividerHorizontal}/>

          <View style={styles.fbTwitterGoogleLinkedInView}>

            <TouchableOpacity onPress={()=>alert("Facebook")}>
              <View style={styles.fbView}>
                <FontAwesome name="facebook" size={25} color='#2d324f'/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>alert("Twitter")}>
              <View style={styles.fbView}>
                <FontAwesome name="twitter" size={25} color='#2d324f'/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>alert("Google Plus")}>
              <View style={styles.fbView}>
                <Image source={Images.google} style={styles.googleImg}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>alert("LinkedIn")}>
              <View style={styles.fbView}>
                <FontAwesome name="linkedin" size={25} color='#2d324f'/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardBg}>
          <View style={styles.connectTextView}>
            <Text style={styles.connectionPhotosTxt}>CONNECTIONS</Text>
            <TouchableOpacity style={styles.connectCountView} onPress={()=>alert('See More Connections')}>
              <Text style={styles.connectionPhotosCountTxt}>23</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </TouchableOpacity>
          </View>
          <View style={styles.connectionImgView}>
            <View style={styles.connectImg}>
              <Image source={{uri:profileImgOne}} style={styles.connectionUserImg}/>
              <TouchableOpacity style={[styles.socialBg, {backgroundColor: '#4c70aa'}]}>
                <FontAwesome name="facebook" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>

            <View style={styles.connectImg}>
              <Image source={{uri:profileImgTwo}} style={styles.connectionUserImg}/>
              <TouchableOpacity style={[styles.socialBg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>

            <View style={styles.connectImg}>
              <Image source={{uri:profileImgThree}} style={styles.connectionUserImg}/>
              <TouchableOpacity style={[styles.socialBg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>

            <View style={styles.connectImg}>
              <Image source={{uri:profileImgFour}} style={styles.connectionUserImg}/>
              <TouchableOpacity style={[styles.socialBg, {backgroundColor: '#4c70aa'}]}>
                <FontAwesome name="facebook" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>

            <View style={styles.connectImg}>
              <Image source={{uri:profileImgFive}} style={styles.connectionUserImg}/>
              <TouchableOpacity style={[styles.socialBg, {backgroundColor: '#00b6ee'}]}>
                <FontAwesome name="twitter" size={10} color='#ffffff'/>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.cardBg}>
          <View style={styles.photodHeader}>
            <Text style={styles.connectionPhotosTxt}>Photos</Text>
            <TouchableOpacity style={styles.connectCountView} onPress={()=>alert('See More Photos')}>
              <Text style={styles.connectionPhotosCountTxt}>16</Text>
              <FontAwesome name={I18nManager.isRTL ? "angle-left" : "angle-right"} size={20} color='#d6d6d6' />
            </TouchableOpacity>
          </View>
          <View style={styles.photoImgView}>
            <Image style={styles.galleryImg} source={{uri:galleryImagOne}}/>
            <View style={styles.imgView}/>
            <Image style={styles.galleryImg} source={{uri:galleryImgTwo}}/>
            <View style={styles.imgView}/>
            <Image style={styles.galleryImg} source={{uri:galleryImgThree}}/>
          </View>
        </View>

        </Content>
      </Container>
    )
  }

}
