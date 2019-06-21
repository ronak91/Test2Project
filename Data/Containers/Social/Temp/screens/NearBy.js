
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body, Header,Title} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './NearByStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

/**
 *  Profile Screen
 */
const cardBgOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_img02_s21_29.jpg";
const cardBgTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_img04_s21_29.jpg";
const cardBgThree = "http://antiqueruby.aliansoftware.net//Images/social/ic_img03_s21_29.jpg";
const profileImgOne = "http://antiqueruby.aliansoftware.net//Images/social/timeline_image_two_seight.png";
const profileImgTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_msg_user04_s21_29.png";
export default class Social03 extends Component {

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

  onLearnMore = (user) => {
    // this.props.navigation.navigate('NearByDetail');
    Actions.tab1_2();
  };

    _renderRow(rowData){
      var {banner, navigation} = this.props
      return(
        <View style={{marginLeft: 30,marginTop: (theme.HEIGHT) * 0.10}}>
          <TouchableOpacity onPress={()=>this.onLearnMore()}>
            <ImageBackground style={styles.imgContainer} source={images.cardBgSocialTwentyone}>
              <Image style={{width: (theme.WIDTH) * 0.50,height: (theme.HEIGHT) * 0.56,marginLeft: -5,borderRadius: 10,marginTop: 16}} source={rowData.cardBg}/>
              <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
                <Text>{banner}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
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
        <ImageBackground source={images.gradientBG} style={styles.header}>
          <Header androidStatusBarColor={theme.PRIMARY_COLOR} style={styles.header}>
              {/* Take up the space */}
              <Left style={{flex:1}}>
                <Button transparent>
                </Button>
              </Left>
              {/* Title */}
              <Body style={styles.body}>
                <Title style={{color: theme.HEADER_TITLE_COLOR}}> Nearby </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=> alert("Clicked")}>
                  <Text style={{color: 'white', fontSize: 16}}>Filter</Text>
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
