
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images,Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
export default class Social13 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    const dataObjects = [
      {
        id: 1,
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc13.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/card_1_sc13.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisi, sed do',
        likes: 1234,
        comments: 223,
      },
      {
        id: 2,
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_02_sc13.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/card_02_sc13.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisi, sed do',
        likes: 1234,
        comments: 223,
      },
      {
        id: 3,
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_03_sc13.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/card_03_sc13.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur ',
        likes: 1234,
        comments: 223,
      },
      {
        id: 4,
        profile: 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_04_sc13.png',
        uploadImage: 'https://antiqueruby.aliansoftware.net//Images/social/card_04_sc13.png',
        comment: 'Lorem ipsum dolor sit amet, consectetur ',
        likes: 1234,
        comments: 223,
      }
    ]

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  _renderRow (rowData) {
    return (
      <View style={styles.rowMain}>
        <Image source={{uri:rowData.uploadImage}} style={styles.rowImage}/>
        <Image source={{uri:rowData.profile}} style={styles.rowProImage}/>
        <View style={styles.rowConTitle}>
          <Text style={styles.rowTitle}>{rowData.comment}</Text>
        </View>
        <View style={styles.rowdevider}/>
        <View style={styles.rowCount}>
          <View style={styles.subRow}>
            <TouchableOpacity onPress={()=>alert("Like")}>
              <FontAwesome name="heart" size={16} color="#d4d4d4" />
            </TouchableOpacity>
            <Text style={styles.countSize}>{rowData.likes}</Text>
          </View>
          <View style={styles.verticaldevider}/>
          <View style={styles.subRow}>
            <TouchableOpacity onPress={()=>alert("Comment")}>
              <Image style={styles.iconSize} source={Images.comments}/>
            </TouchableOpacity>
            <Text style={styles.countSize}>{rowData.comments}</Text>
          </View>
        </View>
      </View>
    )
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    var item = [
      {
        text: 'Home Decor',
        image: 'https://antiqueruby.aliansoftware.net//Images/social/iv_01_sc13.png',
      },
      {
        text: 'Travel',
        image: 'https://antiqueruby.aliansoftware.net//Images/social/iv_02_sc13.png',
      },
      {
        text: 'Video',
        image: 'https://antiqueruby.aliansoftware.net//Images/social/iv_03_sc13.png',
      },
      {
        text: 'Hair',
        image: 'https://antiqueruby.aliansoftware.net//Images/social/iv_04_sc13.png',
      },
      {
        text: 'Gift',
        image: 'https://antiqueruby.aliansoftware.net//Images/social/iv_05_sc13.png',
      },
    ]

    return(
     <Container style={styles.main}>
       <View style={styles.logosec}>
         <Header
           style={styles.header}>

           {/* Take up the space */}
           <Left style={styles.left}>
             <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
             {
               (I18nManager.isRTL)
               ?
                   <Icon name="ios-arrow-forward" style={styles.searchIcon}/>
               :
                   <Icon name="ios-arrow-back" style={styles.searchIcon}/>
             }
             </TouchableOpacity>
           </Left>

           {/* Title */}
           <Body style={styles.body}>
             <Title style={styles.headerTitle}>
               Home
             </Title>
           </Body>

           {/* Right Icon */}
           <Right style={styles.right}>
             <TouchableOpacity onPress={()=>alert("Search")}>
               <Icon name="ios-search" style={styles.searchIcon}/>
             </TouchableOpacity>
           </Right>
         </Header>
       </View>
       <View style={styles.slidesec}>
         <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           style={styles.postImageContent}>
           {
             item.map((itemImage, index) => {
               return (
                 <View style={styles.itemBar} key={index}>
                   <Image source={{uri:itemImage.image}} style={styles.postedImage}/>
                   <TouchableOpacity style={styles.overlay} onPress={()=>alert(itemImage.text)}>
                    <Text style={styles.postedText}>{itemImage.text}</Text>
                  </TouchableOpacity>
                 </View>
               )
             })
           }
         </ScrollView>

         <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>

       </View>
    </Container>

    );
  }
}
