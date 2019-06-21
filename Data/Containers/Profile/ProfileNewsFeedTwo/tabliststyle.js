import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  rowMainView:{
    width: (Metrics.WIDTH)
  },

  rowBg: {
    width: (Metrics.WIDTH) * 0.95,
    alignSelf: 'center' ,
    backgroundColor: Colors.snow,
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.007,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },

  rowHeaderView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  rowHeaderNameView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.03
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

  moreIcon: {
    marginTop: -(Metrics.HEIGHT) * 0.018,
    marginRight: (Metrics.HEIGHT) * 0.015
  },

  dividerHorizontal: {
    width: (Metrics.WIDTH) * 0.95,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02
  },

  rowDescriptionView:{
    width: (Metrics.WIDTH) * 0.90,
    alignSelf: 'center'
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'
  },

  likeCommentShareView:{
    flexDirection: 'row',
    paddingLeft: (Metrics.WIDTH) * 0.03,
    paddingRight: (Metrics.WIDTH) * 0.03,
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015
  },

  likeView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.25,
    alignItems: 'center'
  },

  commentView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.35,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.045
  },

  shareView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.30,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.045
  },

  likeCommentShareText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
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

});

export default styles;
