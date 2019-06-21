
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './FavoriteStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';

/**
 *  Profile Screen
 */
const cardBgOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back01_s21_29.png";
const cardBgTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back02_s21_29.png";
const cardBgThree = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back03_s21_29.png";
const cardBgFour = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back04_s21_29.png";
const cardBgFive = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back05_s21_29.png";
const cardBgSix = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back06_s21_29.png";
const profileImage = "http://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic02_21_29.png";

export default class Favorite extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      data: [
        {
          id: 1,
          name: 'Emma Roberts0',
          cardBgImage: {uri:cardBgOne},
          profileImage: {uri:profileImage},
          WatchCount: 50,
          isLiked: true,
        },
        {
          id: 2,
          name: 'Emma Roberts1',
          cardBgImage: {uri:cardBgTwo},
          profileImage: {uri:profileImage},
          WatchCount: 10,
          isLiked: true,
        },
        {
          id: 3,
          name: 'Emma Roberts2',
          cardBgImage: {uri:cardBgThree},
          profileImage: {uri:profileImage},
          WatchCount: 90,
          isLiked: true,
        },
        {
          id: 4,
          name: 'Emma Roberts3',
          cardBgImage: {uri:cardBgFour},
          profileImage: {uri:profileImage},
          WatchCount: 80,
          isLiked: true,
        },
        {
          id: 5,
          name: 'Emma Roberts4',
          cardBgImage: {uri:cardBgFive},
          profileImage: {uri:profileImage},
          WatchCount: 58,
          isLiked: true,
        },
        {
          id: 6,
          name: 'Emma Roberts5',
          cardBgImage: {uri:cardBgSix},
          profileImage: {uri:profileImage},
          WatchCount: 68,
          isLiked: true,
        }
      ]
    };

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
            <Left style={{flex:1}}>
              <Button transparent>
              </Button>
            </Left>

            {/* Title */}
            <Body style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Title style={{color: theme.HEADER_TITLE_COLOR}}>
                Favorite
              </Title>
            </Body>

            {/* Right Icon */}
            <Right style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingRight: 5}}>
              <TouchableOpacity onPrees={()=>alert('search clicked')} style={styles.searchIcon}>
                <Image source={images.searchIcon} style={styles.searchIcon} />
              </TouchableOpacity>
            </Right>
        </Header>
        <Content style={{width: theme.WIDTH}}>
        <View style={styles.listContent}>
        {

            this.state.data.map((item, index) => {
             return (
               <View style={styles.rowMain} key={index}>
                 <ImageBackground source={item.cardBgImage} style={styles.imgContainer}>
                   <Image style={styles.shadowBg} source={images.shadowSocialDiscovery}/>
                   <View style={{flexDirection: 'row',marginLeft: 10,marginRight: 10, bottom: 10, position:'absolute'}}>
                     <Image source={item.profileImage} style={styles.profileImage}/>
                     <View style={{flexDirection: 'column',marginLeft: 10}}>
                       <Text style={styles.nameTxt}>{item.name}</Text>
                       <View style={{flexDirection: 'row'}}>
                         <Image source={images.watchIcon} style={styles.watchIcon}/>
                         <Text style={styles.watchDistanceTxt}>{item.WatchCount}</Text>
                       </View>
                     </View>
                     <Right>
                     {
                       (item.isLiked == true) ?
                        <Image source={images.heartRedIcon} style={styles.likeIcon}/> :
                        <Image source={images.heartWhiteEmpty} style={styles.likeIcon}/>
                     }
                     </Right>
                   </View>
                 </ImageBackground>
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
