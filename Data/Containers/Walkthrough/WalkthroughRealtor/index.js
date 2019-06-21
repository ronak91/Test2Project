
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button,Header,Left,Body,Right } from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughRealtor extends Component {

  constructor(props) {
 		super(props);
 		this.state = {};
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Walkthrough')
	   	return true;
	  });
	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}

		const swiperImage = 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_bg_wttwentyone.png'

    var data = [
      {
        id: 1,
        title: "Let's get started!",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 2,
        title: "Let's get started!",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 3,
        title: "Let's get started!",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 4,
        title: "Let's get started!",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.',
      },
    ]

    return(
       <Container style={styles.main}>
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
       <Swiper showsButtons={false}
          autoplay={true}
          autoplayTimeout={2.5}
          activeDot={<View style={styles.activeDot} />}
          dot={<View style={styles.dot} />}>
            {
               data.map((item, index) => {
                return (
                 <View style={styles.slider} key={index}>
                    <Image style={styles.imageContainer} source={{uri:swiperImage}}/>
                    <View style={styles.sliderBelowLayout}>
                      <Text style={styles.headertext}>{item.title}</Text>
                      <Text style={styles.desctext}>{item.description}</Text>
                    </View>
                 </View>
                )
              })
            }
        </Swiper>
        <TouchableOpacity onPress={() => alert('Skip Slide')} style={styles.skipBg}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
