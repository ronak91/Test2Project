
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  menuIconWhite: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(17),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  right: {
    flex: 0.5
  },

  imgContainer: {
      width: Metrics.WIDTH,
      height: (Metrics.HEIGHT) * 0.60,
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  nameTxt: {
    color: "#252525",
    fontSize: Fonts.moderateScale(22),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    textAlign: "center",
    marginTop: (Metrics.HEIGHT) * 0.06
  },

  addressTxt: {
    color: "#a2a2a2",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    width: (Metrics.WIDTH) * 0.65,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: (Metrics.HEIGHT) * 0.003
  },

  followerFollwingLikeBg: {
      flexDirection: 'row',
      width: (Metrics.WIDTH) * 0.87,
      alignSelf: 'center',
      marginTop: (Metrics.HEIGHT) * 0.015,
      marginBottom: (Metrics.HEIGHT) * 0.015
  },

  countLabelBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.29,
    justifyContent: 'center'
  },

  countTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayBold,
    textAlign: 'center'
  },

  labelTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    textAlign: 'center'
  },

  divideVertical: {
    backgroundColor: "#d7d7d7",
    width: (Metrics.WIDTH) * 0.003,
    height: (Metrics.HEIGHT) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: (Metrics.HEIGHT) * 0.007
  },

  addUserBg: {
    backgroundColor: "#f4f4f4",
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },

  commentBg: {
    backgroundColor: "#f7412d",
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    marginLeft: (Metrics.WIDTH) * 0.04,
    borderRadius: (Metrics.WIDTH) * 0.07,
    justifyContent: 'center',
    alignItems: 'center'
  },

  callBg: {
    backgroundColor: "#00c160",
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    marginLeft: (Metrics.WIDTH) * 0.04,
    borderRadius: (Metrics.WIDTH) * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Metrics.HEIGHT) * 0.007
  },

  userCommentImage: {
    width: (Metrics.WIDTH) * 0.06,
    height: (Metrics.HEIGHT) * 0.06,
    alignSelf: 'center',
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },

  callImage: {
    width: (Metrics.WIDTH) * 0.05,
    height: (Metrics.HEIGHT) * 0.05,
    alignSelf: 'center',
    resizeMode: 'contain'
  },

  detailsView:{
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    height: (Metrics.HEIGHT) * 0.50
  },

  addUserCommentCallView:{
    width: (Metrics.WIDTH) * 0.60,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.04,
    alignItems: 'center',
    justifyContent:'center'
  },

  bottomView:{
    bottom: 0,
    position: 'absolute',
    width: Metrics.WIDTH,
    flexDirection: 'column',
    backgroundColor: Colors.snow
  },

  dividerHorizontal:{
    width: (Metrics.WIDTH),
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#e6e6e6"
  },

});

export default styles;
