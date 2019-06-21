
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    height: Metrics.HEIGHT*0.6,
    borderRadius: 10,
    width: (Metrics.WIDTH) * 0.95,
    alignSelf: 'center',
    backgroundColor: "transparent",
  },
  topview:{
    height: Metrics.HEIGHT*0.4,
    width: (Metrics.WIDTH) ,
  },
  backArrow: {
  	width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
  gred:{
    height: Metrics.HEIGHT,
    width: (Metrics.WIDTH) ,
    alignItems:'center'
  },
  gredTop:{
    height: Metrics.HEIGHT*0.5,
    width: (Metrics.WIDTH) ,
  },
  left:{
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  title:{
    marginTop: 2,
    color: 'white',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold
  },
  mains: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center'
  },

  imgContainer: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    flexDirection: 'column'
  },

  profileImgs: {
    width: (Metrics.HEIGHT) * 0.12,
    height: (Metrics.HEIGHT) * 0.12,
    borderRadius: (Metrics.HEIGHT) * 0.06,
    borderColor: "#fff",
    borderWidth: 2.5,
    marginTop: (Metrics.HEIGHT) * 0.05,
    alignSelf: 'center'
  },

  nameTxts: {
    color: "#fff",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    backgroundColor: 'transparent'
  },

  addressTxt: {
    color: "#b3b3b4",
    width: (Metrics.WIDTH) * 0.50,
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    marginTop: (Metrics.HEIGHT) * 0.01,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },


  labelTxt: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color: "#959595",
    textAlign: 'center'
  },

  countTxt: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    color: "#363636",
    textAlign: 'center'
  },

  rowdetail:{
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  listContent: {
    backgroundColor: 'white',
    width: (Metrics.WIDTH) * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  names:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  prodetail:{
    flexDirection:'column',
    justifyContent:'center'
  },

  txtfollow:{
    color: "#6091ce",
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(12),
    backgroundColor: 'transparent'
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



  designationTxt: {
      color: "#b7b7b7",
      fontSize: Fonts.moderateScale(12),
      marginTop: 2,
      textAlign: 'left',
      backgroundColor: 'transparent'
  },

  followBg: {
    borderColor: "#0691ce",
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    width: (Metrics.WIDTH) * 0.40,
    height: (Metrics.HEIGHT) * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02,
  },

  main: {
    width: Metrics.WIDTH,
    height:Metrics.HEIGHT*0.5,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    alignSelf: 'center',
    justifyContent: 'center',

  },

  names:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  prodetail:{
    flexDirection:'column',
    justifyContent:'center'
  },
  followbtn:{
    justifyContent: 'center',
    marginRight: (Metrics.WIDTH) * 0.045,
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.HEIGHT) * 0.034,
    borderWidth: 1,
    borderColor: "#6091ce",
    borderRadius: 20
  },



  profileImg: {
    width: (Metrics.WIDTH) * 0.10,
    height: (Metrics.WIDTH) * 0.10,
    borderRadius: (Metrics.WIDTH) * 0.05
  },

  nameTxt: {
      color: "#363636",
      fontSize: Fonts.moderateScale(14),
      fontFamily: Fonts.type.SFUIDisplayMedium,
      textAlign: 'left',
      backgroundColor: 'transparent'
  },


  followTxt: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    color: "#0691ce",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Metrics.WIDTH) * 0.32,
  }


});

export default styles;
