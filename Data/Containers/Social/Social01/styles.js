
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
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  sugestedPeopleImgThree: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    borderWidth: 2,
    borderColor: Colors.snow,
    marginLeft: -(Metrics.WIDTH) * 0.03
  },

  sugestedPeopleImgTwo: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    borderWidth: 2,
    borderColor: Colors.snow,
    marginLeft: -(Metrics.WIDTH) * 0.03
  },

  sugestedPeopleImgOne: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    borderWidth: 2,
    borderColor: Colors.snow,
  },

  rowBg: {
    width: (Metrics.WIDTH) * 0.95,
    alignSelf: 'center' ,
    backgroundColor: Colors.snow,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  moreIcon: {
    marginTop: -(Metrics.HEIGHT) * 0.018,
    marginRight: (Metrics.HEIGHT) * 0.015
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
    width: (Metrics.WIDTH) * 0.95,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02

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

  mainRow:{
    width: (Metrics.WIDTH) * 0.95,
    alignSelf: 'center',
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    paddingTop:(Metrics.HEIGHT) * 0.015,
    paddingBottom: (Metrics.HEIGHT) * 0.015,
    justifyContent:'center',
    marginTop:(Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    shadowOffset:{width: 2,  height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },

  mainRowTextView:{
    flexDirection:'column',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  mainRowFirstText:{
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    color: "#6f6f6f",
    textAlign: 'left'
  },

  mainRowSecondText:{
      fontSize: Fonts.moderateScale(16),
      fontFamily: Fonts.type.sfuiDisplayRegular,
      color: "#bfbfbf",
      textAlign: 'left'
  },

  suggestedPeopleImgView:{
    flexDirection:'row',
    marginRight:(Metrics.WIDTH) * 0.03
  },

  rowMainView:{
    width: (Metrics.WIDTH)
  },

  rowHeaderView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015
  },

  rowHeaderNameView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  rowDescriptionView:{
    width: (Metrics.WIDTH) * 0.90,
    alignSelf: 'center'
  },

  postDescImage:{
    width: (Metrics.WIDTH) * 0.90,
    height: (Metrics.HEIGHT) * 0.20,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.015,
    resizeMode: 'stretch'
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

});

export default styles;
