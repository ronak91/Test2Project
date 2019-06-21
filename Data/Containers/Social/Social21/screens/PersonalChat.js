
import React, { Component } from 'react';
import { View,Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, Keyboard, KeyboardAvoidingView,ListView, I18nManager } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Title, Icon, List, ListItem, Text, Item, Input, Footer } from 'native-base';
import Images from '../../../../Themes/Images';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Foundation from 'react-native-vector-icons/Foundation';
import { Metrics, Colors } from '../../../../Themes/';
// Screen Styles
import styles from './PersonalChatStyles';

const profileOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.png";
const profileTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_msg_user02_s21_29.png";

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
      replyTxt: '',
    };
 	}

  onMessage() {
    if(this.state.replyTxt == '') {
      alert("Enter Message");
      return false;
    }
    else
    {
      this._closeKeyboard();
       this.setState({replyTxt: ''});
      alert("Message Sent");
    }
  }

  _closeKeyboard(){
     Keyboard.dismiss();
  }

  _renderRow(rowData) {

    return(
      <View style={styles.rowMain}>
      {
        (rowData.userId == 1)
        ?
        <View style={[styles.rightChatMain, (rowData.currentMsg) ? {marginBottom:(Metrics.HEIGHT*0.016), marginTop: 1.5} : {marginVertical: 1.5}]}>
          <LinearGradient locations={[0.1, 0.75]} colors={['#f87362', '#fa6982']} style={styles.rightChatBox} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <Text style={styles.msgSentTxt}>{rowData.message}</Text>
          </LinearGradient>
          {
            (rowData.currentMsg == true)
            ?
            <View style={styles.rightIndicatorMain}>
              <Image source={Images.rightChatIndicator} style={styles.rightIndicator}/>
              <Image source={rowData.profile} style={[styles.profile, {alignSelf: 'flex-end'}]}/>
            </View>
            :
            null
          }
        </View>
        :
        <View style={[styles.leftChatMain, (rowData.currentMsg) ? {marginBottom:(Metrics.HEIGHT*0.016), marginTop: 1.5} : {marginVertical: 1.5}]}>
          {
            (rowData.currentMsg == true)
            ?
            <View style={styles.leftIndicatorMain}>
              <Image source={rowData.profile} style={styles.profile}/>
              <Image source={Images.leftChatIndicator} style={styles.leftIndicator}/>
            </View>
            :
            null
          }
          <View style={[styles.leftChatBox, (rowData.currentMsg) ? {marginLeft:(Metrics.HEIGHT*0.003)} : {marginLeft: (Metrics.HEIGHT*0.045)}]}>
            <Text style={styles.msgReceiveTxt}>{rowData.message}</Text>
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
        <ImageBackground source={Images.gradientTitleBarBG} style={styles.header}>
          <Header
              androidStatusBarColor={Colors.transparent}
              style={styles.header}>

              {/* Take up the space */}
              <Left style={{flex:1.5}}>
                <TouchableOpacity onPress={Actions.pop} style={styles.left}>
                {
                  (I18nManager.isRTL)
                  ?
                      <Icon name="ios-arrow-forward-outline" style={styles.iconSize}/>
                  :
                      <Icon name="ios-arrow-back-outline" style={styles.iconSize}/>
                }

                  {/*<Text style={styles.leftMsg}>Messages</Text>*/}
                </TouchableOpacity>
              </Left>

              {/* Title */}
              <Body style={styles.body}>
                <Title style={styles.headetTxt}>
                  Emma Roberts
                </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>

              </Right>
          </Header>
        </ImageBackground>
        {
          (Platform.OS === 'ios') ?
          <ListView
             style={styles.listBg}
             dataSource={this.state.dataSource}
             renderRow={this._renderRow.bind(this)}
             enableEmptySections
             pageSize={4}/>
          :
          <Content style={styles.content}>
            <ListView
               style={styles.listBg}
               dataSource={this.state.dataSource}
               renderRow={this._renderRow.bind(this)}
               enableEmptySections
               pageSize={4}/>
          </Content>
         }

         {
        (Platform.OS === 'ios') ?
        <KeyboardAvoidingView behavior="padding">
        <Footer style={styles.footerStyle}>
          <Left style={styles.footerLeft}>
            <TouchableOpacity onPress={()=> alert("Upload Image")} style={styles.footerLeftContent}>
              {/*<Image source={images.cameraIcon} style={styles.iconSizeFooter}/>*/}
              <Foundation name="camera" size={25} color="#848d99"/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:2.8}}>
            <Item regular style={styles.messageBox}>
              <Input placeholder='iMessage'
                     placeholderTextColor='#c7c7cc'
                     textAlign= {I18nManager.isRTL ? 'right' : 'left'}
                     keyboardType="default"
                     returnKeyType="send"
                     style={{color:'#363636'}}
                     value={this.state.replyTxt}
                     onChangeText={(replyTxt) => this.setState({replyTxt})}
                     onSubmitEditing={() => this.onMessage()}/>
            </Item>
          </Body>
          <Right style={styles.footerRight}>
            <TouchableOpacity onPress={() =>  this.onMessage()} style={styles.footerRightContent}>
              <Image source={Images.emoji} style={styles.iconSizeFooter}/>
            </TouchableOpacity>
          </Right>
        </Footer>
        </KeyboardAvoidingView>
        :
        <Footer style={styles.footerStyle}>
          <Left style={styles.footerLeft}>
            <TouchableOpacity onPress={()=> alert("Upload Image")} style={styles.footerLeftContent}>
              {/*<Image source={images.cameraIcon} style={styles.iconSizeFooter}/>*/}
              <Foundation name="camera" size={25} color="#848d99"/>
            </TouchableOpacity>
          </Left>
          <Body style={{flex:2.8}}>
            <Item regular style={styles.messageBox}>
              <Input placeholder='iMessage'
                     placeholderTextColor='#c7c7cc'
                     textAlign= {I18nManager.isRTL ? 'right' : 'left'}
                     keyboardType="default"
                     returnKeyType="send"
                     style={{color:'#363636'}}
                     value={this.state.replyTxt}
                     onChangeText={(replyTxt) => this.setState({replyTxt})}
                     onSubmitEditing={() => this.onMessage()}/>
            </Item>
          </Body>
          <Right style={styles.footerRight}>
            <TouchableOpacity onPress={() =>  this.onMessage()} style={styles.footerRightContent}>
              <Image source={Images.emoji} style={styles.iconSizeFooter}/>
            </TouchableOpacity>
          </Right>
        </Footer>
      }
      </Container>
    );
  }
}
