
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	header: {
		backgroundColor: Colors.transparent,
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
	backArrow: {
		width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: Colors.transparent
	},

	textTitle: {
		color: Colors.snow,
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplayBold,
	},

	right: {
		flex: 0.5
	},

headerImageBG: {
	height:(Metrics.HEIGHT * 0.385),
	width:(Metrics.WIDTH),
	backgroundColor: 'gray'
},

profileContent: {
	width:(Metrics.HEIGHT * 0.14),
	height:(Metrics.HEIGHT * 0.14),
	borderRadius:(Metrics.HEIGHT*0.07),
	marginTop: (Metrics.HEIGHT * 0.315),
	borderWidth: 2.5,
	borderColor: Colors.snow,
	backgroundColor: '#0691ce',
	alignSelf: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	zIndex:10,
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
	...Platform.select({
		ios: {
		backgroundColor: 'gray'
		},
	}),
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

name: {
	color: '#363636',
	fontSize: Fonts.moderateScale(15),
	fontFamily: Fonts.type.sfuiDisplayMedium,
	marginRight: (Metrics.WIDTH*0.015)
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

bottombar: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-start',
	marginTop: (Platform.OS === 'ios')? (Metrics.HEIGHT * 0.005) : 0,
},

timerImage: {
	width: (Metrics.WIDTH * 0.03),
	height: (Metrics.WIDTH * 0.03),
	marginRight: (Metrics.WIDTH * 0.02),
	resizeMode: 'contain',
},


time: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	marginLeft: (Metrics.WIDTH) * 0.005
},

separatoeStyle: {
	height: (Metrics.HEIGHT) * 0.001,
	backgroundColor: '#d7d7d7'
},

main:{
	backgroundColor:'#e6e6e6'
},

level:{
	color:Colors.snow,
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(16),
	backgroundColor: Colors.transparent,
	...Platform.select({
			 ios: {
			 		marginTop:(Metrics.HEIGHT * 0.015),
			 },
			 android:{
				 marginTop:(Metrics.HEIGHT * 0.035),
			 }
 	 }),
},

levelNo:{
	color:Colors.snow,
	fontFamily: Fonts.type.sfuiDisplayBold,
	fontSize: (Platform.OS == 'ios')? Fonts.moderateScale(46) : Fonts.moderateScale(40),
	backgroundColor: Colors.transparent,
	...Platform.select({
			 ios: {

			 },
			 android:{
				 marginTop: -(Metrics.HEIGHT * 0.015),
			 }
 	 }),
},

levelDescView:{
	paddingTop: (Metrics.HEIGHT * 0.092),
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: Colors.snow
},

descText:{
	marginHorizontal: (Metrics.WIDTH * 0.1),
	marginBottom: (Metrics.HEIGHT * 0.04),
	textAlign: 'center',
	fontSize: Fonts.moderateScale(12),
	color:'#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular
},

friendView:{
	width:(Metrics.WIDTH),
	paddingVertical: (Metrics.WIDTH * 0.03),
	paddingLeft: (Metrics.WIDTH * 0.03),
	borderTopWidth: 1,
	borderColor: '#d7d7d7'
},

friendText:{
	color:'#363636',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

scrollView:{
	flexDirection: 'row',
	marginTop:(Metrics.HEIGHT * 0.035)
},

friendListView:{
	height:(Metrics.HEIGHT * 0.075),
	width:(Metrics.HEIGHT * 0.085),
	flexDirection: 'row',
	marginRight:(Metrics.WIDTH * 0.035)
},

imgView:{
	height:(Metrics.HEIGHT * 0.075),
	width:(Metrics.HEIGHT * 0.075),
	borderRadius:(Metrics.HEIGHT * 0.0375),
 	...Platform.select({
	 ios: {
	 		backgroundColor: 'gray'
	 },
 }),
},

notiView:{
	height:(Metrics.HEIGHT * 0.035),
	width:(Metrics.HEIGHT * 0.035),
	borderRadius:(Metrics.HEIGHT * 0.0175),
	borderWidth: 1.5,
	borderColor: Colors.snow,
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center',
	right:0,
},

notiText:{
	color:Colors.snow,
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent
},

listMainView:{
	marginTop:(Metrics.HEIGHT * 0.02),
	backgroundColor: Colors.snow
},

rowBg:{
		backgroundColor: Colors.snow,
		paddingLeft: (Metrics.WIDTH * 0.04)
},

});

export default styles;
