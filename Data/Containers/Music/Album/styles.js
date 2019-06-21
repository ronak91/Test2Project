import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
	mainView: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		backgroundColor: '#f2f2f2',
	},

	bgImage: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.35,
	},

	header: {
		backgroundColor: 'transparent',
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
		flex: 0.5,
		backgroundColor: Colors.transparent,
	},

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Metrics.WIDTH * 0.01,
	},

	body: {
		flex: 3,
		alignItems: 'flex-start',
	},

	textTitle: {
		color: Colors.snow,
		fontFamily: Fonts.type.helveticaNeueLight,
		fontSize: Fonts.moderateScale(20),
	},

	right: {
		flex: 0.5,
		backgroundColor: Colors.transparent,
		alignItems: 'center',
		...Platform.select({
			ios: {},
			android: {
				paddingTop: Metrics.WIDTH * 0.02,
			},
		}),
	},

	listProfileBg: {
		width: Metrics.WIDTH * 0.96,
		height: Metrics.HEIGHT * 0.71,
		alignSelf: 'center',
		backgroundColor: 'white',
		position: 'absolute',
		marginTop: Metrics.HEIGHT * 0.29,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		...Platform.select({
			ios: {},
			android: {
				borderColor: '#e3e3e3',
				borderWidth: Metrics.WIDTH * 0.003,
			},
		}),
	},

	playIconBg: {
		backgroundColor: '#0b3d97',
		marginTop: Metrics.HEIGHT * 0.25,
		width: Metrics.WIDTH * 0.16,
		height: Metrics.WIDTH * 0.16,
		borderRadius: Metrics.WIDTH * 0.08,
		right: Metrics.WIDTH * 0.06,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 10,
		position: 'absolute',
	},

	playIcon: {
		paddingLeft: Metrics.WIDTH * 0.015,
	},

	txtName: {
		color: '#272727',
		fontSize: Fonts.moderateScale(22),
		marginLeft: Metrics.WIDTH * 0.05,
		marginTop: Metrics.HEIGHT * 0.025,
		fontFamily: Fonts.type.robotoMedium,
	},

	txtMusicHistory: {
		color: '#a2a2a2',
		fontSize: Fonts.moderateScale(14),
		marginLeft: Metrics.WIDTH * 0.05,
		marginTop: Metrics.WIDTH * 0.015,
		fontFamily: Fonts.type.robotoRegular,
	},

	divider: {
		backgroundColor: '#ebebeb',
		width: Metrics.WIDTH * 0.96,
		height: Metrics.WIDTH * 0.003,
		marginTop: Metrics.WIDTH * 0.05,
	},

	listBg: {
		backgroundColor: '#fafafa',
		width: Metrics.WIDTH * 0.96,
		alignSelf: 'center',
		height: Metrics.HEIGHT * 0.6,
		...Platform.select({
			ios: {},
			android: {
				borderColor: '#e3e3e3',
				borderWidth: Metrics.WIDTH * 0.003,
			},
		}),
	},

	listHeader: {
		width: Metrics.WIDTH * 0.88,
		alignSelf: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: Metrics.HEIGHT * 0.03,
	},

	populatTrackTxt: {
		color: '#272727',
		fontSize: Fonts.moderateScale(18),
		fontFamily: Fonts.type.robotoRegular,
	},

	viewMoreTxt: {
		color: '#7d7d7d',
		fontSize: Fonts.moderateScale(12),
		paddingTop: Metrics.WIDTH * 0.01,
		fontFamily: Fonts.type.robotoMedium,
	},

	listTrackRow: {
		width: Metrics.WIDTH * 0.88,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: Metrics.HEIGHT * 0.027,
	},

	listTrackInfoImg: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	listTrackImage: {
		resizeMode: 'cover',
		width: Metrics.WIDTH * 0.18,
		height: Metrics.HEIGHT * 0.1,
	},

	listInfo: {
		width: Metrics.WIDTH * 0.6,
		marginLeft: Metrics.WIDTH * 0.03,
	},

	listTitleTxt: {
		color: '#2e2e2e',
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.robotoRegular,
	},

	listSubTitleBg: {
		flexDirection: 'row',
		marginTop: 5,
	},

	listSubTitleTxt: {
		color: '#7b7b7b',
		fontSize: Fonts.moderateScale(14),
		marginTop: Metrics.WIDTH * 0.002,
	},


	listDropDown: {
		...Platform.select({
			ios: {
					width: Metrics.WIDTH * 0.30,
					paddingHorizontal: Metrics.WIDTH * 0.015,
					paddingVertical: Metrics.HEIGHT * 0.02,
					backgroundColor:Colors.snow,
					justifyContent: 'center',
					position: 'absolute',
					right: Metrics.WIDTH * 0.080,
					// bottom: Metrics.HEIGHT * 0.03,
					shadowColor: 'gray',
					zIndex: 10000,
			},
			android: {
				  height:Metrics.WIDTH * 0.20,
					width: Metrics.WIDTH * 0.35,
					paddingHorizontal: Metrics.WIDTH * 0.005,
					paddingVertical: Metrics.HEIGHT * 0.002,
					backgroundColor:Colors.snow,
					justifyContent: 'center',
					position: 'absolute',
					right: Metrics.WIDTH * 0.080,
					// bottom: Metrics.HEIGHT * 0.03,
					shadowColor: 'gray',
					zIndex: 10000,
				  borderColor: '#e3e3e3',
				  borderWidth: Metrics.WIDTH * 0.003,
					paddingLeft: Metrics.WIDTH * 0.003,
			},
		}),
		// shadowOpacity: 0.2,
		// shadowOffset: { width: 0, height: 2 },
		// elevation: 2
	},


	dropDownTxt: {
		fontSize: Fonts.moderateScale(15),
		fontFamily: Fonts.type.robotoRegular,
		color: '#7b7b7b',
		marginLeft: 5
	},

	// dropstyle: {
	//   backgroundColor: "transparent",
	//   width: Fonts.moderateScale(75),
	//   height: Fonts.moderateScale(28),
	// },

	dropstyle: {
		backgroundColor: 'transparent',
		width: Fonts.moderateScale(75),
		height: Fonts.moderateScale(28),
		borderWidth: 0.5,
		borderColor: 'lightgrey',
		borderRadius: 4,
	},

	listContent: {
		paddingBottom: Metrics.HEIGHT * 0.025,
	},
});

export default styles;
