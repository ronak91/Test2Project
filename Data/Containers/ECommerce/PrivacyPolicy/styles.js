import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#0e1130',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Metrics.HEIGHT * 0.02,
			},
			android: {
				paddingTop: Metrics.WIDTH * 0.04,
			},
		}),
		elevation: 0,
		paddingLeft: Metrics.WIDTH * 0.05,
		paddingRight: Metrics.WIDTH * 0.05,
	},

	left: {
		flex: 1,
		backgroundColor: Colors.transparent,
	},

	body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: Colors.transparent,
	},

	textTitle: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(20),
		alignSelf: 'center',
		fontFamily: Fonts.type.helveticaNeueLight,
	},

	right: {
		flex: 1,
		alignItems: 'center',
	},

	bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow,
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center',
	},
	txt: {
		backgroundColor: '#fff',
	},
	title: {
		color: '#362f2d',
		fontFamily: Fonts.type.helveticaRegular,
		fontSize: Fonts.moderateScale(16),
		paddingLeft: Metrics.WIDTH * 0.05,
		paddingTop: Metrics.HEIGHT * 0.05,
	},
	qus: {
		paddingTop: Metrics.HEIGHT * 0.01,
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.helveticaNeueLight,
		color: '#111111',
	},

	arrowView: {
		width: Metrics.HEIGHT * 0.024,
		height: Metrics.HEIGHT * 0.024,
		backgroundColor: '#ffc700',
		borderRadius: Metrics.HEIGHT * 0.012,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: I18nManager.isRTL ? 0 : Metrics.HEIGHT * 0.003,
		marginRight: I18nManager.isRTL ? 0 : Metrics.HEIGHT * 0.022,
		paddingRight: I18nManager.isRTL ? Metrics.HEIGHT * 0.003 : 0,
		marginLeft: Metrics.WIDTH * 0.09,
		marginTop: Metrics.HEIGHT * 0.025,
	},

	firstQueView: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
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
