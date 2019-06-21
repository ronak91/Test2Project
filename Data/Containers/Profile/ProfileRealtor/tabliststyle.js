
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

logosec:{
	height: (Metrics.HEIGHT*0.095),
	marginTop: (Platform.OS === 'ios')? 0 : (Metrics.HEIGHT*0.035),
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'row'
},
tabcontain:{backgroundColor: '#2d324f'},

slidesec:{
	height: (Metrics.HEIGHT*0.905),
	position: 'relative',
	backgroundColor: 'white',
},

header: {
	backgroundColor: '#2d324f',
	height: 56,
	width: Metrics.WIDTH,
	flexDirection: 'row',
	borderBottomColor: '#2d324f',
	...Platform.select({
		ios: {
			marginTop:5,
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
  color: Metrics.HEADER_TITLE_COLOR,
  fontFamily: Fonts.type.SFUIDisplayBold,
  paddingTop: (Platform.OS === 'ios')? 15 : 0,
  fontSize : 17,
  letterSpacing:0.7
},

name: {
	color: '#363636',
	fontSize: 16,
	marginRight: (Metrics.WIDTH*0.015)
},

listContent: {
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems:'flex-start',
	margin: (Metrics.HEIGHT * 0.01)
},

rowMain:{
	backgroundColor:'white',
	width: (Metrics.WIDTH * 0.445),
	margin:(Metrics.WIDTH * 0.0165),
	borderRadius:2,
	alignItems:'flex-start',
	alignContent:'flex-start',
	elevation: 5,
	shadowColor: 'black',
	shadowOpacity: 0.2,
	shadowRadius: 2,
	shadowOffset: {
		height: 2,
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
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 15,
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
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
},

rowdevider: {
	backgroundColor: '#f2f2f2',
	width: (Metrics.WIDTH * 0.445),
	height: 1,
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
	fontFamily: Fonts.type.SFUIDisplayMedium,
	fontSize: 15,
},

timeText: {
	color: '#b7b7b7',
	fontFamily: Fonts.type.SFUIDisplayRegular,
	fontSize: 12,
	textAlign: 'left'
},

});

export default styles;
