
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,AsyncStorage} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title,Footer,FooterTab,Icon} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './NearByDetailStyle.js';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
// import NearBy from './NearBy.js'
// import Message from './Message.js'
// import Discovery from './Discovery.js'
// import Favorite from './Favorite.js'
// import Profile from './Profile.js'

/**
 *  Profile Screen
 */
const contentBg = "http://antiqueruby.aliansoftware.net//Images/social/ic_img03_s21_29.jpg";
const profileImgOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic05_21_29.png";
export default class NearByDetail extends Component {

  constructor(props) {
 		super(props);
    this.state = {};
 	}

  componentWillMount(){
    AsyncStorage.multiGet(['Name','WatchCount','Distance']).then((data) => {
     this.setState({
       Name: data[0][1],
       WatchCount: data[1][1],
       Distance: data[2][1],
     });
   });
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#fa6b7b',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
      <Header
          androidStatusBarColor={"#fa6b7b"}
          style={styles.header}>

          {/* Take up the space */}
          <Left style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>alert('clicked')}>
              <Image source={images.downArrowIcon} style={styles.downArrowIcon}/>
            </TouchableOpacity>
          </Left>

          {/* Title */}
          <Body style={{flex: 5,justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color: theme.HEADER_TITLE_COLOR}}>
              Emma Roberts
            </Title>
          </Body>

          {/* Right Icon */}
          <Right style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>alert('clicked')}>
              <Image source={images.optionIcon} style={styles.optionIcon}/>
            </TouchableOpacity>
          </Right>
      </Header>
      <Content style={{width: theme.WIDTH ,height: (theme.HEIGHT) * 0.85,backgroundColor: 'transparent'}}>
        <ImageBackground source={{uri:contentBg}} style={{width: theme.WIDTH,height: (theme.HEIGHT)*0.85}}>
          <Image style={styles.shadowBg} source={images.shadowNearByDetail}/>
          <View style={{flexDirection: 'row',marginLeft: 20,marginTop: (theme.HEIGHT) * 0.10}}>
            <Image source={images.albumIcon} style={styles.albumIcon}/>
            <Text style={styles.galleryImgTxt}>1/3</Text>
          </View>
          <View style={{flexDirection: 'row',marginLeft: 20,marginRight: 20, bottom: 50, position:'absolute'}}>
            <Image source={{uri:profileImgOne}} style={styles.profileImage}/>
            <View style={{flexDirection: 'column',marginLeft: 20}}>
              <Text style={styles.nameTxt}>{this.state.Name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={images.watchIcon} style={styles.watchIcon}/>
                <Text style={styles.watchDistanceTxt}>{this.state.WatchCount}</Text>
                <Image source={images.mapPinWhite} style={styles.mapPin}/>
                <Text style={styles.watchDistanceTxt}>{this.state.Distance}</Text>
              </View>
            </View>
            <Right><Image source={images.heartWhiteEmpty} style={styles.likeIcon}/></Right>
          </View>
        </ImageBackground>
      </Content>
      {/*<Footer>
        <FooterTab style={{backgroundColor: "#F2F2F2"}}>
          <Button vertical
            active={this.setState.selectedTab==='NearBy'}
            onPress={() => this.setState({selectedTab: 'NearBy'})}>
            <Image source={images.nearByIcon} style={{height: 20,width: 12, justifyContent: 'center'}}/>
            <Text style={{fontSize: moderateScale(12)}}>Nearby</Text>
          </Button>
          <Button vertical>
            <Image source={images.messageIcon} style={{height: 18,width: 19, justifyContent: 'center'}}/>
            <Text style={{marginTop: 3,fontSize: moderateScale(12)}}>Message</Text>
          </Button>
          <Button vertical>
            <Image source={images.discoveryIcon} style={{height: 18,width: 18, justifyContent: 'center'}}/>
            <Text style={{marginTop: 3,fontSize: moderateScale(12)}}>Discovery</Text>
          </Button>
          <Button vertical>
            <Image source={images.favouriteIcon} style={{height: 18,width: 21, justifyContent: 'center'}}/>
            <Text style={{marginTop: 3,fontSize: moderateScale(12)}}>Favourite</Text>
          </Button>
          <Button vertical>
            <Image source={images.profileIcon} style={{height: 18,width: 18, justifyContent: 'center'}}/>
            <Text style={{marginTop: 3,fontSize: moderateScale(12)}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>*/}
      </Container>
    );
  }
}
