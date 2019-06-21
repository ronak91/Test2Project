
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	screenBg: {
		width:  Metrics.WIDTH,
		height: Metrics.HEIGHT,
		backgroundColor:'black',
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
		elevation: 0,
	},
	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	modelMain:{
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		justifyContent:'center',
		alignItems:'center'
	},

	logostyle: {
		alignSelf:'center',
		width:Metrics.WIDTH*0.35,
		height: Metrics.HEIGHT*0.15
	},
	headertext: {
		fontFamily: Fonts.PlayfairDisplayBold,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:30,
		width :Metrics.WIDTH*0.90,
		color:'white',
		marginTop:Metrics.HEIGHT*0.08
	},
	container:{
		justifyContent:'center' ,
		alignItems:'center',
	},

	desctext:{
		fontFamily: Fonts.Bariol,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:16,
		width :Metrics.WIDTH* .65,
		color:'white',
		marginTop:Metrics.HEIGHT*0.04
	},
	form:{
		alignSelf:'center',
		margin:20 ,
		marginTop:Metrics.HEIGHT*0.05
	},
	buttonlogin:{
		backgroundColor:Colors.loginBlue,
		alignSelf:'center',
		height: Metrics.HEIGHT*0.08,
		width: Metrics.WIDTH*0.4,
		borderRadius:40,
		alignItems: 'center',
		justifyContent: 'center'
	},

	buttonsignup:{
		borderWidth: 1,
		borderColor: '#ffffff',
		backgroundColor:'transparent',
		alignSelf:'center',
		height: Metrics.HEIGHT*0.08,
		width: Metrics.WIDTH*0.4,
		borderRadius:40,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT*0.03
	},
	buttondialogsignup:{
		backgroundColor:'#4cd964',
		alignSelf:'center',
		borderRadius:40,
		height:Metrics.HEIGHT*0.07,
		width:Metrics.WIDTH*0.80,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT*0.03
	},
	btnText:{
		fontFamily: 'SFUIDisplay-Medium',
		color:'white'
	},
	modelCenter:{
		borderRadius:5,
		height:Metrics.HEIGHT*0.48,
		width:Metrics.WIDTH*0.95,
		backgroundColor:'white',
		padding:10
	},
	close:{
		alignItems:'flex-end'
	},
	txtsingIn:{
		fontSize:25,
		fontFamily: Fonts.SFUIDisplayRegular,
		justifyContent:'center',
		alignSelf:'center',
		marginBottom: 5
	},
	item:{
		justifyContent:'center',
		alignSelf:'center',
		marginTop:8,
		width:Metrics.WIDTH*0.80,
		height:40
	},
	input:{
		fontFamily:'SFUIDisplay-Regular',
		color:'#b7b7b7'
	},
	rememView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop:20,
		width:Metrics.WIDTH*0.80,
		alignSelf:'center'
	},
	remem:{
		marginLeft: 5,
		fontSize: 15,
		fontFamily:'SFUIDisplay-Regular'
	},
	forgot:{
		alignSelf:'flex-end',
		fontSize: 15,
		justifyContent:'flex-end',
		fontFamily:'SFUIDisplay-Regular'
	},
	modelSignUp:{
		alignSelf:'center',
		fontFamily:'SFUIDisplay-Regular',
		color:'white'
	}


});
export default styles;
