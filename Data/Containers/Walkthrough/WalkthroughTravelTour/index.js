
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughTravelTour extends Component {

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
		let bgImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/backg_wt19.png'
		};

    var data = [
      {
        id: 1,
        title: 'Travel better',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      },
      {
        id: 2,
        title: 'Travel better',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      },
      {
        id: 3,
        title: 'Travel better',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      },
      {
        id: 4,
        title: 'Travel better',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      },
      {
        id: 5,
        title: 'Travel better',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
      },
    ]

    return(
     <Container>
        <ImageBackground source={bgImage} style={styles.imgContainer}>
          <View style={styles.slidesec}>
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
                   <View style={styles.slide} key={index}>
                     <Text style={styles.headertext}>
                      {item.title}
                     </Text>
                     <Text style={styles.desctext}>
                      {item.description}
                     </Text>
                     <View style={styles.btnsec}>
                        <TouchableOpacity style={[styles.bottomBtn, {backgroundColor: '#A9A9A950'}]} onPress={()=>alert("No Thanks")}>
                          <Text style={styles.btnTextStyle}>No Thanks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bottomBtn, {backgroundColor: '#0691ce'}]} onPress={()=>alert("Enable")}>
                          <Text style={styles.btnTextStyle}>Enable</Text>
                        </TouchableOpacity>
                     </View>
                   </View>
                 )
               })
             }
          </Swiper>
          </View>
        </ImageBackground>
    </Container>

    );
  }
}
