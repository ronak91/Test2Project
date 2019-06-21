
import React, { Component } from 'react';
import { Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, ListView } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Title, Icon, List, ListItem, Text, Separator } from 'native-base';
// Screen Styles
import styles from './MessageStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

const profileOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user01_s21_29.png";
const profileTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user02_s21_29.png";
const profileThree = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user03_s21_29.png";
const profileFour = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user04_s21_29.png";
const profileFive = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user05_s21_29.png";
const profileSix = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user06_s21_29.png";
const profileSeven = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user07_s21_29.png";

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
                  <Icon name="ios-arrow-forward-outline" style={styles.arrowForward}/>
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
        <ImageBackground source={images.gradientBG} style={styles.header}>
          <Header androidStatusBarColor={theme.PRIMARY_COLOR} style={styles.header}>
              {/* Take up the space */}
              <Left style={{flex:1}}>
                <Button transparent>
                </Button>
              </Left>
              {/* Title */}
              <Body style={styles.body}>
                <Title style={{color: theme.HEADER_TITLE_COLOR}}> Message </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=> alert("New Message")}>
                  <Image source={images.createMessage} style={styles.iconSize} />
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
                  <Image source={images.chatIcon} style={styles.iconSize} />
                </Button>
                <Button full onPress={() => alert("Video call")} style={[styles.buttonStyle,{backgroundColor: '#0072bc'}]} >
                  <Image source={images.videoIcon} style={styles.iconSize} />
                </Button>
              </View>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <View style={styles.swipeButton}>
                <Button onPress={() => alert("Lock")} style={[styles.buttonStyle,{backgroundColor: '#ff8c00'}]}>
                  <Image source={images.lockIcon} style={styles.iconSize} />
                </Button>
                <Button onPress={() => alert("delete")} style={[styles.buttonStyle,{backgroundColor: '#e81123'}]}>
                  <Image source={images.deleteIcon} style={styles.iconSize} />
                </Button>
              </View>
            }
            leftOpenValue={(theme.WIDTH * 0.3)}
            rightOpenValue={-(theme.WIDTH * 0.3)}
          />
        </Content>
      </Container>
    );
  }
}
