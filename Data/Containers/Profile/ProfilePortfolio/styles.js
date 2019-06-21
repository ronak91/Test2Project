
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
	backArrow: {
		width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
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
		color: Colors.snow,
		fontSize: Fonts.moderateScale(17),
		marginTop: (Metrics.HEIGHT * 0.001),
		alignSelf: 'center',
		fontFamily: Fonts.type.sfuiDisplayBold,
	},

	right: {
		flex: 0.5
	},

container: {
	flex: 1,
},

settingIcon: {
	height:(Metrics.HEIGHT*0.028),
	width:(Metrics.HEIGHT*0.028),
	resizeMode: 'contain'
},

headerImageBG: {
	height:(Metrics.HEIGHT*0.255),
	width:(Metrics.WIDTH),
	backgroundColor: 'gray'
},

chooseImage: {
	width:(Metrics.WIDTH*0.125),
	height:(Metrics.HEIGHT*0.06),
	backgroundColor: Colors.transparent,
	bottom:0,
	position: 'absolute',
	alignSelf: 'flex-end',
	alignItems: 'center',
	justifyContent: 'center'
},

chooseImageIcon: {
	height:(Metrics.HEIGHT*0.025),
	width:(Metrics.HEIGHT*0.025),
	resizeMode: 'contain'
},

changeImage: {
	width:(Metrics.HEIGHT*0.045),
	height:(Metrics.HEIGHT*0.045),
	borderRadius:(Metrics.HEIGHT*0.0225),
	borderWidth: 1.5,
	borderColor: Colors.snow,
	backgroundColor: '#0691ce',
	right:(Metrics.WIDTH*0.025),
	bottom:(Metrics.HEIGHT*0.012),
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center'
},

changeImageIcon: {
	height:(Metrics.HEIGHT*0.02),
	width:(Metrics.HEIGHT*0.02),
	resizeMode: 'contain'
},

profileContent: {
	width:(Metrics.WIDTH * 0.35),
	height:(Metrics.HEIGHT * 0.17),
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'center',
	marginTop: (Metrics.HEIGHT * 0.17),
	position: 'absolute'
},

profileImage: {
	width:(Metrics.HEIGHT * 0.165),
	height:(Metrics.HEIGHT * 0.165),
	borderRadius:(Metrics.HEIGHT*0.0825),
	borderWidth: 2.5,
	borderColor: Colors.snow,
	resizeMode: 'cover',
	alignSelf: 'center'
},

profileDetailMain: {
	width:(Metrics.WIDTH),
	marginTop:(Metrics.HEIGHT * 0.1),
	alignItems: 'center',
	justifyContent: 'center'
},

name: {
	color:'#6f6f6f',
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	fontSize: Fonts.moderateScale(18)
},

post: {
	color:'#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	marginTop:(Platform.OS == 'ios')?(Metrics.HEIGHT * 0.005) :0,
},

socialButtons: {
	flexDirection: 'row',
	marginVertical:(Metrics.HEIGHT * 0.042),
},

activeButton: {
	height:(Metrics.HEIGHT * 0.042),
	width:(Metrics.WIDTH * 0.275),
	borderRadius:(Metrics.HEIGHT * 0.02),
	marginHorizontal:(Metrics.WIDTH * 0.015),
	backgroundColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},

normalButton: {
	height:(Metrics.HEIGHT * 0.042),
	width:(Metrics.WIDTH * 0.275),
	borderRadius:(Metrics.HEIGHT * 0.02),
	marginHorizontal:(Metrics.WIDTH * 0.015),
	borderWidth: 1,
	borderColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},

activeButtonTxt: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	color: Colors.snow,
},

normalButtonTxt: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	color: '#0691ce',
},

separatorStyle: {
	height: (Metrics.HEIGHT) * 0.001,
	width:(Metrics.WIDTH),
	backgroundColor: '#d7d7d7'
},

followContainer: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	paddingVertical: (Metrics.HEIGHT * 0.015)
},

followSec: {
	flex:1,
	alignItems: 'center',
	justifyContent: 'center'
},

followCount: {
	fontFamily: Fonts.type.sfuiDisplayBold,
	fontSize: Fonts.moderateScale(16),
	color: '#363636'
},

followText: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	color: '#959595'
},

verticalSeparator: {
	height: (Metrics.HEIGHT*0.025),
	width: (Metrics.WIDTH) * 0.003,
	backgroundColor: '#d7d7d7'
},

activeLabel: {
	color: '#0691ce',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(15)
},

normalLabel: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(15)
},

tabView:{
	backgroundColor: "transparent",
	paddingVertical:(Metrics.HEIGHT) * 0.012
},




listContent: {
	marginHorizontal:(Metrics.WIDTH * 0.015),
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems:'flex-start',
},

rowMain:{
	marginHorizontal:(Metrics.WIDTH * 0.015),
},

cardImage: {
	height:(Metrics.HEIGHT*0.27),
	width:(Metrics.HEIGHT*0.21),
	borderRadius: 3
},

imageText: {
	margin:(Metrics.HEIGHT*0.012),
	color: Colors.snow,
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	bottom:0,
	position: 'absolute',
},


});

export default styles;
