
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';


const headerBG = 'https://antiqueruby.aliansoftware.net//Images/profile/background_p18.png';
const firiendProOne = 'https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18.png';
const firiendProTwo = 'https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18_02.png';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class ProfileNewsFeedThree extends Component {

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

    var data = [
      {
        id: 1,
        image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_user1.png',
        notifications: 3,
        color: '#f7a235'
      },
      {
        id: 2,
        image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_user2.png',
        notifications: 11,
        color: '#76cf25'
      },
      {
        id: 3,
        image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_user3.png',
        notifications: 52,
        color: '#ed1c24'
      },
      {
        id: 4,
        image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_user4.png',
        notifications: 37,
        color: '#c5559d'
      },
      {
        id: 5,
        image: 'https://antiqueruby.aliansoftware.net//Images/profile/ic_user5.png',
        notifications: 4,
        color: '#0691ce'
      },
      {
        id: 6,
        image: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_two_so10.png',
        notifications: 41,
        color: '#f7a235'
      },
    ]

    var dataFriends = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        profile: firiendProOne,
        notification: 'followed you',
        comment: '',
        time: 'Just now',
      },
      {
        id: 2,
        name: 'Michal Lampley',
        profile: firiendProTwo,
        notification: 'commented your post',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '25 mins ago',
      },
      {
        id: 3,
        name: 'Marissa Brackett',
        profile: firiendProOne,
        notification: 'liked your post',
        comment: '',
        time: '45 mins ago',
      },
      {
        id: 4,
        name: 'Kayleen Batz',
        profile: firiendProTwo,
        notification: 'followed you',
        comment: '',
        time: '2 hours ago',
      },
      {
        id: 5,
        name: 'Antonia Cheers',
        profile: firiendProOne,
        notification: 'liked your photo',
        comment: '',
        time: '01:35 PM',
      },
      {
        id: 6,
        name: 'Drucilla Mangione',
        profile: firiendProTwo,
        notification: 'commented your post',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore ali quare eprehenderit.',
        time: '04:23 PM',
      },
    ]

    return(
     <Container style={styles.main}>

       <Content>
         <ImageBackground source={{uri:headerBG}} style={styles.headerImageBG}>

           <Header style={styles.header}>
               <Left style={styles.left}>
                 <TouchableOpacity style={styles.backArrow}  onPress={()=>that.props.navigation.navigate('Profile')}>
                   <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                 </TouchableOpacity>
               </Left>
               <Body style={styles.body}>
                 <Text style={styles.textTitle}>Johnie Cornwall</Text>
               </Body>
               <Right style={styles.right}>

               </Right>
           </Header>

         </ImageBackground>
         <View style={styles.profileContent}>
           <Text style={styles.level}>LEVEL</Text>
           <Text style={styles.levelNo}>5</Text>
         </View>
         <View style={styles.levelDescView}>
           <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</Text>
           <View style={styles.friendView}>
             <Text style={styles.friendText}>Friends(25)</Text>
             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
             {
               data.map((item,index)=>{
                 return(
                   <View key={index} style={styles.friendListView}>
                     <Image source={{uri:item.image}} style={styles.imgView}/>
                     <View style={[styles.notiView, {backgroundColor: item.color}]}>
                       <Text style={styles.notiText}>{item.notifications}</Text>
                     </View>
                   </View>
                 )
               })
             }
             </ScrollView>
           </View>
         </View>

         <View style={styles.listMainView}>
          {
            dataFriends.map((item, index) => {
              return (
                <View style={styles.rowBg} key={index}>
                  <View style={styles.slide}>

                    <Image source={{uri:item.profile}} style={styles.imageStyle}/>

                    <View style={styles.notificationContent}>
                      <View style={styles.titleBar}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.notification}>{item.notification}</Text>
                      </View>
                      {
                        (item.comment == '') ? null :
                        <Text style={styles.comments}>{item.comment}</Text>
                      }
                      <View style={styles.bottombar}>
                        <Ionicons name="md-time" size={12} color="#d4d4d4" />
                        <Text style={styles.time}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.separatoeStyle}></View>
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
