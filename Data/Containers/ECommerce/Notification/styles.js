
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({

  header: {
    backgroundColor: "#0e1130",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.02),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    alignSelf: 'center',
		fontFamily: Fonts.type.helveticaNeueLight,
  },

  right: {
    flex: 0.5,
    alignItems: 'center',
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  rowBg: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
  },

  rowProfileNameTime: {
    width: Metrics.WIDTH * 0.92,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: Metrics.WIDTH * 0.03,
    marginBottom: Metrics.WIDTH * 0.03
  },

  imageNotification: {
    width: Metrics.WIDTH * 0.12,
    height: Metrics.WIDTH * 0.12,
    borderRadius: Metrics.WIDTH * 0.06,
    resizeMode: 'contain'
  },

  rowNameTime: {
    marginLeft:  Metrics.WIDTH * 0.04,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  nameTxt: {
    color: Colors.black,
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left'
  },

  timeTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left'
  },

  descriptionTxt: {
    color: "#959595",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.helveticaNeueLight,
    width: Metrics.WIDTH * 0.92,
    alignSelf: 'center',
    textAlign: 'left'
  },

  divider: {
    height: 1,
    width: Metrics.WIDTH,
    backgroundColor: "#e1e1e1",
    marginTop: (Metrics.WIDTH * 0.03)
  }


});

export default styles;
