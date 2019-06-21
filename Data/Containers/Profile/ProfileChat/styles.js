
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
		backgroundColor: Colors.transparent
	},

	menuIconWhite: {
		justifyContent: 'center',
		alignItems: 'flex-start'
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
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},

	right: {
		flex: 0.5
	},

container: {
	height: (Metrics.HEIGHT) * 0.38,
},

settingIcon: {
	height:(Metrics.HEIGHT*0.028),
	width:(Metrics.HEIGHT*0.028),
	resizeMode: 'contain'
},

headerImageBG: {
	height:(Metrics.HEIGHT*0.265),
	width:(Metrics.WIDTH),
	backgroundColor: 'gray'
},

profileContent: {
	width:(Metrics.WIDTH),
	height:(Metrics.HEIGHT * 0.13),
	paddingHorizontal: (Metrics.WIDTH * 0.06),
	marginTop: (Metrics.HEIGHT * 0.19),
	flexDirection: 'row',
	alignSelf: 'flex-start',
	justifyContent: 'space-between',
	position: 'absolute',
},

profileImage: {
	width:(Metrics.HEIGHT * 0.13),
	height:(Metrics.HEIGHT * 0.13),
	borderWidth: 2.5,
	borderColor: Colors.snow,
	backgroundColor: 'gray',
	resizeMode: 'cover',
	alignSelf: 'center'
},

profileDetailMain: {
	width:(Metrics.WIDTH),
	borderTopWidth: 0.5,
	borderBottomWidth: 0.5,
	borderColor: '#d7d7d7',
	alignItems: 'center',
	justifyContent: 'center'
},

name: {
	color: Colors.snow,
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	fontSize: Fonts.moderateScale(18)
},

post: {
	color: '#abaab2',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

separatorStyle: {
	height: 0.5,
	marginVertical: (Metrics.HEIGHT * 0.015),
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
	width: 0.5,
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

normalButton: {
	height:(Metrics.HEIGHT * 0.04),
	width:(Metrics.HEIGHT * 0.04),
	borderRadius: 3,
	borderWidth: 1,
	borderColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center'
},

activeButton: {
	height:(Metrics.HEIGHT * 0.04),
	width:(Metrics.HEIGHT * 0.04),
	borderRadius: 3,
	backgroundColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center'
},

aboutProfile: {
	marginTop: (Metrics.HEIGHT * 0.065),
	paddingHorizontal: (Metrics.WIDTH * 0.06),
	paddingVertical: (Metrics.WIDTH * 0.05),
	justifyContent: 'space-around',
	backgroundColor: Colors.transparent
},

socialButton: {
	height:(Metrics.HEIGHT * 0.02),
	width:(Metrics.HEIGHT * 0.02),
	resizeMode: 'contain'
},

mailContainer: {
	flexDirection: 'row',
	paddingTop:(Metrics.HEIGHT * 0.01)
},

aboutText: {
	color:'#959595',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	width:(Metrics.WIDTH * 0.5),
	marginLeft:(Metrics.WIDTH * 0.03),
},

profileInfo: {
	marginLeft:(Metrics.HEIGHT * 0.025),
	backgroundColor: Colors.transparent
},

socialIcons: {
	width: (Metrics.WIDTH * 0.165),
	justifyContent: 'space-between',
	alignItems: 'flex-end',
	flexDirection: 'row',
},

iconSize: {
	height:(Metrics.HEIGHT * 0.02),
	width:(Metrics.HEIGHT * 0.02),
	resizeMode: 'contain'
},

status: {
	color:'#959595',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

tabBarView:{
	backgroundColor: "transparent",
	paddingVertical:(Metrics.HEIGHT*0.012)
},


});

export default styles;
