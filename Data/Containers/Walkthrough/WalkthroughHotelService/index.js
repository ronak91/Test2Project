
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,BackHandler, I18nManager} from 'react-native';
import { Container, Icon, Right, Header, Left, Body, CheckBox } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screen Styles
import styles from './styles';

export default class WalkthroughHotelService extends Component {

  constructor(props) {
 		super(props);
    const dataObjects = [
			{id: 1, title: 'Luxury'},
			{id: 2, title: 'Romantic'},
			{id: 3, title: 'Modern'},
			{id: 4, title: 'Family'},
			{id: 5, title: 'Standard'},
      {id: 6, title: 'Romantic'},
			{id: 7, title: 'Modern'},
			{id: 8, title: 'Family'},
			{id: 9, title: 'Standard'},
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
      <View style={styles.row}>
      {
        (rowData.id<6) ?
        <TouchableOpacity style={styles.dataStyle} onPress={()=>this.onCheckBoxPress(rowData.id)} >
          <View style={this.state.selectedLots.includes(rowData.id) == true ? [styles.listStyle,{backgroundColor: '#292e4b'}] : styles.listStyle}>
            <Text style={styles.desctext}>
            {rowData.title}
            </Text>
            <View style={styles.chBoxBg}>
              <CheckBox
                checked={this.state.selectedLots.includes(rowData.id)? true : false}
                onPress={()=>this.onCheckBoxPress(rowData.id)}
                color={this.state.selectedLots.includes(rowData.id)? '#4cd964' : 'transparent'}
                style={styles.chBox}/>
            </View>
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
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

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
         <View style={styles.headerStyle}>
           <Text style={styles.headertext}>
             Which hotel styles do you prefer?
           </Text>
         </View>
         <View style={styles.contentStyle}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              enableEmptySections
              scrollEnabled={false}/>
        </View>

       </View>

       <View style={styles.btnsec}>
         <TouchableOpacity style={styles.btnStyle} onPress={()=>alert("Next")}>
           <Text style={styles.buttonText}>Next</Text>
         </TouchableOpacity>
       </View>
    </Container>

    );
  }
}
