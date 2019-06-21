
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({

container: {
  backgroundColor: "#2d324f",
  width: Metrics.WIDTH,
  height: Metrics.HEIGHT
},

main: {
  width : Metrics.WIDTH,
  height: Metrics.HEIGHT,
  backgroundColor : "#2d324f"
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
		marginTop: (Metrics.HEIGHT) * 0.03,
		width: Metrics.WIDTH ,
		alignSelf: 'center',
		backgroundColor: 'transparent',
		overflow: 'hidden'
},

slide: {
	height: (Metrics.HEIGHT*0.33),
	width: (Metrics.WIDTH*0.65),
	backgroundColor: Colors.snow,
	shadowColor: Colors.black,
	shadowOpacity: 0.5,
	shadowOffset: {
	height: 5,
	width: 0,
  justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	},
  overflow: 'hidden',
},

sliderImage: {
	height: (Metrics.HEIGHT * 0.33),
	width: (Metrics.WIDTH * 0.65),
},

headertext: {
	fontFamily: Fonts.type.sfuiDisplaySemibold,
	width: Metrics.WIDTH,
	alignSelf:'center',
  textAlign : 'center',
	fontSize:Fonts.moderateScale(20),
	color:Colors.snow,
},

desctext: {
	fontFamily: Fonts.type.sfuiDisplayRegular,
	alignSelf:'center',
	fontSize:Fonts.moderateScale(12),
	width : ((Metrics.WIDTH) * 0.70),
	color:Colors.snow,
	marginTop:Metrics.HEIGHT*0.03,
  textAlign:'center',
  marginBottom: Metrics.HEIGHT*0.02
},

lonInWithFbBg: {
  backgroundColor: "#0054a6",
  borderRadius: 5,
  paddingTop: (Metrics.HEIGHT * 0.017),
  paddingBottom: (Metrics.HEIGHT * 0.015),
  alignItems: 'center',
  justifyContent: 'center',
  width: (Metrics.WIDTH * 0.80),
  alignSelf: 'center',
  flexDirection: 'row',
  marginTop: (Metrics.HEIGHT * 0.057)
},

lonInWithTwitterBg: {
  backgroundColor: "#0691ce",
  borderRadius: 5,
  paddingTop: (Metrics.HEIGHT * 0.015),
  paddingBottom: (Metrics.HEIGHT * 0.015),
  alignItems: 'center',
  justifyContent: 'center',
  width: (Metrics.WIDTH * 0.80),
  alignSelf: 'center',
  flexDirection: 'row',
  marginTop: (Metrics.HEIGHT * 0.025)
},

logInWithFbTwitterText: {
  color: Colors.snow,
  textAlign: "center",
  fontSize: Fonts.moderateScale(16),
  padding: (Metrics.HEIGHT * 0.003),
  left: (Metrics.HEIGHT * 0.008),
  fontFamily: Fonts.type.sfuiDisplayRegular,
},

readyToGetStarted: {
  width: Metrics.WIDTH,
  textAlign : 'center',
  fontSize : Fonts.moderateScale(15),
  fontFamily : Fonts.type.sfuiDisplaySemibold,
  color : Colors.snow,
  marginTop: (Metrics.HEIGHT * 0.02)
},

dot:{
	backgroundColor:'rgba(255,255,255,0.5)',
  width:  (Metrics.WIDTH * 0.016),
  height: (Metrics.WIDTH * 0.016),
  borderRadius: (Metrics.WIDTH * 0.008),
  marginLeft: (Metrics.WIDTH * 0.004),
  marginRight: (Metrics.WIDTH * 0.004),
},

activeDot:{
	backgroundColor:Colors.snow,
  width:  (Metrics.WIDTH * 0.016),
  height: (Metrics.WIDTH * 0.016),
  borderRadius: (Metrics.WIDTH * 0.008),
  marginLeft: (Metrics.WIDTH * 0.004),
  marginRight: (Metrics.WIDTH * 0.004),
},

btnSec: {
  height: Metrics.HEIGHT * 0.32
},

contentSec: {
  height: Metrics.HEIGHT * 0.58,
  backgroundColor: Colors.transparent
},

indicatorBg: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: (Metrics.HEIGHT) * 0.04
}
});

export default styles;
