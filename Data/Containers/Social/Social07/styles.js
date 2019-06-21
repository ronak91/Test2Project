
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#2d324f',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  rowBg: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    marginLeft: (Metrics.WIDTH) * 0.045,
    marginTop: (Metrics.HEIGHT) * 0.015
  },

  dividerHorizontal: {
    width: ((Metrics.WIDTH) * 0.99) + 5,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#D7D7D7",
    alignSelf: 'flex-end',
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    justifyContent: 'flex-start'
  },

  rowPostDescription: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(14),
    marginTop: (Metrics.HEIGHT) * 0.015,
  },

  rowNameTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    marginTop: (Metrics.HEIGHT) * 0.007
  },

  rowTimeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: (Metrics.HEIGHT) * 0.011,
    textAlign: 'left'
  },

  likeCommentText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: (Metrics.WIDTH) * 0.02,
    color: "#6f6f6f"
  },

  mainListView:{
    width: (Metrics.WIDTH)
  },

  rowView:{
    flexDirection: 'row'
  },

  nameDescView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.045,
    width: (Metrics.WIDTH) * 0.75
  },

  nameView:{
    flexDirection: 'row'
  },

  postDescImg:{
    resizeMode: 'cover',
    height: (Metrics.HEIGHT) * 0.20,
    marginTop: (Metrics.HEIGHT) * 0.015,
  },

  likeCommentView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.020
  },

  likeView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.18
  },

  likeCommentShareImage: {
    width: (Metrics.WIDTH) * 0.05,
    height: (Metrics.HEIGHT) * 0.022,
    resizeMode: 'contain',
    marginTop: (Metrics.HEIGHT) * 0.004
  },

});

export default styles;
