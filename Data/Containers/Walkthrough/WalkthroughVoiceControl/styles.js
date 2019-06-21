
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
			backgroundColor: '#2d324f',
			height: Metrics.HEIGHT,
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

	slide: {
		height: (Metrics.HEIGHT*0.81),
		justifyContent: 'flex-end',
		paddingBottom: (Metrics.HEIGHT * 0.24),
	},

	btnsec:{
		height: (Metrics.HEIGHT*0.09),
		width: Metrics.WIDTH,
		backgroundColor: '#4cd964',
		justifyContent:'center'
	},

	headertext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(19),
		width :(Metrics.WIDTH) * .70,
		color:Colors.snow,
		marginTop:(Metrics.HEIGHT*0.10),
	},

	desctext: {
		fontFamily: Fonts.type.sfuiDisplayRegular,
		backgroundColor:Colors.transparent,
		textAlign:'center',
		alignSelf:'center',
		fontSize:Fonts.moderateScale(11),
		width :(Metrics.WIDTH) * .70,
		color:'#9699a7',
		marginTop:(Metrics.HEIGHT * 0.02),
	},

	dot:{
		backgroundColor:'#6c7084',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom: (Metrics.HEIGHT * 0.12)
	},

	activeDot:{
		backgroundColor:Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
		marginBottom: (Metrics.HEIGHT * 0.12)
	},

	buttonText: {
		color: Colors.snow,
		fontSize:Fonts.moderateScale(18),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		alignSelf:'center',
	},

	imgStyle: {
		height:(Metrics.HEIGHT * 0.3)
	}

});

export default styles;
