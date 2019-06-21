
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Images } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social12 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    const dataObjects = [
      {
        id: 1,
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc12.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/item_profile_01_sc12.png',
        comment: 'Home in Torquay by My Architect',
        location: 'Torquay, Australia.',
        time: '8 mins',
      },
      {
        id: 2,
        name: 'Tim Droney',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_02_sc12.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/item_profile_02_sc12.png',
        comment: 'Modern House by Maraya Interior Design',
        location: 'Ojai, California',
        time: '30 mins',
      },
      {
        id: 3,
        name: 'Zhaoyang',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_03_sc12.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/item_03_sc12.png',
        comment: 'Zhu’an Residence by Zhaoyang Architects',
        location: 'Dali, China',
        time: '8 mins',
      },
      {
        id: 4,
        name: 'Johnie Cornwall',
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_04_sc12.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/item_04_sc12.png',
        comment: 'Modern Home by DIJ Group',
        location: 'Toronto, Canada',
        time: '8 mins',
      },
    ]

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  _renderRow (rowData) {
    return (
      <View style={styles.rowMain}>
        <Image source={{uri:rowData.uploadImage}} style={styles.rowImage}/>
        <View style={styles.rowConTitle}>
          <Text numberOfLines={2} style={styles.rowTitle}>{rowData.comment}</Text>
          <View style={styles.rowLocation}>
            <TouchableOpacity>
              <Entypo name="location-pin" size={16} color="#d4d4d4" />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.locationText}>{rowData.location}</Text>
          </View>
        </View>
        <View style={styles.rowdevider}/>
        <View style={styles.rowProfile}>
          <Image source={{uri:rowData.profile}} style={styles.rowProImage}/>
          <View style={styles.subRow}>
            <Text numberOfLines={1} style={styles.profileName}>{rowData.name}</Text>
            <Text style={styles.timeText}>{rowData.time}</Text>
          </View>
        </View>
      </View>
    )
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    return(
     <Container style={styles.main}>
       <View style={styles.logosec}>
         <Header
           style={styles.header}>

           {/* Take up the space */}
           <Left style={styles.left}>
             <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
             {
               (I18nManager.isRTL)
               ?
                   <Icon name="ios-arrow-forward" style={styles.searchIcon}/>
               :
                   <Icon name="ios-arrow-back" style={styles.searchIcon}/>
             }
             </TouchableOpacity>
           </Left>

           {/* Title */}
           <Body style={styles.body}>
             <Title style={styles.headerTitle}>
               Home
             </Title>
           </Body>

           {/* Right Icon */}
           <Right style={styles.right}>
             <TouchableOpacity onPress={()=>alert("Search")}>
               <Icon name="ios-search" style={styles.searchIcon}/>
             </TouchableOpacity>
           </Right>
         </Header>
       </View>
       <Content style={styles.slidesec}>
         <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>
       </Content>
    </Container>

    );
  }
}
