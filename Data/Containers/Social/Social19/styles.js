
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

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    backgroundColor: "#ecedeb",
    flexDirection: 'column'
  },

  rowBg: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    marginBottom: (Metrics.HEIGHT) * 0.018,
    flexDirection: 'column'
  },

  lastRowBg: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  ratingTextBg: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    backgroundColor: "#0691ce",
    justifyContent: 'center'
  },

  ratingText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    alignSelf: 'center',

  },

  rowNameTxt: {
    color: "#363636",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18),
    marginLeft: (Metrics.WIDTH) * 0.015,
  },

  rowDateTxt: {
    color: "#adadad",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  dividerHorizontal: {
    width: (Metrics.WIDTH) * 0.95,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#e6e6e6",
    marginTop: (Metrics.HEIGHT) * 0.022,
    marginBottom: (Metrics.HEIGHT) * 0.022,
    alignSelf: 'center'
  },

  rowPostText: {
    color: "#0691ce",
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'left'
  },

  rowDescTxt: {
    color: "#6f6f6f",
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.HEIGHT) * 0.022,
    marginTop: (Metrics.HEIGHT) * 0.018,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'left'
  },

  listMainView:{
    width: (Metrics.WIDTH)
  },

  ratingBarView:{
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginRight: (Metrics.WIDTH) * 0.03,
    marginTop: (Metrics.HEIGHT) * 0.022,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  ratingView:{
    flexDirection: 'column'
  },

  ratingDateView:{
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.045,
    justifyContent: 'flex-start',
    width: (Metrics.WIDTH) * 0.75
  },

  ratingStar:{
    alignItems:'center'
  },

  reviewerNameView:{
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.045,
    justifyContent: 'flex-start',
    marginTop: (Metrics.HEIGHT) * 0.007
  },

  by:{
    color: "#adadad",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

});

export default styles;
