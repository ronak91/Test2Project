
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Right, Item, Input, Header, Left, Body, CheckBox} from 'native-base';
import Swiper from 'react-native-swiper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';
import Images from '../../../Themes/Images';

export default class WalkthroughEventHandler extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
			{id: 1, image: Images.music, title: 'Music'},
			{id: 2, image: Images.film, title: 'Film'},
			{id: 3, image: Images.book, title: 'Book'},
			{id: 4, image: Images.game, title: 'Game'},
			{id: 5, image: Images.food, title: 'Food'},
			{id: 6, image: Images.sport, title: 'Sport'},
			{id: 7, image: Images.fashion, title: 'Fashion'},
			{id: 8, image: Images.draw, title: 'Draw'},
			{id: 9, image: Images.travel, title: 'Travel'},
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
    // console.warn('selected: ', this.state.selecte;dLots)
  }

  _renderRow(rowData) {
    return(
      <View style={styles.row}>
        <TouchableOpacity style={styles.dataStyle} onPress={()=>this.onCheckBoxPress(rowData.id)} >

          <View style={styles.listItemImgBg}>
            <Image source={rowData.image} style={styles.dataImage}/>
          </View>
          <View style={styles.chBoxBg}>
            <CheckBox
              checked={this.state.selectedLots.includes(rowData.id)? true : false}
              onPress={()=>this.onCheckBoxPress(rowData.id)}
              color={this.state.selectedLots.includes(rowData.id)? '#4cd964' : 'transparent'}
              style={styles.chBox}/>
          </View>
          <View style={styles.listItemTitleBg}>
            <Text style={styles.dataText}>{rowData.title}</Text>
          </View>

        </TouchableOpacity>
      </View>
    );
  }


  render(){

		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}

		let profileImage = {
			uri : 'https://antiqueruby.aliansoftware.net//Images/walkthrough/profile_image_wttwentysix.png'
		};

    return(
     <Container style={{backgroundColor: '#2d324f'}}>
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
         <ListView
            style={{paddingBottom: 10, paddingRight: 5,marginVertical: 30}}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={9}
            scrollEnabled={false}/>
       </View>

       <View style={styles.btnsec}>
         <Button rounded onPress={()=> alert("Back")} style={styles.backBtnStyle}>
           <Text style={styles.backText}>Back</Text>
         </Button>
         <View style={styles.profileMain}>
            <Image source={Images.eclipse} style={styles.eclipseStyle}/>
            <Image source={profileImage} style={styles.profileStyle}/>
         </View>
         <Button rounded onPress={()=> alert("Next")} style={styles.nextBtnStyle}>
           <Text style={styles.nextText}>Next</Text>
         </Button>
       </View>
    </Container>

    );
  }
}
