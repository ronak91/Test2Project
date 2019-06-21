
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2d324f',
  },

  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },

  headerSec: {
    backgroundColor: Colors.transparent,
    height: (Metrics.WIDTH * 0.15),
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25)
      }
    }),
    elevation: 0
  },

  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.005),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  right: {
    flex: 0.5
  },

  forgotPassword:{
    color: "#0691ce",
    fontSize: Fonts.moderateScale(17),
    height: (Metrics.HEIGHT * 0.05),
    width: (Metrics.WIDTH),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    top:(Metrics.HEIGHT * 0.44),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
  bottomModal: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    margin: 0,
  },
  mainview:{
    alignItems: 'flex-start',
    height: 300,
    bottom: 0,
    backgroundColor: 'white',
  },
  headerbottom:{
    height: 50,
    width: Metrics.WIDTH,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  },
  semirow:{
    width: Metrics.WIDTH,
    height:125,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  horizontalline:{
    height: 0.5,
    backgroundColor: '#f2f2f2',
    width: Metrics.WIDTH
  },
  verticalline:{
    height: 125,
    backgroundColor: '#f2f2f2',
    width: 0.5
  },
  listrow:{
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.WIDTH*0.333,
    height: 125
  },



  headertxt:{
    fontSize: Fonts.moderateScale(32),
    textAlign: 'center',
    color:'white'
  },
  screenBg: {
  	flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT,
  	position: 'absolute'
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },

  badgetext:{
    color:'white',
    fontSize: Fonts.moderateScale(13),
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: '#d9b63e',
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalbg:{
    flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT*0.5,
     margin:-(Metrics.WIDTH*0.001),
  },
  rowicon:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'#696c7f',
    fontSize: Fonts.moderateScale(15),
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: Fonts.type.sfuiDisplayLight
  },


  linebg:{
    backgroundColor: 'rgba(61,61,61,0.9)',
    height:0.5,
    width: Metrics.WIDTH*0.6
  },
  imageLogoMountify: {
    alignSelf: 'center',
    width: 100,
    height: 80,
    marginBottom: 20
  },


  userpic:{
    width: (Metrics.WIDTH) * 0.13,
    height: (Metrics.WIDTH) * 0.13,
    borderRadius: (Metrics.WIDTH)* 0.065,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginLeft: (Metrics.WIDTH) * 0.1,
  },
  closeview:{
    borderTopLeftRadius:180,
    height:90,
    width: 90,
    backgroundColor: '#d9b63e',
    position: 'absolute',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0
  },
  mainclose:{
    // backgroundColor: "red",
    height:70,
    width: 50,

    // alignItems: 'flex-start',
  },
  closeicon:{
    color:'white',
    fontSize: Fonts.moderateScale(80),
    backgroundColor: 'transparent',
    alignSelf: 'flex-start'
    // textAlign: 'right',
  },


  lefts: {
    flex: 1,
		 backgroundColor: 'transparent',
     marginRight: 15,
     marginTop: 15,
     alignSelf: 'flex-end',
     justifyContent: 'flex-end'
  },
  headerModal: {
    backgroundColor: 'rgba(5,6,6,0.5)',

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
			}
    }),
		elevation: 0
  },

});
export default styles;
