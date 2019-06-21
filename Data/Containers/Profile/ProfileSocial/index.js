
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView,  BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/user_p06.png';

export default class ProfileSocial extends Component {

  constructor(props) {
 		super(props);
 		this.state = {};
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

    var data = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/profile/user_p06.png',
        thumbnail: '',
        comment: '',
        time: '8 mins',
        postImage: [
          {image:'https://antiqueruby.aliansoftware.net//Images/profile/one_p06.png', id:10},
          {image:'https://antiqueruby.aliansoftware.net//Images/profile/two_p06.png', id:20},
          {image:'https://antiqueruby.aliansoftware.net//Images/profile/three_p06.png', id:30},
          {image:'https://antiqueruby.aliansoftware.net//Images/profile/four_p06.png', id:40},
        ],
        likes: 12,
        comments: 35,
      },
      {
        id: 2,
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/profile/user_p06.png',
        thumbnail: 'https://antiqueruby.aliansoftware.net//Images/profile/bgs_p06.png',
        comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
        time: '10 mins',
        postImage: '',
        likes: 12,
        comments: 35,
      },
      {
        id: 3,
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/profile/user_p06.png',
        thumbnail: '',
        comment: "Hey there, I'm using Social Midea",
        time: '1 hour',
        postImage: '',
        likes: 12,
        comments: 35,
      },
    ]

    return(
     <Container style={{backgroundColor: '#2d324f'}}>
       <Header
         androidStatusBarColor={'#0000'}
         style={styles.header}>

         {/* Take up the space */}
         <Left style={styles.left}>
           <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
            <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={{ color: '#fff' }}/>
           </TouchableOpacity>
         </Left>

         {/* Title */}
         <Body style={styles.body}>
           <Title style={styles.headerTitle}>
             Profiles
           </Title>
         </Body>

         {/* Right Icon */}
         <Right style={styles.right}>
           <Button transparent>
           </Button>
         </Right>
       </Header>
       <View style={styles.headerContainer}>
         <View style={styles.profileContainer}>
           <View style={styles.profileBodySec}>
             <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
             <View style={styles.profileDetail}>
               <Text style={styles.profileName}>Johnie Cornwall</Text>
               <Text style={styles.post}>Graphic Design</Text>
             </View>
           </View>
           <TouchableOpacity style={(this.state.isFavorite) ? styles.activeButton : styles.normalButton} onPress={()=>this.setState({isFavorite: !this.state.isFavorite})}>
             <Text style={(this.state.isFavorite) ? styles.activeButtonTxt : styles.normalButtonTxt}>FOLLOW</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.separatorStyle} />
         <View style={styles.followContainer}>
           <View style={styles.followSec}>
             <Text style={styles.followCount}>1434</Text>
             <Text style={styles.followText}>Followers</Text>
           </View>
           <View style={styles.verticalSeparator} />
           <View style={styles.followSec}>
             <Text style={styles.followCount}>1121</Text>
             <Text style={styles.followText}>Following</Text>
           </View>
           <View style={styles.verticalSeparator} />
           <View style={styles.followSec}>
             <Text style={styles.followCount}>4507</Text>
             <Text style={styles.followText}>Likes</Text>
           </View>
         </View>
       </View>

       <Content style={styles.slidesec}>
        {
          data.map((item, index) => {
            return (
              <View style={styles.listContainer} key={index}>
                <View style={styles.slide}>

                  <Image source={{uri:item.profile}} style={styles.imageStyle}/>

                  <View style={styles.notificationContent}>
                    <View style={styles.titleBar}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.notification}>{item.time}</Text>
                    </View>
                    {
                      (item.comment == '') ? null :
                      <Text style={styles.comments}>{item.comment}</Text>
                    }

                    {
                      (item.thumbnail == '') ? null :
                      <Image source={{uri:item.thumbnail}} style={styles.thumbnail}/>
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
                              <View style={styles.imgs} key={index}>
                                <Image source={{uri:itemImage.image}} style={styles.postedImage}/>
                              </View>
                            )
                          })
                        }
                      </ScrollView>
                    }
                    <View style={styles.bottombar}>
                      <View style={styles.likeContent}>
                        <FontAwesome name="heart" size={15} color="#d4d4d4" style={styles.hearticon}/>
                        <Text style={styles.textStyle}>{item.likes}</Text>
                      </View>
                      <View style={styles.likeContent}>
                        <Ionicons name="md-chatboxes" size={17} color="#d4d4d4" style={styles.hearticon}/>
                        <Text style={styles.textStyle}>{item.comments}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.separatorStyle}></View>
              </View>
            )
          })
        }
       </Content>
    </Container>

    );
  }
}
