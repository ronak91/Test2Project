
import React, { Component } from 'react';
import { View,Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, ListView,BackHandler, I18nManager } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Title, Icon, List, ListItem, Text, Separator } from 'native-base';
import { Metrics, Colors } from '../../../../Themes/';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Images from '../../../../Themes/Images';
// Screen Styles
import styles from './MessageStyles';

const profileOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.png";
const profileTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user02_s21_29.png";
const profileThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user03_s21_29.png";
const profileFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user04_s21_29.png";
const profileFive = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user05_s21_29.png";
const profileSix = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user06_s21_29.png";
const profileSeven = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user07_s21_29.png";

export default class Message extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
      {
        id: 1,
        profile: {uri:profileOne},
        name: 'Justin Adam',
        recentMsg: 'I believe I have a very good chance. ',
        time: '11:04 AM',
      },
      {
        id: 2,
        profile: {uri:profileTwo},
        name: 'Geoff & Jeff',
        recentMsg: 'No rush! I’m around over the weekend too if I can be of any help.',
        time: '9:45 AM',
      },
      {
        id: 3,
        profile: {uri:profileThree},
        name: 'Ethyl Stansbury',
        recentMsg: 'Ok :)',
        time: ' 6:23 PM',
      },
      {
        id: 4,
        profile: {uri:profileFour},
        name: 'Brody Larson',
        recentMsg: 'Sounds good to me!',
        time: ' 9:32 PM',
      },
      {
        id: 5,
        profile: {uri:profileFive},
        name: 'Chieko, Adam & Tom',
        recentMsg: 'Thanks guys!',
        time: 'Yesterday',
      },
      {
        id: 6,
        profile: {uri:profileSix},
        name: 'Design Team',
        recentMsg: 'Ok on se voit à Luzignat dans 20 minutes alors ;)',
        time: 'Yesterday',
      },
      {
        id: 7,
        profile: {uri:profileSeven},
        name: 'Leslie Crew',
        recentMsg: 'Basketball was fun! Thanks for coming.',
        time: 'Yesterday',
      },
    ]

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Walkthrough')
	   	return true;
	  });
	}

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  onLearnMore = (user) => {
    // this.props.navigation.navigate('NearByDetail');
    Actions.tab_2_2();
  };

  _renderRow(rowData) {
    return(
      <View style={styles.rowMain}>
        <TouchableOpacity onPress={()=>this.onLearnMore()}>
          <View style={styles.listContent}>
            <Image source={rowData.profile} style={styles.profile}/>
            <View style={styles.subRow}>
              <View style={styles.headerContent}>
                <Text style={styles.headerText}>{rowData.name}</Text>
                <View style={styles.headerRight}>
                  <Text style={styles.time}>{rowData.time}</Text>
                  {
                    (I18nManager.isRTL)
                    ?
                        <Icon name="ios-arrow-back-outline" style={styles.arrowForward}/>
                    :
                        <Icon name="ios-arrow-forward-outline" style={styles.arrowForward}/>
                  }

                </View>
              </View>
              <Text numberOfLines={2} style={styles.recentMsg}>{rowData.recentMsg}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Separator style={styles.separatorStyle}/>
      </View>
    )
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <ImageBackground source={Images.gradientTitleBarBG} style={styles.header}>
          <Header androidStatusBarColor={Colors.transparent} style={styles.header}>
              {/* Take up the space */}
              <Left style={{flex:1}}>
                <TouchableOpacity onPress={Actions.pop}>
                {
                  (I18nManager.isRTL)
                  ?
                      <FontAwesome name="angle-right" size={30} color="white"/>
                  :
                      <FontAwesome name="angle-left" size={30} color="white"/>
                }
                </TouchableOpacity>
              </Left>
              {/* Title */}
              <Body style={styles.body}>
                <Title style={styles.titleTxt}> Message </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=> alert("New Message")}>
                  <Image source={Images.createMessage} style={styles.iconSize} />
                </TouchableOpacity>
              </Right>
          </Header>
        </ImageBackground>
        <Content style={styles.content}>
          <List
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            renderLeftHiddenRow={data =>
              <View style={styles.swipeButton}>
                <Button full onPress={() => alert("chat")} style={[styles.buttonStyle,{backgroundColor: '#00aeef'}]}>
                  <Image source={Images.chatIcon} style={styles.iconSize} />
                </Button>
                <Button full onPress={() => alert("Video call")} style={[styles.buttonStyle,{backgroundColor: '#0072bc'}]} >
                  <Image source={Images.videoIcon} style={styles.iconSize} />
                </Button>
              </View>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <View style={styles.swipeButton}>
                <Button onPress={() => alert("Lock")} style={[styles.buttonStyle,{backgroundColor: '#ff8c00'}]}>
                  <EvilIcons name="lock" size={35} color="white"/>
                </Button>
                <Button onPress={() => alert("delete")} style={[styles.buttonStyle,{backgroundColor: '#e81123'}]}>
                  <FontAwesome name="trash-o" size={24} color="white"/>
                </Button>
              </View>
            }
            leftOpenValue={(Metrics.WIDTH * 0.3)}
            rightOpenValue={-(Metrics.WIDTH * 0.3)}
          />
        </Content>
      </Container>
    );
  }
}
