
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#2d324f',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuIconWhite: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  rowBg: {
    width: (Metrics.WIDTH),
    height: (Metrics.HEIGHT * 0.26),
    backgroundColor: 'gray',
    justifyContent: 'center',
  },

  bgImage: {
    height:(Metrics.HEIGHT * 0.26),
    width:(Metrics.WIDTH),
    resizeMode:'cover',
    position:'absolute'
  },

  discoveryContent: {
    height:(Metrics.HEIGHT * 0.26),
    backgroundColor: '#0006'
  },

  tempSec: {
    alignItems:'center',
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:(Metrics.HEIGHT * 0.01),
    paddingTop:(Metrics.HEIGHT * 0.02),
    paddingHorizontal:(Metrics.WIDTH * 0.03)
  },

  temp: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  tempDegree: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(8),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    alignSelf:'flex-start',
    paddingTop: (Metrics.HEIGHT * 0.005)
  },

  cloudeIcon: {
    height:(Metrics.HEIGHT * 0.04),
    width:(Metrics.HEIGHT * 0.04),
    resizeMode:'contain'
  },

  aboutSec: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    bottom:0,
    position:'absolute',
    width:(Metrics.WIDTH),
    paddingBottom:(Metrics.HEIGHT * 0.015),
    paddingLeft:(Metrics.WIDTH * 0.03),
    paddingRight:(Metrics.WIDTH * 0.05)
  },

  cityName: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  profileImageView:{
    width:(Metrics.HEIGHT * 0.037),
  },

  profile: {
    height: (Metrics.HEIGHT * 0.05),
    width: (Metrics.HEIGHT * 0.05),
    borderRadius: (Metrics.HEIGHT * 0.025),
    borderWidth: 2,
    borderColor: Colors.snow,
    resizeMode: 'cover',
  },

  listMainView:{
    width: (Metrics.WIDTH)
  },

  profileView:{
    flexDirection:'row'
  },

});

export default styles;
