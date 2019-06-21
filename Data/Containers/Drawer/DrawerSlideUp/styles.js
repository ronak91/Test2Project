
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';
const styles = StyleSheet.create({

  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },

  headerSec: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
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
    width:30,
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
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  right: {
    flex: 0.5
  },

  mainview:{
    marginTop: 25,
    alignItems: 'center',
  },

  badgetext:{
    color:'white',
    fontSize: Fonts.moderateScale(13),
    backgroundColor: 'transparent'
  },

  badgeview:{
    backgroundColor: '#00bff3',
    marginLeft: 10,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 11,
    marginTop: 11,
    alignItems: 'center',
    justifyContent: 'center'
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

  rowtxt:{
    color:'white',
    fontSize: Fonts.moderateScale(23),
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayLight
  },

  rights: {
    flex: 1,
		 backgroundColor: 'transparent',
     marginRight: 15,
     marginTop: 15,
     alignSelf: 'flex-end',
     justifyContent: 'flex-end'
  },

  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },

});
export default styles;
