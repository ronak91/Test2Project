import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    flexDirection: 'column'
  },

  imgContainer: {
    ...Platform.select({
  		ios: {
        width: (Metrics.WIDTH) * 0.52,
        height: (Metrics.HEIGHT) * 0.622,
  		},
  		android: {
        width: (Metrics.WIDTH) * 0.48,
        height: (Metrics.HEIGHT) * 0.622,
      }
  	}),
    marginRight: (Metrics.WIDTH * 0.08),
  },

  header: {
    backgroundColor: Colors.transparent,
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: Colors.transparent,
    paddingTop: (Metrics.WIDTH * 0.02),
  },

  left: {
    flex: 1,
  },

  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1,
    alignItems: 'center',
  },

  titleTxt: {
    color: Colors.snow
  },

  filterTxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16)
  },

  cardImage: {
    width: (Metrics.WIDTH) * 0.54,
    borderRadius: 6,
    ...Platform.select({
  		ios: {
        marginLeft: -((Metrics.WIDTH) * 0.02),
        height: (Metrics.HEIGHT) * 0.57,
        width: (Metrics.WIDTH) * 0.56,
        marginTop: (Metrics.HEIGHT) * 0.025,
  		},
  		android: {
        marginLeft: -((Metrics.WIDTH) * 0.025),
        height: (Metrics.HEIGHT) * 0.563,
        width: (Metrics.WIDTH) * 0.54,
        marginTop: (Metrics.HEIGHT) * 0.03,
      }
  	}),
  },

  cardBgImage: {
    ...Platform.select({
  		ios: {
  			width: (Metrics.WIDTH) * 0.56,
        height: (Metrics.HEIGHT) * 0.57,
  		},
  		android: {
        width: (Metrics.WIDTH) * 0.54,
        height: (Metrics.HEIGHT) * 0.563,
      }
  	}),
    borderRadius: 6,
  },

  shadowBg: {
    ...Platform.select({
  		ios: {
        width: (Metrics.WIDTH) * 0.56,
        height: (Metrics.HEIGHT) * 0.57,
  		},
  		android: {
        width: (Metrics.WIDTH) * 0.54,
        height: (Metrics.HEIGHT) * 0.563,
      }
  	}),
    borderRadius: 6,
    bottom: 0,
    position:'absolute',
  },

  rowMain: {
    marginLeft: (Metrics.WIDTH * 0.05),
    marginTop: (Metrics.HEIGHT) * 0.10
  },

  profileImage: {
    width: (Metrics.WIDTH) * 0.08,
    height: (Metrics.WIDTH) * 0.08,
    borderRadius: (Metrics.WIDTH) * 0.04,
    borderColor: Colors.snow,
    borderWidth: 1
  },

  likeIcon: {
    width: (Metrics.WIDTH) * 0.06,
    height: (Metrics.WIDTH) * 0.05,
    resizeMode: 'cover',
    marginTop: -((Metrics.WIDTH) * 0.02)
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent
  },

  watchIcon: {
    width: (Metrics.WIDTH * 0.026),
    height: (Metrics.WIDTH * 0.026),
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.015),
  },

  watchDistanceTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: (Metrics.WIDTH * 0.008),
    marginTop: (Metrics.WIDTH * 0.01),
  },

  mapPin: {
    marginLeft: (Metrics.WIDTH * 0.04),
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.WIDTH * 0.01),
  },

  postDetailBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH *0.04),
    marginRight: (Metrics.WIDTH *0.04),
    bottom: (Metrics.WIDTH *0.04),
    position:'absolute'
  },

  profileDetailBg: {
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH *0.03)
  },

  watchDistanceBg: {
    flexDirection: 'row'
  },

  hratIconBg: {
    backgroundColor: 'transparent',
    marginTop: -(Metrics.WIDTH * 0.02)
  }

});

export default styles;
