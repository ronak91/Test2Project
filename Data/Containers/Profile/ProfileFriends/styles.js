
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

slidesec:{
	height: (Metrics.HEIGHT*0.905),
	paddingHorizontal: (Metrics.WIDTH * 0.035),
	paddingTop: (Metrics.HEIGHT*0.02),
	position: 'relative',
},

header: {
	backgroundColor: "#2d324f",
	height: Metrics.HEIGHT * 0.1,
	borderBottomWidth: 0,
	paddingTop: (Metrics.HEIGHT * 0.05),
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
},

body: {
  flex: 3,
  alignItems: 'center',
},

right: {
  flex: 0.5,
},

headerTitle: {
  color: Colors.snow,
  fontFamily: Fonts.type.sfuiDisplayBold,
  fontSize : Fonts.moderateScale(17),
},

followContainer: {
	height:(Metrics.HEIGHT * 0.085),
	flexDirection:'row',
	alignItems: 'center',
	justifyContent: 'center',
	borderBottomWidth: 1,
	borderTopWidth: 1,
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
	fontFamily:Fonts.type.sfuiDisplayMedium,
	backgroundColor: Colors.transparent
},

followText: {
	color:'#959595',
	fontSize: Fonts.moderateScale(12),
	fontFamily:Fonts.type.sfuiDisplayMedium,
	backgroundColor: Colors.transparent
},

imageContainerSize: {
	height:(Metrics.HEIGHT * 0.17),
},

scrollImage: {
	flexDirection: 'row'
},

imageContainer: {
	height:(Metrics.HEIGHT * 0.15),
	marginHorizontal:(Metrics.WIDTH * 0.035),
	justifyContent: 'center',
	alignItems: 'center',
},

activeImage: {
	height:(Metrics.HEIGHT * 0.08),
	width:(Metrics.HEIGHT * 0.08),
	borderRadius:(Metrics.HEIGHT * 0.04),
	borderWidth:1.5,
	borderColor:Colors.snow,
	...Platform.select({
		ios: {
			backgroundColor:'gray'
		},
	}),
},

normalImage: {
	height:(Metrics.HEIGHT * 0.06),
	width:(Metrics.HEIGHT * 0.06),
	borderRadius:(Metrics.HEIGHT * 0.03),
	...Platform.select({
		ios: {
			backgroundColor:'gray'
		},
	}),
	opacity: 0.3,
},

indicatorStyle: {
	width: (Metrics.WIDTH * 0.05),
	height: (Metrics.WIDTH * 0.05),
	alignItems: 'center',
	justifyContent: 'center'
},

slideMain: {
	backgroundColor: 'white',
	borderRadius: 6,
},

name: {
	paddingTop:(Metrics.HEIGHT*0.02),
	paddingBottom:(Metrics.HEIGHT*0.01),
	alignSelf: 'center',
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(18),
	color:'#363636'
},

post: {
	alignSelf: 'center',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize:Fonts.moderateScale(12),
	color:'#b7b7b7'
},

followActive: {
	height:(Metrics.HEIGHT*0.053),
	width:(Metrics.WIDTH*0.3),
	marginVertical:(Metrics.HEIGHT*0.03),
	borderRadius:(Metrics.HEIGHT*0.05),
	backgroundColor:'#0691ce',
	alignSelf: 'center',
	alignItems: 'center',
	justifyContent: 'center'
},

followNormal: {
	height:(Metrics.HEIGHT*0.053),
	width:(Metrics.WIDTH*0.3),
	marginVertical:(Metrics.HEIGHT*0.03),
	borderRadius:(Metrics.HEIGHT*0.05),
	borderColor:'#0691ce',
	borderWidth: 1.5,
	alignSelf: 'center',
	alignItems: 'center',
	justifyContent: 'center'
},

followTextActive: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(18),
	color:Colors.snow
},

followTextNormal: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(18),
	color:'#0691ce'
},

status: {
	padding:(Metrics.HEIGHT*0.012),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize:Fonts.moderateScale(15),
	color:'#6f6f6f',
	textAlign: 'left'
},

photoContainer: {
	marginHorizontal:(Metrics.HEIGHT*0.012),
	marginTop:(Metrics.HEIGHT*0.012),
	marginBottom:(Metrics.HEIGHT*0.02),
	flexDirection: 'row',
	justifyContent: 'space-between'
},

imageLarge: {
	height:(Metrics.HEIGHT*0.2),
	width:(Metrics.WIDTH*0.51),
	backgroundColor:'gray',
	resizeMode: 'cover'
},

rightImageContainer: {
	justifyContent: 'space-between'
},

imageMedium: {
	height:(Metrics.HEIGHT*0.095),
	width:(Metrics.WIDTH*0.355),
	backgroundColor:'gray',
	resizeMode: 'cover'
},

imageBottomContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between'
},

imageSmall: {
	height:(Metrics.HEIGHT*0.095),
	width:(Metrics.WIDTH*0.168),
	backgroundColor:'gray',
	resizeMode: 'cover'
},

moreImage: {
	height:(Metrics.HEIGHT*0.095),
	width:(Metrics.WIDTH*0.168),
	backgroundColor:'#259ef8',
	alignItems: 'center',
	justifyContent: 'center'
},

noOfImage: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(14),
	color:Colors.snow
},

photoText: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize:Fonts.moderateScale(12),
	color:Colors.snow
},

});

export default styles;
