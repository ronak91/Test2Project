
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.snow,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
	},
	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	header: {
		backgroundColor: "#2d324f",
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

	slide: {
		backgroundColor: '#2d324f',
		height: (Metrics.HEIGHT * 0.9),
		width: Metrics.WIDTH,
	},

	imageStyle: {
		width: Metrics.WIDTH * 0.7,
		height: Metrics.HEIGHT,
		resizeMode: 'contain',
		alignSelf: 'center',
		...Platform.select({
				ios: {
					marginTop: -(Metrics.HEIGHT * 0.08)
				},
				android: {
					marginTop: -(Metrics.HEIGHT * 0.05)
				}
		}),
	},

	contentStyle: {
		width: (Metrics.WIDTH),
		backgroundColor: Colors.snow,
		height: (Metrics.HEIGHT * 0.35),
		position: 'absolute',
		bottom: 0,
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(22),
		width :(Metrics.WIDTH) * .85,
		color:'#363636',
		marginTop: Metrics.HEIGHT * 0.045
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * .70,
		color:'#6f6f6f',
		marginTop:(Metrics.HEIGHT * 0.04)
	},

	dot:{
		backgroundColor:'#d4d4d4',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	nextTipBg: {
		flexDirection:'row',
		justifyContent: 'center',
		marginTop:(Metrics.HEIGHT * 0.7),
		marginRight: (Metrics.WIDTH * 0.34)
	},

	nextTipTxt: {
		fontFamily:Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(18),
		color: '#0691ce',
		marginRight:(Metrics.WIDTH * 0.015)
	},

	nextArrowImg: {
		color:'#0691ce',
		fontSize:Fonts.moderateScale(18),
		marginTop:(Metrics.WIDTH * 0.008),
	}

});

export default styles;
