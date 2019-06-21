import React, { Component } from 'react';
import { TouchableHighlight,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform , TouchableOpacity} from 'react-native';
import { Container,Text,Header, Content,Form,Item,Button,Input,CheckBox, Left, Body,  Icon,Title ,Right} from 'native-base';
import { Fonts, Metrics, Colors, Images } from '../../../Themes/';
import styles from './styles';

export default class ControlPanel extends Component {

_handlePress(text){
  alert(text);
}
  render() {
    const imageMountifyLogo = "https://antiqueruby.aliansoftware.net//Images/signin/ic_logo_mountify_signin_eight.png";
    return (
      <Container style={styles.container}>
        <Content>
         <Right style={styles.rights}>
           <TouchableOpacity onPress={this.props.closeDrawer}>
             <Icon name='ios-close-circle-outline'  style={{color:'white'}}/>
           </TouchableOpacity>
         </Right>
         <Image style={styles.imageLogoMountify} source={{uri:imageMountifyLogo}}/>
         <View style={styles.mainview}>
           <TouchableOpacity onPress={() => this._handlePress('Home')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Home</Text>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Articles')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Articles</Text>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Message')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Message</Text>
               <View style={styles.badgeview}>
                <Text style={styles.badgetext}>10</Text>
               </View>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Activity')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Activity</Text>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Favourite')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Favourite</Text>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Friends')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Friends</Text>
             </View>
           </TouchableOpacity>
           <View style={styles.linebg}></View>
           <TouchableOpacity onPress={() => this._handlePress('Logout')} >
             <View style={styles.listrow}>
               <Text style={styles.rowtxt}>Logout</Text>
             </View>
           </TouchableOpacity>
         </View>
        </Content>
      </Container>
    )
  }

}
