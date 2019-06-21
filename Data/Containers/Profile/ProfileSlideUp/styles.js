import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5
	},
  backArrow: {
    width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
	body: {
		flex: 3,
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  slideUpBg: {
    position: 'absolute',
    bottom: 10,
    width: (Metrics.WIDTH) * 0.15,
    height: (Metrics.HEIGHT) * 0.05,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.10
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  contentStyle: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  slideUpArrowIcon: {
      width: (Metrics.WIDTH) * 0.15,
      height: (Metrics.HEIGHT) * 0.05,
      resizeMode: 'contain',
  },

  slideArrowIcon: {
      width: (Metrics.WIDTH) * 0.15,
      height: (Metrics.HEIGHT) * 0.05,
      resizeMode: 'contain',
      alignSelf: 'center',
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.WIDTH) * 0.20,
    borderRadius: (Metrics.WIDTH) * 0.10,
    borderWidth: 3,
    borderColor: Colors.snow,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.018,
    resizeMode: 'cover'
  },

  nameTxt: {
      color: Colors.snow,
      fontFamily: Fonts.type.sfuiDisplayMedium,
      fontSize: Fonts.moderateScale(19),
      alignSelf: 'center',
      marginTop: (Metrics.HEIGHT) * 0.02
  },

  designationTxt: {
      color: "#9699a7",
      fontSize: Fonts.moderateScale(13),
      fontFamily: Fonts.type.sfuiDisplayRegular,
      marginTop: 3,
      alignSelf: 'center'
  },

  detailsBg: {
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center',
    backgroundColor: Colors.snow,
    borderRadius: 10,
    marginTop: (Metrics.HEIGHT) * 0.04,
  },

  countTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    textAlign: 'center'
  },

  labelTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'center'
  },

  followTxt: {
      color: Colors.snow,
      fontSize: Fonts.moderateScale(12),
      fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  aboutTxt: {
    color: "#595959",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    marginBottom: (Metrics.HEIGHT) * 0.02,
    textAlign: 'left'
  },

  connectionPhotosTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15)
  },

  connectionPhotosCountTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    marginRight: 10
  },

  connectionUserImg: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    resizeMode: 'cover'
  },

  connectionSocialIconBg: {
    width: (Metrics.WIDTH) * 0.04,
    height: (Metrics.WIDTH) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Metrics.WIDTH) * 0.03),
    borderRadius: (Metrics.WIDTH * 0.02),
    borderWidth: 1,
    borderColor: Colors.snow,
    justifyContent: 'center',
    alignItems: 'center'
  },

  photodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: (Metrics.WIDTH) * 0.03
  },

  galleryImg: {
    width: (Metrics.WIDTH) * 0.28,
    height: (Metrics.HEIGHT) * 0.18,
    resizeMode: 'cover',
  },

  detailOneBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    marginTop: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.WIDTH) * 0.03
  },

  followerFollowingBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.25
  },

  followBg: {
    width: (Metrics.WIDTH) * 0.25,
    height: (Metrics.HEIGHT) * 0.05,
    backgroundColor: '#0691ce',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dividerHorizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Metrics.WIDTH) * 0.94
  },

  aboutBg: {
    marginLeft: (Metrics.WIDTH) * 0.04,
    marginRight: (Metrics.WIDTH) * 0.04,
    height: (Metrics.HEIGHT) * 0.25,
    marginTop: (Metrics.WIDTH) * 0.04,
    marginBottom: (Metrics.WIDTH) * 0.04
  },

  aboutDescriptionTxt: {
    color: "#d7d7d7",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayLight,
    textAlign: 'left'
  },

  connectionBg: {
    margin: (Metrics.WIDTH) * 0.04,
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center'
  },

  connectionHeaderBg: {
    margin: (Metrics.WIDTH) * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  connectionPhotoCountBg: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  connectionProfileBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginTop: (Metrics.WIDTH) * 0.02,
    marginBottom: (Metrics.WIDTH) * 0.04
  },

  galleryBg: {
    flexDirection: 'row',
    margin: (Metrics.WIDTH) * 0.03
  },

  shadowBg: {
    height: (Metrics.HEIGHT) * 0.25,
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center',
    position:'absolute'
  },

  connectionProfileSocialBg: {
    width: (Metrics.WIDTH) * 0.176,
    flexDirection: 'row',
  },

  slideArrowBg: {
    width: (Metrics.WIDTH) * 0.17,
    height: (Metrics.HEIGHT) * 0.07,
    alignSelf:'center',
    marginTop: (Metrics.HEIGHT) * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  }


});

export default styles;
