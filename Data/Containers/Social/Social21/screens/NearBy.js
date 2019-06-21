
import React, { Component } from 'react';
import { View,Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,AsyncStorage, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header,Title} from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors } from '../../../../Themes/';
// Screen Styles
import styles from './NearByStyles';


const cardBg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFnHJsE8uzmYtD2klBoevGCeZ9CnTN9GnzZt_4OCXLMUr5twmJAzVqgK5";
const cardBgOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_img02_s21_29.jpg";
const cardBgTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_img04_s21_29.jpg";
const cardBgThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_img03_s21_29.jpg";
const profileImgOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_propic01_s21_29.png";
const profileImgTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_propic04_s21_29.png";
export default class NearBy extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
      {
        id: 1,
        name: 'Emma Roberts1',
        cardBg: {uri:cardBgOne},
        profileImage: {uri:profileImgOne},
        watch: '58',
        distance: '120m',
      },
      {
        id: 2,
        name: 'Emma Roberts2',
        cardBg: {uri:cardBgTwo},
        profileImage: {uri:profileImgTwo},
        watch: '80',
        distance: '90km',
      },
      {
        id: 3,
        name: 'Emma Roberts3',
        cardBg: {uri:cardBgThree},
        profileImage: {uri:profileImgOne},
        watch: '90',
        distance: '200m',
      },
      {
        id: 4,
        name: 'Emma Roberts4',
        cardBg: {uri:cardBgOne},
        profileImage: {uri:profileImgTwo},
        watch: '10',
        distance: '5km',
      },
      {
        id: 5,
        name: 'Emma Roberts5',
        cardBg: {uri:cardBgTwo},
        profileImage: {uri:profileImgOne},
        watch: '50',
        distance: '2km',
      },
    ]
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    	selectedLots: [],
    };
 	}

  onLearnMore = (name,watch , distance) => {
    // this.props.navigation.navigate('NearByDetail');
      AsyncStorage.multiSet([
     ["Name", name],
     ["WatchCount",watch],
     ["Distance",distance],
   ]);
    Actions.tab1_2();
  };

  navigateFiltyerScreen = () => {
    Actions.tab_3_2();
  };

    _renderRow(rowData){
      var {banner, navigation} = this.props
      return(
        <View style={styles.rowMain}>
          <ImageBackground style={styles.imgContainer} source={Images.cardBgSocialTwentyone}>
            <TouchableOpacity style={styles.cardImage} onPress={()=>this.onLearnMore(rowData.name, rowData.watch, rowData.distance)}>
              <Image style={styles.cardBgImage} source={rowData.cardBg}/>
              <LinearGradient locations={[0.1,1]} colors={['transparent','black']} style={styles.shadowBg}>
              <View style={styles.postDetailBg}>
                <Image source={rowData.profileImage} style={styles.profileImage}/>
                <View style={styles.profileDetailBg}>
                  <Text style={styles.nameTxt}>{rowData.name}</Text>
                  <View style={styles.watchDistanceBg}>
                    <Image source={Images.watchIcon} style={styles.watchIcon}/>
                    <Text style={styles.watchDistanceTxt}>{rowData.watch}</Text>
                    <View style={styles.mapPin}>
                      <FontAwesome name="map-marker" size={12} color="white"/>
                    </View>
                    <Text style={styles.watchDistanceTxt}>{rowData.distance}</Text>
                  </View>
                </View>
                <Right style={styles.hratIconBg}>
                  <SimpleLineIcons name="heart" size={20} color="white"/>
                </Right>
              </View>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )
    }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
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
                <Title style={styles.titleTxt}>Nearby</Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=> this.navigateFiltyerScreen()}>
                  <Text style={styles.filterTxt}>Filter</Text>
                </TouchableOpacity>
              </Right>
          </Header>
        </ImageBackground>
        <ListView
          horizontal={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
          scrollEnabled={true}
          />
      </Container>
    );
  }
}
