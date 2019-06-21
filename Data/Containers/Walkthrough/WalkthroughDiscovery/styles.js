
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
		backgroundColor: '#2d324f',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.03),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5
	},

	body: {
    flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	right: {
		flex: 0.5
	},

  textHome: {
    color:Colors.snow,
    fontSize:Fonts.moderateScale(18),
    fontFamily:Fonts.type.sfuiDisplaySemibold,
  },

  main: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT * 0.90),
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalStyle: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    alignItems: 'center',
    backgroundColor: "#0006",
  	elevation: 5,
  	shadowColor: '#000',
  	shadowOpacity: 0.4,
  	shadowRadius: 8,
  	shadowOffset: {
  		height: 10,
  		width: 0
  	},
  },

  popupBgImage: {
    width: (Metrics.WIDTH * 0.88),
    height: (Metrics.HEIGHT * 0.74),
    marginTop: (Metrics.HEIGHT * 0.16),
    borderRadius: 8,
    backgroundColor: '#0691ce',
  },

  logoStyle: {
    width: (Metrics. WIDTH * 0.35),
    height: (Metrics.HEIGHT * 0.18),
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT * 0.08),
    resizeMode: 'contain'
  },

  headertext: {
  	fontFamily: Fonts.type.sfuiDisplaySemibold,
  	textAlign:'center',
  	fontSize: Fonts.moderateScale(22),
  	color: Colors.snow,
  },

  desctext: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(10),
  	width :(Metrics.WIDTH) * .72,
  	color:'#b5e4f3',
  	marginTop: (Metrics.HEIGHT * 0.015)
  },

  dot:{
    backgroundColor:'#51b4dd',
    width:  (Metrics.WIDTH * 0.016),
		height: (Metrics.WIDTH * 0.016),
		borderRadius: (Metrics.WIDTH * 0.008),
		marginLeft: (Metrics.WIDTH * 0.003),
		marginRight: (Metrics.WIDTH * 0.003),
  },

  activeDot:{
    backgroundColor:Colors.snow,
    width:  (Metrics.WIDTH * 0.016),
		height: (Metrics.WIDTH * 0.016),
		borderRadius: (Metrics.WIDTH * 0.008),
		marginLeft: (Metrics.WIDTH * 0.003),
		marginRight: (Metrics.WIDTH * 0.003),
  },

  slider: {
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.HEIGHT  *  0.015)
  },

  readyToGetStarted: {
    textAlign : 'center',
    fontSize : Fonts.moderateScale(14),
    fontFamily : Fonts.type.sfuiDisplaySemibold,
    color : "#6f6f6f",
    margin: (Metrics.WIDTH * 0.035)
  },

  logInWithFbTwitterText: {
    color: Colors.snow,
    textAlign: "center",
    fontSize: Fonts.moderateScale(15),
    padding: (Metrics.WIDTH * 0.00),
    left: (Metrics.WIDTH * 0.015),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  shadowStyle: {
    width: (Metrics.WIDTH * 0.88),
    height: (Metrics.HEIGHT * 0.6),
    position: 'absolute',
    resizeMode: 'stretch',
    borderRadius: 8
  },

  lonInWithFbBg: {
    backgroundColor: "#0054a6",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Metrics.WIDTH * 0.77),
    height: (Metrics.HEIGHT * 0.07),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: (Metrics.HEIGHT * 0.016),
  },

  lonInWithTwitterBg: {
    backgroundColor: "#0691ce",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Metrics.WIDTH * 0.77),
    height: (Metrics.HEIGHT * 0.07),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: (Metrics.HEIGHT * 0.03),
  },

  socialButtons: {
    alignItems: 'center',
    backgroundColor: Colors.snow,
    paddingTop: (Metrics.HEIGHT * 0.006),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  closeIconBg: {
    height:(Metrics.HEIGHT * 0.040),
    width:(Metrics.HEIGHT * 0.040),
    borderRadius: (Metrics.HEIGHT * 0.02),
    backgroundColor: Colors.black,
    borderWidth: 2,
    borderColor: Colors.snow,
    marginTop: (Metrics.HEIGHT * 0.15),
    marginLeft: (Metrics.WIDTH * 0.035),
    position: 'absolute',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: (Metrics.HEIGHT * 0.001)
  }

});


export default styles;
