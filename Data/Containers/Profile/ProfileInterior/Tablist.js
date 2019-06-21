
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './tabliststyle';
import { View} from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 *  Profile Screen
 */
const cardBgOne = "https://antiqueruby.aliansoftware.net//Images/profile/image_one_ptwo.png";
const cardBgTwo = "https://antiqueruby.aliansoftware.net//Images/profile/image_two_ptwo.png";
const cardBgThree = "https://antiqueruby.aliansoftware.net//Images/profile/image_three_ptwo.png";
const cardBgFour = "https://antiqueruby.aliansoftware.net//Images/profile/image_four_ptwo.png";
const cardBgFive = "https://antiqueruby.aliansoftware.net//Images/profile/image_five_ptwo.jpg";
const cardBgSix = "https://antiqueruby.aliansoftware.net//Images/profile/image_six_ptwo.jpg";
const profileImage = "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_18.png";
export default class Tablist extends Component {

  constructor(props) {
 		super(props);

    const dataObjects = [
      {
        id: 1,
        cardBgImage: {uri:cardBgOne},
        profileImage: {uri:profileImage},
        title: 'Home in Torquay by My Architech',
        addrss: 'Torquay,Australia',
        name: 'Johnie Cornwall',
        time: '8 mins'
      },
      {
        id: 2,
        cardBgImage: {uri:cardBgTwo},
        profileImage: {uri:profileImage},
        title: 'Modern House by Maraya Interior Design',
        addrss: 'Ojai,California',
        name: 'Tim Droney',
        time: '30 mins'
      },
      {
        id: 3,
        cardBgImage: {uri:cardBgThree},
        profileImage: {uri:profileImage},
        title: 'Home in Torquay by My Architech',
        addrss: 'Torquay,Australiajk',
        name: 'Johnie Cornwall',
        time: '27 mins'
      },
      {
        id: 4,
        cardBgImage: {uri:cardBgFour},
        profileImage: {uri:profileImage},
        title: 'Modern House by Maraya Interior Design',
        addrss: 'Ojai,California',
        name: 'Tim Droney',
        time: '56 mins'
      },
      {
        id: 5,
        cardBgImage: {uri:cardBgFive},
        profileImage: {uri:profileImage},
        title: 'Home in Torquay by My Architech',
        addrss: 'Torquay,Australia',
        name: 'Johnie Cornwall',
        time: '5 mins'
      },
      {
        id: 6,
        cardBgImage: {uri:cardBgSix},
        profileImage: {uri:profileImage},
        title: 'Modern House by Maraya Interior Design',
        addrss: 'Ojai,California',
        name: 'Tim Droney',
        time: '19 mins'
      },
      {
        id: 5,
        cardBgImage: {uri:cardBgFive},
        profileImage: {uri:profileImage},
        title: 'Home in Torquay by My Architech',
        addrss: 'Torquay,Australia',
        name: 'Johnie Cornwall',
        time: '5 mins'
      },
      {
        id: 6,
        cardBgImage: {uri:cardBgSix},
        profileImage: {uri:profileImage},
        title: 'Modern House by Maraya Interior Design',
        addrss: 'Ojai,California',
        name: 'Tim Droney',
        time: '19 mins'
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
      <View style={styles.rowMain}>
        <Image source={rowData.cardBgImage} style={styles.cardBgImage}/>
        <View style={styles.cardContent}>
          <Text style={styles.titleTxt}>{rowData.title}</Text>
          <View style={styles.addressBg}>
            <Ionicons name="ios-pin" size={16} color="grey" style={{justifyContent: 'center',backgroundColor: 'transparent', alignItems: 'center',alignSelf: 'center'}}/>
            <Text style={styles.addressTxt}>{rowData.addrss}</Text>
          </View>
          <View style={styles.dividerHorizontal}></View>
          <View style={styles.profileBg}>
            <Image source={rowData.profileImage} style={styles.profileImg}/>
            <View style={styles.nameTimeBg}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <Text style={styles.timeTxt}>{rowData.time}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render(){

    return(
      <Container style={styles.main}>
        <ListView
           contentContainerStyle={styles.listContent}
           dataSource={this.state.dataSource}
           renderRow={this._renderRow.bind(this)}
           enableEmptySections
           pageSize={4}/>
      </Container>
    );
  }
}
