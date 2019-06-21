import { Platform, StyleSheet, Dimensions } from 'react-native';
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

  rowMain:{
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        padding: Metrics.HEIGHT * 0.020,
      },
      android: {
        padding: Metrics.HEIGHT * 0.025,
      }
    }),
    justifyContent:'space-between',
    alignItems: 'center'
  },

  rowText:{
    color: '#363636',
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight
  },

  faqDivider:{
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: '#e1e1e1'
  },

  searchViewBg: {
		backgroundColor: '#e9e9e9',
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.08,
		justifyContent: 'center',
		alignItems: 'center',
	},

	searchView: {
		backgroundColor: Colors.snow,
		borderRadius: 5,
		width: Metrics.WIDTH * 0.95,
		height: Metrics.HEIGHT * 0.06,
		alignItems: 'center',
		flexDirection: 'row',
	},

  searchInput: {
    color: '#6d6d71',
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    ...Platform.select({
      ios: {},
    }),
  },
});

export default styles;
