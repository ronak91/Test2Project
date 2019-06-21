
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label, CheckBox} from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughEvents extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
			{id: 1, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_music_wt_twentyfive.png', title: 'Music'},
			{id: 2, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_film_wt_twentyfive.png', title: 'Film'},
			{id: 3, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_food_wt_twentyfive.png', title: 'Food'},
			{id: 4, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_resort_wt_twentyfive.png', title: 'Restaurant'},
			{id: 5, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_music_wt_twentyfive.png', title: 'Music'},
			{id: 6, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_film_wt_twentyfive.png', title: 'Film'},
			{id: 7, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_food_wt_twentyfive.png', title: 'Food'},
			{id: 8, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_resort_wt_twentyfive.png', title: 'Restaurant'},
			{id: 9, image: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_music_wt_twentyfive.png', title: 'Music'},
    ]
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    	selectedLots: [],
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
    let tmp = this.state.selectedLots;

    if (tmp.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);
    }
    else {
      tmp.push(id);
    }

    this.setState({
      selectedLots: tmp
    });
    // console.warn('selected: ', this.state.selectedLots)
  }

  _renderRow(rowData) {
    return(
      <View>
      {
        (rowData.id<5)
        ?
        <TouchableOpacity style={styles.dataStyle} onPress={()=>this.onCheckBoxPress(rowData.id)}>
          <Image source={{uri: rowData.image}} style={styles.dataImage}/>
          <View style={styles.chBoxBg}>
            <CheckBox
              checked={this.state.selectedLots.includes(rowData.id)? true : false}
              onPress={()=>this.onCheckBoxPress(rowData.id)}
              color={this.state.selectedLots.includes(rowData.id)? '#4cd964' : 'transparent'}
              style={styles.chBox}/>
          </View>
          <View style={styles.imgTitleBg}>
            <Text style={styles.dataText}>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
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

    return(
     <Container style={styles.container}>
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

         <Text style={styles.headertext}>
            What kind of events are you interested in?
         </Text>
         <Text style={styles.desctext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
         </Text>

         <View style={styles.listBg}>
           <ListView
              horizontal={true}
              style={styles.listItem}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              indicatorStyle={'white'} />
        </View>

       </View>

       <View style={styles.btnsec}>
         <Button rounded onPress={()=> alert("Continue")} style={styles.continueBg}>
           <Text style={styles.continueTxt}>Continue</Text>
         </Button>
       </View>
    </Container>

    );
  }
}
