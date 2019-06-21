
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#C5B9C9',
  },
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },
  headerSec: {
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
    width:30,
		justifyContent: 'center',
		alignItems: 'center',
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
	right: {
    flex:0.5,
  },
  mainview:{
    marginTop: 25,
    alignItems: 'center',

  },
  // headertxt:{
  //   fontSize: Fonts.moderateScale(32),
  //   textAlign: 'center',
  //   color:'white'
  // },
  screenBg: {
  	flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT,
  	position: 'absolute'
  },

  badgetext:{
    color:'#00bff3',
    fontSize: Fonts.moderateScale(13),
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalbg:{
    flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT,
    margin:-(Metrics.WIDTH*0.001)
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowicon:{
    backgroundColor: 'transparent',
    tintColor: 'white',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  userpic:{
    width: (Metrics.WIDTH) * 0.13,
    height: (Metrics.WIDTH) * 0.13,
    borderRadius: (Metrics.WIDTH)* 0.065,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginLeft: (Metrics.WIDTH) * 0.1,
  },
  rowtxt:{
    color:'white',
    fontSize: Fonts.moderateScale(23),
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayLight
  },
  // header: {
  //   backgroundColor: '#1a191f',
  //   height: 56,
  //   borderBottomWidth: 0,
  //   ...Platform.select({
  //     ios: {},
  //     android: {
	// 			paddingTop:10
	// 		}
  //   }),
	// 	elevation: 0
  // },
  // lefts: {
  //   flex: 1,
	// 	 backgroundColor: 'transparent',
  //    left:5
  // },
  headerModal: {
    backgroundColor: '#6857cf',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0,
  },

	titleBar: {
    width: (Metrics.WIDTH),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 30
  },

  textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  baseText: {
		padding: 20,
		color: 'rgb(255,255,255)',
 		fontFamily: Fonts.type.sfuiDisplayRegular,
 	// 	fontFamily: Fonts.type.'SFUIText-Light',
		fontSize: Fonts.moderateScale(13),
  },

	containMainBg: {
    backgroundColor: '#fff',
    height: (Metrics.HEIGHT * 0.50),
    width: (Metrics.WIDTH * 0.92),
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		bottom:15,
  },

	containFbBg: {
		backgroundColor: "#ebebeb",
		height: (Metrics.HEIGHT * 0.12),
		width: (Metrics.WIDTH * 0.92),
		borderTopLeftRadius: 5,
		borderTopRightRadius : 5,
		justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 0,
		right:0,
		bottom:(Metrics.HEIGHT * 0.38),
		elevation: 0
	},

	fbButton:
	{
		backgroundColor: "#3b5998",
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.84),
		borderRadius: 5,
		justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		top:13,
		elevation: 0
	},

	fbButtonIcon:{
		left:65,
	},

	fbButtonText:{
		color: "#fff",
		fontSize: Fonts.moderateScale(17),
		right: 55,
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

	containEmail:{
		backgroundColor: 'transparent',
    height: (Metrics.HEIGHT * 0.08),
    width: (Metrics.WIDTH * 0.84),
    borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderWidth: 1,
		borderColor: "#ccc",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

		position: 'absolute',
		left: 15,
		right:15,
		bottom:(Metrics.HEIGHT * 0.26),
	},

	inputEmail:{
		height: (Metrics.HEIGHT * 0.08),
    width: (Metrics.WIDTH * 0.84),
		color: "#000",
		left: 15,
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

	containPassword:{
		backgroundColor: 'transparent',
    height: (Metrics.HEIGHT * 0.08),
    width: (Metrics.WIDTH * 0.84),
    borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: "#ccc",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
		elevation:1,
		position: 'absolute',
		left: 15,
		right:15,
		bottom:(Metrics.HEIGHT * 0.18),
	},

	signInBtn:{
		backgroundColor: "#4cd964",
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.84),
		borderRadius: 5,
		justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		top:(Metrics.HEIGHT * 0.35),
	},

	signInBtnText:{
		color: "#fff",
		fontSize: Fonts.moderateScale(17),
		justifyContent: 'space-between',
		width: (Metrics.WIDTH  * 0.84),
		textAlign: 'center',
 		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},

	forgotPassword:{
		color: "#0691ce",
		fontSize: Fonts.moderateScale(17),
		height: (Metrics.HEIGHT * 0.05),
		width: (Metrics.WIDTH),
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: 'transparent',
		top:(Metrics.HEIGHT * 0.44),
 		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

  screenBg: {
    flex:3,
    width: '100%',
    height: '100%',
    backgroundColor:'black',
  },

  logostyle: {
    alignSelf:'center',
    marginTop:30,
    width: 130,
    height: 100
  },
  overlay: {
    backgroundColor:'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%'
  },


  headertext: {
    fontFamily: Fonts.type.playFairDisplayBold,
    backgroundColor:'transparent',
    textAlign:'center',
    alignSelf:'center',
    fontSize: Fonts.moderateScale(30),
    width :Metrics.WIDTH * .90,
    color:'#ffffff',
    marginTop:60
  },
  desctext:{
    fontFamily: Fonts.type.bariol,
    backgroundColor:'transparent',
    textAlign:'center',
    alignSelf:'center',
    fontSize: Fonts.moderateScale(16),
    width :Metrics.WIDTH * .65,
    color:'#ffffff',
    marginTop:20
  },
  backgroundImage: {
		flex: 1,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		position: 'absolute'
	},
  form:{
    alignSelf:'center',
    margin:20 ,
    marginTop:40
  },
  buttonlogin:{
    backgroundColor:'#0691ce',
    alignSelf:'center',
    paddingLeft:60,
    paddingRight:60,
    paddingTop:17,
    paddingBottom:17,
    borderRadius:40,
  },

  buttonsignup:{
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor:'transparent',
    alignSelf:'center',
    paddingLeft:50,
    paddingRight:50,
    paddingTop:17,
    paddingBottom:17,
    marginTop:15,
    borderRadius:40,
  },
  buttondialogsignup:{
    backgroundColor:'#4cd964',
    alignSelf:'center',
    paddingTop:15,
    paddingBottom:15,
    marginTop:30,
    borderRadius:40,
    width:Metrics.WIDTH*0.80,
  },

  userInfoView:{
    zIndex: 111,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#36343f'
  },

  profileView:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: Metrics.WIDTH*0.22
  },

  nameAddressView:{
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    width: Metrics.WIDTH*0.3,
    height: 70,
    justifyContent: 'center',
    marginLeft: 10
  },

  name:{
    fontSize: Fonts.moderateScale(15),
    color:'white'
  },

  address:{
    fontSize: Fonts.moderateScale(15),
    color:'#9b9a9f'
  },

  notiView:{
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    width: Metrics.WIDTH*0.43,
    alignItems:   'flex-end'
  },

  notiIcon:{
    height: 20,
    width: 20,
    resizeMode:'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },

});
export default styles;
