
import { Platform, StyleSheet, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.transparent,
		width:Metrics.WIDTH,
		height:Metrics.HEIGHT
	},

	imgContainer: {
		width:Metrics.WIDTH,
		height:(Metrics.HEIGHT*0.73)
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

	slidesec: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		height: (Metrics.HEIGHT*0.73),
	},

	slide: {
		height: (Metrics.HEIGHT*0.63),
		justifyContent: 'flex-end',
		paddingBottom: (Metrics.HEIGHT * 0.12),
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.27),
		backgroundColor: '#2d324f',
		borderTopWidth: 0,
		paddingTop: (Metrics.HEIGHT*0.05),
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(24),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
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
		marginBottom:(Metrics.HEIGHT * 0.003),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom:(Metrics.HEIGHT * 0.003),
	},

	signUptext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(17),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
	},

	buttonText: {
		color: Colors.snow,
		fontSize:Fonts.moderateScale(18),
		fontFamily: Fonts.type.sfuiDisplayRegular,
		paddingLeft: I18nManager.isRTL ? 0 : (Metrics.WIDTH * 0.025),
		paddingRight: I18nManager.isRTL ? (Metrics.WIDTH * 0.025) : 0
	},

	fbEmailBtnBg: {
		flexDirection:'row',
		marginTop:(Metrics.HEIGHT * 0.05),
		width: (Metrics.WIDTH * 0.88),
		alignSelf: 'center',
		justifyContent: 'space-between'
	},

	btnBg: {
		width:(Metrics.WIDTH * 0.41),
		justifyContent:'center',
		flexDirection:'row',
		alignItems:'center'
	}

});

export default styles;
