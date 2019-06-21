
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#2d324f',
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
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

	headersec: {
		height: (Metrics.HEIGHT*0.06),
		justifyContent: 'center'
	},

	slidesec:{
		height: (Metrics.HEIGHT*0.75),
	},

	slide: {
		height: (Metrics.HEIGHT*0.75),
		justifyContent: 'center',
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.09),
		width: (Metrics.WIDTH * 0.85),
		flexDirection:'row',
		alignSelf: 'center',
		justifyContent:'space-between',
		marginTop: (Metrics.HEIGHT*0.01),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize: Fonts.moderateScale(24),
		width :(Metrics.WIDTH * .9),
		color:Colors.snow,
	},

	dot:{
		backgroundColor:'#6c7084',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	buttonText: {
		color: Colors.snow,
		fontSize:Fonts.moderateScale(18),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		alignSelf:'center',
	},

	imgStyle: {
		height:(Metrics.HEIGHT * 0.65),
		marginTop: (Metrics.HEIGHT * 0.03),
		resizeMode:'contain',
		width: (Metrics.WIDTH * 0.75),
		alignSelf: 'center'
	}

});

export default styles;
