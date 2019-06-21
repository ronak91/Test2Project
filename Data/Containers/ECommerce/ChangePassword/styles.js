import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
	container: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		backgroundColor: Colors.snow,
	},

	header: {
		// backgroundColor: "#2d324f",
		backgroundColor: '#0e1130',
		height: Metrics.HEIGHT * 0.1,
		paddingHorizontal: Metrics.WIDTH * 0.05,
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
		flex: 0.7,
		backgroundColor: Colors.transparent,
	},

	body: {
		flex: 2.6,
		alignItems: 'center',
		backgroundColor: Colors.transparent,
	},

	textTitle: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(22),
		alignSelf: 'center',
		fontFamily: Fonts.type.helveticaNeueLight,
	},

	right: {
		flex: 0.7,
		alignItems: 'center',
	},

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	content: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT * 0.8,
	},

	divider: {
		backgroundColor: '#d8d8d8',
		width: Metrics.WIDTH,
		height: Metrics.WIDTH * 0.003,
	},

	bottomView: {
		width: Metrics.WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
	},

	changeBtnBG: {
		backgroundColor: Colors.yellow,
		width: Metrics.WIDTH * 0.94,
		height: Metrics.HEIGHT * 0.055,
		marginVertical: Metrics.HEIGHT * 0.02,
		borderRadius: Metrics.HEIGHT * 0.005,
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},

	changeBtnTxt: {
		color: Colors.drakBlue,
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplayLight,
	},

	item: {
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.92,
		justifyContent: 'center',
		marginTop: Metrics.WIDTH * 0.03,
	},

	floatingView: {
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.92,
		justifyContent: 'center',
		marginTop: Metrics.WIDTH * 0.03,
	},

	inputemail: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
		marginTop: -(Metrics.WIDTH * 0.03),
	},

	textLabel: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
	},
});

export default styles;
