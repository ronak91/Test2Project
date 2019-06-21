
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

main:{
	backgroundColor: '#2d324f'
},

menuIcon:{
		color: Colors.snow
},

searchIcon:{
	 color: Colors.snow,
	 fontSize: Fonts.moderateScale(22)
},
backArrow:{
	width: 30,
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
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
			marginTop: (Metrics.HEIGHT) * 0.007,
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

name: {
	color: '#363636',
	fontSize: Fonts.moderateScale(16),
	marginRight: (Metrics.WIDTH*0.015)
},

listContent: {
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems:'flex-start',
	margin: (Metrics.HEIGHT * 0.01)
},

rowMain:{
	backgroundColor: Colors.snow,
	width: (Metrics.WIDTH * 0.445),
	margin:(Metrics.WIDTH * 0.0165),
	borderRadius:2,
	alignItems:'flex-start',
	alignContent:'flex-start',
	elevation: 5,
	shadowColor: Colors.black,
	shadowOpacity: 0.2,
	shadowRadius: 2,
	shadowOffset: {
		height: (Metrics.HEIGHT) * 0.002,
		width: 0,
	},
},

rowImage: {
	width: (Metrics.WIDTH * 0.445),
	height: (Metrics.WIDTH * 0.445),
	borderRadius: 2,
	resizeMode: 'cover',
},

rowConTitle: {
	margin: (Metrics.WIDTH * 0.03),
	justifyContent: 'space-between'
},

rowTitle: {
	color: '#6f6f6f',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(15),
	textAlign: 'left'
},

rowLocation: {
	flexDirection: 'row',
	marginTop: (Metrics.HEIGHT * 0.01),
	alignItems: 'center'
},

iconSize: {
	width: (Metrics.WIDTH * 0.035),
	height: (Metrics.WIDTH * 0.035),
	marginRight: (Metrics.WIDTH * 0.01),
	resizeMode: 'contain',
},

locationText: {
	color: '#adadad',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
},

rowdevider: {
	backgroundColor: '#f2f2f2',
	width: (Metrics.WIDTH * 0.445),
	height: (Metrics.HEIGHT) * 0.001,
	marginTop: (Metrics.HEIGHT * 0.01),
},

rowProfile: {
	flexDirection: 'row',
	marginHorizontal: (Metrics.WIDTH * 0.03),
	marginVertical: (Metrics.WIDTH * 0.015),
	justifyContent: 'center',
	alignItems: 'center'
},

rowProImage: {
	width: (Metrics.WIDTH * 0.08),
	height: (Metrics.WIDTH * 0.08),
	borderRadius: (Metrics.WIDTH * 0.04),
	resizeMode: 'cover',
	marginRight: (Metrics.WIDTH * 0.02),
},

subRow: {
	justifyContent: 'center',
},

profileName: {
	color: '#363636',
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize: Fonts.moderateScale(15),
},

timeText: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.sfuiDisplayRegular,
	fontSize: Fonts.moderateScale(12),
	textAlign: 'left'
},

searchicon:{
	marginRight: 10,
	color: '#fff',
	fontSize:24
},

});

export default styles;
