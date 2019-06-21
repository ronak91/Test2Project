
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
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
    paddingTop: (Metrics.HEIGHT * 0.04),
    paddingBottom: (Metrics.HEIGHT * 0.05),
    marginBottom: (Metrics.HEIGHT * 0.002),
  },

  rowicon:{
    height: (Metrics.HEIGHT * 0.035),
    alignSelf: 'center',
    alignItems: 'center',
  },

  rowtxt:{
    color:'white',
    fontSize: Fonts.moderateScale(20),
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular
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

});

export default styles;
