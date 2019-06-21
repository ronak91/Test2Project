import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
			backgroundColor: Colors.snow,
			height: Metrics.HEIGHT,
			width: Metrics.WIDTH
	},
	backArrow:{
		width: 30,
		marginLeft: 20,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	slidesec: {
		backgroundColor: Colors.snow,
		height: (Metrics.HEIGHT * 0.95),
		backgroundColor: Colors.transparent
	},

	slide: {
		backgroundColor: Colors.snow,
		height: (Metrics.HEIGHT * 0.9),
		backgroundColor: Colors.transparent
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.68),
		width: Metrics.WIDTH,
		backgroundColor: 'grey'
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.04),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayLight,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(21),
		width :(Metrics.WIDTH) * .86,
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * .70,
		color:'#6f6f6f',
		marginTop:(Metrics.HEIGHT * 0.025)
	},

	dot:{
		backgroundColor:'#d4d4d4',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom: (Metrics.WIDTH * 0.008),
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom: (Metrics.WIDTH * 0.008),
	},

	backImgBg: {
		bottom: (Metrics.WIDTH * 0.003),
		position: 'absolute',
		marginLeft: (Metrics.WIDTH * 0.06),
	}

});

export default styles;
