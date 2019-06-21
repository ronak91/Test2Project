import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	slidesec:{
			height: (Metrics.HEIGHT*0.90),
	    width: (Metrics.WIDTH),
	    backgroundColor: '#e6e6e6',
	    flexDirection: 'column',
	},

	slide: {
		height: (Metrics.HEIGHT*0.65),
		width: (Metrics.WIDTH*0.8),
		backgroundColor: Colors.transparent,
	  marginTop: (Metrics.HEIGHT) * 0.06,
	  alignItems: 'center',
	  alignSelf: 'center',
		elevation: 5, // android shadow
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowOffset: {
		height: 5,
		width: 0,
		},
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.65),
	  width: (Metrics.WIDTH*0.8),
		alignSelf:'center',
	  bottom: 0,
	  position: 'absolute',
	  borderRadius: 10
	},

  profileImg: {
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.WIDTH) * 0.20,
    borderRadius: (Metrics.WIDTH) * 0.10,
    borderWidth: 2,
    borderColor: Colors.snow,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.06,
  },

  nameTxt: {
    marginTop: (Metrics.HEIGHT) * 0.02,
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(20),
    textAlign: 'center'
  },

  designationTxt: {
    marginTop: (Metrics.HEIGHT) * 0.003,
    color: "#FFFFFF80",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center'
  },

  descriptionTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayLight,
    width: (Metrics.WIDTH) * 0.60,
    alignSelf: 'center',
    textAlign: 'center',
    marginRight: (Metrics.WIDTH) * 0.045,
  },

	followingTxt: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(12),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		paddingTop: (Metrics.HEIGHT) * 0.01,
		paddingBottom: (Metrics.HEIGHT) * 0.01
	},

	messageTxt: {
		color: "#0691ce",
		fontSize: Fonts.moderateScale(12),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		paddingTop: (Metrics.HEIGHT) * 0.01,
		paddingBottom: (Metrics.HEIGHT) * 0.01
	},

	followingBG: {
		width: (Metrics.WIDTH) * 0.31,
		borderRadius: 20,
		backgroundColor: "#0691ce",
		justifyContent: 'center',
		alignItems: 'center'
	},

	messageBg: {
		width: (Metrics.WIDTH) * 0.31,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#0691ce",
		backgroundColor: Colors.transparent,
		justifyContent: 'center',
		alignItems: 'center'
	},

	descriptionBg: {
		width: (Metrics.WIDTH) * 0.8,
		height: (Metrics.HEIGHT) * 0.15,
		marginTop: (Metrics.HEIGHT) * 0.03
	},

	shadowBg: {
		width: (Metrics.WIDTH) * 0.8,
		height: (Metrics.HEIGHT) * 0.15,
		position: 'absolute',
		bottom:0
	},

	btnSec: {
		width: (Metrics.WIDTH) * 0.66,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: (Metrics.HEIGHT) * 0.04
	}

});

export default styles;
