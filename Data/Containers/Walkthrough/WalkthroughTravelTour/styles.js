
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	imgContainer: {
		width:Metrics.WIDTH,
		height:Metrics.HEIGHT
	},

	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
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

	slidesec:{
		height: (Metrics.HEIGHT),
		backgroundColor: 'rgba(0,0,0,0.6)',
	},

	slide: {
		height: (Metrics.HEIGHT * 0.9),
		justifyContent: 'flex-end',
		paddingBottom:(Metrics.HEIGHT * 0.1),
	},

	headertext: {
		fontFamily:Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(32),
		width :(Metrics.WIDTH * 0.88),
		color:Colors.snow,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(12),
		width :(Metrics.WIDTH * 0.85),
		color:Colors.snow,
		marginTop:(Metrics.HEIGHT * 0.015),

	},

	dot:{
		backgroundColor:'rgba(255,255,255,0.3)',
		width:  (Metrics.WIDTH * 0.018),
		height: (Metrics.WIDTH * 0.018),
		borderRadius: (Metrics.WIDTH * 0.009),
		marginLeft: (Metrics.WIDTH * 0.004),
		marginRight: (Metrics.WIDTH * 0.004),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.018),
		height: (Metrics.WIDTH * 0.018),
		borderRadius: (Metrics.WIDTH * 0.009),
		marginLeft: (Metrics.WIDTH * 0.004),
		marginRight: (Metrics.WIDTH * 0.004),
	},

	bottomBtn: {
		alignItems:'center',
		justifyContent: 'center',
		width: (Metrics.WIDTH * 0.44),
		height: (Metrics.HEIGHT * 0.06),
	},

	btnTextStyle: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(15),
		color:Colors.snow,
	},

	btnsec: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: (Metrics.HEIGHT * 0.05),
		width: (Metrics.WIDTH * 0.85),
		alignSelf: 'center'
	}

});

export default styles;
