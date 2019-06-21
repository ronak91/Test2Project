
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	header: {
		backgroundColor: '#2d324f',
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},
	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	left: {
		flex: 0.5
	},

	body: {
		flex: 3,
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},

slidesec:{
	height: (Metrics.HEIGHT*0.73),
	marginLeft: (Metrics.WIDTH * 0.05),
	marginRight: (Metrics.WIDTH * 0.05),
},

btnsec:{
	height: (Metrics.HEIGHT*0.17),
	borderTopWidth: 0,
	bottom: 0,
	width: (Metrics.WIDTH*0.88),
	alignSelf: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
},

slide: {
	backgroundColor: 'gray',
	height: (Metrics.HEIGHT*0.8),
},

sliderImage: {
	resizeMode: 'cover',
	height: (Metrics.HEIGHT * 0.8),
	width: Metrics.WIDTH,
	backgroundColor: 'gray'
},

headertext: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:Fonts.moderateScale(20),
	width :(Metrics.WIDTH) * .85,
	color:Colors.snow,
	marginTop: (Metrics.HEIGHT * 0.012)
},

desctext: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor:'transparent',
	textAlign:'center',
	alignSelf:'center',
	fontSize:Fonts.moderateScale(12),
	width :(Metrics.WIDTH) * 0.75,
	color: Colors.snow,
	marginTop:(Metrics.HEIGHT * 0.02)
},

dataStyle:{
	backgroundColor: '#0691ce',
	borderRadius: 3,
	height: (Metrics.HEIGHT * 0.16),
	width: (Metrics.WIDTH * 0.27),
	elevation: 5,
	shadowColor: Colors.black,
	shadowOpacity: 0.3,
	shadowRadius: 5,
	shadowOffset: {
		height: 5,
		width: 5
	},
	alignItems: 'center',
},

dataImage:{
	height: (Metrics.WIDTH * 0.07),
	width: (Metrics.WIDTH * 0.06),
	resizeMode: 'contain',
},

dataText:{
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(17),
	color: Colors.snow,
},

listContent: {
	justifyContent: 'space-around',
	flexDirection: 'row',
	flexWrap: 'wrap',
},

row: {
	width: (Metrics.WIDTH * 0.28),
	justifyContent: 'center',
	alignItems: 'center',
	marginTop:(Metrics.HEIGHT * 0.013),
},

backBtnStyle: {
	backgroundColor:'#f2f2f2',
	width:(Metrics.WIDTH *0.28),
	height: (Metrics.HEIGHT *0.055),
	alignSelf: 'center',
	justifyContent: 'center'
},

backText: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(18),
	color: '#6f6f6f',
},

profileMain: {
	width:(Metrics.WIDTH * 0.28),
	height: (Metrics.HEIGHT * 0.13),
	alignItems: 'center',
	justifyContent: 'center'
},

eclipseStyle: {
	width:(Metrics.WIDTH * 0.23),
	height: (Metrics.WIDTH * 0.23),
	alignSelf: 'center',
	resizeMode: 'contain',
},

profileStyle: {
	width:(Metrics.WIDTH * 0.19),
	height: (Metrics.WIDTH * 0.19),
	alignSelf: 'center',
	resizeMode: 'cover',
	position: 'absolute',
	borderRadius: (Metrics.WIDTH * 0.095),
	borderColor: Colors.snow,
	borderWidth: 1.5
},

nextBtnStyle: {
	backgroundColor:'#4cd964',
	width:(Metrics.WIDTH *0.28),
	height: (Metrics.HEIGHT *0.055),
	alignSelf: 'center',
	justifyContent: 'center'
},

nextText: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	fontSize:Fonts.moderateScale(18),
	color: Colors.snow,
},

listItemImgBg: {
	height:(Metrics.HEIGHT * 0.08),
	alignItems: 'flex-end',
	justifyContent: 'flex-end',
},

chBoxBg: {
	width: (Metrics.WIDTH * 0.18),
	alignItems: 'flex-end',
	position: 'absolute',
	marginTop: (Metrics.WIDTH * 0.015),
},

chBox: {
	height: 18,
	width: 18,
	borderRadius: 9,
},

listItemTitleBg: {
	height: (Metrics.HEIGHT * 0.05),
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: (Metrics.WIDTH * 0.012)
}

});

export default styles;
