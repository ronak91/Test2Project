
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,List, Header} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import { View } from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social07 extends Component {

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

    const profileImagOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const postImageOne = "https://antiqueruby.aliansoftware.net//Images/social/image_food_social_seven.png";

    var data = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        profileImage: {uri:profileImagOne},
        postImage: '',
        time: '8 mins',
        likeCount: 12,
        commentCount: 35,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Michal Lampley',
        profileImage: {uri:profileImageTwo},
        postImage: {uri:postImageOne},
        time: '10 mins',
        likeCount: 12,
        commentCount: 35,
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
      },
      {
        id: 3,
        name: 'Marissa Brackett',
        profileImage: {uri:profileImageThree},
        postImage: '',
        time: '15 mins',
        likeCount: 12,
        commentCount: 35,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere, nibh id pellentesque hendrerit, massa dui fermentum massa, eget fermentum libero nisl convallis elit. ',
      }
    ]

    return(
      <Container style={styles.main}>
        <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
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
              <Text style={styles.textTitle}>Timeline</Text>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>alert("Search")}>
                <Ionicons name="ios-search" size={25} color='white'/>
              </TouchableOpacity>
            </Right>
        </Header>
        <Content>
        <View style={styles.mainListView} animation="zoomInDown" duration={1100} delay={1400}>
        {
          data.map((item, index) => {
           return (
             <View style={styles.rowBg} key={index}>
               <View style={styles.rowView}>
                 <Image source={item.profileImage} style={styles.profileImg}/>
                 <View style={styles.nameDescView}>
                   <View style={styles.nameView}>
                     <Text style={styles.rowNameTxt}>{item.name}</Text>
                     <Right><View><Text style={styles.rowTimeTxt}>{item.time}</Text></View></Right>
                   </View>
                   <Text style={styles.rowDescTxt}>{item.description}</Text>
                   {
                     (item.postImage == '') ? null :
                     <Image source={item.postImage} style={styles.postDescImg}/>
                   }

                   <View style={styles.likeCommentView}>
                     <View style={styles.likeView}>
                       <TouchableOpacity onPress={()=>alert("Like")}>
                         <FontAwesome name="heart" size={15} color="#d4d4d4" />
                       </TouchableOpacity>
                       <Text style={styles.likeCommentText}>{item.likeCount}</Text>
                     </View>
                     <View style={styles.likeView}>
                       <TouchableOpacity onPress={()=>alert("Comment")}>
                         <Image style={styles.likeCommentShareImage} source={Images.comments}/>
                       </TouchableOpacity>
                       <Text style={styles.likeCommentText}>{item.commentCount}</Text>
                     </View>
                   </View>
                 </View>
               </View>
               <View style={ (index === data.length - 1) ? null : styles.dividerHorizontal}/>
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
