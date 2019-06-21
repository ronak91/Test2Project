
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column'
  },
  backArrow: {
  	width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    elevation: 0,
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
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
    color: "#363636",
    fontSize: Fonts.moderateScale(18),
    fontFamily: 'SFUIDisplay-Semibold'
  },
  proimg:{
    flexDirection: 'row',
    alignSelf: 'center'
  },
  photosview:{
    backgroundColor: "#fff",
    width: (Metrics.WIDTH),
    flexDirection: 'column',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.03},
  imgsview:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  friendsview:{
    backgroundColor: "#fff",
    width: (Metrics.WIDTH),
    flexDirection: 'column',
    marginTop: (Metrics.HEIGHT) * 0.02
  },
  myimg:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.93,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.025
  },
  imgview:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.93,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  img:{
    width: (Metrics.WIDTH) * 0.028,
    height: (Metrics.HEIGHT) * 0.18,
    backgroundColor: 'transparent'
  },
  frdsview:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.93,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02
  },
  frdsimg:{
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06
  },
  frdsinfo:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Metrics.WIDTH) * 0.03
  },
  frdscount:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  spaceBg: {
    ...Platform.select({
        ios: {
            height: (Metrics.HEIGHT) * 0.56
        },
        android: {
            height: (Metrics.HEIGHT) * 0.50
        }
    }),
    backgroundColor: 'transparent',
    width: Metrics.WIDTH
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.30,
    height: (Metrics.WIDTH) * 0.30,
    borderRadius: (Metrics.WIDTH) * 0.15,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    },

  cameraIcon: {
    width: (Metrics.WIDTH) * 0.08,
    height: (Metrics.WIDTH) * 0.08,
    borderRadius: (Metrics.WIDTH) * 0.04,
    alignSelf: 'flex-end',
    marginLeft: -((Metrics.WIDTH) * 0.08),
    marginBottom: ((Metrics.WIDTH) * 0.01),
    backgroundColor: '#0691ce',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth:1
  },

  nameTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(18),
    textAlign: 'center',
    fontFamily: Fonts.type.SFUIDisplayMedium,
    marginTop: (Metrics.HEIGHT) * 0.025
  },

  designtaionTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center',
    fontFamily: Fonts.type.SFUIDisplayRegular
  },

  followerFollwingLikeBg: {
      flexDirection: 'row',
      width: (Metrics.WIDTH) * 0.87,
      alignSelf: 'center',
      marginTop: (Metrics.HEIGHT) * 0.06,
      marginBottom: (Metrics.HEIGHT) * 0.04
  },

  countLabelBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.29,
    justifyContent: 'center'
  },

  countTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplayBold,
    textAlign: 'center'
  },

  labelTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(12),
    textAlign: 'center'
  },

  divideVertical: {
    backgroundColor: "#d7d7d7",
    width: 1,
    height: (Metrics.HEIGHT) * 0.03,
    alignSelf: 'flex-end',
    marginBottom: 5
  },

  dividerHorizontal: {
    backgroundColor: "#d7d7d7",
    width: (Metrics.WIDTH) * 0.965,
    height: 1,
    alignSelf: 'flex-end',
  },

  dividerGrey: {
    backgroundColor: "#e6e6e6",
    height: (Metrics.HEIGHT) * 0.02
  },

  photodHeader: {
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.93,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },

  photosFriendsTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15)
  },

  photosFriendsCountTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    marginRight: 10
  },

  galleryImg: {
    width: (Metrics.WIDTH) * 0.29,
    height: (Metrics.HEIGHT) * 0.18,
    resizeMode: 'cover'
  },

  imgNextArrow: {
    marginLeft: 10,
    width: 12,
    height: 15,
    resizeMode: 'contain'
  },

  rowNameTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    textAlign: 'left'
  },

  rowDesignationTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    textAlign: 'left'
  }

});

export default styles;
