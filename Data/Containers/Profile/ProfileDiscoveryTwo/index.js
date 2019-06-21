
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,View,BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title,Footer,FooterTab,Icon} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../../Themes/Images';
import CarouselList from './CarouselList.js'
// Screen Styles
import styles from './styles';

/**
 *  Profile Screen
 */
export default class ProfileDiscoveryTwo extends Component {

  constructor(props) {
 		super(props);
    this.state = {
      selectedTab: "Discovery"
    };
 	}

  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'NearBy':
        return (<CarouselList/>);
        break;
      case 'Message':
        return (<CarouselList/>);
        break;
      case 'Discovery':
        return (<CarouselList/>);
        break;
      case 'Favorite':
        return (<CarouselList/>);
        break;
      case 'Profile':
        return (<CarouselList/>);
        break;
      default:
    }
  }

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

  render(){
		StatusBar.setBarStyle('dark-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#FFFFFF',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
      <Header
          androidStatusBarColor={"#FFFFFF"}
          style={styles.header}>

          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
              <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color="black"/>
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.headerTxt}>Discovery</Text>
          </Body>

          <Right style={styles.right}>
            <Button transparent>
            </Button>
          </Right>
      </Header>
      <View style={styles.main}>
        {this.renderSelectedTab()}
      </View>
        <FooterTab style={styles.footerTabBg}>
          <Button vertical
            active={this.setState.selectedTab==='NearBy'}
            onPress={() => this.setState({selectedTab: 'NearBy'})}>
            {
              (this.state.selectedTab == 'NearBy') ?
              <View style={{justifyContent: 'center'}}>
              <MaterialCommunityIcons name="map-marker-radius" size={22} color="#0691ce"/>
              </View>
              :
              <View style={{justifyContent: 'center'}}>
              <MaterialCommunityIcons name="map-marker-radius" size={22} color="#929292"/>
              </View>
            }
            <Text style={styles.footerTitle}>Nearby</Text>
          </Button>
          <Button vertical
            onPress={() => this.setState({selectedTab: 'Message'})}>
            {
              (this.state.selectedTab == 'Message') ?
              <Image source={Images.messageBlueIcon} style={styles.messageIcon}/>
              :
              <Image source={Images.messageIcon} style={styles.messageIcon}/>
            }
            <Text style={[{marginTop: 5},styles.footerTitle]}>Message</Text>
          </Button>
          <Button vertical
            onPress={() => this.setState({selectedTab: 'Discovery'})}>
            {
              (this.state.selectedTab == 'Discovery') ?
              <View style={{justifyContent: 'center'}}>
                <Ionicons name="ios-albums-outline" size={22} color="#0691ce"/>
              </View>
              :
              <View style={{justifyContent: 'center'}}>
                <Ionicons name="ios-albums-outline" size={22} color="#929292"/>
              </View>
            }
            <Text style={[{marginTop: 3},styles.footerTitle]}>Discovery</Text>
          </Button>
          <Button vertical
            onPress={() => this.setState({selectedTab: 'Favorite'})}>
            {
              (this.state.selectedTab == 'Favorite') ?
              <View style={{justifyContent: 'center'}}>
                <EvilIcons name="heart" size={28} color="#0691ce"/>
              </View>
              :
              <View style={{justifyContent: 'center'}}>
                <EvilIcons name="heart" size={28} color="#929292"/>
              </View>
            }
            <Text style={[{marginTop: 3},styles.footerTitle]}>Favourite</Text>
          </Button>
          <Button vertical
            onPress={() => this.setState({selectedTab: 'Profile'})}>
            {
              (this.state.selectedTab == 'Profile') ?
              <View style={{justifyContent: 'center'}}>
                <EvilIcons name="user" size={28} color="#0691ce"/>
              </View>
              :
              <View style={{justifyContent: 'center'}}>
                <EvilIcons name="user" size={28} color="#929292"/>
              </View>
            }
            <Text style={[{marginTop: 3},styles.footerTitle]}>Profile</Text>
          </Button>
        </FooterTab>
      </Container>
    );
  }
}
