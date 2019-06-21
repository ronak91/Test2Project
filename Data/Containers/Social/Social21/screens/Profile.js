import React, { Component } from 'react';
import { View,Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,AsyncStorage, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Images from '../../../../Themes/Images';
import { Actions } from 'react-native-router-flux';
import { Colors, Metrics } from '../../../../Themes/';
// Screen Styles
import styles from './ProfileStyles';

const profileImage = 'https://antiqueruby.aliansoftware.net/Images/profile/profile_image.jpg';

export default class Profile extends Component {

  constructor(props) {
    super(props);
 		this.state = {};
  }

  render(){
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#fa6b7b',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.main}>
      <Header
          androidStatusBarColor={"#fa6b7b"}
          style={styles.header}>

          {/* Take up the space */}
          <Left style={styles.left}>
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
            <Title style={{color: Colors.snow}}>
              Profile
            </Title>
          </Body>

          {/* Right Icon */}
          <Right style={styles.right}>

          </Right>
      </Header>

      <View style={styles.mainView}>

        <Image source={{uri:profileImage}} style={styles.profile} />
        <Text style={styles.name}>Johnie Cornwall</Text>

      </View>

      </Container>
    )
  }

}
