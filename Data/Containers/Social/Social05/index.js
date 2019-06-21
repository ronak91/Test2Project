import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity , ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Content, Header, Body, Title, Right, Left, Icon } from 'native-base';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../../Themes/';

import ScrollableTabView, { ScrollableTabBar, } from '../../../Components/react-native-scrollable-tab-view';

export default class Social05 extends Component {

    componentWillMount() {
      var that = this
      BackHandler.addEventListener('hardwareBackPress', function() {
        that.props.navigation.navigate('Social')
        return true;
      });
    }

    constructor(props) {
   		super(props);

      const cardImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_hotels_one_sfive.png";
      const cardImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_hotels_two_sfive.png";
      const cardImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_hotels_three_sfive.png";
      const cardImageFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_hotels_four_sfive.png";
      const cardImageFive = "https://antiqueruby.aliansoftware.net//Images/social/ic_hotels_one_sfive.png";

      const dataObjects = [
        {
          id: 1,
          name: 'citizenM NY Times Square',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          comments: 35,
          image: {uri:cardImageOne},
        },
        {
          id: 2,
          name: 'The Roosevelt Hotel',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          comments: 35,
          image: {uri:cardImageTwo},
        },
        {
          id: 3,
          name: 'EVEN Hotel Times Square',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          comments: 35,
          image: {uri:cardImageThree},
        },
        {
          id: 4,
          name: 'Wellington Hotel',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          comments: 35,
          image: {uri:cardImageFour},
        },
        {
          id: 5,
          name: 'Waldorf Astoria New York',
          comment: 'Lorem ipsum dolor sit amet, conses adipisi, sed do eiusmod tempor ince idunt ut labore et dolore.',
          likes: 12,
          comments: 35,
          image: {uri:cardImageFive},
        },
      ]

      const rowHasChanged = (r1, r2) => r1 !== r2
      const ds = new ListView.DataSource({rowHasChanged})

   		this.state = {
  			isLoading: true,
        dataSource: ds.cloneWithRows(dataObjects),
      };
   	}


    _renderRow(rowData) {
      return(
        <View>
        <View style={styles.rowMain}>
          <Image source={rowData.image} style={styles.images}/>
          <View style={styles.newsContent}>
            <Text numberOfLines={1} style={styles.name}>{rowData.name}</Text>
            <Text numberOfLines={3} style={styles.comment}>{rowData.comment}</Text>
            <View style={styles.followContent}>
              <View style={styles.likeContent}>
                <TouchableOpacity onPress={()=>alert("Like")}>
                  <FontAwesome name="heart" size={15} color="#d4d4d4" />
                </TouchableOpacity>
                <Text style={styles.textStyle}>{rowData.likes}</Text>
              </View>
              <View style={styles.likeContent}>
                <TouchableOpacity onPress={()=>alert("Comment")}>
                  <Image style={styles.likeCommentShareImage} source={Images.comments}/>
                </TouchableOpacity>
                <Text style={styles.textStyle}>{rowData.comments}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separatorStyle}/>
        </View>
      )

    }
  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;
    var underlineStyle = ((I18nManager.isRTL) ? styles.tabUnderLineTrans : styles.tabUnderLine );
    return(
      <Container style={styles.main}>
      <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
            {
              (I18nManager.isRTL)
              ?
                  <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                  <MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.headerTitle}>News</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
      </Header>

        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={'#383d5a'}
          tabBarActiveTextColor={'white'}
          tabBarInactiveTextColor={'rgba(255,255,255,0.4)'}
          tabBarTextStyle={styles.tabText}
          renderTabBar={() => <ScrollableTabBar />} >


            <View tabLabel='Hotels'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>

            <View tabLabel='Cars'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>

            <View tabLabel='Flights'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>

            <View tabLabel='Restaurant'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>

            <View tabLabel='Train'>
              <ListView
                 contentContainerStyle={styles.listContent}
                 dataSource={this.state.dataSource}
                 renderRow={this._renderRow.bind(this)}
                 renderSeparator={this._renderSeparator}
                 enableEmptySections
                 pageSize={4}/>
            </View>

        </ScrollableTabView>
      </Container>
    )
  }
}
