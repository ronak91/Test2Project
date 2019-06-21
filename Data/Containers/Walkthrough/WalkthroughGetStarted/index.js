
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughGetStarted extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      header: 'Let\'s get started!'
    };
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
		let screens = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/back_wt13.png'
		};

    var data = [
      {
        id: 1,
        title: 'VOICE CONTROL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'VOICE CONTROL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        title: 'VOICE CONTROL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        title: 'VOICE CONTROL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

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
       <View style={styles.headersec}>
        <Text style={styles.headertext}>{this.state.header}</Text>
       </View>
       <View style={styles.slidesec}>
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />}>
             {
              data.map((item, index) => {
                 return (
                   <View key={index}>
                     <Image source={screens} style={styles.imgStyle}/>
                   </View>
                 )
               })
             }
         </Swiper>
       </View>
       <View style={styles.btnsec}>
         <TouchableOpacity onPress={()=> alert('Sign Up')}><Text style={styles.buttonText}>New? Sign Up</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> alert('Sign In')}><Text style={styles.buttonText}>Sign In</Text></TouchableOpacity>
       </View>
    </Container>

    );
  }
}
