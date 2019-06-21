
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	imgContainer: {
		width:Metrics.WIDTH,
		height:Metrics.HEIGHT
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
		height: (Metrics.HEIGHT),
		backgroundColor: 'rgba(0,0,0,0.6)',
	},

	slide: {
		height: (Metrics.HEIGHT * 0.9),
		justifyContent: 'flex-end',
		paddingBottom: (Metrics.HEIGHT * 0.15),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(26),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(15),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
		marginTop:(Metrics.HEIGHT * 0.03)
	},

	dot:{
		backgroundColor:'rgba(255,255,255,0.3)',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.02),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.02),
	},

});

export default styles;
