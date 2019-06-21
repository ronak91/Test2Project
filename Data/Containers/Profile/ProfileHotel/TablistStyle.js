
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    flex: 1,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  rowMain:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.96,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    height: (Metrics.HEIGHT) * 0.18,
    backgroundColor: Colors.snow,
    alignItems:'center'
  },

  cardBgImage: {
    width: (Metrics.WIDTH) * 0.30,
    ...Platform.select({
        ios: {
          height: (Metrics.HEIGHT) * 0.16,
        },
        android: {
          height: (Metrics.HEIGHT) * 0.17,
        }
    }),
    resizeMode: 'cover'
  },

  cardDetailBg: {
    height: (Metrics.HEIGHT) * 0.18,
    marginLeft: (Metrics.HEIGHT) * 0.03,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  titleTxt:{
    width: (Metrics.WIDTH) * 0.60,
    color: "#363636",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    paddingRight: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'
  },

  descriptionTxt: {
    width: (Metrics.WIDTH) * 0.60,
    color: "#6f6f6f",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(13),
    paddingRight: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'
  },

  likeCommentBg: {
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.01
  },

  countImgBg: {
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.15,
    alignItems: 'center'
  },

  commentImg: {
    width: (Metrics.WIDTH * 0.04),
    height: (Metrics.WIDTH * 0.04),
    resizeMode: 'contain'
  },

  likeCommentCountTxt: {
    marginLeft: (Metrics.WIDTH)* 0.01,
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  listDivider: {
    backgroundColor: '#d7d7d7',
    height: 1,
    width:(Metrics.WIDTH) * 0.98,
    alignSelf: "flex-end",
    marginTop: (Metrics.HEIGHT) * 0.002
  }

});

export default styles;
