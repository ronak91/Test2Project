
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#2d324f',
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT
	},
	backArrow:{
		width: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',

	},
	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
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
		height: (Metrics.HEIGHT*0.9),
		position: 'relative',
},

btnsec:{
	height: (Metrics.HEIGHT*0.09),
	width: (Metrics.WIDTH*0.84),
	borderWidth: 0,
	bottom: 0,
	position: 'absolute',
	backgroundColor: '#4cd964',
	justifyContent: 'center',
	borderBottomLeftRadius: 5,
	borderBottomRightRadius: 5,
},

slide: {
	backgroundColor: Colors.snow,
	height: (Metrics.HEIGHT*0.66),
	marginHorizontal: (Metrics.WIDTH*0.08),
	marginTop: (Metrics.HEIGHT * 0.07),
	borderRadius: 5,
	elevation: 5,
	shadowColor: Colors.black,
	shadowOpacity: 0.3,
	shadowRadius: (Metrics.WIDTH * 0.03),
	shadowOffset: {
		height: 5,
		width: 0
	},
},

sliderImage: {
	resizeMode: 'cover',
	height: (Metrics.HEIGHT * 0.45),
},

contentStyle: {
	marginTop: (Metrics.HEIGHT * 0.03),
},

headertext: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	backgroundColor:Colors.transparent,
	textAlign:'center',
	alignSelf:'center',
	fontSize:Fonts.moderateScale(18),
	width: (Metrics.WIDTH * 0.7),
	color:'#363636',
},

desctext: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	backgroundColor:Colors.transparent,
	textAlign:'center',
	alignSelf:'center',
	fontSize:Fonts.moderateScale(11),
	width: (Metrics.WIDTH * 0.68),
	color:'#6f6f6f',
	marginTop:(Metrics.HEIGHT * 0.025)
},

buttonText: {
	fontFamily: Fonts.type.sfuiDisplayMedium,
	textAlign:'center',
	alignSelf:'center',
	fontSize:Fonts.moderateScale(18),
	color:Colors.snow,
},

dot:{
	backgroundColor:'#6c7084',
	marginTop: (Metrics.HEIGHT * 0.015),
	width:  (Metrics.WIDTH * 0.02),
	height: (Metrics.WIDTH * 0.02),
	borderRadius: (Metrics.WIDTH * 0.01),
	marginBottom: (Metrics.HEIGHT * 0.025),
	marginLeft: (Metrics.WIDTH * 0.005),
	marginRight: (Metrics.WIDTH * 0.005),
},

activeDot:{
	backgroundColor:'#4cd964',
	marginTop: (Metrics.HEIGHT * 0.015),
	width:  (Metrics.WIDTH * 0.02),
	height: (Metrics.WIDTH * 0.02),
	borderRadius: (Metrics.WIDTH * 0.01),
	marginBottom: (Metrics.HEIGHT * 0.025),
	marginLeft: (Metrics.WIDTH * 0.005),
	marginRight: (Metrics.WIDTH * 0.005),
},

logoStyle: {
	width: (Metrics.WIDTH * 0.25),
	height: (Metrics.WIDTH * 0.25),
	alignSelf: 'center',
	marginTop: (Metrics.HEIGHT * 0.04),
	resizeMode: 'contain'
},

imageContent: {
	alignSelf: 'center',
	alignItems: 'center',
	marginTop: (Metrics.HEIGHT * 0.065),
	flexDirection: 'row',
	marginLeft: (Metrics.WIDTH * 0.035),
},

imageStyle: {
	width: (Metrics.WIDTH * 0.12),
	height: (Metrics.WIDTH * 0.12),
	borderRadius: (Metrics.WIDTH * 0.06),
	resizeMode: 'cover',
	borderColor: Colors.snow,
	borderWidth: 2,
},

imageShadow: {
	width: (Metrics.WIDTH * 0.12),
	height: (Metrics.WIDTH * 0.12),
	marginLeft: -(Metrics.WIDTH * 0.035),
	borderRadius: (Metrics.WIDTH * 0.06),
	elevation: 5,
	shadowColor: Colors.black,
	shadowOpacity: 0.3,
	shadowRadius: (Metrics.WIDTH * 0.005),
	shadowOffset: {
		height: 0,
		width: -1
	},
}

});

export default styles;
