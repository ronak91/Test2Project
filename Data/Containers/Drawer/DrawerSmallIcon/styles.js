
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    flex: 1,
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

  mainview:{
    backgroundColor: 'transparent',
  },

  headertxt:{
    fontSize: Fonts.moderateScale(32),
    textAlign: 'center',
    color:'white'
  },

  listrow:{
    backgroundColor: '#36343f',
    flexDirection: 'column',
    paddingVertical: (Metrics.HEIGHT * 0.032),
    marginBottom: (Metrics.HEIGHT * 0.002),
  },

  itemBg: {
    height:(Metrics.HEIGHT * 0.1),
    width:(Metrics.HEIGHT * 0.1),
    borderRadius:(Metrics.HEIGHT * 0.05),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },

  profileBody: {
    height: (Metrics.HEIGHT * 0.175),
    backgroundColor: '#302f39',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    height: (Metrics.HEIGHT * 0.1),
    width: (Metrics.HEIGHT * 0.1),
    borderRadius: (Metrics.HEIGHT * 0.05),
    borderWidth: (Metrics.WIDTH * 0.0065),
    borderColor: 'white',
  },

  alertRed:{
    backgroundColor:'red',
    height: (Metrics.HEIGHT) * 0.012,
    width: (Metrics.HEIGHT) * 0.012,
    borderRadius: (Metrics.HEIGHT) * 0.006,
    marginLeft: -(Metrics.HEIGHT) * 0.012,
    marginTop:-(Metrics.HEIGHT) * 0.028
  },

});

export default styles;
