
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Input, Header, Left, Body} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
// Screen Styles
import styles from './styles';

export default class WalkthroughRecipe extends Component {

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
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_bg_wtnine.png'
		};

    var data = [
      {
        id: 1,
        title: 'Remember Moment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        title: 'Remember Moment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        title: 'Remember Moment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        title: 'Remember Moment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ]

    return(
     <Container style={styles.container}>
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
                     </View>
                   )
                 })
               }
           </Swiper>
         </View>
        </ImageBackground>

       <View style={styles.btnsec}>
        <Text style={styles.signUptext}>Sign up to get started</Text>
        <View style={styles.fbEmailBtnBg}>
          <Button bordered rounded light style={styles.btnBg} onPress={()=> alert('Facebook SignUp')}>
              <FontAwesome name="facebook" size={22} color="white"/>
              <Text style={styles.buttonText}>Facebook</Text>
          </Button>
          <Button bordered rounded light style={styles.btnBg} onPress={()=> alert('Email SignUp')}>
              <Zocial name="email" size={22} color="white"/>
              <Text style={styles.buttonText}>Email</Text>
          </Button>
        </View>
       </View>
    </Container>

    );
  }
}
