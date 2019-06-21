
import React, { Component } from 'react';
import { View,Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from 'native-base';
import ReadMore from 'react-native-read-more-text';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Metrics } from '../../../Themes/';
import Images from '../../../Themes/Images';
// Screen Styles
import styles from './styles';

/**
 *  Profile Screen
 */
const profileImg = "https://antiqueruby.aliansoftware.net//Images/profile/pro_pic_p26.png";
const profileImgOne = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user1.png";
const profileImgTwo = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user2.png";
const profileImgThree = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user3.png";
const profileImgFour = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user4.png";
const profileImgFive = "https://antiqueruby.aliansoftware.net//Images/profile/ic_user5.png";
const galleryImagOne = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_one_ptwelve.png";
const galleryImgTwo = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_two_ptwelve.png";
const galleryImgThree = "https://antiqueruby.aliansoftware.net/Images/profile/iv_photo_three_ptwelve.png";
const bgImage = "https://antiqueruby.aliansoftware.net//Images/profile/blur_image_p26.png";

export default class ProfileSlideUp extends Component {

  constructor(props) {
 		super(props);
    this.state = {
      slideStatus : true,
      slideDownStatus: true,
    };
 	}

  _slideUp(){
    this.setState({slideStatus:false}),
    this.setState({slideDownStatus:true})
  }

