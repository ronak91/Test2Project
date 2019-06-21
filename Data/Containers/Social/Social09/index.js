
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, KeyboardAvoidingView, ListView,TextInput, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Icon,Title} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social09 extends Component {

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

    const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_onesnine.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc12.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_post_one_social_three.png";
    const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/social/people_seven_soeighteen.png";
    const profileImageFive = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_fivesnine.png";

    var data = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        profileImage: {uri:profileImageOne},
        time: '8 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Michal Lampley',
        profileImage: {uri:profileImageTwo},
        time: '10 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        name: 'Marissa Brackett',
        profileImage: {uri:profileImageThree},
        time: '15 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        name: 'Kayleen Batz',
        profileImage: {uri:profileImageFour},
        time: '21 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        name: 'Antonia Cheers',
        profileImage: {uri:profileImageFive},
        time: '23 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ]

    return(
      <Container style={styles.main}>
      <Header
          style={styles.header}>

          {/* Take up the space */}
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
            {
              (I18nManager.isRTL)
              ?
                  <Icon name="ios-arrow-forward" style={styles.backArrow}/>
              :
                  <Icon name="ios-arrow-back" style={styles.backArrow}/>
            }
            </TouchableOpacity>
          </Left>

          {/* Title */}
          <Body style={styles.body}>
            <Title style={styles.titleText}>
              Comments
            </Title>
          </Body>

          {/* Right Icon */}
          <Right style={styles.right}>
            <Button transparent>
            </Button>
          </Right>
        </Header>
        <Content>
        <View style={styles.listMainView} animation="zoomInDown" duration={1100} delay={1400}>
        {
          data.map((item, index) => {
           return (
             <View style={styles.rowBg} key={index}>
               <View style={{flexDirection: 'row'}}>
                 <Image source={item.profileImage} style={styles.profileImg}/>
                 <View style={styles.nameTimeMainView}>
                   <View style={styles.nameTimeView}>
                     <Text style={styles.rowNameTxt}>{item.name}</Text>
                     <Right><View><Text style={styles.rowTimeTxt}>{item.time}</Text></View></Right>
                   </View>
                   <Text style={styles.rowDescTxt}>{item.description}</Text>
                 </View>
               </View>
               <View style={ (index === data.length - 1) ? null : styles.dividerHorizontal}/>
            </View>
            )
          })
        }
        </View>
      </Content>
      {
        (Platform.OS === 'ios') ?
      <KeyboardAvoidingView behavior="padding" >
      <View style={styles.bottomMainView}>
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>alert("Camera")}>
              <Foundation name="camera" size={35} color="#d4d4d4" />
            </TouchableOpacity>
          <TextInput style={styles.commentText}
            placeholder = "Enter your comments..."
            placeholderTextColor = "#c7c7cc"
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            keyboardType = "default"
            textAlign= {I18nManager.isRTL ? 'right' : 'left'}
            selectionColor={'#6f6f6f'}></TextInput>
            <TouchableOpacity onPress={()=>alert("Voice Recorder")}>
              <Image source={Images.voiceRecordingIcon} style={styles.micImg}/>
            </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
      :
      <View style={styles.bottomMainView}>
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>alert("Camera")}>
              <Foundation name="camera" size={35} color="#d4d4d4" />
            </TouchableOpacity>
          <TextInput style={styles.commentText}
            placeholder = "Enter your comments..."
            placeholderTextColor = "#c7c7cc"
            underlineColorAndroid = "transparent"
            autoCapitalize = "none"
            keyboardType = "default"
            textAlign= {I18nManager.isRTL ? 'right' : 'left'}
            selectionColor={'#6f6f6f'}></TextInput>
            <TouchableOpacity onPress={()=>alert("Voice Recorder")}>
              <Image source={Images.voiceRecordingIcon} style={styles.micImg}/>
            </TouchableOpacity>
        </View>
      </View>
      }
      </Container>

    );
  }
}
