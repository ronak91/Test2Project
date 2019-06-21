
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

slidesec:{
	width: (Metrics.WIDTH),
	bottom:0,
	justifyContent: 'flex-end',
	position: 'absolute',
},

imgContainer: {
	height:(Metrics.HEIGHT),
	width:(Metrics.WIDTH),
	backgroundColor: 'gray'
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
  flex: 0.5,
},
backArrow: {
	width: 30,
	justifyContent: 'center',
	alignItems: 'flex-start'
},
backArrow2:{
	color: Colors.snow
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

activeButton: {
	height:(Metrics.HEIGHT * 0.06),
	width:(Metrics.HEIGHT * 0.06),
	borderRadius:(Metrics.HEIGHT * 0.03),
	backgroundColor: '#0691ce',
	borderColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center'
},

normalButton: {
	height:(Metrics.HEIGHT * 0.06),
	width:(Metrics.HEIGHT * 0.06),
	borderRadius:(Metrics.HEIGHT * 0.03),
	borderWidth: 1.5,
	borderColor: Colors.snow,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'transparent'
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

nameBg: {
	width:(Metrics.WIDTH),
	paddingHorizontal: (Metrics.HEIGHT * 0.03),
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center'
},

nameTxt: {
	color:Colors.snow,
	fontSize: Fonts.moderateScale(28),
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	backgroundColor:Colors.transparent
},

addressBg:{
	flexDirection: 'row',
	paddingHorizontal: (Metrics.HEIGHT * 0.03),
	justifyContent: 'flex-start',
	alignItems: 'center',
},

addressTxt: {
	color:Colors.snow,
	fontSize: Fonts.moderateScale(16),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor:Colors.transparent
},

descrtiptionBg: {
	height: (Metrics.HEIGHT * 0.25),
	paddingVertical: (Metrics.HEIGHT * 0.03)
},

descriptionTxt: {
	color:Colors.snow,
	fontSize: Fonts.moderateScale(16),
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor:Colors.transparent,
	textAlign: 'left'
},

shadowBg: {
	paddingHorizontal: (Metrics.HEIGHT * 0.03)
},

profileImgScrollBg: {
	flexDirection: 'row'
},

profileImgBg: {
	paddingBottom: (Metrics.HEIGHT * 0.03),
	marginHorizontal:(Metrics.WIDTH * 0.03),
	justifyContent: 'center',
	alignItems: 'center'
},

mappinBg: {
	marginRight:(Metrics.HEIGHT * 0.01),
	backgroundColor: Colors.transparent
}

});

export default styles;
