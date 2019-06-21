import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, TouchableOpacity,BackHandler,Animated, I18nManager} from 'react-native';
import { Container, Button, Right, Header, Left, Body, Badge} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

//screen styles
import styles from './styles';
import Images from '../../../Themes/Images';

export default class WalkthroughShopping extends Component {

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
    var footerStyle = ''
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    const swiperImage = 'https://antiqueruby.aliansoftware.net/Images/walkthrough/ic_bg_wt_02.png'

    var data = [
      {
        id: 1,
        title: 'Egg Chair von Arne Jacobsen',
        type: 'Chaise Lounge',
        price: '3.2000,00 €',
      },
      {
        id: 2,
        title: 'Egg Chair von Arne Jacobsen1',
        type: 'Chaise Lounge1',
        price: '3.800,00 €',
      },
      {
        id: 3,
        title: 'Egg Chair von Arne Jacobsen2',
        type: 'Chaise Lounge2',
        price: '4.200,00 €',
      },
    ]


    var dataContent = [
      {
        id: 1,
        image: {uri:swiperImage},
      },
      {
        id: 2,
        image: {uri:swiperImage},
      },
      {
        id: 3,
        image: {uri:swiperImage},
      },
    ]

    return(
     <View style={{ backgroundColor:'#2d324f'}}>
       <Header style={styles.header}>
           <Left style={styles.headerLeft}>
             <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Walkthrough')}>
               <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
             </TouchableOpacity>
           </Left>
           <Body style={styles.headerBody}>
           </Body>
           <Right style={styles.headerRight}/>
       </Header>

          <IndicatorViewPager style={styles.indicatorViewPager}>
          {
            data.map((items, index) => {
              return (
                <View key={index} style={styles.slide}>
                  <Swiper
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2.5}
                    activeDot={<View style={styles.activeDot} />}
                    dot={<View style={styles.dot} />}>
                    {
                      dataContent.map((item, index) => {
                        return (
                          <View key={index}>
                            <Image source={item.image} style={styles.sliderImage}/>
                          </View>
                        )
                      })
                    }
                  </Swiper>
                  <View style={styles.contentStyle}>
                    <Text style={styles.headertext}>
                      {items.title}
                    </Text>
                    <Text style={styles.desctext}>
                      {items.type}
                    </Text>
                    <Text style={styles.pricetext}>
                      {items.price}
                    </Text>
                    <TouchableOpacity onPress={()=> alert("Add to cart")} style={styles.addToCartBg}>
                      <Text style={styles.addToCartTxt}>ADD TO CART</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
          </IndicatorViewPager>

      <View style={styles.btnsec}>
         <TouchableOpacity style={styles.cartImgBg}>
           <Image style={styles.cartImg} source={Images.cart} />
           <View style={styles.cartItemCountBg}><Text style={styles.cartCountTxt}>5</Text></View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> alert("Search")} style={{justifyContent:'center'}}>
           <Ionicons name="ios-search" size={25} color="white"/>
         </TouchableOpacity>
      </View>
    </View>

    );
  }
}
