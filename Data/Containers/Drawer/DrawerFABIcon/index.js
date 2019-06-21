import React, { Component } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity, Platform, ImageBackground, BackHandler, ListView, I18nManager} from 'react-native';
import { Container, Content, Button, Icon, Right, Item, Input, Header, Left, Body, Title, Fab} from 'native-base';
import { FloatingAction } from 'react-native-floating-action';

// Screen Styles
import styles from './styles';
import { Metrics,Images } from '../../../Themes/';

const backGround = "https://antiqueruby.aliansoftware.net//Images/drawer/image_living_room1_dnine.jpg";

const actions = [
  {
    text: 'Search',
    icon: Images.search_fab,
    name: 'Search',
    color: '#0691ce',
    position: 1,
  },
  {
    text: 'Artical',
    icon: Images.artical_fab,
    name: 'Artical',
    color: '#0691ce',
    position: 2
  },
  {
    text: 'Message',
    icon: Images.message_fab,
    name: 'Message',
    color: '#0691ce',
    position: 3
  },
  {
    text: 'Activity',
    icon: Images.bell_fab,
    name: 'Activity',
    color: '#0691ce',
    position: 4
  },
  {
    text: 'Favorite',
    icon: Images.favorite_fab,
    name: 'Favorite',
    color: '#0691ce',
    position: 5
  },
  {
    text: 'Friends',
    icon: Images.friends_fab,
    name: 'Friends',
    color: '#0691ce',
    position:6
  }
];

export default class DrawerFABIcon extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: true,
    };
  }

  componentWillMount(){
    var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Drawer')
	   	return true;
	  });
  }

  render(){

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }

    return(
      <ImageBackground source={{uri:backGround}} style={styles.mainSec}>
        <Container style={styles.mainSec}>
          <Header style={styles.header}>
            <Left style={styles.left} transparent>
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Drawer')}>
              {
                (I18nManager.isRTL)
                ?
                    <Icon name='ios-arrow-forward' style={styles.iconColor}/>
                :
                    <Icon name='ios-arrow-back' style={styles.iconColor}/>
              }
              </TouchableOpacity>
            </Left>

            <Body style={styles.body}>
              <Title style={styles.headerTitle}>Category</Title>
            </Body>

            <Right style={styles.right}>
            </Right>
          </Header>

          <Content style={styles.contentSec}>
          {/*body part*/}
          </Content>
          <FloatingAction
            visible={true}
            actions={actions}
            buttonColor={'#0691ce'}
            overlayColor={'rgba(0,0,0,0.9)'}
            distanceToEdge={(Metrics.HEIGHT * 0.04)}
            onPressItem={(name) => alert(name)} />
        </Container>
      </ImageBackground>
    );

  }

}
