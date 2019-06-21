
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

logosec:{
	height: (Metrics.HEIGHT*0.095),
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'row'
},
imgs:{
	paddingRight:(Metrics.WIDTH*0.05)
},
backbtn:{
	width:30
},
backArrow: {
	width: 30,
 justifyContent: 'center',
 alignItems: 'flex-start'
},
slidesec:{
	height: (Metrics.HEIGHT*0.905),
	position: 'relative',
	backgroundColor: 'white',
	paddingTop: (Metrics.HEIGHT*0.01)
},
hearticon:{
	marginRight: 3
},

header: {
	backgroundColor: '#2d324f',
	height: (Metrics.HEIGHT*0.095),
	width: Metrics.WIDTH,
	flexDirection: 'row',
	borderBottomColor: '#2d324f',
	...Platform.select({
		ios: {
			paddingTop: 5
		},
		android: {
			paddingTop: 15
		}
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
  color: 'white',
  fontFamily: Fonts.type.SFUIDisplayBold,
  paddingTop: (Platform.OS === 'ios')? 15 : 0,
  fontSize : 17,
  letterSpacing:0.7
},

headerContainer: {
	width:(Metrics.WIDTH),
	padding: (Metrics.HEIGHT * 0.015),
	backgroundColor: 'white',
	elevation: 5,
	shadowColor: 'black',
	shadowRadius: (Metrics.HEIGHT * 0.005),
	shadowOpacity: 0.12,
	shadowOffset: {
		height: (Metrics.HEIGHT * 0.005),
		width: 0,
	},
	zIndex: 10
},

profileContainer: {
	paddingBottom: (Metrics.HEIGHT * 0.03),
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
},

profileBodySec: {
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center'
},

profileImage: {
	height:(Metrics.HEIGHT * 0.08),
	width:(Metrics.HEIGHT * 0.08),
	borderRadius:(Metrics.HEIGHT * 0.04),
},

profileDetail: {
	marginLeft: (Metrics.WIDTH * 0.03)
},

profileName: {
	fontFamily: Fonts.type.SFUIDisplaySemibold,
	fontSize: 17,
	color:'#363636',
},

post: {
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
	color:'#b7b7b7',
	backgroundColor: 'transparent',
	marginTop: (Metrics.HEIGHT * 0.004),
	textAlign: 'left'
},

activeButton: {
	height:(Metrics.HEIGHT * 0.055),
	width:(Metrics.WIDTH * 0.3),
	borderRadius:(Metrics.HEIGHT * 0.0275),
	backgroundColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},

normalButton: {
	height:(Metrics.HEIGHT * 0.055),
	width:(Metrics.WIDTH * 0.3),
	borderRadius:(Metrics.HEIGHT * 0.0275),
	borderWidth: 1.5,
	borderColor: '#0691ce',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden'
},

activeButtonTxt: {
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 17,
	color: 'white',
},

normalButtonTxt: {
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 17,
	color: '#0691ce',
},

listContainer: {
	backgroundColor: 'white',
	paddingLeft: (Metrics.WIDTH * 0.04)
},

postImageContent:{
	flexDirection: 'row',
	paddingTop: (Metrics.HEIGHT*0.015),
	paddingBottom: (Metrics.HEIGHT*0.01),
},

name: {
	color: '#363636',
	fontSize: 15,
	fontFamily: Fonts.type.SFUIDisplayMedium,
	marginRight: (Metrics.WIDTH*0.015)
},

notification: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
},

comments: {
	color: '#6f6f6f',
	fontSize: 15,
	fontFamily: Fonts.type.SFUIDisplayRegular,
	width:(Metrics.WIDTH * 0.75),
	marginVertical: (Metrics.HEIGHT*0.01),
	textAlign: 'left'
},

postedImage: {
	height:(Metrics.HEIGHT*0.09),
	width:(Metrics.HEIGHT*0.09)
},

timerImage: {
	width: (Metrics.WIDTH * 0.03),
	height: (Metrics.WIDTH * 0.03),
	marginRight: (Metrics.WIDTH * 0.02),
	resizeMode: 'contain',
},

slide: {
	marginVertical: (Metrics.HEIGHT * 0.0225),
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
	width: (Metrics.WIDTH * 0.78),
},

titleBar: {
	flexDirection: 'row',
	alignItems: 'flex-end',
	justifyContent: 'space-between'
},

bottombar: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-start',
	marginTop: (Platform.OS === 'ios')? (Metrics.HEIGHT * 0.005) : 0,
},

time: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
},

likeContent: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	marginRight: (Metrics.WIDTH*0.1)
},

iconSize: {
	height: (Metrics.HEIGHT*0.025),
	width: (Metrics.HEIGHT*0.025),
	resizeMode: 'contain',
	marginRight: (Metrics.WIDTH*0.02)
},

textStyle: {
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 15,
	color: '#6f6f6f'
},

separatorStyle: {
	height: 0.5,
	backgroundColor: '#d7d7d7'
},

followContainer: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: (Metrics.HEIGHT * 0.015)
},

followSec: {
	flex:1,
	alignItems: 'center',
	justifyContent: 'center'
},

followCount: {
	fontFamily: Fonts.type.SFUIDisplayBold,
	fontSize: 17,
	color: '#363636'
},

followText: {
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
	color: '#959595'
},

verticalSeparator: {
	height: (Metrics.HEIGHT*0.025),
	width: 0.5,
	backgroundColor: '#d7d7d7'
},

thumbnail: {
	marginVertical: (Metrics.HEIGHT*0.01),
	height:(Metrics.HEIGHT*0.2),
	width:(Metrics.WIDTH * 0.78),
	resizeMode:'cover'
},

});

export default styles;
