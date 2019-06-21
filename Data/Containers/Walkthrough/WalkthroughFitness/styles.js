
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageContainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.91,
  },

  slidesec: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.91,
    backgroundColor: 'rgba(0,0,0,0.6)',
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

  nextButton: {
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.09,
    backgroundColor: "#4cd964",
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextText: {
    textAlign: 'center',
    color: Colors.snow,
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  headertext: {
  	fontFamily: Fonts.type.sfuiDisplayBold,
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(24),
  	width :(Metrics.WIDTH) * .85,
  	color:Colors.snow,
    marginTop: (Metrics.HEIGHT * 0.045),
    textAlign: 'left'
  },

  desctext: {
  	fontFamily: Fonts.type.sfuiDisplayRegular,
  	alignSelf:'center',
  	fontSize: Fonts.moderateScale(14),
  	width :(Metrics.WIDTH) * .85,
  	color:Colors.snow,
    marginTop: (Metrics.HEIGHT * 0.024),
    textAlign: 'left'
  },

  dot:{
  	backgroundColor:'#999999',
    width:  (Metrics.WIDTH * 0.018),
		height: (Metrics.WIDTH * 0.018),
		borderRadius: (Metrics.WIDTH * 0.009),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
    marginBottom: (Metrics.HEIGHT * 0.22)
  },

  activeDot:{
  	backgroundColor:'#4cd964',
    width:  (Metrics.WIDTH * 0.026),
		height: (Metrics.WIDTH * 0.026),
		borderRadius: (Metrics.WIDTH * 0.013),
		marginLeft: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.005),
    marginBottom: (Metrics.HEIGHT * 0.22)
  },

  slider: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.28,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent'
  },

  paginationStyle: {
    left : (Metrics.WIDTH * 0.068),
    right: null
  }

});

export default styles;
