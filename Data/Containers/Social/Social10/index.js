
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social10 extends Component {

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

  _renderImage(postImage) {
    <View style={styles.postImageView}>
    {
      postImage.map((item, index) => {
        return (
          <View style={{flexDirection: 'row'}} key={index}>
            <Text>Hello</Text>
          </View>
        )
      })
    }
    </View>
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
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_one_so10.png',
        notification: 'followed you',
        comment: '',
        time: 'Just now',
        postImage: '',
      },
      {
        id: 2,
        name: 'Michal Lampley',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_two_so10.png',
        notification: 'commented your post',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '25 mins ago',
        postImage: '',
      },
      {
        id: 3,
        name: 'Marissa Brackett',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_three_so10.png',
        notification: 'liked your post',
        comment: '',
        time: '45 mins ago',
        postImage: '',
      },
      {
        id: 4,
        name: 'Kayleen Batz',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile__so10.png',
        notification: 'followed you',
        comment: '',
        time: '2 hours ago',
        postImage: '',
      },
      {
        id: 5,
        name: 'Antonia Cheers',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_five_so10.png',
        notification: 'liked your photo',
        comment: '',
        time: '01:35 PM',
        postImage: [
          {image:'https://antiqueruby.aliansoftware.net//Images/social/like_image_one_so10.png', id:10},
          {image:'https://antiqueruby.aliansoftware.net//Images/social/like_image_two_so10.png', id:20},
          {image:'https://antiqueruby.aliansoftware.net//Images/social/like_image_three_so10.png', id:30},
          {image:'https://antiqueruby.aliansoftware.net//Images/social/like_image_four_so10.png', id:40},
        ],
      },
      {
        id: 6,
        name: 'Drucilla Mangione',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/notification_profile_six_so10.png',
        notification: 'commented your post',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore ali quare eprehenderit.',
        time: '04:23 PM',
        postImage: '',
      },
    ]

    return(
     <Container style={styles.main}>
       <View style={styles.logosec}>
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
             <Title style={styles.headerTitle}>
               Notification
             </Title>
           </Body>

           {/* Right Icon */}
           <Right style={styles.right}>
             <Button transparent>
             </Button>
           </Right>
         </Header>
       </View>
       <Content style={styles.slidesec}>
        {
          data.map((item, index) => {
            return (
              <View style={styles.postMainRow} key={index}>
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
                    {
                      (item.postImage == '') ? null :
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.postImageContent}>
                        {
                          item.postImage.map((itemImage, index) => {
                            return (
                              <View style={styles.postImageView} key={index}>
                                <Image source={{uri:itemImage.image}} style={styles.postedImage}/>
                              </View>
                            )
                          })
                        }
                      </ScrollView>
                    }
                    <View style={styles.bottombar}>
                      <Ionicons name="md-time" size={15} color="#d4d4d4" />
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.separatoeStyle}></View>
              </View>
            )
          })
        }
       </Content>
    </Container>

    );
  }
}
