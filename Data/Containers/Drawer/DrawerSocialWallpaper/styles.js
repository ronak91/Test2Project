
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';


const styles = StyleSheet.create({
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },

  container: {
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
    marginLeft: (Metrics.HEIGHT * 0.035),
    marginTop: (Metrics.HEIGHT * 0.06),
  },

  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: (Metrics.HEIGHT * 0.03),
    alignItems: 'center'
  },

  rowtxt:{
    color:'white',
    fontSize: Fonts.moderateScale(30),
    backgroundColor: 'transparent',
    marginLeft: (Metrics.HEIGHT * 0.025),
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  rowCountText:{
    color:'white',
    fontSize: Fonts.moderateScale(16),
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingLeft: (Metrics.HEIGHT * 0.015),
    paddingRight: (Metrics.HEIGHT * 0.015),
  },

  rowCountBg:
  {
     backgroundColor: '#d9b63e',
     borderRadius: 20,
     marginLeft:(Metrics.HEIGHT * 0.025),
     justifyContent: 'center',
     alignItems: 'center',
     height: (Metrics.HEIGHT) * 0.045
  },

  profileImage: {
    height:(Metrics.HEIGHT * 0.14),
    width:(Metrics.HEIGHT * 0.14),
    borderRadius:(Metrics.HEIGHT * 0.070),
    borderWidth: 2.5,
    borderColor: 'white',
    marginBottom: (Metrics.HEIGHT * 0.025),
    marginTop : (Metrics.HEIGHT * 0.099),
    marginLeft: (Metrics.HEIGHT * 0.045)
  },

});

export default styles;
