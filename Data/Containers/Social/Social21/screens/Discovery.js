
import React, { Component } from 'react';
import { View,Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,AsyncStorage, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Images from '../../../../Themes/Images';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../../../../Themes/';
// Screen Styles
import styles from './DiscoveryStyles';

const cardBgOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back01_s21_29.png";
const cardBgTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back02_s21_29.png";
const cardBgThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back03_s21_29.png";
const cardBgFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back04_s21_29.png";
const cardBgFive = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back05_s21_29.png";
const cardBgSix = "https://antiqueruby.aliansoftware.net//Images/social/ic_dis_back06_s21_29.png";
const profileImage = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic02_21_29.png";

export default class Discovery extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      data: [
        {
          id: 1,
          name: 'Emma Roberts0',
          cardBgImage: {uri:cardBgOne},
          profileImage: {uri:profileImage},
          WatchCount: 50,
          isLiked: true,
        },
        {
          id: 2,
          name: 'Emma Roberts1',
          cardBgImage: {uri:cardBgTwo},
          profileImage: {uri:profileImage},
          WatchCount: 10,
          isLiked: false,
        },
        {
          id: 3,
          name: 'Emma Roberts2',
          cardBgImage: {uri:cardBgThree},
          profileImage: {uri:profileImage},
          WatchCount: 90,
          isLiked: false,
        },
        {
          id: 4,
          name: 'Emma Roberts3',
          cardBgImage: {uri:cardBgFour},
          profileImage: {uri:profileImage},
          WatchCount: 80,
          isLiked: false,
        },
        {
          id: 5,
          name: 'Emma Roberts4',
          cardBgImage: {uri:cardBgFive},
          profileImage: {uri:profileImage},
          WatchCount: 58,
          isLiked: false,
        },
        {
          id: 6,
          name: 'Emma Roberts5',
          cardBgImage: {uri:cardBgSix},
          profileImage: {uri:profileImage},
          WatchCount: 68,
          isLiked: false,
        }
      ]
    };

 	}

  onLearnMore = (user) => {
    // this.props.navigation.navigate('NearByDetail');
    Actions.tab_3_2();
  };

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
                Discovery
              </Title>
            </Body>

            {/* Right Icon */}
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>this.onLearnMore()}>
                <Text style={styles.filterTxt}>Filter</Text>
              </TouchableOpacity>
            </Right>
        </Header>
        <Content style={styles.listBg}>
        <View style={styles.listContent}>
        {
            this.state.data.map((item, index) => {
             return (
               <View style={styles.rowMain} key={index}>
                 <ImageBackground source={item.cardBgImage} style={styles.imgContainer}>
                   <LinearGradient locations={[0.7,1]} colors={['transparent','black']} style={styles.shadowBg}>
                   <View style={styles.bottomView}>
                     <Image source={item.profileImage} style={styles.profileImage}/>
                     <View style={styles.nameWatchBg}>
                       <Text style={styles.nameTxt}>{item.name}</Text>
                       <View style={{flexDirection: 'row'}}>
                         <Image source={Images.watchIcon} style={styles.watchIcon}/>
                         <Text style={styles.watchDistanceTxt}>{item.WatchCount}</Text>
                       </View>
                     </View>
                     <Right>
                     {
                       (item.isLiked == true) ?
                        <TouchableOpacity style={styles.likeIconBg} onPress = {() => this._fnChangeItem(item.id)}>
                          <FontAwesome name="heart" size={20} color="#da3c47"/>
                        </TouchableOpacity> :
                        <TouchableOpacity onPress = {() => this._fnChangeItem(item.id)}>
                          <SimpleLineIcons name="heart" size={20} color="white"/>
                        </TouchableOpacity>
                     }
                     </Right>
                   </View>
                   </LinearGradient>
                 </ImageBackground>
               </View>
             )
           })
        }
        </View>
        </Content>
      </Container>

    );
  }

_fnChangeItem(listId){
    // const newArray = this.state.data;
    const newArray = this.state.data;

    for(var i = 0 ; i< this.state.data.length; i++){
      if(this.state.data[i].id == listId){
        // alert(listId + '  ' +this.state.data[i].id)
        const newArray1 = [];

        for(var i = 0 ; i< this.state.data.length; i++){
          if(this.state.data[i].id == listId){
            newArray1.push({
              id: this.state.data[i].id,
              name: this.state.data[i].name,
              cardBgImage: this.state.data[i].cardBgImage,
              profileImage: this.state.data[i].profileImage,
              WatchCount: this.state.data[i].WatchCount,
              isLiked: !this.state.data[i].isLiked,
              },
            );
          } else {
            newArray1.push({
              id: this.state.data[i].id,
              name: this.state.data[i].name,
              cardBgImage: this.state.data[i].cardBgImage,
              profileImage: this.state.data[i].profileImage,
              WatchCount: this.state.data[i].WatchCount,
              isLiked: this.state.data[i].isLiked,
              },
            );
          }
        }

       this.setState({ data: newArray1 });

      }
    }
 }
}
