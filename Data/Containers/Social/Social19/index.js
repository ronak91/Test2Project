
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,Content,Body,Header,Icon,Title} from 'native-base';
// Screen Styles
import styles from './styles';
import {View} from 'react-native-animatable';
import Stars from 'react-native-stars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images,Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social19 extends Component {

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
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    var data = [
     {
       id: 1,
       rating: 4.0,
       name: 'Clifton Michell',
       date: 'April 28,2016',
       post: '"Good jobs, Will hire again"',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 2,
       rating: 5.0,
       name: 'Wenona Nall',
       date: 'April 22,2016',
       post: '"Good jobs, Will hire again"',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 3,
       rating: 4.5,
       name: 'Nenita Timothy',
       date: 'April 15,2016',
       post: '"Good jobs, Will hire again"',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
     {
       id: 4,
       rating: 4.0,
       name: 'Clifton Michell',
       date: 'April 28,2016',
       post: '"Good jobs, Will hire again"',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     }
   ]

    return(
      <Container style={styles.main}>
          <Header style={styles.header}>
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
                <Text style={styles.textTitle}>Reviews</Text>
              </Body>
              <Right style={styles.right}>

              </Right>
          </Header>

          <Content>
          <View style={styles.listMainView} animation="zoomInDown" duration={1100} delay={1400}>
          {
            data.map((item, index) => {
             return (
              <View style={ (index === data.length - 1) ? styles.lastRowBg : styles.rowBg} key={index}>
                <View style={styles.ratingBarView}>
                  <View style={styles.ratingTextBg}>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <View style={styles.ratingView}>
                    <View style={styles.ratingDateView}>
                      <View style={styles.ratingStar}>
                         <Stars
                           half={true}
                           rating={item.rating}
                           update={(val)=>{this.setState({stars: val})}}
                           spacing={4}
                           starSize={20}
                           count={5}
                           disabled={true}
                           fullStar={Images.starFilled1}
                           emptyStar={Images.starEmpty1}
                           halfStar={Images.starHalf1} />
                       </View>
                      <Right><Text style={styles.rowDateTxt}>{item.date}</Text></Right>
                    </View>
                    <View style={styles.reviewerNameView}>
                      <Text style={styles.by}>by</Text>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.dividerHorizontal}/>
                <Text style={styles.rowPostText}>{item.post}</Text>
                <Text style={styles.rowDescTxt}>{item.description}</Text>
              </View>
              )
            })
          }
          </View>
          </Content>

      </Container>
    );
  }
}