  _slideDown(){
    this.setState({slideStatus:true}),
    this.setState({slideDownStatus:false})
  }

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
        {
          this.state.slideStatus ?
            this.state.slideDownStatus ?
              <ImageBackground style={styles.imgContainer} source={{uri:bgImage}}>
              <Header style={styles.header}>
                 <Left style={styles.left}>
                   <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
                     <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
                   </TouchableOpacity>
                 </Left>
                 <Body style={styles.body}>
                 </Body>
                 <Right style={styles.right}/>
               </Header>
              <View style={styles.slideUpBg}>
              <TouchableOpacity onPress={() =>this._slideUp()}>
                <Image source={Images.slideUpArrowIcon} style={styles.slideUpArrowIcon}/>
              </TouchableOpacity>
              </View>
              </ImageBackground>
              :
              <View animation="bounceInDown" duration={1100} delay={1400}>
              {
                <ImageBackground style={styles.imgContainer} source={{uri:bgImage}}>
                <Header style={styles.header}>
                   <Left style={styles.left}>
                     <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
                       <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
                     </TouchableOpacity>
                   </Left>
                   <Body style={styles.body}>
                   </Body>
                   <Right style={styles.right}/>
                 </Header>
                <View style={styles.slideUpBg}>
                <TouchableOpacity onPress={() =>this._slideUp()}>
                  <Image source={Images.slideUpArrowIcon} style={styles.slideUpArrowIcon}/>
                </TouchableOpacity>
                </View>
                </ImageBackground>
              }
              </View>
          :
          <View animation="bounceInUp" duration={1100} delay={1400}>
          {
          <ImageBackground source={{uri:bgImage}} style={styles.imgContainer}>
            <Content style={styles.contentStyle}>
            <TouchableOpacity onPress={() =>this._slideDown()} style={styles.slideArrowBg}>
              <Image source={Images.slideUpArrowIcon} style={styles.slideArrowIcon}/>
            </TouchableOpacity>
              <Image source={{uri:profileImg}} style={styles.profileImg}/>
              <Text style={styles.nameTxt}>Johnie Cornwall</Text>
              <Text style={styles.designationTxt}>Graphic Design</Text>

              <View style={styles.detailsBg}>
                <View style={styles.detailOneBg}>
                  <View style={styles.followerFollowingBg}>
                    <Text style={styles.countTxt}>1434</Text>
                    <Text style={styles.labelTxt}>Followers</Text>
                  </View>
                  <View style={styles.followerFollowingBg}>
                    <Text style={styles.countTxt}>1121</Text>
                    <Text style={styles.labelTxt}>Following</Text>
                  </View>
                  <Right>
                    <TouchableOpacity style={styles.followBg} onPress={() => alert('FOLLOW')}>
                      <Text style={styles.followTxt}>FOLLOW</Text>
                    </TouchableOpacity>
                  </Right>
                </View>

                <View style={styles.dividerHorizontal}/>

                <View style={styles.aboutBg}>
                  <Text style={styles.aboutTxt}>ABOUT</Text>
                  <Content>
                    <Text style={styles.aboutDescriptionTxt}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien nisl, vestibulum in lorem id, fringilla volutpat eros. Quisque porta scelerisque metus sit amet tincidunt. In hac habitasse platea dictumst. Vestibulum eget nunc ante. Curabitur ut tincidunt quam.Donec accumsan aliquet varius. Duis ultricies velit neque, pellentesque luctus magna vulputate at.Nulla ut augue ut tortor scelerisque dapibus ut id felis. Nullam suscipit, tellus non interdum cursus, mi sapien viverra odio, nec pellentesque leo nulla id lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante eu nisi pulvinar aliquet.
                    </Text>
                  </Content>
                  <LinearGradient locations={[0.3,1]} colors={['#fff0', 'white']} style={styles.shadowBg}/>
                </View>

                <View style={styles.dividerHorizontal}/>

                <View style={styles.connectionBg}>
                  <View style={styles.connectionHeaderBg}>
                    <Text style={styles.connectionPhotosTxt}>CONNECTIONS</Text>
                    <TouchableOpacity style={styles.connectionPhotoCountBg} onPress={() => alert('See More Connections')}>
                      <Text style={styles.connectionPhotosCountTxt}>23</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#d6d6d6"/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.connectionProfileBg}>
                    <View style={[styles.connectionProfileSocialBg,{marginLeft: 3}]}>
                      <Image source={{uri:profileImgOne}} style={styles.connectionUserImg}/>
                      <View style={[styles.connectionSocialIconBg,{backgroundColor: "#4c70aa"}]}>
                        <FontAwesome name="facebook-f" size={9} color="white"/>
                      </View>
                    </View>
                    <View style={styles.connectionProfileSocialBg}>
                      <Image source={{uri:profileImgTwo}} style={styles.connectionUserImg}/>
                      <View style={[styles.connectionSocialIconBg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                    <View style={styles.connectionProfileSocialBg}>
                      <Image source={{uri:profileImgThree}} style={styles.connectionUserImg}/>
                      <View style={[styles.connectionSocialIconBg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                    <View style={styles.connectionProfileSocialBg}>
                      <Image source={{uri:profileImgFour}} style={styles.connectionUserImg}/>
                      <View style={[styles.connectionSocialIconBg,{backgroundColor: "#4c70aa"}]}>
                        <FontAwesome name="facebook-f" size={9} color="white"/>
                      </View>
                    </View>
                    <View style={styles.connectionProfileSocialBg}>
                      <Image source={{uri:profileImgFive}} style={styles.connectionUserImg}/>
                      <View style={[styles.connectionSocialIconBg,{backgroundColor: "#00b6ee"}]}>
                        <FontAwesome name="twitter" size={8} color="white"/>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.dividerHorizontal}/>

                <View style={styles.cardBg}>
                  <View style={styles.photodHeader}>
                    <Text style={styles.connectionPhotosTxt}>Photos</Text>
                    <TouchableOpacity style={styles.connectionPhotoCountBg} onPress={() => alert('See More Photos')}>
                      <Text style={styles.connectionPhotosCountTxt}>16</Text>
                      <Ionicons name={I18nManager.isRTL ? "ios-arrow-back" : "ios-arrow-forward"} size={20} color="#d6d6d6"/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.galleryBg}>
                    <Image style={[styles.galleryImg,{marginRight: (Metrics.WIDTH * 0.02)}]} source={{uri:galleryImagOne}}/>
                    <Image style={[styles.galleryImg,{marginRight: (Metrics.WIDTH * 0.02)}]} source={{uri:galleryImgTwo}}/>
                    <Image style={styles.galleryImg} source={{uri:galleryImgThree}}/>
                  </View>
                </View>

              </View>
            </Content>
          </ImageBackground>
          }
          </View>
        }
      </Container>
    );
  }
}
