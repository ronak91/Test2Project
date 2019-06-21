import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },
  backArrow: {
		width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
	},
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
    color: '#363636',
    fontSize: Fonts.moderateScale(18),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  right: {
    flex: 0.5
  },

  imgView:{
    margin: (Metrics.HEIGHT) * 0.015,

    ...Platform.select({
      ios: {
        height: (Metrics.HEIGHT) * 0.32,
      },
      android:{
        height: (Metrics.HEIGHT) * 0.36,
      }
    }),
  },

  backgroundImg:{
    borderRadius: (Metrics.HEIGHT) * 0.015,
    ...Platform.select({
      ios: {
        height: (Metrics.HEIGHT) * 0.32,
      },
      android:{
        height: (Metrics.HEIGHT) * 0.36,
      }
    }),
  },

  contentView: {
    ...Platform.select({
      ios: {
        height: (Metrics.HEIGHT) * 0.32,
      },
      android:{
        height: (Metrics.HEIGHT) * 0.36,
      }
    }),
      width: (Metrics.WIDTH),
      position: 'absolute',
      bottom: 0,
      backgroundColor: Colors.transparent,
      flexDirection: 'column',
  },

  profileView:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.022
  },

  profileImgs: {
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.WIDTH) * 0.20,
    borderRadius: (Metrics.WIDTH) * 0.10,
    borderWidth: 2,
    borderColor: Colors.snow,
    alignSelf: 'center',
    },

  cameraIcon: {
    width: (Metrics.WIDTH) * 0.06,
    height: (Metrics.WIDTH) * 0.06,
    borderRadius: (Metrics.WIDTH) * 0.03,
    alignSelf: 'flex-end',
    marginLeft: -((Metrics.WIDTH) * 0.05),
    marginBottom: ((Metrics.WIDTH) * 0.01)
  },

  nameTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayMedium,
    marginTop: (Metrics.HEIGHT) * 0.015
  },

  designtaionTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  followerFollwingLikeBg: {
      flexDirection: 'row',
      width: (Metrics.WIDTH) * 0.87,
      alignSelf: 'center',
      marginTop: (Metrics.HEIGHT) * 0.03,
      marginBottom: (Metrics.HEIGHT) * 0.04,
  },

  countLabelBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.29,
    justifyContent: 'center'
  },

  countTxt: {
    color: Colors.snow,
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
    backgroundColor: Colors.snow,
    width: 1,
    height: (Metrics.HEIGHT) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: (Metrics.HEIGHT) * 0.007
  },

  container: {
      flex: 1,
  },

  label: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#0691ce",
    paddingLeft: (Metrics.WIDTH) * 0.045
  },

  normalLabel: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#d2d2d2",
    paddingLeft:15
  },

  indicator:{
    backgroundColor: "#0691ce",
    width: (Metrics.WIDTH) * 0.09,
    marginLeft: (Metrics.WIDTH) * 0.070
  },

  tabBg:{
    backgroundColor: Colors.transparent
  },

  tabNameView:{
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },

  tabVerticalDivider:{
    height: (Metrics.HEIGHT) * 0.03,
    width: (Metrics.HEIGHT) * 0.001,
    backgroundColor: '#e4e4e4',
  },








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

  listContent: {
    paddingBottom: (Metrics.HEIGHT) * 0.015,
  }

});

export default styles;
