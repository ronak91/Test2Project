
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({
	main:{
		width : Metrics.WIDTH,
		height : Metrics.HEIGHT
	},
	logosec:{
		height: (Metrics.HEIGHT*0.40),
		backgroundColor:'transparent',
		position: 'relative'
	},

	slidemain:{
		height: (Metrics.HEIGHT*0.51),
		backgroundColor:'#ffffff',
		justifyContent: 'center'
	},
		btnsec:{
		height: (Metrics.HEIGHT*0.09),
		width :Metrics.WIDTH,
		backgroundColor:'#4cd964',
		justifyContent: 'center'
	},

	logo15: {
		height: (Metrics.HEIGHT*0.40),
		width :Metrics.WIDTH,
		alignSelf:'center',
		position: 'relative'
	},
	back:{
		marginTop: 15,
		marginLeft: 15
	},
	btns:{
		marginTop:Metrics.HEIGHT*0.25 ,
		width: Metrics.WIDTH,
		height: (Metrics.HEIGHT*0.08),
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignSelf: 'flex-end',
		flexDirection: 'row'
	},
	btnback:{
		width: Metrics.WIDTH*0.5,
		height: (Metrics.HEIGHT*0.08),
		alignSelf: 'center',
		justifyContent: 'center'
	},

	inputLabel: {
		justifyContent: 'center',
		alignSelf:'center',
		backgroundColor: 'transparent'
	},

	itememail: {
		alignSelf:'center',
		height:50,
		marginRight: 20,
   },

	inputemail: {
		fontFamily:Fonts.type.SFUIDisplayRegular,
		color:'#ebebeb',
	 },

  buttonsignup:{
  	backgroundColor:'#4cd964',
  	alignSelf:'center',
		width :Metrics.WIDTH,
		justifyContent: 'center'
  },

	backarrow:{
		left:0,
		top:0,
		width: 30,
		position: 'absolute',
		marginTop: 20,
		marginLeft: 20
	},
  loginbutton: {
		fontSize: 18,
		fontFamily:Fonts.type.SFUIDisplaySemibold,
		color:'white',
		alignContent: 'center',
		alignSelf: 'center'
	},

  signupbutton: {
		fontSize: 18,
		fontFamily: Fonts.type.SFUIDisplaySemibold,
		alignContent: 'center',
		color:'white',
		alignSelf: 'center'
	},


});

export default styles;
