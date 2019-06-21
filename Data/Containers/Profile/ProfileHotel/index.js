import React, { Component } from 'react';
import {ScrollView, Platform, StatusBar, Text, View ,Image,TouchableOpacity,ImageBackground,Dimensions, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../../../Themes/Images';
import styles from './styles';
import TabList from './TabList.js'

const profileImg = "https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_pic_pten.jpg";
const bgImage = "https://antiqueruby.aliansoftware.net//Images/profile/background_p30.png";

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const NewsRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><TabList/></View>;
const VideoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><TabList/></View>;
const EventRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><TabList/></View>;
const BooksRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><TabList/></View>;

export default class ProfileHotel extends Component {

    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        routes: [
          {id:0, key: 'news', title: 'News'},
          {id:1, key: 'videos', title: 'Videos'},
          {id:2, key: 'events', title: 'Events'},
          {id:3, key: 'books', title: 'Books'},
        ],
      };
    }

    _renderTitle = ({ route }) => {
      return(
        <View>
          <Text style={(route.id == this.state.index)?styles.activeLabel:styles.normalLabel}>{route.title}</Text>
        </View>
      )
    }

    _handleIndexChange = index => this.setState({ index });



    _renderHeader = props => <TabBar
                              {...props}
                              renderLabel={this._renderTitle}
                              indicatorStyle={{backgroundColor: "transparent"}}
                              style={{backgroundColor: "#e6e6e6",elevation:0}} />;

    _renderScene = SceneMap({

      news: NewsRoute,
      videos: VideoRoute,
      events: EventRoute,
      books: BooksRoute,
    });

    componentWillMount() {
      var that = this
  	  BackHandler.addEventListener('hardwareBackPress', function() {
  			that.props.navigation.navigate('Profile')
  	   	return true;
  	  });
  	}

    render() {
      StatusBar.setBarStyle('light-content');
      if (Platform.OS === 'android') {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)', true);
      }

      return (
          <View style={styles.main}>

            <ImageBackground style={styles.imgContainer} source={{uri:bgImage}}>
              <View style={styles.topContent}>
                <Header
                  androidStatusBarColor={"transparent"}
                  style={styles.header}>

                  <Left style={styles.left}>
                    <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
                      <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={styles.backArrow2}/>
                    </TouchableOpacity>
                  </Left>

                  <Body style={styles.body}>
                    <Title style={styles.headerTxt}>
                      Johnie Cornwall
                    </Title>
                  </Body>

                  <Right style={styles.right}>
                    <Button transparent>
                    </Button>
                  </Right>
                </Header>

                <View style={styles.shadowTwoProfileImg}>
                  <View style={styles.shadowOneProfileImg}>
                    <Image source={{uri:profileImg}} style={styles.profileImg}/>
                  </View>
                </View>

                <View style={styles.btnSec}>
                  <TouchableOpacity onPress={() => alert('Add User')} style={styles.addUserBg}>
                    <Image source={Images.addUserIcon} style={styles.userCommentImage}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Comment')} style={styles.commentBg}>
                    <FontAwesome name="comment" size={20} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Call')} style={styles.callBg}>
                    <Ionicons name="ios-call" size={27} color="white"/>
                  </TouchableOpacity>
                </View>


                <View style={styles.followerFollowingDetailsBg}>
                  <View style={styles.countLabelBg}>
                    <View style={styles.followerFollowingBg}>
                      <Text style={styles.countTxt}>1434</Text>
                      <Text style={styles.labelTxt}>Followers</Text>
                    </View>
                    <View style={styles.divider}/>
                  </View>
                  <View style={styles.countLabelBg}>
                    <View style={styles.followerFollowingBg}>
                      <Text style={styles.countTxt}>1121</Text>
                      <Text style={styles.labelTxt}>Following</Text>
                    </View>
                    <View style={styles.divider}/>
                  </View>
                  <View style={styles.likeBg}>
                    <Text style={styles.countTxt}>4507</Text>
                    <Text style={styles.labelTxt}>Likes</Text>
                  </View>
                </View>
                <View style={styles.imageBottomBg}>
                </View>
              </View>

            </ImageBackground>

            <View style={styles.bottomContent}>
            <TabViewAnimated
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
              />
            </View>
          </View>
      );
    }
}
