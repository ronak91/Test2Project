
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Right, Header,Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughGetRide extends Component {

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
		StatusBar.setBarStyle('dark-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
    }

		let swiperImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_image_wtsix.png'
		};

    var data = [
      {
        id: 1,
        image: swiperImage,
        title: 'Discover new place you will love',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: swiperImage,
        title: 'What will you do once?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: swiperImage,
        title: 'Discover new place you will love',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: swiperImage,
        title: 'What will you do twice?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container style={styles.container}>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Walkthrough')}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="#6f6f6f"/>
          </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
        </Body>
        <Right style={styles.right}>
          <TouchableOpacity onPress={()=> alert("Skip is clicked")}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>
        </Right>
       </Header>

       <View style={styles.slidesec}>
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slide} key={index}>
                     <Image source={item.image} style={styles.sliderImage}/>
                     <View style={styles.contentStyle}>
                       <Text style={styles.headertext}>
                        {item.title}
                       </Text>
                       <Text style={styles.desctext}>
                        {item.description}
                       </Text>
                     </View>
                   </View>
                 )
               })
             }
         </Swiper>
       </View>

       <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=> alert("Discover")} style={styles.discoverBg}>
           <Text style={styles.discoverTxt}>DISCOVER</Text>
         </TouchableOpacity>
       </View>
    </Container>

    );
  }
}
