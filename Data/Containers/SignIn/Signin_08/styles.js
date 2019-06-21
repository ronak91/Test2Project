
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';
const styles = StyleSheet.create({
	imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
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
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
	right: {
    flex: 0.5
  },
	logostyle: {
		marginTop: Fonts.moderateScale(10),
		marginBottom: Fonts.moderateScale(10),
		alignSelf:'center',
		width: Metrics.WIDTH * 0.35,
		height: Metrics.WIDTH * 0.28,
	},
  inputFieldSec:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
	itememail: {
		alignSelf:'center',
		width: Metrics.WIDTH * 0.80,
		height: Metrics.HEIGHT * 0.08
	},
	inputemail: {
		marginLeft: Fonts.moderateScale(-15),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	  color: '#9b9fa2'
  },
  itempassword: {
	  alignSelf: 'center',
		marginTop: 5,
		width: Metrics.WIDTH * 0.80,
		height: Metrics.HEIGHT * 0.08,
	},
	inputpassword: {
		marginLeft: Fonts.moderateScale(-15),
		fontFamily: Fonts.type.sfuiDisplayRegular,
		color: '#9b9fa2'
	},
	signInSec:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
  },
	buttondialogsignup:{
		backgroundColor: '#4cd964',
		justifyContent: 'center',
		alignItems: 'center',
		width: Metrics.WIDTH * 0.80,
	},
	buttonsignin: {
		alignSelf: 'center',
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		color: Colors.snow,
		padding: Fonts.moderateScale(13),
	},
	forgotpass: {
		marginTop: Fonts.moderateScale(10),
		fontSize: Fonts.moderateScale(17),
		color: '#9b9fa2',
		alignSelf: 'center',
		justifyContent: 'center',
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

});
export default styles;
