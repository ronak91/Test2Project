
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  imageContainer: {
    width: Metrics.WIDTH * 0.9,
    height: (Metrics.HEIGHT)*0.9,
    resizeMode: 'contain',
    marginTop: (Metrics.HEIGHT * 0.01),
    alignSelf: 'center'
  },

  main: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: Colors.transparent,
  },

  header: {
		backgroundColor: '#0094C9',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
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
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},

  slider: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.85,
    backgroundColor: '#0094C9'
  },

  sliderBelowLayout: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.28,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.snow
  },

  headertext: {
  	fontFamily: Fonts.type.sfuiDisplaySemibold,
  	textAlign:'center',
  	fontSize: Fonts.moderateScale(22),
  	color:'#363636',
    marginTop: (Metrics.HEIGHT * 0.04)
  },

  desctext: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(12),
  	width :(Metrics.WIDTH) * .7,
  	color:'#6f6f6f',
  	marginTop: (Metrics.HEIGHT * 0.025)
  },

  dot:{
  	backgroundColor:'#D4D4D4',
    width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
  },

  activeDot:{
  	backgroundColor:'#6f6f6f',
    width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
  },

  skipText: {
    color: "#0094CD",
    textAlign: 'center',
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  skipBg: {
    height: Metrics.HEIGHT * 0.05,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  }

});

export default styles;
