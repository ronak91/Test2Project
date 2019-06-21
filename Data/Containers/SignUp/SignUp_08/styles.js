
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

mainbg:{
	height:Metrics.HEIGHT,
	width:Metrics.WIDTH
},
header: {
	backgroundColor: Colors.transparent,
	height: Metrics.WIDTH * 0.15,
	borderBottomWidth: 0,
	...Platform.select({
		ios: {},
		android: {
			marginTop: Fonts.moderateScale(25)
		}
	}),
	elevation: 0
},
left: {
	flex: 0.5,
	backgroundColor: 'transparent',
},
backArrow: {
	width: 30,
	alignItems: 'center',
},
body: {
	flex: 3,
	alignItems: 'center',
	backgroundColor: 'transparent'
},
textTitle: {
	color: "#000",
	fontSize: Fonts.moderateScale(16),
	marginTop: 5,
	alignSelf: 'center',
	fontFamily: Fonts.type.sfuiDisplaySemibold,
},
right: {
	flex: 0.5
},
slidesec:{
		height: (Metrics.HEIGHT*0.40),
		backgroundColor:'transparent',
		marginTop: (Metrics.HEIGHT*0.15),
},

btnsec:{
		height: (Metrics.HEIGHT*0.21),
		backgroundColor:'transparent'

},
headertext: {
	fontFamily:  Fonts.type.PlayfairDisplayBold,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:28,
	width :Metrics.WIDTH * .90,
	color:'white',
},

desctext: {
	fontFamily:  Fonts.type.Bariol,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:16,
	width :Metrics.WIDTH * 0.80,
	color:'white',
	marginTop:20
},
buttonlogin:{
     backgroundColor:'transparent',
     alignSelf:'center',
     borderRadius:40,
     width: Metrics.WIDTH *0.80,
		 borderWidth: 1,
		 height: (Metrics.HEIGHT*0.07),
		 flexDirection: 'row',
		 borderColor: 'white',
		 alignItems: 'center',
		 justifyContent: 'center',
		 marginTop: 20,
 },

 ButtonText:{
 	color: "#fff",
 	fontSize: 17,
	paddingLeft: 10,
 	fontFamily:  Fonts.type.SFUIDisplayRegular,
 	alignItems: 'center',
 	alignSelf: 'center',
 },

 view3: {
 	width:Metrics.WIDTH,
 	height:Metrics.HEIGHT*0.15,
 	justifyContent:'center',
 	backgroundColor:'transparent'
 },
 bottomtext: {
 	alignSelf:'center',
 	fontFamily:  Fonts.type.SFUIDisplayRegular,
 	color:'white',
 	fontSize:15,
 },

});

export default styles;
