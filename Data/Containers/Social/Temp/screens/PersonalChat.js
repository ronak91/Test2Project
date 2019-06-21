
import React, { Component } from 'react';
import { Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, ListView } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Title, Icon, List, ListItem, Text, Item, Input, Footer } from 'native-base';
// Screen Styles
import styles from './PersonalChatStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

const profileOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.png";
const profileTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user02_s21_29.png";

export default class PersonalChat extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
      {
        id: 1,
        userId: 1,
        profile: {uri:profileOne},
        message: 'Hi, Emma Roberts. Nice to meet you.',
        currentMsg: false,
      },
      {
        id: 2,
        userId: 1,
        profile: {uri:profileOne},
        message: 'What are you planning to do today?',
        currentMsg: true,
      },
      {
        id: 3,
        userId: 2,
        profile: {uri:profileTwo},
        message: "I'm not sure yet.",
        currentMsg: true,
      },
      {
        id: 4,
        userId: 1,
        profile: {uri:profileOne},
        message: 'Would you like to have lunch with me?',
        currentMsg: true,
      },
      {
        id: 5,
        userId: 2,
        profile: {uri:profileTwo},
        message: 'Yes. When?',
        currentMsg: true,
      },
      {
        id: 6,
        userId: 1,
        profile: {uri:profileOne},
        message: 'Is 11:30AM OK?',
        currentMsg: true,
      },
      {
        id: 7,
        userId: 2,
        profile: {uri:profileTwo},
        message: "Sorry, I didn't hear you. Can you say that again please?",
        currentMsg: true,
      },
      {
        id: 8,
        userId: 1,
        profile: {uri:profileOne},
        message: 'I said, 11:30AM.',
        currentMsg: true,
      },
      {
        id: 9,
        userId: 2,
        profile: {uri:profileTwo},
        message: "Oh, I'm busy then. Can we meet a little later?",
        currentMsg: false,
      },
      {
        id: 10,
        userId: 2,
        profile: {uri:profileTwo},
        message: "Are you free tomorrow?",
        currentMsg: true,
      },
    ]

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  _renderRow(rowData) {

    return(
      <View style={styles.rowMain}>
      {
        (rowData.userId == 1)
        ?
        <View style={[styles.rightChatMain, (rowData.currentMsg) ? {marginBottom:(theme.HEIGHT*0.016), marginTop: 1.5} : {marginVertical: 1.5}]}>
          <LinearGradient locations={[0.1, 0.75]} colors={['#f87362', '#fa6982']} style={styles.rightChatBox}>
            <Text style={{color:'white', backgroundColor: 'transparent', fontSize: 16}}>{rowData.message}</Text>
          </LinearGradient>
          {
            (rowData.currentMsg == true)
            ?
            <View style={styles.rightIndicatorMain}>
              <Image source={images.rightChatIndicator} style={styles.rightIndicator}/>
              <Image source={rowData.profile} style={[styles.profile, {alignSelf: 'flex-end'}]}/>
            </View>
            :
            null
          }
        </View>
        :
        <View style={[styles.leftChatMain, (rowData.currentMsg) ? {marginBottom:(theme.HEIGHT*0.016), marginTop: 1.5} : {marginVertical: 1.5}]}>
          {
            (rowData.currentMsg == true)
            ?
            <View style={styles.leftIndicatorMain}>
              <Image source={rowData.profile} style={styles.profile}/>
              <Image source={images.leftChatIndicator} style={styles.leftIndicator}/>
            </View>
            :
            null
          }
          <View style={[styles.leftChatBox, (rowData.currentMsg) ? {marginLeft:(theme.HEIGHT*0.003)} : {marginLeft: (theme.HEIGHT*0.045)}]}>
            <Text style={{color:'#000', fontSize: 16}}>{rowData.message}</Text>
          </View>
        </View>
      }
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
        <ImageBackground source={images.gradientBG} style={styles.header}>
          <Header
              androidStatusBarColor={theme.PRIMARY_COLOR}
              style={styles.header}>

              {/* Take up the space */}
              <Left style={{flex:1.5}}>
                <TouchableOpacity onPress={Actions.pop} style={styles.left}>
                  <Icon name="ios-arrow-back-outline" style={styles.iconSize}/>
                  <Text style={styles.leftMsg}>Messages</Text>
                </TouchableOpacity>
              </Left>

              {/* Title */}
              <Body style={styles.body}>
                <Title style={{color: theme.HEADER_TITLE_COLOR}}>
                  Emma Roberts
                </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>

              </Right>
          </Header>
        </ImageBackground>
        <Content style={styles.content}>
          <ListView
             style={{paddingBottom: (theme.HEIGHT*0.05)}}
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
             enableEmptySections
             pageSize={4}/>
        </Content>
        <Footer style={styles.footerStyle}>
          <Left style={styles.footerLeft}>
            <TouchableOpacity onPress={()=> alert("Upload Image")} style={styles.footerLeftContent}>
              <Image source={images.cameraIcon} style={styles.iconSizeFooter}/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:2.8}}>
            <Item regular style={styles.messageBox}>
              <Input placeholder='iMessage' placeholderTextColor='#c7c7cc' style={{color:'#363636'}} />
            </Item>
          </Body>
          <Right style={styles.footerRight}>
            <TouchableOpacity onPress={()=> alert("New Message")} style={styles.footerRightContent}>
              <Image source={images.emoji} style={styles.iconSizeFooter}/>
            </TouchableOpacity>
          </Right>
        </Footer>
      </Container>
    );
  }
}
