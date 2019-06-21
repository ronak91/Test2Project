import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#2d324f',
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

	mainBg: {
		height: (Metrics.HEIGHT * 0.9),
		backgroundColor: '#2d324f'
	},

	headerTxt: {
		color: Colors.snow,
		fontFamily: Fonts.type.sfuiDisplayMedium,
		fontSize: Fonts.moderateScale(20),
		textAlign: 'center',
		marginTop: (Metrics.HEIGHT) * 0.03
	},

	descriptionTxt: {
		width: (Metrics.WIDTH)*0.70,
		alignSelf:'center',
		textAlign:'center',
		color: "#fff8",
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize: Fonts.moderateScale(12),
		marginTop: (Metrics.HEIGHT) * 0.03
	},

	slidesec:{
		marginTop: (Metrics.HEIGHT) * 0.07,
		width: (Metrics.WIDTH * 0.70),
		height: (Metrics.HEIGHT) * 0.65,
		alignSelf: 'center',
		backgroundColor: Colors.transparent,
		borderRadius: 10,
		overflow: 'hidden'
	},

	slide: {
		backgroundColor: Colors.snow,
		...Platform.select({
			ios:{
				marginLeft: -((Metrics.WIDTH) * 0.3),
			}
		}),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		shadowColor: Colors.black,
		shadowOpacity: 0.5,
		shadowOffset: {
			height: 5,
			width: 0,
		},
		elevation: 5, // android shadow
		borderWidth: 0,
		borderRadius: 10,
		overflow: 'hidden',
	},

	sliderImage: {
		...Platform.select({
			android:{
				height: (Metrics.HEIGHT * 0.45),
				width: (Metrics.WIDTH * 0.75),
				borderRadius: 10,
			},
			ios:{
				height: (Metrics.HEIGHT * 0.45),
				width: (Metrics.WIDTH*0.55),
				borderRadius: 10,
			}
		}),
		// resizeMode: 'cover',
	},

	indicatorBg: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: (Metrics.HEIGHT) * 0.12
	},

	dot:{
		backgroundColor:'#6c7084',
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginBottom: (Metrics.HEIGHT * 0.025),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor: Colors.snow,
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginBottom: (Metrics.HEIGHT * 0.025),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

});

export default styles;
