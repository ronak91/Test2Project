
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: Colors.snow,
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
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
	left: {
		flex: 0.5
	},

	body: {
    flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
	},

	right: {
		flex: 0.5
	},

  textHome: {
    color: Colors.snow,
    fontSize:Fonts.moderateScale(18),
    fontFamily:Fonts.type.sfuiDisplaySemibold,
    textAlign: 'center'
  },

  main: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT * 0.90),
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textGetStarted: {
    color: Colors.snow,
    backgroundColor: "#0094C9",
    paddingTop: (Metrics.HEIGHT * 0.01),
    paddingBottom: (Metrics.HEIGHT * 0.01),
    paddingLeft: (Metrics.HEIGHT * 0.04),
    paddingRight: (Metrics.HEIGHT * 0.04),
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayMedium,
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
    width: (Metrics.WIDTH * 0.87),
    height: (Metrics.HEIGHT * 0.665),
    marginTop: (Metrics.HEIGHT * 0.21),
    borderRadius: 8,
    backgroundColor: '#0691ce',
  },

  shadowStyle: {
    width: (Metrics.WIDTH * 0.87),
    height: (Metrics.HEIGHT * 0.665),
    position: 'absolute',
    resizeMode: 'stretch',
    borderRadius: 8
  },

  logoStyle: {
    width: (Metrics.HEIGHT * 0.2),
    height: (Metrics.HEIGHT * 0.2),
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
  	fontSize: Fonts.moderateScale(11),
    width: (Metrics.WIDTH * 0.7),
  	color:'#b5e2f2',
  	marginTop: (Metrics.HEIGHT * 0.025)
  },

  startSliderLayout: {
    width: (Metrics.WIDTH * 0.72),
    height: (Metrics.HEIGHT * 0.09),
    alignSelf: 'center',
    backgroundColor: "#2ca2d6",
    borderRadius: 5,
    marginBottom: (Metrics.HEIGHT * 0.035),
    alignItems: 'center',
    justifyContent: 'center'
  },

  startSliderText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
  	fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  dot:{
    backgroundColor:'#51b4dd',
    width:  (Metrics.HEIGHT  *  0.01),
    height: (Metrics.HEIGHT  *  0.01),
    borderRadius: (Metrics.HEIGHT  *  0.005),
    marginHorizontal: (Metrics.WIDTH  *  0.005),
  },

  activeDot:{
    backgroundColor: Colors.snow,
    width:  (Metrics.HEIGHT  *  0.01),
    height: (Metrics.HEIGHT  *  0.01),
    borderRadius: (Metrics.HEIGHT  *  0.005),
    marginHorizontal: (Metrics.WIDTH  *  0.005),
  },

  slider: {
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.HEIGHT  *  0.03)
  },

  closeIconBg: {
    height:(Metrics.HEIGHT * 0.040),
    width:(Metrics.HEIGHT * 0.040),
    borderRadius: (Metrics.HEIGHT * 0.02),
    backgroundColor: Colors.black,
    borderWidth: 2,
    borderColor: Colors.snow,
    marginTop: (Metrics.HEIGHT * 0.195),
    marginLeft: (Metrics.WIDTH * 0.035),
    position: 'absolute',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: (Metrics.HEIGHT * 0.001)
  }

});


export default styles;
