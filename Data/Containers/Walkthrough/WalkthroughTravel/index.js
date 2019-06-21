
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container,Header,Left,Right,Body } from 'native-base';
import RNSwiper from './RNSwiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {Images, Fonts, Metrics, Colors } from '../../../Themes/';

const activeindicator= 0;

export default class WalkthroughTravel extends Component {

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

   _renderRow (rowData) {
     var temp = ''
     if(rowData.flag==true){
       temp = styles.activeDot
     } else {
       temp = styles.dot
     }
     return (
       <View>
         <View style={temp}/>
       </View>
     )
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
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

		let bgImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_back_wtthree.png'
		};
		let swiperImageOne = Images.ic_img02_wtthree;
		let swiperImageTwo = Images.ic_img02_wtthree;
		let swiperImageThree = Images.ic_img02_wtthree;

    var data = [
      {
        id: 1,
        image: swiperImageOne,
        title: 'What will you do?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        flag: true
      },
      {
        id: 2,
        image: swiperImageTwo,
        title: 'Where does it come from?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: swiperImageThree,
        title: 'What will you do?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: swiperImageOne,
        title: 'Where does it come from?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        <ImageBackground source={bgImage} style={styles.imgContainer}>
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

          <View style={{backgroundColor:'transparent'}}>
           <View style={styles.slidesec}>
             <RNSwiper
               minimumScale={0.9}
               minimumOpacity={0.5}
               overlap={100}
               cardWidth={Metrics.WIDTH * 0.85}
               duration={100}
               swipeThreshold={100}
               onSwipeUp={this.onSwipeUp}
               onSwipeDown={this.onSwipeDown}
               onSwipeRight={()=>this.onSwipeRight()}
               onSwipeLeft={()=>this.onSwipeLeft()}
               onPress={this.onPress}
               swiperDetails={data}>
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
             <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
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
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
