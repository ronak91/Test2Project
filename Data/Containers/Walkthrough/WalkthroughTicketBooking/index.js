
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body } from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts, Metrics, Colors } from '../../../Themes/';
// Screen Styles
import styles from './styles';

export default class WalkthroughTicketBooking extends Component {

  constructor(props) {
 		super(props);
    this.rowz = []
    const dataObjects = [
			{id: 1, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_one_wt_twentynine.png', title: 'MALAYSIA'},
			{id: 2, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_two_wt_twentynine.png', title: 'SINGAPORE'},
			{id: 3, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_three_wt_twentynine.png', title: 'SWITZERLAND'},
			{id: 4, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_four_wt_twentynine.png', title: 'FARNCE'},
			{id: 5, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_one_wt_twentynine.png', title: 'NEW YORK'},
			{id: 6, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_two_wt_twentynine.png', title: 'SINGAPORE'},
			{id: 7, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_three_wt_twentynine.png', title: 'SWITZERLAND'},
			{id: 8, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_four_wt_twentynine.png', title: 'FARNCE'},
			{id: 9, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_one_wt_twentynine.png', title: 'MALAYSIA'},
    ]

    const dataObjectsText = [
			{id: 1, title: 'MALAYSIA'},
			{id: 2, title: 'SINGAPORE'},
			{id: 3, title: 'SWITZERLAND'},
			{id: 4, title: 'FARNCE'},
			{id: 5, title: 'NEW YORK'},
			{id: 6, title: 'SINGAPORE'},
			{id: 7, title: 'SWITZERLAND'},
			{id: 8, title: 'FARNCE'},
			{id: 9, title: 'MALAYSIA'},
    ]

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSourceText: ds.cloneWithRows(dataObjectsText),
      dataSourceImage: ds.cloneWithRows(dataObjects),
    	selectedLots: '1',
      index:0,
    };
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Walkthrough')
	   	return true;
	  });
	}

  onCheckBoxPress(id) {
    this.setState({
      selectedLots: id
    });

    if(id>1){
      const offsetX = (id * (Metrics.WIDTH * 0.2));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
    else{
      const offsetX = ((Metrics.WIDTH * 0));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
  }

  _renderText(rowData) {
    return(
      <View>
      {
        (rowData.id<6)
        ?
        <TouchableOpacity style={{justifyContent: 'center'}} onPress={()=>this.onCheckBoxPress(rowData.id)}>
          <Text style={(this.state.selectedLots == rowData.id)? styles.desctext : [styles.desctext,{fontFamily: 'SFUIDisplay-Thin',}]}>
             {rowData.title}
          </Text>
        </TouchableOpacity>
        :
        null
      }
      </View>
    );
  }

  _renderImage(rowData) {
    return(
      <View>
      {
        (rowData.id<6)
        ?
        <View style={styles.dataStyle}>
          {
            this.state.selectedLots == rowData.id
            ?
            <Image source={{uri: rowData.image}} style={styles.selectedDataImage}/>
            :
            <Image source={{uri: rowData.image}} style={styles.dataImage}/>
          }
        </View>
        :
        null
      }
      </View>
    );
  }

  _renderDot(rowData) {
    return(
      <View>
      {
        (rowData.id<6)
        ?
        <View>
          {
            this.state.selectedLots == rowData.id
            ?
            <View style={styles.activeDot} />
            :
            <View style={styles.dot} />
          }
        </View>
        :
        null
      }
      </View>
    );
  }


  render(){

		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}

    const swiperImage = "https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_bg_wt_twentynine.png";

    return(
    <ImageBackground source={{uri: swiperImage}} style={styles.imgContainer}>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Walkthrough')}>
            <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={30} color="white"/>
          </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
        </Body>
        <Right style={styles.right}/>
      </Header>

       <View style={styles.slidesec}>

         <View style={styles.dotListBg}>
           <ListView
              dataSource={this.state.dataSourceText}
              renderRow={this._renderDot.bind(this)}
              enableEmptySections
              scrollEnabled={false} />
         </View>

         <Text style={styles.headertext}>
            WHERE DO YOU WANT TO FLY FROM?
         </Text>

         <View style={styles.countryListBg}>
           <ListView
              horizontal={true}
              dataSource={this.state.dataSourceText}
              renderRow={this._renderText.bind(this)}
              enableEmptySections
              showsHorizontalScrollIndicator={false} />
         </View>

         <View style={styles.imageListBg}>
           <ListView
              ref='imageList'
              horizontal={true}
              dataSource={this.state.dataSourceImage}
              renderRow={this._renderImage.bind(this)}
              enableEmptySections
              showsHorizontalScrollIndicator={false} />
         </View>

         <Text style={styles.contentTxt}>ALL AIRPORT</Text>
       </View>

       <View style={styles.btnsec}>
        <Item rounded style={styles.searchbarStyle}>
          <Input placeholderTextColor='white' textAlign= {I18nManager.isRTL ? 'right' : 'left'}style={styles.searchText}/>
          <TouchableOpacity transparent onPress={()=> alert("Search")}>
            <Icon name='ios-search' style={styles.searchIcon}/>
          </TouchableOpacity>
        </Item>
       </View>
     </ImageBackground>
    );
  }
}
