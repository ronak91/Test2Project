
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

container: {
	backgroundColor: '#2d324f',
	width: Metrics.WIDTH,
	height: Metrics.HEIGHT
},

imgContainer: {
	width:Metrics.width,
	height:Metrics.height
},

header: {
	backgroundColor: Colors.transparent,
	height: Metrics.HEIGHT * 0.1,
	borderBottomWidth: 0,
	paddingTop: (Metrics.HEIGHT * 0.05),
	elevation: 0,
	paddingLeft: (Metrics.WIDTH * 0.05),
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
		height: (Metrics.HEIGHT*0.9),
},

btnsec:{
	bottom: 0,
	height: (Metrics.HEIGHT * 0.09),
	position: 'absolute',
	backgroundColor: "#4cd964",
},

slide: {
	...Platform.select({
			ios: {
				height: (Metrics.HEIGHT * 0.65),
			},
			android: {
				height: (Metrics.HEIGHT * 0.59),
			}
	}),
	width: (Metrics.WIDTH*0.85),
	backgroundColor: 'gray',
	elevation: 5, // android shadow
	shadowColor: Colors.black,
	shadowOpacity: 0.5,
	shadowOffset: {
	height: 5,
	width: 0,
	},
},

sliderImage: {
	resizeMode: 'cover',
	width:(Metrics.WIDTH*0.85),
	...Platform.select({
			ios: {
				height: (Metrics.HEIGHT * 0.65),
			},
			android: {
				height: (Metrics.HEIGHT * 0.59),
			}
	}),
},

dot:{
	width:(Metrics.HEIGHT * 0.01),
	height:(Metrics.HEIGHT * 0.01),
	borderRadius:(Metrics.HEIGHT * 0.005),
	marginHorizontal:(Metrics.HEIGHT * 0.002),
	backgroundColor: 'grey'
},

activeDot:{
	width:(Metrics.HEIGHT * 0.01),
	height:(Metrics.HEIGHT * 0.01),
	borderRadius:(Metrics.HEIGHT * 0.005),
	marginHorizontal:(Metrics.HEIGHT * 0.002),
	backgroundColor: Colors.snow
},

indicatorBg: {
	flexDirection: 'row',
	alignSelf: 'center',
	marginBottom: (Metrics.HEIGHT * 0.025)
},

nextButton: {
	width: Metrics.WIDTH,
	height: (Metrics.HEIGHT * 0.09),
	justifyContent: 'center',
	alignItems: 'center'
},

nextText: {
	textAlign: 'center',
	color: Colors.snow,
	alignSelf: 'center',
	fontSize: Fonts.moderateScale(18),
	fontFamily: Fonts.type.sfuiDisplaySemibold,
},

});

export default styles;
