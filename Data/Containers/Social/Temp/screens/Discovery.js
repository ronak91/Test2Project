
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Title} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './DiscoveryStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

/**
 *  Profile Screen
 */
const cardBgOne = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back01_s21_29.png";
const cardBgTwo = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back02_s21_29.png";
const cardBgThree = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back03_s21_29.png";
const cardBgFour = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back04_s21_29.png";
const cardBgFive = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back05_s21_29.png";
const cardBgSix = "http://antiqueruby.aliansoftware.net//Images/social/ic_dis_back06_s21_29.png";
const profileImage = "http://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic02_21_29.png";

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
            <Left style={{flex:1}}>
              <Button transparent>
              </Button>
            </Left>

            {/* Title */}
            <Body style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Title style={{color: theme.HEADER_TITLE_COLOR}}>
                Discovery
              </Title>
            </Body>

            {/* Right Icon */}
            <Right style={{flex: 1}}>
              <TouchableOpacity onPress={()=>this.onLearnMore()}>
                <Text style={styles.filterTxt}>Filter</Text>
              </TouchableOpacity>
            </Right>
        </Header>
        <Content style={{width: theme.WIDTH}}>
        <View style={styles.listContent}>
        {

            this.state.data.map((item, index) => {
             return (
               <View style={styles.rowMain} key={index}>
                 <ImageBackground source={item.cardBgImage} style={styles.imgContainer}>
                   <Image style={styles.shadowBg} source={images.shadowSocialDiscovery}/>
                   <View style={{flexDirection: 'row',marginLeft: 10,marginRight: 10, bottom: 10, position:'absolute'}}>
                     <Image source={item.profileImage} style={styles.profileImage}/>
                     <View style={{flexDirection: 'column',marginLeft: 10}}>
                       <Text style={styles.nameTxt}>{item.name}</Text>
                       <View style={{flexDirection: 'row'}}>
                         <Image source={images.watchIcon} style={styles.watchIcon}/>
                         <Text style={styles.watchDistanceTxt}>{item.WatchCount}</Text>
                       </View>
                     </View>
                     <Right>
                     {
                       (item.isLiked == true) ?
                        <TouchableOpacity style={{width: 20,height: 20}} onPress = {() => this._fnChangeItem(item.id)}><Image source={images.heartRedIcon} style={styles.likeIcon}/></TouchableOpacity> :
                        <TouchableOpacity style={{width: 20,height: 20}} onPress = {() => this._fnChangeItem(item.id)}><Image source={images.heartWhiteEmpty} style={styles.likeIcon}/></TouchableOpacity>
                     }
                     </Right>
                   </View>
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
         // alert(listId + ' prag ' +this.state.data[i].id)
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
         console.log("pragnesh");
         console.log(newArray1);
       }
     }
  }
}
