
import { Platform, StyleSheet, Dimensions } from 'react-native';

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
  backArrow: {
		width: 30,
	 justifyContent: 'center',
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
    fontSize: Fonts.moderateScale(17),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplayBold,
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },



  nameTxt: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(24),
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.28,
    textAlign: 'left'
  },

  designationTxt: {
    color: "#8a8c92",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayLight,
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    textAlign: 'left'
  },

  followBg: {
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center'
  },

  followCountTxt: {
    color: "#00b6ee",
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    textAlign: 'center',
  },

  followLabelTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'center',
    marginTop: ((Metrics.HEIGHT) * 0.002)
  },

  followTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.sfuiDisplayMedium
  },

  aboutMeTxt: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayMedium,
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(15),
    textAlign: 'left'
  },

  aboutMeDescriptionTxt: {
    color: "#a6a6a6",
    fontFamily: Fonts.type.sfuiDisplayLight,
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(15)
  },

  viewMoreLessTxt: {
    color: "#00b6ee",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  friendsImg: {
    width: (Metrics.WIDTH) * 0.14,
    height: (Metrics.WIDTH) * 0.14,
    borderRadius: (Metrics.WIDTH) * 0.07,
    resizeMode: 'cover',
    marginTop: (Metrics.HEIGHT) * 0.01
  },

  friendSocialIcon: {
    width: (Metrics.WIDTH) * 0.04,
    height: (Metrics.WIDTH) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Metrics.WIDTH) * 0.03),
  },

  friendView:{
    flexDirection: 'row'
  },

  hobbiesView:{
    marginBottom: (Metrics.HEIGHT) * 0.03,
    marginTop: (Metrics.HEIGHT) * 0.01,
    width: (Metrics.WIDTH) * 0.18,
    height: (Metrics.HEIGHT) * 0.04,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#0691ce",
    alignItems: 'center',
    justifyContent: 'center'
  },

  hobbyText:{
    fontSize: Fonts.moderateScale(10),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#0691ce"
  },

  gradient:{
    height:(Metrics.HEIGHT),
    width:(Metrics.WIDTH),
    position: 'absolute'
  },

  followerView:{
    width: (Metrics.WIDTH) * 0.15,
  },

  extraView:{
    width: (Metrics.WIDTH) * 0.06,
    backgroundColor: Colors.transparent
  },

  followBtnView:{
    width: (Metrics.WIDTH) * 0.25,
    height: (Metrics.HEIGHT) * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0691ce",
    borderRadius: 20
  },

  dividerHorizontal:{
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    backgroundColor: "#272932",
    height: (Metrics.HEIGHT) * 0.001,
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02
  },

  descView:{
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.04
  },

  friendListView:{
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center',
    marginBottom: (Metrics.HEIGHT) * 0.04
  },

  hobbiesListView:{
    width: (Metrics.WIDTH) * 0.88,
    alignSelf: 'center'
  },

  socialBg: {
  	width:(Metrics.HEIGHT*0.035),
  	height:(Metrics.HEIGHT*0.035),
  	borderRadius:(Metrics.HEIGHT*0.0175),
  	borderWidth: 1.5,
  	borderColor: Colors.snow,
  	right:(Metrics.WIDTH*0.015),
  	bottom:(Metrics.HEIGHT*0.009),
  	position: 'absolute',
  	alignItems: 'center',
  	justifyContent: 'center'
  },

});

export default styles;
