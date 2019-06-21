import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  imageContainer: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
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
      width: (Metrics.WIDTH)* 0.90,
      alignSelf: 'center',
      backgroundColor: Colors.snow,
      bottom: 0,
      position: 'absolute',
      marginBottom: (Metrics.HEIGHT * 0.075)
  },

  headertext: {
  	fontFamily:Fonts.type.sfuiDisplayRegular,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(25),
  	width :(Metrics.WIDTH) * .80,
  	color:'#363636',
    marginTop: (Metrics.HEIGHT * 0.06)
  },

  desctext: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	textAlign:'center',
  	alignSelf:'center',
  	fontSize:Fonts.moderateScale(12),
  	width :(Metrics.WIDTH) * .80,
  	color:'#6f6f6f',
  	marginTop: (Metrics.HEIGHT * 0.03),
  },

  imageArrow: {
    width: (Metrics.WIDTH * 0.05),
    height: (Metrics.WIDTH * 0.04),
    marginTop: (Metrics.HEIGHT * 0.1),
    marginBottom: (Metrics.HEIGHT * 0.03)
  },

  dot:{
  	backgroundColor:'#51504E',
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
		marginRight: (Metrics.WIDTH * 0.005)
  },

  imgArrowBg: {
    alignSelf: 'flex-end',
    marginRight: (Metrics.WIDTH * 0.05),
    backgroundColor: Colors.transparent,
    width: (Metrics.WIDTH * 0.07),
    height: (Metrics.WIDTH * 0.06),
    marginTop: (Metrics.HEIGHT * 0.1),
    marginBottom: (Metrics.HEIGHT * 0.03)
  }
});

export default styles;
