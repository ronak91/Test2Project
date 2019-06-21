import React , { Component } from "react";
import {View, ListView ,Image , StatusBar, TouchableOpacity, AsyncStorage , Linking, BackHandler, Alert,Platform,ActivityIndicator, I18nManager} from "react-native";
import { Spinner, Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, Input} from "native-base";
import { connect } from 'react-redux'
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {

  constructor(props) {
 		super(props);
 		this.state = {
      LoadingTrue: false,
    };
 	}



  componentWillMount() {
  if  (I18nManager.isRTL){
       this.props.navigation.navigate("DrawerOpen");
       setTimeout(() => {
         this.props.navigation.navigate("DrawerClose");
       }, 1);
     }
     var that = this
     BackHandler.addEventListener('hardwareBackPress', function() {
       that.props.navigation.navigate('FirstScreen')
       return true;
     });

     AsyncStorage.multiGet(['FirstAntiqueruby']).then((data) => {
       if(data[0][1] == ''){
           FirstAntiqueruby = "false";
       }
       else {
           FirstAttempt = data[0][1];
       }
       console.log(FirstAttempt);
       if(FirstAttempt == "true") {
           setTimeout(() => {this.props.navigation.navigate('DrawerOpen')}, 1000);
       }
   });
  }

  componentWillUnmount(){
      console.log("false");
      AsyncStorage.multiSet([
          ['FirstAntiqueruby', "false"],
      ]);
  }

  render() {
    var that=this
    StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
    }
    return (
      <Container>

         <Header style={styles.header}>
           <Left style={styles.left}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
             <Icon name='ios-menu' />
           </TouchableOpacity>
           </Left>
           <Body style={styles.body}>
             <Title>Antiqueruby SignIn</Title>
           </Body>
           <Right style={styles.right}>
             <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FirstScreen')} style={styles.backArrow}>
             {
               (I18nManager.isRTL)
               ?
                 <Ionicons name="ios-arrow-round-forward-outline" size={30} color="#000000"/>
               :
                 <Ionicons name="ios-arrow-round-back-outline" size={30} color="#000000"/>
             }
             </TouchableOpacity>
           </Right>
         </Header>
           <Content>
             <View style={styles.container}>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_01')}>
                 <Text style={styles.buttonText}>SignIn 1</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_02')}>
                 <Text style={styles.buttonText}>SignIn 2</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_03')}>
                 <Text style={styles.buttonText}>SignIn 3</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_04')}>
                 <Text style={styles.buttonText}>SignIn 4</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_05')}>
                 <Text style={styles.buttonText}>SignIn 5</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_06')}>
                 <Text style={styles.buttonText}>SignIn 6</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_07')}>
                 <Text style={styles.buttonText}>SignIn 7</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_08')}>
                 <Text style={styles.buttonText}>SignIn 8</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_09')}>
                 <Text style={styles.buttonText}>SignIn 9</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_10')}>
                 <Text style={styles.buttonText}>SignIn 10</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_11')}>
                 <Text style={styles.buttonText}>SignIn 11</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_12')}>
                 <Text style={styles.buttonText}>SignIn 12</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyle} onPress={()=>that.props.navigation.navigate('SignIn_13')}>
                 <Text style={styles.buttonText}>SignIn 13</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.btnsec}>
               <TouchableOpacity style={styles.btnStyles} onPress={()=>that.props.navigation.navigate('SignIn_14')}>
                 <Text style={styles.buttonText}>SignIn 14</Text>
               </TouchableOpacity>
             </View>
             </View>
           </Content>
      </Container>
    );
  }
}

export default HomeScreen
