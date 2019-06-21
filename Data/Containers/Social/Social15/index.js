
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity,View, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Images, Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social15 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    this.state = {};
 	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    const bgImage = "https://antiqueruby.aliansoftware.net//Images/social/back_sc15.png";
    const profileImg = "https://antiqueruby.aliansoftware.net//Images/social/card_sc15.png";

    return(
      <Container style={styles.main}>
        <ImageBackground source={{uri:bgImage}} style={styles.imgContainer}>
        <Header
            style={styles.header}>

            <Left style={styles.left}>
              <TouchableOpacity  style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={25} color='white'/>
                :
                    <FontAwesome name="angle-left" size={25} color='white'/>
              }
              </TouchableOpacity>
            </Left>

            <Body style={styles.body}>
              <Title style={styles.titleText}>
                Coffee tonight
              </Title>
            </Body>

            <Right style={styles.right}>
              <Button transparent>
              </Button>
            </Right>
          </Header>

          <View style={styles.spaceBg}>
            <View style={styles.profileView}>
              <Image style={styles.profileImg} source={{uri:profileImg}}/>
              <View style={styles.nameAddressView}>
                <Text style={styles.name}>Johnie Cornwall</Text>
                <View style={styles.addressView}>
                  <TouchableOpacity>
                    <Entypo name="location-pin" size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <Text style={styles.address}>Seattle,US</Text>
                </View>
              </View>
            </View>
            <Text style={styles.descTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, nulla id efficitur dignissim, odio nisl porta tortor, sit amet dictum quam massa sit amet justo</Text>
            <View style={styles.likeCommentView}>
              <View style={styles.likeView}>
                <TouchableOpacity onPress={()=>alert("Like")}>
                  <FontAwesome name="heart" size={16} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.likeCommentText}>1234</Text>
              </View>
              <View style={styles.likeView}>
                <TouchableOpacity onPress={()=>alert("Comment")}>
                  <Image style={styles.likeCommentImage} source={Images.commentWhiteIcon}/>
                </TouchableOpacity>
                <Text style={styles.likeCommentText}>223</Text>
              </View>
              <Right>
                <TouchableOpacity onPress={()=>alert("More")}>
                  <Ionicons name="ios-more" size={30} color="#ffffff" />
                </TouchableOpacity>
              </Right>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
