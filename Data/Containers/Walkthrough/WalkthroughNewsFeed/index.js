
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Item, Input, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNSwiper from './RNSwiper';
import {Images, Fonts, Metrics } from '../../../Themes/';
// Screen Styles
import styles from './styles';
const activeindicator= 0;

export default class WalkthroughNewsFeed extends Component {

  constructor(props) {
 		super(props);

     		this.state = {
          index: '',
        };
        const dataObjects = [
          {flag:true},
          {flag:false},
          {flag:false},
        ]
        const rowHasChanged = (r1, r2) => r1 !== r2

        // DataSource configured
        const ds = new ListView.DataSource({rowHasChanged})
        this.state = {
           dataSource: ds.cloneWithRows(dataObjects),
           activeindicator: 0,
        };
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Walkthrough')
	   	return true;
	  });
	}

  onSwipeUp(index){
    //parameter returned is the index of active child
    console.log("first");
    console.log(index)
  }

  onSwipeDown(index){
    //parameter returned is the index of active child
    console.log("second");
    console.log(index)
  }

  onSwipeLeft(index){
   //parameter returned is the index of active child
   console.log("third");
   this.setState({activeindicator: (this.state.activeindicator + 1)})
   console.log(index)
  }
  onSwipeRight(index){
     //parameter returned is the index of active child
     console.log("forth");
     this.setState({activeindicator: (this.state.activeindicator - 1)})
     console.log(index)
   }

  onPress(index){
    //parameter returned is the index of active child
    console.log("Third");
    console.log(index)
  }
  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}

    var data = [
      {
        id: 1,
        image: Images.layout_image_wtsixteen,
      },
      {
        id: 2,
        image: Images.layout_image_wtsixteen,
      },
      {
        id: 3,
        image: Images.layout_image_wtsixteen,
      },
      {
        id: 4,
        image: Images.layout_image_wtsixteen,
      },
    ]
      var indicatordata = []
      for(var i=0; i<data.length;i++){
        indicatordata.push(
          <View key={i}>
          {
            (i == this.state.activeindicator) ?
            <View style={styles.activeDot}></View>
            :
            <View style={styles.dot}></View>
          }
          </View>
        )
      }
    return(
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Walkthrough')}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
          </Body>
          <Right style={styles.right}/>
        </Header>
        <View style={styles.contentSec}>
         <Text style={styles.headertext}>New Feeds</Text>
         <Text style={styles.desctext}>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</Text>
         <View style={styles.slidesec}>
            <RNSwiper
              minimumScale={0.9}
              minimumOpacity={0.5}
              overlap={50}
              cardWidth={Metrics.WIDTH * 0.65}
              duration={100}
              swipeThreshold={100}
              onSwipeUp={this.onSwipeUp}
              onSwipeDown={this.onSwipeDown}
              onSwipeRight={()=>this.onSwipeRight()}
              onSwipeLeft={()=>this.onSwipeLeft()}
              onPress={this.onPress}
              backgroundColor='red'
              swiperDetails={data}
              >
              {
               data.map((item, index) => {
                  return (
                    <View style={styles.slide} key={index}>
                      <Image source={item.image} style={styles.sliderImage}/>
                    </View>
                  )
                })
              }
            </RNSwiper>
          </View>

          <View style={styles.indicatorBg}>
            {
              data.map((item, index) => {
                return(
                  <View key={index}>
                  {
                    (index == this.state.activeindicator) ?
                    <View style={styles.activeDot}></View>
                    :
                    <View style={styles.dot}></View>
                  }
                  </View>
                )
              })
            }
          </View>
        </View>

        <View style={styles.btnSec}>
          <Text style={styles.readyToGetStarted}>READY TO GET STARTED?</Text>

          <TouchableOpacity style={styles.lonInWithFbBg}
              onPress = {() => alert('LogIn with Facebook')}>
            <FontAwesome name="facebook" size={20} color="white"/>
            <Text style={styles.logInWithFbTwitterText}>Login with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lonInWithTwitterBg}
              onPress = {() => alert('LogIn with Twitter')}>
            <FontAwesome name="twitter" size={20} color="white"/>
            <Text style={styles.logInWithFbTwitterText}>Login with Twitter</Text>
          </TouchableOpacity>
        </View>

      </Container>


    );
  }
}
