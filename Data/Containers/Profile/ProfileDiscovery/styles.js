
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({

  imgContainer: {
      width: Metrics.WIDTH,
      height: Metrics.HEIGHT,
  },
  gred:{
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
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
  right:{
    flex: 1
  },
  backArrow: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  profile:{
    width: (Metrics.WIDTH),
    position: 'absolute',
    bottom: 20
  },
  desc:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor:'transparent'
  },
  name:{
    fontFamily:Fonts.type.SFUIDisplaySemibold,
    fontSize: Fonts.moderateScale(27),
    color: "#FFFFFF",
    textAlign: 'left'
  },
  address:{
    flexDirection: 'row',
    marginTop: 5
  },
  addresstxt:{
    color: "#FFFFFF",
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    marginLeft: 5
  },
  bottomicon:{
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    backgroundColor: 'transparent'
  },
  hearticon:{
    justifyContent: 'center'
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
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
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: "#FFFFFF"
  },

  descTxt: {
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplayLight,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'transparent',
    textAlign: 'left'
  },


  likeBg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },

  commentBg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 35,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  likeCommentImage: {
    width: 22,
    height: 18,
    resizeMode: 'contain',
    alignSelf: 'center'
  },

  followBg: {
    backgroundColor: "#0691ce",
    borderRadius: 20,
    width: (Metrics.WIDTH) * 0.35,
    height: (Metrics.HEIGHT) * 0.06,
    justifyContent: 'center'
  },

  followTxt: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(20),
    color: "#FFFFFF",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Metrics.WIDTH) * 0.30,
  },

});

export default styles;
