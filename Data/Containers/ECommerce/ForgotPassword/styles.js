import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';
import {  Fonts,Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  header: {
    backgroundColor: "#0e1130",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Metrics.HEIGHT * 0.02),
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center',
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    }),
  },

  noticeText: {
    padding: 10,
    fontFamily: Fonts.type.sfuiDisplayLight,
    fontSize: Fonts.moderateScale(18),
    color: "#0e1130"
  },

  divider: {
		backgroundColor: "#d8d8d8",
		width: Metrics.WIDTH,
		height: Metrics.WIDTH * 0.003
	},

  floatingView:{
		alignSelf:'center',
		width: Metrics.WIDTH * 0.94,
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT * 0.015
	},

  sendBtnBg: {
    backgroundColor: "#ffc700",
    width: Metrics.WIDTH * 0.94,
    alignSelf: 'center',
    paddingTop: Metrics.HEIGHT * 0.012,
    paddingBottom: Metrics.HEIGHT * 0.012,
    borderRadius: 5
	},

	sendTxt: {
    color: "#0e1130",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'center'
	},

  bottomView: {
		width: Metrics.WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
		height: Metrics.HEIGHT * 0.08
	},

});

export default styles;
