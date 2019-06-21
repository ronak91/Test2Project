import React, { Component } from 'react';
import {View,StatusBar,Platform , TouchableOpacity,ScrollView, BackHandler,Image, I18nManager} from 'react-native';
import { Container,Text,Header,  Left, Body,Right} from 'native-base';
// Screen Styles
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Fonts, Metrics, Colors , Images} from '../../../Themes/';

export default class DrawerMusicThree extends Component {
  constructor() {
  	super();
    this.state = {
    }
  }
  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Drawer')
      return true;
    });
  }

  render() {

    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent',true);
      StatusBar.setTranslucent(true);
    }
    return (

    <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Drawer')}>
            {
              (I18nManager.isRTL)
              ?
                <FontAwesome name="angle-right" size={30} color="white"/>
              :
                <FontAwesome name="angle-left" size={30} color="white"/>
            }

            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
          </Body>
          <Right style={styles.right}/>
        </Header>
        <Text style={styles.maintxt}>TAP ON THE CATEGORY YOU LIKE</Text>
      <ScrollView horizontal={true}  style={styles.mainScroll}>
        <View style={styles.mainview}>
          <View style={styles.oldies}>
            <TouchableOpacity onPress={() => alert('OLDIES')} >
            <Text style={styles.txtmusic}>OLDIES</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popbig}>
            <TouchableOpacity onPress={() => alert('POP')} >
            <Text style={[styles.txtmusic,{fontSize: 25}]}>POP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reggae}>
            <TouchableOpacity onPress={() => alert('REGGAE')} >
            <Text style={styles.txtmusic}>REGGAE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.electronic}>
            <TouchableOpacity onPress={() => alert('ELECTRONIC')} >
            <Text style={{color: 'white',fontSize: 12}}>ELECTRONIC</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rock}>
            <TouchableOpacity onPress={() => alert('ROCK')} >
            <Text style={styles.txtmusic}>ROCK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popsmall}>
            <TouchableOpacity onPress={() => alert('POP')} >
            <Text style={styles.txtmusic}>POP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.latin}>
            <TouchableOpacity onPress={() => alert('LATIN')} >
            <Text style={styles.txtmusic}>LATIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.country}>

            <Image style={styles.countryimg} source={Images.country}/>
              <TouchableOpacity onPress={() => alert('COUNTRY')} >
              <Text style={styles.txtmusic}>COUNTRY</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.classical}>
            <TouchableOpacity onPress={() => alert('CLASSICAL')} >
            <Text style={{color: 'white', fontSize: 12}}>CLASSICAL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heavymetal}>
            <Image style={styles.countryimg} source={Images.heavymetal}/>
            <TouchableOpacity onPress={() => alert('HEAVY METAL')} >
            <Text style={styles.txtmusic}>HEAVY METAL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kpop}>
            <TouchableOpacity onPress={() => alert('K-POP')} >
            <Text style={styles.txtmusic}>K-POP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.randb}>
            <TouchableOpacity onPress={() => alert('R&B')} >
            <Text style={styles.txtmusic}>R&B</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.opera}>
            <TouchableOpacity onPress={() => alert('OPERA')} >
              <Text style={styles.txtmusic}>OPERA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.folk}>
            <TouchableOpacity onPress={() => alert('FOLK')} >
            <Text style={styles.txtmusic}>FOLK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.blues}>
            <TouchableOpacity onPress={() => alert('BLUES')} >
            <Text style={styles.txtmusic}>BLUES</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.jazz}>
            <TouchableOpacity onPress={() => alert('JAZZ')} >
            <Text style={[styles.txtmusic,{fontSize: 25}]}>JAZZ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.techno}>
            <TouchableOpacity onPress={() => alert('TECHNO')} >
            <Text style={styles.txtmusic}>TECHNO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rap}>
            <TouchableOpacity onPress={() => alert('RAP')} >
            <Text style={styles.txtmusic}>RAP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.funk}>
            <TouchableOpacity onPress={() => alert('FUNK')} >
            <Text style={styles.txtmusic}>FUNK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.disco}>
            <TouchableOpacity onPress={() => alert('DISCO')} >
            <Text style={styles.txtmusic}>DISCO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>



    );
  }
}
