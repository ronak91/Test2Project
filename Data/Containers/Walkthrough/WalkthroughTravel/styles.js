import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: Colors.transparent,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
	},

	imgContainer: {
		backgroundColor: Colors.transparent,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
	},

	header: {
		backgroundColor: 'rgba(0,0,0,0.5)',
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
		alignSelf: 'center',
	},

	right: {
		flex: 0.5
	},

	containerflex:{
    width:Metrics.WIDTH,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },

	slidesec:{
		height: (Metrics.HEIGHT) * 0.90,
		width: Metrics.WIDTH,
		alignSelf: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		overflow: 'hidden',
	},

	slide: {
		height: (Metrics.HEIGHT*0.6),
		width: (Metrics.WIDTH*0.85),
		backgroundColor: 'gray',
		alignItems: 'center',
	  alignSelf: 'center',
		justifyContent: 'center',
		elevation: 5, // android shadow
		shadowColor: Colors.black,
		shadowOpacity: 0.5,
		shadowOffset: {
		height: (Metrics.HEIGHT * 0.01),
		width: 0,
		},
		overflow: 'hidden',
	},

	sliderImage: {
		resizeMode: 'stretch',
		height: (Metrics.HEIGHT*0.6),
		width: (Metrics.WIDTH*0.85),
	},

	dot: {
		backgroundColor:'#6f7387',
		marginTop: (Metrics.HEIGHT * 0.018),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

	activeDot:{
		backgroundColor:Colors.snow,
		marginTop: (Metrics.HEIGHT * 0.018),
		width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
	},

});

export default styles;
