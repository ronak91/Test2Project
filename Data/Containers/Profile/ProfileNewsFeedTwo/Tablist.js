import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,FlatList, BackHandler} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './tabliststyle';
import {View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";
const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png";
const postImageUri = "https://antiqueruby.aliansoftware.net//Images/social/ic_post_sone.png";

export default class Tablist extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render()
  {
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
        <Content>
          <View style={styles.rowMainView}>
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
    )
  }
}
