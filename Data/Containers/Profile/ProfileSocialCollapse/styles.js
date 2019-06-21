
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

slidesec:{
	position: 'relative',
	marginTop: (Metrics.HEIGHT*0.025),
	marginHorizontal: (Metrics.WIDTH * 0.035),
},

profileSec: {
	backgroundColor: Colors.snow,
	borderRadius: 4
},

profileContainer: {
	height:(Metrics.HEIGHT * 0.47)
},

coverImage: {
	width:(Metrics.WIDTH * 0.93),
	height:(Metrics.HEIGHT * 0.47),
	borderTopLeftRadius:4,
	borderTopRightRadius:4,
	resizeMode: 'cover',
},

profileInfo: {
	width:(Metrics.WIDTH * 0.93),
	bottom:0,
	paddingLeft:(Metrics.HEIGHT * 0.03),
	paddingBottom:(Metrics.HEIGHT * 0.025),
	paddingTop:(Metrics.HEIGHT * 0.1),
	position: 'absolute',
},

profileTitle: {
	color: Colors.snow,
	fontSize: Fonts.moderateScale(22),
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	backgroundColor: Colors.transparent,
	textAlign: 'left'
},

profilePost: {
	color:'#fff8',
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent,
	textAlign: 'left'
},

aboutProfile: {
	paddingHorizontal: (Metrics.WIDTH * 0.05),
	paddingVertical: (Metrics.WIDTH * 0.036),
	justifyContent: 'space-around',
	borderBottomWidth: 1,
	borderColor: '#ebebeb',
	backgroundColor: Colors.snow
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

followContainer: {
	height:(Metrics.HEIGHT * 0.085),
	flexDirection:'row',
	alignItems: 'center',
	justifyContent: 'center',
},

followSec: {
	flex:1,
	alignItems: 'center',
	justifyContent: 'center'
},

followCount: {
	color:'#363636',
	fontSize: Fonts.moderateScale(15),
	fontFamily: Fonts.type.sfuiDisplayMedium,
	backgroundColor: Colors.transparent
},

followText: {
	color:'#959595',
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent
},

socialButton: {
	height:(Metrics.HEIGHT * 0.02),
	width:(Metrics.HEIGHT * 0.02),
	resizeMode: 'contain'
},

flatButton: {
	height:(Metrics.HEIGHT * 0.09),
	width:(Metrics.HEIGHT * 0.09),
	borderRadius:(Metrics.HEIGHT * 0.045),
	top:(Metrics.HEIGHT * 0.425),
	right:(Metrics.WIDTH * 0.07),
	position:'absolute',
	backgroundColor:'#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: Colors.black,
	elevation: 8,
	shadowOpacity: 0.35,
	shadowRadius:(Metrics.HEIGHT * 0.003),
	shadowOffset: {
		height:(Metrics.HEIGHT * 0.004),
		width:(Metrics.HEIGHT * 0.002)
	}
},

flatIcon: {
	height:(Metrics.HEIGHT * 0.04),
	width:(Metrics.HEIGHT * 0.04),
	resizeMode: 'contain'
},

postSec: {
	backgroundColor: Colors.snow,
	borderRadius: 4,
	marginBottom: (Metrics.HEIGHT*0.025),
	marginTop:(Metrics.HEIGHT * 0.02)
},

postHeaderSec: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding:(Metrics.HEIGHT * 0.02),
	borderBottomWidth: 1,
	borderColor:'#f2f2f2'
},

postProfileDetail: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center'
},

postProfileImage: {
	height:(Metrics.HEIGHT * 0.06),
	width:(Metrics.HEIGHT * 0.06),
	borderRadius:(Metrics.HEIGHT * 0.03),
	resizeMode:'cover',
	...Platform.select({
		ios: {
			backgroundColor: 'gray'
		},
		android: {
			backgroundColor: Colors.transparent
		}
	}),
},

postProfileMain: {
	marginLeft:(Metrics.WIDTH * 0.035),
},

postName: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize: Fonts.moderateScale(14),
	color:'#6f6f6f',
	textAlign: 'left'
},

postedTime: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	color:'#b7b7b7',
	textAlign: 'left',
	marginTop:(Platform.OS == 'ios') ? (Metrics.HEIGHT * 0.005) : 0,
},

moreButton: {
	height:(Metrics.HEIGHT * 0.03),
},

moreIcon: {
	height:(Metrics.HEIGHT * 0.04),
	color:'#d4d4d4',
	fontSize: Fonts.moderateScale(28),
	right:0,
	bottom:(Metrics.HEIGHT * 0.01)
},

postedComment: {
	padding:(Metrics.HEIGHT * 0.02),
	fontSize:Fonts.moderateScale(14),
	color:'#6f6f6f',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent,
	textAlign: 'left'
},

main:{
	backgroundColor: '#2d324f'
},

});

export default styles;
