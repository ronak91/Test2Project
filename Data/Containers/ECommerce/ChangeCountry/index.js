import React, { Component } from 'react';
import { Text, View, Image, StatusBar,TouchableOpacity, Platform, BackHandler, I18nManager} from 'react-native';
import { Content,Container, Right, Header, Left, Body, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {  Images,Fonts, Metrics, Colors } from '../../../Themes/';
import CheckBox from 'react-native-check-box';

export default class  Address extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLots: '1',
      data: [
        {
          id: 1,
          flagimage: Images.flagVietNam,
          CountryName: "Viet Nam",
        },
        {
          id: 2,
          flagimage: Images.flagSingapore,
          CountryName: "Singapore",
        },
        {
          id: 3,
          flagimage: Images.flagThailand,
          CountryName: "Thailand",
        },
        {
          id: 4,
          flagimage: Images.flagMalasia,
          CountryName: "Malasia",
        },
        {
          id: 5,
          flagimage: Images.flagIndonesia,
          CountryName: "Indonesia",
        },
        {
          id: 6,
          flagimage: Images.flagPhilippines,
          CountryName: "Philippines",
        }
      ]
    };
  }

  componentWillMount() {
		var that = this;
		BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('ECommerceMenu');
			return true;
		});
	}

  onClick() {

	 }

   onCheckBoxPress(id) {
     this.setState({
       selectedLots: id
     });
   }

  render(){
    StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
		 StatusBar.setBackgroundColor('#0e1130',true);
		 StatusBar.setTranslucent(true);
		}

    return(
      <Container style={styles.container}>
        <Header
          androidStatusBarColor={"#0e1130"}
          style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                <Ionicons name="ios-menu" size={30} color="white"/>
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Country</Text>
            </Body>
            <Right style={styles.right}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>alert('Done')}>
              <Text style={styles.textDone}>Done</Text>
            </TouchableOpacity>
            </Right>
        </Header>

        <Content>
        {
          this.state.data.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={()=>this.onCheckBoxPress(item.id)}>
                <View style={styles.rowMain}>
                  <View style={styles.backArrow}>
                      <Image source={item.flagimage} style={styles.FlagIcon}/>
                  </View>
                  <View style={styles.addressTextBg}>
                    <Text style={[styles.addressText, {color: '#000000'}]}>{item.CountryName}</Text>
                  </View>
                  <View style={styles.checkArrow}>
                  {
                    (this.state.selectedLots == item.id)
                    ?
                    <CheckBox
                      onClick={()=>this.onClick()}
                      isChecked={true}
                      checkBoxColor={'#ffc700'}
                      style={Metrics.WIDTH * 0.10}
                      checkedImage={ <Ionicons name="ios-checkmark-outline" size={40} color="#ffc700"/>}
                    />
                    :
                    <CheckBox
                      onClick={()=>this.onClick()}
                      isChecked={true}
                      checkBoxColor={'#ffffff'}
                      style={Metrics.WIDTH * 0.10}
                      checkedImage={ <Ionicons name="ios-checkmark-outline" size={40} color="#ffffff"/>}
                    />
                  }
                  </View>
                </View>
                <View style={styles.addressDivider} />
              </TouchableOpacity>
            )
          })
        }
        </Content>


      </Container>
    );
  }
}
