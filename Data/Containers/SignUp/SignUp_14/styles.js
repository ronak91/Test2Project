
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

logosec:{
		height: (Metrics.HEIGHT*0.30),
		backgroundColor:'transparent',
		justifyContent: 'center',
		alignItems: 'center'
},

slidersec:{
		height: (Metrics.HEIGHT*0.35),
		backgroundColor:'transparent'
},

slidemain:{
		height: (Metrics.HEIGHT*0.40),
		backgroundColor:'transparent',
		justifyContent: 'center'
},

btnsec:{
		height: (Metrics.HEIGHT*0.30),
		backgroundColor:'transparent'

},
logo14:{
			height: (Metrics.HEIGHT*0.15),
			width:  (Metrics.WIDTH*0.35),
			marginTop: (Metrics.HEIGHT*0.1),
},

mainbg:{
	height :Metrics.HEIGHT,
	width :Metrics.WIDTH,
},
backarrow:{
	left:0,
	top:0,
	width: 30,
	position: 'absolute',
	marginTop: 20,
	marginLeft: 20
},
activeDot:{
	backgroundColor: 'white',
	width: 10,
	height: 10,
	borderRadius: 5,
	marginLeft: 3,
	marginRight: 3,
	marginTop: 3,
	marginBottom: 3,
},
dot:{
	backgroundColor:'#8796a6',
	width:  10,
	height: 10,
	borderRadius: 5,
	marginLeft: 3,
	marginRight: 3,
	marginTop: 3,
	marginBottom: 3,
},
bottomsec:{
	width: Metrics.WIDTH * 0.80,
	alignSelf: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between'
},
headertext: {
	fontFamily:Fonts.type.PlayfairDisplayBold,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:28,
	width :Metrics.WIDTH * .90,
	color:'white',
},

desctext: {
	fontFamily: Fonts.type.Bariol,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:16,
	width :Metrics.WIDTH * .70,
	color:'white',
	marginTop:20
},
backicon: {
	width:10,
	height:18,
	marginLeft:20,
	marginTop:40,
},

buttonlogin:{
	backgroundColor:'#3b5998',
	alignSelf:'center',
	borderRadius:40,
	width: Metrics.WIDTH *0.80,
	height: Metrics.HEIGHT * 0.09,
	justifyContent: 'center',
	alignItems: 'center',
	marginTop:  Metrics.HEIGHT * 0.05
},

buttonsignup01:{
	borderWidth: 1,
	borderColor: 'white',
	backgroundColor:'transparent',
	alignSelf:'center',
	marginTop:Metrics.HEIGHT * 0.03,
	borderRadius:40,
 	width: Metrics.WIDTH *0.35,
	height: Metrics.HEIGHT * 0.09,
	justifyContent: 'center'
},


loginbutton: {
	fontFamily: Fonts.type.SFUIDisplayMedium,
	color:'white',
	alignContent: 'center',
	alignSelf: 'center',
	fontSize: 20
},
signupbutton: {
	fontFamily: Fonts.type.SFUIDisplayMedium,
	alignContent: 'center',
	color:'white',
	alignSelf: 'center',
	fontSize: 20
},



container:{
	 width:Dimensions.get('window').width,
	 flexDirection:'row',
	 alignItems:'flex-start',
	 justifyContent:'flex-start'
 },

});

export default styles;
