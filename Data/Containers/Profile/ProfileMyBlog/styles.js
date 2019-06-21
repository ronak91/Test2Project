
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
	backArrow: {
		width: 30,
	 justifyContent: 'center',
	 alignItems: 'flex-start'
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

logosec:{
	height: (Metrics.HEIGHT*0.095),
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'row'
},

slidesec:{
	position: 'relative',
	backgroundColor: '#f3f3f3',
	marginVertical: (Metrics.HEIGHT*0.025),
	marginHorizontal: (Metrics.WIDTH * 0.035),
	borderRadius: 3
},

profileContainer: {
	height:(Metrics.HEIGHT * 0.47)
},

coverImage: {
	height:(Metrics.HEIGHT * 0.47),
	borderTopLeftRadius:3,
	borderTopRightRadius:3,
	backgroundColor: 'gray'
},

profileInfo: {
	width:(Metrics.WIDTH * 0.93),
	bottom:(Metrics.HEIGHT * 0.025),
	position: 'absolute',
	flexDirection: 'row',
	alignItems: 'center'
},

profile: {
	height:(Metrics.HEIGHT * 0.075),
	width:(Metrics.HEIGHT * 0.075),
	marginHorizontal:(Metrics.HEIGHT * 0.03),
	borderRadius:(Metrics.HEIGHT * 0.040),
	borderWidth: 2,
	borderColor: Colors.snow
},

profileTitle: {
	color: Colors.snow,
	fontSize: Fonts.moderateScale(22),
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	backgroundColor: Colors.transparent
},

profilePost: {
	color: '#aba19b',
	fontSize: Fonts.moderateScale(12),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent,
	textAlign: 'left'
},

followContainer: {
	height:(Metrics.HEIGHT * 0.085),
	flexDirection:'row',
	alignItems: 'center',
	justifyContent: 'center',
	borderBottomWidth: 1,
	borderColor: '#ebebeb',
	backgroundColor: Colors.snow
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

aboutSec: {
	height:(Metrics.HEIGHT * 0.155),
	paddingHorizontal:(Metrics.WIDTH * 0.03),
	paddingTop:(Metrics.HEIGHT * 0.02),
	borderBottomWidth: 0.5,
	borderColor: '#ebebeb',
	backgroundColor: Colors.snow
},

status: {
	paddingBottom:(Metrics.HEIGHT * 0.03),
	color:'#6f6f6f',
	fontSize: Fonts.moderateScale(15),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor: Colors.transparent,
	textAlign: 'left'
},

friendsSec: {
	height:(Metrics.HEIGHT * 0.075),
	paddingHorizontal:(Metrics.WIDTH * 0.03),
	flexDirection: 'row',
	borderBottomWidth: 1,
	borderColor: '#ebebeb',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: Colors.snow
},

friendTitle: {
	color:'#959595',
	fontSize: Fonts.moderateScale(15),
	fontFamily:'SFUIDisplay-Regular'
},

friends: {
	flexDirection: 'row'
},

imageContainer:{
	height:(Metrics.HEIGHT * 0.045),
	width:(Metrics.HEIGHT * 0.045),
	borderRadius:(Metrics.HEIGHT * 0.0225),
	marginLeft:(Metrics.WIDTH * 0.01),
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: Colors.black,
	elevation: 5,
	shadowOpacity:0.3,
	shadowRadius:(Metrics.WIDTH * 0.01),
	shadowOffset: {
		height: 0,
		width: -(Metrics.WIDTH * 0.005),
	}
},

imageShadow: {
	height:(Metrics.HEIGHT * 0.045),
	width:(Metrics.HEIGHT * 0.045),
	borderRadius:(Metrics.HEIGHT * 0.0225),
	borderWidth: 1.5,
	borderColor: Colors.snow,
	backgroundColor: Colors.transparent
},

buttonSec: {
	height:(Metrics.HEIGHT * 0.07),
	flexDirection: 'row'
},

touchableBtn: {
	flex:1,
	alignItems: 'center',
	justifyContent: 'center'
},

socialButton: {
	height:(Metrics.HEIGHT * 0.025),
	width:(Metrics.HEIGHT * 0.025),
	resizeMode: 'contain'
},

imageBg:{
	height:(Metrics.HEIGHT),
	width:(Metrics.WIDTH)
},

main:{
	backgroundColor: '#2d324f'
},

});

export default styles;
