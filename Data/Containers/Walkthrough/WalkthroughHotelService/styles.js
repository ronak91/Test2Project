
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

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

	slidesec:{
		height: (Metrics.HEIGHT*0.78),
		position: 'relative',
	},

	headerStyle: {
		marginTop: (Metrics.HEIGHT * 0.03),
		alignItems: 'center'
	},

	contentStyle: {
		marginTop: (Metrics.HEIGHT * 0.06),
		alignItems: 'center'
	},

	listStyle: {
		width: (Metrics.WIDTH * 0.88),
		height: (Metrics.WIDTH * 0.15),
		borderRadius: 5,
		borderColor: '#23284470',
		borderWidth: 1.5,
		marginTop:(Metrics.HEIGHT * 0.02),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(22),
		width: (Metrics.WIDTH * 0.7),
		color:Colors.snow,
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(18),
		color:Colors.snow,
	},

	buttonText: {
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize:Fonts.moderateScale(18),
		color:Colors.snow,
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.12),
		width: (Metrics.WIDTH*0.88),
		borderWidth: 0,
		bottom: 0,
		position: 'absolute',
		alignItems: 'center',
		alignSelf: 'center',
	},

	btnStyle: {
		height: (Metrics.HEIGHT*0.064),
		width: (Metrics.WIDTH*0.4),
		backgroundColor: '#0691ce',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},

	chBoxBg: {
		width: (Metrics.WIDTH * 0.75),
		alignItems: 'flex-end',
		position: 'absolute',
	},

	chBox: {
		height: 18,
		width: 18,
		borderRadius: 9
	}

});

export default styles;
