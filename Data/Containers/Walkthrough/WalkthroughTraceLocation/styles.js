import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	slidesec:{
		height: (Metrics.HEIGHT),
		backgroundColor: '#2d324f',
	},

	header: {
		backgroundColor: '#2d324f',
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

	btnsec:{
		borderTopWidth: 0,
		bottom: 0,
	},

	sliderImage: {
		height: (Metrics.HEIGHT * 0.55),
		width: Metrics.WIDTH,
		justifyContent: 'center',
	},

	imageStyle: {
		resizeMode: 'cover',
		height: (Metrics.WIDTH * 0.7),
		width: (Metrics.WIDTH * 0.7),
		borderRadius: (Metrics.WIDTH * 0.35),
		alignSelf: 'center',
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(24),
		width :(Metrics.WIDTH) * .85,
		color:Colors.snow,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(12),
		width :(Metrics.WIDTH) * .70,
		color:'#9699a7',
		marginTop:20
	},

	locationBtn: {
		backgroundColor:'#4cd964',
		width:(Metrics.WIDTH *0.6),
		height: (Metrics.HEIGHT *0.065),
		alignSelf: 'center',
		justifyContent: 'center'
	},

	skipBtn: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: (Metrics.HEIGHT *0.045)
	},

	btnText: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(18),
		color: Colors.snow,
	}

});

export default styles;
