import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT * 0.9,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  header: {
    backgroundColor: "#fa6b7b",
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15
  },

  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  downArrowIcon: {
    width: (Metrics.WIDTH * 0.035),
    height: (Metrics.WIDTH * 0.05),
    resizeMode: 'cover'
  },

  optionIcon: {
    width: (Metrics.WIDTH * 0.038),
    height: (Metrics.WIDTH * 0.05),
    resizeMode: 'contain'
  },

  swipeContainer: {
    width: Metrics.WIDTH ,
    height: (Metrics.HEIGHT) * 0.83,
    backgroundColor: Colors.transparent
  },

  shadowBg: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.83,
    bottom: 0,
    position:'absolute',
  },

  profileImage: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    borderColor: Colors.snow,
    borderWidth: 1
  },

  likeIcon: {
    marginTop: -(Metrics.WIDTH * 0.02),
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(20),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent
  },

  watchIcon: {
    width: (Metrics.WIDTH * 0.045),
    height: (Metrics.WIDTH * 0.045),
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.02),
  },

  watchDistanceTxt: {
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: (Metrics.WIDTH * 0.02),
    marginTop: (Metrics.WIDTH * 0.008),
  },

  mapPin: {
    marginLeft: Metrics.WIDTH * 0.08,
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.012),
  },

  albumIcon: {
    width: (Metrics.WIDTH * 0.06),
    height: (Metrics.WIDTH * 0.06),
  },

  galleryImgTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: 8
  },

  slideContainer: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.84,
    bottom: 0,
    position:'absolute'
  },

  imageContainer: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.84,
    bottom: 0,
    position:'absolute',
    resizeMode: 'cover'
  },

  swipeImageCountBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH * 0.05),
    marginTop: (Metrics.HEIGHT) * 0.10
  },

  profileDetailBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.04,
    marginRight: (Metrics.WIDTH) * 0.04,
    position: 'absolute',
    bottom: (Metrics.WIDTH * 0.08),
    backgroundColor: 'transparent'
  }

});

export default styles;
