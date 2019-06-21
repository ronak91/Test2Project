
import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,FlatList, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import {View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';
/**
 *  Social Screen
 */
export default class Social01 extends Component {

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

    const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";
    const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png";
    const postImageUri = "https://antiqueruby.aliansoftware.net//Images/social/ic_post_sone.png";

    var data = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        postImage: '',
        profileImage: {uri:profileImageTwo},
        time: '8 mins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        name: 'Calandra Herwig',
        postImage: {uri:postImageUri},
        profileImage: {uri:profileImageFour},
        time: '15 mins',
        description: 'Sed iaculis elit velit, at faucibus metus imperdiet sed. Sed dictum, nunc et tempor accumsan, libero turpis ullamcorper quam, ut efficitur dolor augue sed sapien.',
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
              <Text style={styles.textTitle}>News Feed</Text>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>alert("Search")}>
                <Ionicons name="ios-search" size={25} color='white'/>
              </TouchableOpacity>
            </Right>
        </Header>

        <View style={styles.mainRow}>
          <Left>
            <View style={styles.mainRowTextView}>
              <Text style={styles.mainRowFirstText}>Suggest connections</Text>
              <Text style={styles.mainRowSecondText}>People that you may know</Text>
            </View>
          </Left>
          <View style={styles.suggestedPeopleImgView}>
            <Image style={styles.sugestedPeopleImgOne} source={{uri:profileImageOne}}/>
            <Image style={styles.sugestedPeopleImgTwo} source={{uri:profileImageTwo}}/>
            <Image style={styles.sugestedPeopleImgThree} source={{uri:profileImageThree}}/>
          </View>
        </View>
        <Content>
        <View style={styles.rowMainView} animation="bounceInLeft" duration={1100} delay={1400}>
        {
        data.map((item, index) => {
         return (
           <View style={styles.rowBg} key={index}>
             <View style={styles.rowHeaderView}>
               <Image style={styles.profileImg} source={item.profileImage}/>
               <View style={styles.rowHeaderNameView}>
                 <Text style={styles.rowNameTxt}>{item.name}</Text>
                 <Text style={styles.rowTimeTxt}>{item.time}</Text>
               </View>

               <Right style={styles.moreIcon}>
                <TouchableOpacity onPress={()=>alert("More")}>
                  <Ionicons name="ios-more" size={25} color="#d4d4d4" />
                </TouchableOpacity>
               </Right>
             </View>
             <View style={styles.dividerHorizontal}/>
             <View style={styles.rowDescriptionView}>
               <Text style={styles.rowDescTxt}>{item.description}</Text>
             </View>
             {
               (item.postImage == '') ? null :
               <Image style={styles.postDescImage} source={item.postImage}></Image>
             }
            <View style={styles.dividerHorizontal}/>
             <View style={styles.likeCommentShareView}>
               <View style={styles.likeView}>
                 <TouchableOpacity onPress={()=>alert("Like")}>
                   <FontAwesome name="heart" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.likeCommentShareText}>Like</Text>
                 <Right><View style={styles.dividerVertical}/></Right>
               </View>
               <View style={styles.commentView}>
                 <TouchableOpacity onPress={()=>alert("Comment")}>
                   <Image style={styles.likeCommentShareImage} source={Images.comments}/>
                 </TouchableOpacity>
                 <Text style={styles.likeCommentShareText}>Comment</Text>
                 <Right><View style={styles.dividerVertical}/></Right>
               </View>
               <View style={styles.shareView}>
                 <TouchableOpacity onPress={()=>alert("Share")}>
                   <MaterialIcons name="share" size={18} color="#d4d4d4" />
                 </TouchableOpacity>
                 <Text style={styles.likeCommentShareText}>Share</Text>
               </View>
             </View>

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
