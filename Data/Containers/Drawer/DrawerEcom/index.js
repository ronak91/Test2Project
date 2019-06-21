import React, { Component } from 'react';
import { TouchableHighlight,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform, Alert, TouchableOpacity, BackHandler, I18nManager} from 'react-native';
import { Container,Text,Header, Content,Form,Item,Button,Input,CheckBox, Left, Body,  Icon,Title ,Right} from 'native-base';
// Screen Styles
import styles from './styles';
import Modal from 'react-native-modal'
import { Images } from '../../../Themes/';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DrawerEcom extends Component {

  componentWillMount(){
    // setTimeout(() => {this.drawer.open()}, 1000);
    var that = this
      BackHandler.addEventListener('hardwareBackPress', function() {
            that.props.navigation.navigate('Drawer')
           return true;
      });
  }

  constructor() {
  	super();
    this.state = {
      isModalVisible: false,
    }
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    let BG_Image = {
			uri : 'http://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png'
		};
    const imageMountifyLogo = "http://antiqueruby.aliansoftware.net//Images/signin/ic_logo_mountify_signin_eight.png";
    return (

    <Container style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={BG_Image} >
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Drawer')} style={styles.backArrow}>
            {
              (I18nManager.isRTL)
              ?
                <Ionicons name="ios-arrow-round-forward-outline" size={30} color="#ffffff"/>
              :
                <Ionicons name="ios-arrow-round-back-outline" size={30} color="#ffffff"/>
            }
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <View style={styles.headerNameView}>
              <Title style={styles.headerTitle}>Drawer Ecom</Title>
                <TouchableOpacity  onPress={()=>this._showModal()}>
              <Icon name='ios-arrow-down-outline' style={styles.headerArrow} />
                </TouchableOpacity>
            </View>

          </Body>
          <Right style={styles.right}/>
        </Header>
        <Text style={styles.forgotPassword} >Drawer Sixteen</Text>
        <Modal style={styles.bottomModal} isVisible={this.state.isModalVisible} onBackdropPress={()=>this._hideModal()}>
          <View style={styles.triangles}>
          </View>
          <View style={styles.mainview}>
          <View style={styles.headerbottom}>
            <Text style={styles.filterText}>Filter</Text>
          </View>
          <View style={styles.horizontalline}></View>
            <View style={styles.semirow}>
               <TouchableOpacity onPress={() => alert('Living Room')} >
               <View style={styles.listrow}>
                <Image source={Images.livingRoomBlue} style={ styles.rowicon} />
                <Text style={styles.rowtxt}>Living Room</Text>
               </View>
               </TouchableOpacity>
               <View style={styles.verticalline}></View>
               <TouchableOpacity onPress={() => alert('Dining Room')} >
               <View style={styles.listrow}>
                <Image source={Images.diningRoomBlue} style={ styles.rowicon} />
                <Text style={styles.rowtxt}>Dining Room</Text>
               </View>
               </TouchableOpacity>
               <View style={styles.verticalline}></View>
               <TouchableOpacity onPress={() => alert('Bookcase')} >
               <View style={styles.listrow}>
                <Image source={Images.bookCaseBlue} style={ styles.rowicon} />
                <Text style={styles.rowtxt}>Bookcase</Text>
               </View>
               </TouchableOpacity>
            </View>
            <View style={styles.horizontalline}></View>
            <View style={styles.semirow}>
              <TouchableOpacity onPress={() => alert('Bedroom')} >
              <View style={styles.listrow}>
               <Image source={Images.bedRoomBlue} style={ styles.rowicon} />
               <Text style={styles.rowtxt}>Bedroom</Text>
              </View>
              </TouchableOpacity>
               <View style={styles.verticalline}></View>
              <TouchableOpacity onPress={() => alert('TV Stands')} >
              <View style={styles.listrow}>
               <Image source={Images.tvStandBlue} style={ styles.rowicon} />
               <Text style={styles.rowtxt}>TV Stands</Text>
              </View>
              </TouchableOpacity>
              <View style={styles.verticalline}></View>
              <TouchableOpacity onPress={() => alert('Bathroom')} >
              <View style={styles.listrow}>
               <Image source={Images.bathRoomBlue} style={ styles.rowicon} />
               <Text style={styles.rowtxt}>Bathroom</Text>
              </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </Container>



    );
  }
}
