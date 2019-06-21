import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import { AdMobBanner } from 'react-native-admob';

// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

export default class BannerAd extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('AdMob')
      return true;
    });
  }

  constructor(props) {
    super(props);
 		this.state = {};
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    return(

      <Container style={styles.main}>
          <Header style={styles.header}>
              <Left style={styles.left}>
                <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('AdMob')}>
                  <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                </TouchableOpacity>
              </Left>
              <Body style={styles.body}>
                <Text style={styles.textTitle}>Banner Ad</Text>
              </Body>
              <Right style={styles.right}>

              </Right>
          </Header>

          <Content style={styles.container}>
            <View style={styles.mainView}>
              <AdMobBanner
                style={styles.adView}
                adSize="banner"
                adUnitID=""
                //  Place your Banner Admob unit id above
                // onAdFailedToLoad={error => console.error(error)}
              />

              <AdMobBanner
                style={styles.adView}
                adSize="largeBanner"
                adUnitID=""
              //   Place your Banner Admob unit id above
              //  onAdFailedToLoad={error => console.error(error)}
              />

              <AdMobBanner
                style={styles.adView}
                adSize="mediumRectangle"
                adUnitID=""
                // Place your Banner Admob unit id above
                //  onAdFailedToLoad={error => console.error(error)}
              />
            </View>
          </Content>
      </Container>
    );
  }
}
