
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  mains: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column'
  },
  content:{
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
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

  profileImgs: {
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

  nameTxts: {
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
      marginTop: (Metrics.HEIGHT) * 0.03,
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
    fontFamily: Fonts.type.SFUIDisplayMedium
  },

  rowDesignationTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular
  },
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#e6e6e6",
    flexDirection: 'column',
    paddingBottom: (Metrics.HEIGHT * 0.030),
  },


  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.025),
    marginVertical:(Metrics.HEIGHT * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },

  rowMain:{
    backgroundColor:'transparent',
    width: (Metrics.WIDTH * 0.445),
    alignItems:'center',
    margin:(Metrics.WIDTH * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    flexDirection: 'column',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#6F6F6F',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },

  cardBgImage: {
    width: (Metrics.WIDTH * 0.445),
    height: (Metrics.HEIGHT * 0.24),
    borderRadius: 5
  },

  cardContent: {
    flexDirection: 'column',
    width: (Metrics.WIDTH * 0.445),
    backgroundColor: "#FFFFFF",
    marginTop: -5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  titleTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(17),
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'left'
  },

  addressBg: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: 'row'
  },

  mapPin: {
      width: 10,
      height: 16,
      resizeMode: 'contain'
  },

  addressTxt: {
    color: "#adadad",
    fontSize: Fonts.moderateScale(14),
    marginLeft: 10
  },

  dividerHorizontal: {
      width: (Metrics.WIDTH * 0.445),
      height: 1,
      marginTop: 20,
      backgroundColor: "#f2f2f2"
  },

  profileBg: {
    marginTop: 5,
    marginLeft: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },

  profileImg: {
      width: (Metrics.WIDTH) * 0.10,
      height: (Metrics.WIDTH) * 0.10,
      borderRadius: (Metrics.WIDTH) * 0.05,
      alignSelf: 'flex-start',
  },

  nameTimeBg: {
      flexDirection: 'column',
      marginLeft: 10,
      justifyContent: 'center'
  },

  nameTxt: {
    color: "#363636",
    width: (Metrics.WIDTH) * 0.28,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'left'
  },

  timeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(13),
    textAlign: 'left'
  }


});

export default styles;
