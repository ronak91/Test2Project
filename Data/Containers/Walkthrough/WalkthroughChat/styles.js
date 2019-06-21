
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container:{
		height: (Metrics.HEIGHT),
		backgroundColor: '#0691ce'
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

	slide: {
		height: (Metrics.HEIGHT),
		marginTop:(Metrics.HEIGHT * 0.12),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(24),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
		marginTop: (Metrics.WIDTH * 0.18)
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(12),
		width :(Metrics.WIDTH) * .70,
		color:'#b5def0',
		marginTop:(Metrics.HEIGHT * 0.028)
	},

	dot:{
		backgroundColor:'#1274a8',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.05)
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.05),
	},

	imageStyle: {
		height:(Metrics.HEIGHT * 0.3),
		width: (Metrics.WIDTH * 0.95),
		alignSelf: 'center',
		resizeMode: 'contain'
	}

});

export default styles;
