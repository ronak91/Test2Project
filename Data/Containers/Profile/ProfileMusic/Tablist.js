
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './tabliststyle';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 *  Profile Screen
 */
export default class Tablist extends Component {

  constructor(props) {
 		super(props);

    const cardImageOne = "https://antiqueruby.aliansoftware.net//Images/social/card_01_sc14.png";
    const cardImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/card_02_sc14.png";
    const cardImageThree = "https://antiqueruby.aliansoftware.net//Images/social/card_03_sc14.png";
    const cardImageFour = "https://antiqueruby.aliansoftware.net//Images/social/card_04_sc14.png";
    const cardImageFive = "https://antiqueruby.aliansoftware.net//Images/social/card_05_sc14.png";
    const cardImageSix = "https://antiqueruby.aliansoftware.net//Images/social/card_06_sc14.png";
    const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";

    const dataObjects = [
      {
        id: 1,
        cardBgImage: {uri:cardImageOne},
        likeCount: 12,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
          {img:{uri:profileImageThree}},
        ]
      },
      {
        id: 2,
        cardBgImage: {uri:cardImageTwo},
        likeCount: 1,
        likeUserImages: [
          {img:{uri:profileImageThree}},
        ]
      },
      {
        id: 3,
        cardBgImage: {uri:cardImageThree},
        likeCount: 1,
        likeUserImages: [
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 4,
        cardBgImage: {uri:cardImageFour},
        likeCount: 2,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 5,
        cardBgImage: {uri:cardImageFive},
        likeCount: 2,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 6,
        cardBgImage: {uri:cardImageSix},
        likeCount: 5,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
          {img:{uri:profileImageThree}},
        ]
      }
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
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>

          <View style={styles.cardContent}>
            <FontAwesome name="heart" size={17} style={{alignSelf: 'center'}} color="white"/>
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
            <View style={styles.profileContainer}>
              {
                rowData.likeUserImages.map((item, index)=>{
                  return(
                    <View key={index} style={styles.imgview}>
                      <Image style={styles.profileImg} source={item.img}/>
                    </View>
                  )
                })
              }
            </View>
            </Right>
          </View>

        </ImageBackground>
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
        {/*<Content>
        <View style={{width: (theme.WIDTH)}} animation="bounceInDown" duration={1100} delay={1400}>
        {
        data.map((item, index) => {
         return (
           <View style={ (index === data.length - 1) ? styles.lastRowBg : styles.rowBg} key={index} >
             <View style={{flexDirection: 'row',marginTop: 15,width: (theme.WIDTH) * 0.90,alignSelf: 'center'}}>
               <Image style={styles.profileImg} source={item.profileImage}/>
               <View style={{flexDirection: 'column',justifyContent: 'center',marginLeft: 10}}>
                 <Text style={styles.rowNameTxt}>{item.name}</Text>
                 <Text style={styles.rowTimeTxt}>{item.time}</Text>
               </View>
               <Right><TouchableOpacity style={{backgroundColor:item.statusBgColor,borderRadius: 20,marginTop: -22,marginRight: -7}}><Text style={styles.statusTxt}>{item.status}</Text></TouchableOpacity></Right>
             </View>

             {
               (item.postImage == '') ? null :
               <Image style={{width: (theme.WIDTH),height: (theme.HEIGHT) * 0.40, alignSelf: 'center',marginTop: 10,resizeMode:'stretch'}} source={item.postImage}></Image>
             }
             <View style={{width: (theme.WIDTH) * 0.90,alignSelf: 'center'}}>
               <Text style={styles.rowDescTxt}>{item.description}</Text>
             </View>
            <View style={{width: (theme.WIDTH) * 0.90,height: 1,backgroundColor: "#F2F2F2",alignSelf: 'center',marginTop: 12}}/>
             <View style={{flexDirection: 'row',width: (theme.WIDTH) * 0.90,alignSelf: 'center',marginTop: 10,marginBottom: 10,marginLeft: -5}}>
               <View style={{flexDirection: 'row',width: (theme.WIDTH) * 0.25,alignItems: 'center'}}>
                 <Image style={styles.likeCommentShareImage} source={images.like}/>
                 <Text style={styles.likeCommentShareText}>Like</Text>
                 <Right><View style={styles.dividerVertical}/></Right>
               </View>
               <View style={{flexDirection: 'row',width: (theme.WIDTH) * 0.35, alignItems: 'center',marginLeft: 15}}>
                 <Image style={styles.likeCommentShareImage} source={images.comment}/>
                 <Text style={styles.likeCommentShareText}>Comment</Text>
                 <Right><View style={styles.dividerVertical}/></Right>
               </View>
               <View style={{flexDirection: 'row',width: (theme.WIDTH) * 0.30, alignItems: 'center',marginLeft: 15}}>
                 <Image style={styles.likeCommentShareImage} source={images.share}/>
                 <Text style={styles.likeCommentShareText}>Share</Text>
               </View>
             </View>

   				</View>
         )
        })
      }
      </View>
      </Content>*/}
      </Container>
    );
  }
}
