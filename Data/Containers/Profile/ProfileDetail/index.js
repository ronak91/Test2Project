
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from 'native-base';
import ReadMore from 'react-native-read-more-text';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class ProfileDetail extends Component {

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

    const bgImage = "https://antiqueruby.aliansoftware.net//Images/profile/thumbnail_profile_ptwentyfour.png";

    return(
      <Container style={styles.main}>
        <ImageBackground source={{uri:bgImage}} style={styles.imgContainer}>

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

        </ImageBackground>

        <Content>
        <View style={styles.detailsView}>
          <Text style={styles.nameTxt}>Johnie Cornwall</Text>
          <Text style={styles.addressTxt}>1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA</Text>
          <View style={styles.addUserCommentCallView}>
            <TouchableOpacity onPress={() => alert('Add User')} style={styles.addUserBg}>
              <Image source={Images.addUserGray} style={styles.userCommentImage}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Comment')} style={styles.commentBg}>
              <FontAwesome name="comment" size={20} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Call')} style={styles.callBg}>
              <Foundation name="telephone" size={25} color='white'/>
            </TouchableOpacity>
          </View>
        </View>
        </Content>

        <View style={styles.bottomView}>
        <View style={styles.dividerHorizontal}/>
        <View style={styles.followerFollwingLikeBg}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.countLabelBg}>
              <Text style={styles.countTxt}>1434</Text>
              <Text style={styles.labelTxt}>Followers</Text>
            </View>
            <View style={styles.divideVertical}/>
          </View>
          <View style={{flexDirection: 'row',}}>
            <View style={styles.countLabelBg}>
              <Text style={styles.countTxt}>1121</Text>
              <Text style={styles.labelTxt}>Following</Text>
            </View>
            <View style={styles.divideVertical}/>
          </View>
          <View style={styles.countLabelBg}>
            <Text style={styles.countTxt}>4507</Text>
            <Text style={styles.labelTxt}>Likes</Text>
          </View>
        </View>
        </View>

      </Container>
    );
  }
}
