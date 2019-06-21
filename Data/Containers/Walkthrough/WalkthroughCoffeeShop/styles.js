
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#2A344E"
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

  slider: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.9,
    backgroundColor: Colors.transparent
  },

  imageLayout: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    bottom: 0,
    position: 'absolute'
  },

  sliderImage: {
    width: (Metrics.WIDTH),
    height: (Metrics.HEIGHT) * 0.68,
    resizeMode: 'contain'

  },

  headertext: {
  	fontFamily: Fonts.type.sfuiDisplaySemibold,
  	textAlign:'center',
  	fontSize: Fonts.moderateScale(21),
  	color:Colors.snow,
  },

  desctext: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(11),
  	width :(Metrics.WIDTH) * .75,
  	color:'#fff8',
  	marginTop: (Metrics.HEIGHT * 0.025)
  },

  dot:{
  	backgroundColor:'#6c7084',
    width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
    marginBottom: Metrics.HEIGHT * 0.65,
  },

  activeDot:{
  	backgroundColor:Colors.snow,
    width:  (Metrics.WIDTH * 0.02),
		height: (Metrics.WIDTH * 0.02),
		borderRadius: (Metrics.WIDTH * 0.01),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
    marginBottom: Metrics.HEIGHT * 0.65,
  },

});

export default styles;
