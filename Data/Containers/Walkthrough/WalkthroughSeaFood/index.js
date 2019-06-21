
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Header,Left,Body} from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screen Styles
import styles from './styles';

export default class WalkthroughSeaFood extends Component {

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

		const swiperImage = 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_bg_wttwenty.png'


    var data = [
      {
        id: 1,
        image: swiperImage,
        title: 'MORE OF WHAT YOU LOVE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: swiperImage,
        title: 'LESS OF WHAT YOU LOVE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: swiperImage,
        title: 'THE STANDARD IPSUM PASSAGE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
      <ImageBackground style={styles.imageContainer} source={{uri:swiperImage}}>
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
          <Swiper
           ref='swiper'
           showsButtons={false}
           loop={true}
           autoplay={false}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slidesec} key={index}>
                     <Text style={styles.headertext}>{item.title}</Text>
                     <Text style={styles.desctext}>{item.description}</Text>
                     <TouchableOpacity style={styles.imgArrowBg} onPress = {() => this.refs.swiper.scrollBy(1)}>
                        <MaterialCommunityIcons name={I18nManager.isRTL ? "arrow-left" : "arrow-right"} size={26} color="#4cd964"/>
                     </TouchableOpacity>
                   </View>
                 )
               })
             }
          </Swiper>
       </Container>
    </ImageBackground>

    );
  }
}
