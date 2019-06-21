
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
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
		width: 30,
		justifyContent: 'center',
		alignItems: 'center'
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
	fbButton: {
		backgroundColor: "#3b5998",
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.84),
		borderRadius: 5,
		justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
		position: 'absolute',
		left: 15,
		right:15,
		top:13,
		elevation: 0
	},
	fbButtonText:{
		marginLeft: Fonts.moderateScale(5),
		color: "#fff",
		fontSize: Fonts.moderateScale(17),
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
		paddingLeft: Fonts.moderateScale(15),
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
});


export default styles;
