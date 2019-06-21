import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.snow,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
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

	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
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
		flexDirection: 'column',
		backgroundColor: Colors.transparent
	},

	sliderImage: {
		height: Metrics.HEIGHT * 0.56,
		backgroundColor: "#2d324f"
	},

	imageStyle: {
		resizeMode: 'cover',
		height: (Metrics.WIDTH * 0.76),
		width: (Metrics.WIDTH * 0.76),
		borderRadius: (Metrics.WIDTH * 0.38),
		alignSelf: 'center',
		marginTop: (Metrics.HEIGHT * 0.03)
	},

	contentStyle: {
		backgroundColor: Colors.snow,
		height: Metrics.HEIGHT * 0.34,
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(24),
		width :(Metrics.WIDTH) * .85,
		color:'#363636',
		marginTop: (Metrics.HEIGHT * 0.06)
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * .70,
		color:'#6f6f6f',
		marginTop:(Metrics.HEIGHT * 0.05)
	},

	dot:{
		backgroundColor:'rgba(111,111,111,0.35)',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.005)
	},

	activeDot:{
		backgroundColor:'#6f6f6f',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.005)
	},

});

export default styles;
