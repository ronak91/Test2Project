import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  imgContainer: {
      width: Metrics.WIDTH,
      height: Metrics.HEIGHT,
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },

  left:{
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  backArrow: {
    marginLeft: 2,
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },
  mainview:{
    borderRadius: 10,
    backgroundColor:'#FFFFFF',
    top:30
  },
  detail:{
    flexDirection: 'column'
  },
  desc:{
    marginLeft:(Metrics.WIDTH) * 0.06,
    marginRight:(Metrics.WIDTH) * 0.06,
    marginBottom:(Metrics.WIDTH) * 0.06,
    marginTop:(Metrics.WIDTH) * 0.03
  },

  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
		elevation: 0
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.18,
    height: (Metrics.WIDTH) * 0.18,
    borderRadius: (Metrics.WIDTH) * 0.09,
    marginLeft: (Metrics.WIDTH) * 0.12,
    borderWidth: 2,
    borderColor: "#fff",
    position: 'absolute',
    zIndex: 30
  },

  profileDataBg: {
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center',
    flexDirection: 'column',
    bottom: 45,
    position: 'absolute'
  },

  personalInfoBg: {
      marginTop: (Metrics.HEIGHT) * 0.08,
      flexDirection: 'row',
      marginLeft: (Metrics.WIDTH) * 0.06,
      marginRight: (Metrics.WIDTH) * 0.06,
      marginBottom: (Metrics.WIDTH) * 0.05,
  },

  nameTxt: {
      color: "#363636",
      fontFamily: Fonts.type.SFUIDisplayMedium,
      fontSize: Fonts.moderateScale(18),
      textAlign: 'left'
  },

  designationTxt: {
      color: "#bfbfbf",
      fontSize: Fonts.moderateScale(12),
      fontFamily: Fonts.type.SFUIDisplayRegular,
      marginTop: 3,
      textAlign: 'left'
  },

  followBg: {
    backgroundColor: "#0691ce",
    borderRadius: 20,
    width: (Metrics.WIDTH) * 0.32,
    height: (Metrics.HEIGHT) * 0.06,
    justifyContent: 'center'
  },

  followTxt: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    color: "#FFFFFF",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Metrics.WIDTH) * 0.28,
  },

  dividerHorizontal: {
    backgroundColor: "#ebebeb",
    height: 1,
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center'
  },

  countBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    marginTop: (Metrics.WIDTH) * 0.04,
    marginBottom: (Metrics.WIDTH) * 0.04,
  },

  titleCountBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.30,
  },

  countTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    textAlign: 'center'
  },

  titleTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    textAlign: 'center'
  },


  descTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    textAlign: 'left'
  },

  viewMoreLessTxt: {
    color: "#0691ce",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplayRegular
  }

});

export default styles;
