
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	main:{
		backgroundColor: '#2d324f'
	},

  backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'center',
    color: Colors.snow,
    fontSize: Fonts.moderateScale(25)
  },

	logosec:{
		height: (Metrics.HEIGHT*0.095),
		marginTop: (Platform.OS === 'ios')? 0 : (Metrics.HEIGHT*0.035),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},

	slidesec:{
		height: (Metrics.HEIGHT*0.905),
		position: 'relative',
		backgroundColor: Colors.snow,
	},

	header: {
		backgroundColor: '#2d324f',
		height: (Metrics.HEIGHT) * 0.1,
		width: Metrics.WIDTH,
		flexDirection: 'row',
		borderBottomColor: '#2d324f',
		...Platform.select({
			ios: {
				marginTop:(Metrics.HEIGHT) * 0.007,
				paddingTop: 0,
			},
			android: {}
		}),
	},

	left: {
	  flex: 1,
	  paddingTop: (Platform.OS === 'ios')? 15 : 0,
	},

	body: {
	  flex: 2,
	  alignItems: 'center',

	},

	right: {
	  flex: 1,
	  paddingTop: (Platform.OS === 'ios')? 15 : 0,
	},

	headerTitle: {
	  color: Colors.snow,
	  fontFamily: Fonts.type.sfuiDisplayBold,
	  paddingTop: (Platform.OS === 'ios')? 15 : 0,
	  fontSize : Fonts.moderateScale(17),
	  letterSpacing: 0.7
	},

	postImageContent:{
		flexDirection: 'row',
		paddingVertical: (Metrics.HEIGHT*0.01),
	},

	name: {
		color: '#363636',
		fontSize: Fonts.moderateScale(15),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		marginRight: (Metrics.WIDTH) * 0.015
	},

	notification: {
		color: '#b7b7b7',
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize: Fonts.moderateScale(12),
	},

	comments: {
		color: '#6f6f6f',
		fontSize: Fonts.moderateScale(15),
		fontFamily: Fonts.type.sfuiDisplayRegular,
		width:(Metrics.WIDTH * 0.75),
		marginVertical: (Metrics.HEIGHT*0.005),
		textAlign: 'left'
	},

	postedImage: {
		height:(Metrics.HEIGHT*0.09),
		width:(Metrics.HEIGHT*0.09)
	},

	slide: {
		marginVertical: (Metrics.HEIGHT * 0.02),
		flexDirection: 'row',
	},

	imageStyle: {
		width: (Metrics.HEIGHT * 0.06),
		height: (Metrics.HEIGHT * 0.06),
		borderRadius: (Metrics.HEIGHT * 0.03),
		marginRight: (Metrics.WIDTH * 0.04),
		resizeMode: 'cover',
	},

	notificationContent: {
		marginTop: (Metrics.WIDTH * 0.005),
		marginRight: (Metrics.WIDTH * 0.02),
		width: (Metrics.WIDTH * 0.8),
	},

	titleBar: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	},

	bottombar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: (Platform.OS === 'ios')? (Metrics.HEIGHT * 0.005) : 0,
	},

	time: {
		color: '#b7b7b7',
		fontFamily: Fonts.type.sfuiDisplayRegular,
		fontSize: Fonts.moderateScale(12),
		marginLeft: (Metrics.WIDTH) * 0.02
	},

	separatoeStyle: {
		height: (Metrics.HEIGHT) * 0.001,
		backgroundColor: '#b7b7b7'
	},

	postImageView:{
		height:(Metrics.HEIGHT*0.2),
		backgroundColor: '#ff0000',
		padding:(Metrics.WIDTH*0.02)
	},

	postMainRow:{
		backgroundColor: Colors.snow,
		paddingLeft: (Metrics.WIDTH * 0.04)
	},

	postImageView:{
		paddingRight:(Metrics.WIDTH*0.05)
	},

});

export default styles;
