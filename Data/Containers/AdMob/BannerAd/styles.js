import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
		backgroundColor: "#2d324f",
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.03),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5,
		backgroundColor: Colors.transparent,
	},

	menuIconWhite: {
		justifyContent: 'center',
		alignItems: 'center'
	},

	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	textTitle: {
		color: 'white',
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},

	right: {
		flex: 0.5
	},

  container: {
    backgroundColor: Colors.snow
  },

  mainView: {
    alignSelf: 'center',
    alignItems: 'center',
  },

  adView: {
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

});

export default styles;
