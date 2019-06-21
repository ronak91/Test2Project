
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughChatApp extends Component {

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
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}
		let swiperImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/iv_pager_w01.png'
		};

    const logoUri = "https://antiqueruby.aliansoftware.net//Images/walkthrough/logofourteen_wt30.png";
    const faceOne = "https://antiqueruby.aliansoftware.net//Images/walkthrough/faceone_wt30.png";
    const faceTwo = "https://antiqueruby.aliansoftware.net//Images/walkthrough/facethree_wt30.png";
		const faceThree = "https://antiqueruby.aliansoftware.net//Images/walkthrough/facetwo_wt30.png";

    var data = [
      {
        id: 1,
        image: swiperImage,
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: swiperImage,
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: swiperImage,
        title: 'Welcome to the App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: swiperImage,
        title: 'Welcome to the App',
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

       <View style={styles.slidesec}>
         <Swiper
           showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />} >
           {
            data.map((item, index) => {
               return (
                 <View style={styles.slide} key={index}>
                   <Image style={styles.logoStyle} source={{uri:logoUri}}/>
                   <View style={styles.contentStyle}>
                     <Text style={styles.headertext}>
                      {item.title}
                     </Text>
                     <Text style={styles.desctext}>
                      {item.description}
                     </Text>
                   </View>

                   <View style={styles.imageContent}>
                      <View style={styles.imageShadow}>
                      <Image style={styles.imageStyle} source={{uri:faceOne}}/>
                      </View>

                      <View style={styles.imageShadow}>
                      <Image style={styles.imageStyle} source={{uri:faceTwo}}/>
                      </View>

                      <View style={styles.imageShadow}>
                      <Image style={styles.imageStyle} source={{uri:faceThree}}/>
                      </View>
                   </View>

                   <TouchableOpacity style={styles.btnsec} onPress={()=>alert("Get started!")}>
                     <Text style={styles.buttonText}>GET STARTED</Text>
                   </TouchableOpacity>
                 </View>
               )
             })
           }
         </Swiper>
       </View>
    </Container>
    );
  }
}
