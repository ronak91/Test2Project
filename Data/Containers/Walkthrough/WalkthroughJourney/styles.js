
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.snow,
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
		borderBottomColor: Colors.transparent,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingLeft: (Metrics.WIDTH * 0.05),
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
		height: (Metrics.HEIGHT * 0.75),
		paddingLeft: (Metrics.WIDTH * 0.08),
		paddingRight: (Metrics.WIDTH * 0.08),
		backgroundColor: Colors.transparent
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.15),
		backgroundColor: Colors.transparent,
		borderTopWidth: 0,
		bottom: 0,
		flexDirection: 'row',
		width: (Metrics.WIDTH),
	},

	slide: {
		height: (Metrics.HEIGHT * 0.65),
		backgroundColor: Colors.transparent
	},

	sliderImage: {
		resizeMode: 'cover',
		height: (Metrics.HEIGHT * 0.65),
		width: Metrics.WIDTH,
		backgroundColor: 'grey'
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.06),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayLight,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(21),
		width :(Metrics.WIDTH) * .85,
		color:'#363636',
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * 0.7,
		color:'#6f6f6f',
		marginTop:20
	},

	dot:{
		backgroundColor:'rgba(255,255,255,0.4)',
		marginTop: (Metrics.HEIGHT * 0.015),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		marginTop: (Metrics.HEIGHT * 0.015),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	discoverBg: {
		backgroundColor:'#0691ce',
		alignSelf: 'center',
		justifyContent: 'center',
		paddingLeft: (Metrics.WIDTH * 0.08),
		paddingRight: (Metrics.WIDTH * 0.08),
		paddingTop: (Metrics.WIDTH * 0.02),
		paddingBottom: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.06),
		marginLeft: (Metrics.WIDTH * 0.35)
	},

	discoverTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(12),
		color: Colors.snow,
		textAlign: 'center'
	},

	skipTxt: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(16),
		color: '#6f6f6f',
		textAlign: 'right',
		marginRight: (Metrics.WIDTH * 0.08),
	}

});

export default styles;
