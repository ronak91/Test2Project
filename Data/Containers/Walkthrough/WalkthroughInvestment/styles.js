import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#2d324f',
	},
	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5
	},

	body: {
		flex: 3,
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},

	slidesec:{
			height: (Metrics.HEIGHT) * 0.90,
			position: 'relative',
			paddingLeft: (Metrics.WIDTH * 0.08),
			paddingRight: (Metrics.WIDTH * 0.08),
	},

	slide: {
		backgroundColor: Colors.snow,
		height: (Metrics.HEIGHT) * 0.7,
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.45),
		width: Metrics.WIDTH,
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.06),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		backgroundColor: Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize: Fonts.moderateScale(18),
		width : (Metrics.WIDTH) * .70,
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize: Fonts.moderateScale(12),
		width : (Metrics.WIDTH) * .70,
		color:'#6f6f6f',
		marginTop: (Metrics.HEIGHT * 0.02),
	},

	dot:{
		backgroundColor:'#8796a6',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginBottom: (Metrics.HEIGHT * 0.025),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginBottom: (Metrics.HEIGHT * 0.025),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	nextTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(18),
		marginTop:(Metrics.HEIGHT * 0.75),
		color: Colors.snow,
		alignSelf: 'flex-end'
	},

	skipBtnBg: {
		position: 'absolute',
		bottom: (Metrics.HEIGHT * 0.055),
		paddingLeft:(Metrics.WIDTH * 0.08)
	},

	skipTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(18),
		color: Colors.snow
	}

});

export default styles;
