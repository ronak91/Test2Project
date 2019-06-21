
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Item, Input, Header, Left, Body } from 'native-base';
import RNSwiper from './RNSwiper';
import styles from './styles';
import {Images, Fonts, Metrics, Colors } from '../../../Themes/';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
const activeindicator= 0;

export default class WalkthroughRestaurant extends Component {

  constructor(props) {
 		super(props);
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
       activeIndex: 0,
       slideIndex: 0,
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

  componentWillReceiveProps(props) {
    this.setState(this.initState(props));
    if(props.yourNewPageIndex){
      this.scrollBy(props.yourNewPageIndex)
    }
}

  swipeNext(){

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

    onSwipeLeft(){
     //parameter returned is the index of active child
     this.setState({activeindicator: (this.state.activeindicator + 1)})
    }

    onSwipeRight(){
       //parameter returned is the index of active child
       this.setState({activeindicator: (this.state.activeindicator - 1)})
     }

    onPress(index){
      //parameter returned is the index of active child
      console.log("Third");
      console.log(index)
    }

    _nextClick(index){
      const currentpage=this.state.activeindicator;
      console.log(currentpage);
      if(currentpage<3){
        this.refs.swiper.swipeLeft()
        this.setState({activeindicator: (this.state.activeindicator + 1)})
      }
    }

    _prevClick(index){
        this.refs.swiper.swipeRight()
        this.setState({activeindicator: (this.state.activeindicator - 1)})
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

    var data = [
      {
        id: 1,
        image:  Images.ic_img01_wtthree,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        // flag: true,
      },
      {
        id: 2,
        image: Images.ic_img01_wtthree,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: Images.ic_img01_wtthree,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: Images.ic_img01_wtthree,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]


    return(
       <Container style={{}}>
        <ImageBackground source={bgImage} style={styles.imgContainer}>
          <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
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
           <View style={styles.slidesec}>

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

             <RNSwiper
               ref='swiper'
               minimumScale={0.9}
               minimumOpacity={0.5}
               overlap={60}
               cardWidth={Metrics.WIDTH * 0.85}
               duration={100}
               swipeThreshold={100}
               onSwipeUp={this.onSwipeUp}
               onSwipeDown={this.onSwipeDown}
               onSwipeRight={()=>this.onSwipeRight()}
               onSwipeLeft={()=>this.onSwipeLeft()}
               onPress={this.onPress}
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

             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.nextButton}  onPress={() => this._nextClick()}>
                 <Text style={styles.nextText}>NEXT</Text>
               </TouchableOpacity>
             </View>
           </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
