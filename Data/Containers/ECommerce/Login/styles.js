import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
	container: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		backgroundColor: Colors.snow,
	},

	header: {
		backgroundColor: '#0e1130',
		borderBottomWidth: 0,
		...Platform.select({
			ios: {
				paddingTop: Metrics.HEIGHT * 0.02,
				height: Metrics.HEIGHT * 0.1,
			},
			android: {
				paddingTop: Metrics.HEIGHT * 0.02,
				height: Metrics.HEIGHT * 0.1,
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

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
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
		...Platform.select({
			ios: {},
			android: {
				paddingTop: Metrics.WIDTH * 0.02,
			},
		}),
	},

	right: {
		flex: 1,
		backgroundColor: Colors.transparent,
		...Platform.select({
			ios: {},
			android: {
				height: Metrics.HEIGHT * 0.06,
				marginTop: -(Metrics.WIDTH * 0.03),
			},
		}),
	},

	heartBg: {
		width: Metrics.WIDTH * 0.054,
		height: Metrics.WIDTH * 0.054,
		borderRadius: Metrics.WIDTH * 0.027,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: Colors.snow,
		alignItems: 'center',
		justifyContent: 'center',
	},

	bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow,
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center',
	},

	content: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.8,
	},

	bottomView: {
		width: Metrics.WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
		height: Metrics.HEIGHT * 0.097,
	},

	divider: {
		backgroundColor: '#d8d8d8',
		width: Metrics.WIDTH,
		height: Metrics.WIDTH * 0.003,
	},

	loginSignUpTxt: {
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

	facebookBtnBg: {
		backgroundColor: '#0054a6',
		width: Metrics.WIDTH * 0.94,
		alignSelf: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Metrics.WIDTH * 0.025,
		paddingBottom: Metrics.WIDTH * 0.025,
	},

	loginWithFacebookTxt: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(17),
		// fontFamily: Fonts.type.sfuiDisplayLight,
		marginLeft: Metrics.WIDTH * 0.03,
	},

	loginSignUpContent: {
		...Platform.select({
			ios: {
				height: Metrics.HEIGHT * 0.714,
			},
			android: {
				height: Metrics.HEIGHT * 0.7,
			},
		}),
		width: Metrics.WIDTH * 0.94,
		alignSelf: 'center',
	},

	textInput: {
		height: Metrics.HEIGHT * 0.07,
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.9,
		fontSize: Fonts.moderateScale(14),
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		marginLeft: 15,
		paddingLeft: 15,
		marginTop: Metrics.HEIGHT * 0.02,
		backgroundColor: 'red',
	},

	item: {
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.94,
		justifyContent: 'center',
	},

	floatingView: {
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.94,
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT * 0.015,
	},

	inputemail: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
	},
	textLabel: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
		marginLeft: 10,
		fontSize: 10,
	},

	forgotPasswordTxt: {
		color: '#0691ce',
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

	loginBg: {
		backgroundColor: '#0691ce',
		width: Metrics.WIDTH * 0.94,
		alignSelf: 'center',
		height: Metrics.HEIGHT * 0.06,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},

	alertBg: {
		width: Metrics.WIDTH * 0.03,
		height: Metrics.WIDTH * 0.03,
		borderRadius: Metrics.WIDTH * 0.015,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Metrics.WIDTH * 0.018),
	},

	alertTxt: {
		fontSize: Fonts.moderateScale(8),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		color: Colors.snow,
	},

	dropdown: {
		width: Metrics.WIDTH * 0.94,
		alignSelf: 'center',
		height: Metrics.HEIGHT * 0.07,
		backgroundColor: 'red',
	},

	picker: {
		width: Metrics.WIDTH * 0.94,
		alignSelf: 'center',
		height: Metrics.HEIGHT * 0.07,
		backgroundColor: 'green',
	},

	activeTab: {
		color: Colors.snow,
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize: Fonts.moderateScale(14),
	},

	normalTab: {
		color: '#0691ce',
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize: Fonts.moderateScale(14),
	},

	segmentTab: {
		...Platform.select({
			ios: {
				width: Metrics.WIDTH * 0.467,
				height: 31,
			},
			android: {
				width: Metrics.WIDTH * 0.465,
				height: 29,
			},
		}),
		backgroundColor: '#FFF',
		borderColor: '#0691ce',
		justifyContent: 'center',
		alignSelf: 'center',
	},

	segmentSelectedTab: {
		...Platform.select({
			ios: {
				width: Metrics.WIDTH * 0.467,
				height: 31,
			},
			android: {
				width: Metrics.WIDTH * 0.465,
				height: 29,
			},
		}),
		backgroundColor: '#0691ce',
		borderColor: '#0691ce',
		justifyContent: 'center',
		alignSelf: 'center',
	},

	contentOne: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.8,
	},

	segmentSelectedTabOne: {
		width: Metrics.WIDTH * 0.47,
		height: Metrics.HEIGHT * 0.05,
		backgroundColor: '#0691ce',
		borderColor: '#0691ce',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: Metrics.HEIGHT * 0.007,
	},

	segmentTabOne: {
		width: Metrics.WIDTH * 0.47,
		height: Metrics.HEIGHT * 0.05,
		backgroundColor: 'transparent',
		borderColor: '#0691ce',
		justifyContent: 'center',
		alignSelf: 'center',
	},

	segmentTabSecOne: {
		width: Metrics.WIDTH * 0.94,
		height: Metrics.HEIGHT * 0.05,
		marginVertical: Metrics.HEIGHT * 0.03,
		borderRadius: Metrics.HEIGHT * 0.007,
		backgroundColor: Colors.snow,
		borderColor: '#0691ce',
		padding: 0,
		borderWidth: 1,
		alignSelf: 'center',
	},

	activeTabOne: {
		color: Colors.snow,
		//  fontFamily: Fonts.type.helveticaNeueLight,
		fontSize: Fonts.moderateScale(15),
	},

	normalTabOne: {
		color: '#0691ce',
		//  fontFamily: Fonts.type.helveticaNeueLight,
		fontSize: Fonts.moderateScale(15),
	},

	segmentTabSec: {
		padding: 0,
		marginTop: 0,
		backgroundColor: Colors.snow,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#0691ce',
		width: Metrics.WIDTH * 0.94,
		height: 32,
		alignSelf: 'center',
		marginTop: Metrics.WIDTH * 0.02,
	},

	forgotPasswordBg: {
		alignSelf: 'flex-end',
		marginTop: Metrics.HEIGHT * 0.015,
		marginRight: Metrics.HEIGHT * 0.015,
	},
});

export default styles;
