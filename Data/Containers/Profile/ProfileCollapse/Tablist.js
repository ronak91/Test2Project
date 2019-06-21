
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View,ListView} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title,RegularText} from 'native-base';
import ReadMore from 'react-native-read-more-text';
// Screen Styles
import styles from './tabliststyle.js';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';
/**
 *  Profile Screen
 */
const bgImage = "https://antiqueruby.aliansoftware.net//Images/profile/backg_profile_11.png";
const profileImg = "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p08.png";
const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_02_p11.png";
const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/profile/ic_suggested_user_two_profile_nine.png";
const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/profile/profile_4_11.png";
const profileImageFive = "https://antiqueruby.aliansoftware.net//Images/profile/image_profile_dfourteen.png";
const profileImageSix = "https://antiqueruby.aliansoftware.net//Images/profile/image_profile_drawer8.jpg";
const profileImageSeven = "https://antiqueruby.aliansoftware.net//Images/profile/item_pro2_p14.png";
const profileImageEight = "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_01_p05.png";
const profileImageNine = "https://antiqueruby.aliansoftware.net//Images/profile/profile_4_11.png";
export default class Tablist extends Component {

  constructor(props) {
 		super(props);

    const profileDetails = [
      {
        id: 1,
        profileImage: {uri:profileImg},
        name: 'Johnie Cornwall',
        designation: 'Senior Design Director'
      },
      {
        id: 2,
        profileImage: {uri:profileImageTwo},
        name: 'Renaldo Rozman',
        designation: 'Lead 3D Artist'
      },
      {
        id: 3,
        profileImage: {uri:profileImageThree},
        name: 'Argelia Bee',
        designation: 'Copywriter'
      },
      {
        id: 4,
        profileImage: {uri:profileImageFour},
        name: 'Kimiko Hoyle',
        designation: 'Marketing & Creative Services'
      },
      {
        id: 5,
        profileImage: {uri:profileImageFive},
        name: 'Argelia Bee',
        designation: 'Copywriter'
      },
      {
        id: 6,
        profileImage: {uri:profileImageSix},
        name: 'Johnie Cornwall',
        designation: 'Copywriter'
      },
      {
        id: 7,
        profileImage: {uri:profileImageSeven},
        name: 'Tim Droney',
        designation: 'Copywriter'
      },

    ]

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      isLoading: true,
      profileDetailsSource: ds.cloneWithRows(profileDetails),
    };
 	}

  _renderProfileDetailRow(rowData){
    return(
      <View style={{flexDirection: 'column'}}>
        <View style={styles.mainRow}>
          <Image source={rowData.profileImage} style={styles.profileImg}/>
          <View style={styles.nameDesignationMainView}>
            <View style={styles.nameDesignationView}>
              <Text style={styles.nameTxt}>{rowData.name}</Text>
              <Text style={styles.designationTxt}>{rowData.designation}</Text>
            </View>
          </View>
        </View>

        <View style={styles.dividerHorizontal} />
      </View>
    )
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
      <ListView
        dataSource={this.state.profileDetailsSource}
        renderRow={this._renderProfileDetailRow.bind(this)}
        
        />
      </Container>
    );
  }
}
