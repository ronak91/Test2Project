
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
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
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

  menuBtnView:{
    flexDirection: 'row'
  },

  alertRed:{
    backgroundColor:'red',
    height: (Metrics.HEIGHT) * 0.012,
    width: (Metrics.HEIGHT) * 0.012,
    borderRadius: (Metrics.HEIGHT) * 0.006,
    marginLeft: -(Metrics.HEIGHT) * 0.010,
    marginTop:(Metrics.HEIGHT) * 0.003
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  rowBg: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    marginBottom: (Metrics.HEIGHT) * 0.018,
  },

  lastRowBg: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    justifyContent: 'center'
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
  },

  rowNameTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  rowTimeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'left'
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'

  },

  dividerHorizontal: {
    width: (Metrics.WIDTH) * 0.90,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
  },

  likeCommentShareText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(17),
    marginLeft: (Metrics.WIDTH) * 0.03,
    color: "#6f6f6f"
  },

  likeCommentShareImage: {
    width: (Metrics.WIDTH) * 0.06,
    height: (Metrics.HEIGHT) * 0.03,
    resizeMode: 'contain'
  },

  dividerVertical: {
    width: (Metrics.WIDTH) * 0.003,
    height: (Metrics.HEIGHT) * 0.04,
    backgroundColor: "#F2F2F2",
    alignSelf: 'flex-end'
  },

  statusView:{
    borderRadius: (Metrics.HEIGHT) * 0.030,
    marginTop: -(Metrics.HEIGHT) * 0.030,
    marginRight: -(Metrics.HEIGHT) * 0.010
  },

  statusTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: (Metrics.WIDTH) * 0.05,
    marginRight: (Metrics.WIDTH) * 0.05,
    marginTop: (Metrics.HEIGHT) * 0.004,
    marginBottom: (Metrics.HEIGHT) * 0.004,
  },

  rowHeaderView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.022,
    width: (Metrics.WIDTH) * 0.85,
    alignSelf: 'center'
  },

  rowHeaderNameView:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  descriptionView:{
    width: (Metrics.WIDTH) * 0.85,
    alignSelf: 'center'
  },

  postDescImage:{
    width: (Metrics.WIDTH) * 0.85,
    height: (Metrics.HEIGHT) * 0.20,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.015,
    resizeMode:'stretch'
  },

  likeCommentShareView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.85,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
  },

  likeView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.23,
    alignItems: 'center'
  },

  commentView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.34,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.045
  },

  shareView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.28,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.045
  }


});

export default styles;
