
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  imgContainer: {
      width: Metrics.WIDTH,
      height: Metrics.HEIGHT,
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  left:{
    flex: 1
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleText:{
    marginTop: 2,
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  right:{
    flex: 1
  },

  header: {
    elevation: 0,
    backgroundColor: Colors.transparent,
    height: (Metrics.HEIGHT) * 0.1,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: Colors.transparent,
    ...Platform.select({
        ios: {
            paddingTop: (Metrics.HEIGHT) * 0.015,
        },
        android: {
          marginTop: (Metrics.HEIGHT) * 0.020,
        }
    }),
},

  spaceBg: {
    position: 'absolute',
    bottom:0,
    width: (Metrics.WIDTH),
    marginBottom: (Metrics.HEIGHT) * 0.015
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: Colors.snow
  },

  descTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    marginLeft: (Metrics.WIDTH) * 0.06,
    marginRight: (Metrics.WIDTH) * 0.05,
    marginTop: (Metrics.HEIGHT) * 0.022,
    backgroundColor: Colors.transparent,
    textAlign: 'left'
  },

  likeCommentText: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(16),
    marginLeft: (Metrics.WIDTH) * 0.03,
    color: Colors.snow
  },

  likeCommentImage: {
    width: (Metrics.WIDTH) * 0.047,
    height: (Metrics.WIDTH) * 0.047,
    resizeMode: 'contain',
  },

  profileView:{
    marginLeft: (Metrics.WIDTH) * 0.06,
    marginRight: (Metrics.WIDTH) * 0.06,
    flexDirection: 'row'
  },

  nameAddressView:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: (Metrics.WIDTH) * 0.03,
    backgroundColor: Colors.transparent
  },

  name:{
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(16),
    color: Colors.snow,
  },

  addressView:{
    flexDirection: 'row'
  },

  address:{
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: (Metrics.WIDTH) * 0.015,
  },

  likeCommentView:{
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.06,
    marginRight: (Metrics.WIDTH) * 0.06,
    marginTop: (Metrics.HEIGHT) * 0.030,
    backgroundColor: Colors.transparent
  },

  likeView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.25
  },

});

export default styles;
