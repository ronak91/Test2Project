
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

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

  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  mainview:{
    alignItems: 'flex-start',
    height: (Metrics.HEIGHT * 0.5),
    bottom: 0,
    paddingTop: 15,
    backgroundColor: 'white',
    paddingLeft:  (Metrics.WIDTH * 0.1),
  },

  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  badgetext:{
    color:'white',
    fontSize: 13,
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
  rowicon:{
    height: 20,
    width: 20,
    textAlign: 'center'
  },
  closeview:{
    borderTopLeftRadius: I18nManager.isRTL ? 0 : 180,
    borderTopRightRadius: I18nManager.isRTL ? 180 : 0,
    height:90,
    width: 90,
    backgroundColor: '#d9b63e',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0
  },
  mainclose:{
    height:70,
    width: 50,
  },
  closeicon:{
    color:'white',
    fontSize: Fonts.moderateScale(80),
    backgroundColor: 'transparent',
    alignSelf: 'flex-start'
    // textAlign: 'right',
  },
  rowtxt:{
    color:'#36343f',
    fontSize: Fonts.moderateScale(20),
    backgroundColor: 'transparent',
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: Fonts.type.sfuiDisplayLight
  },

});
export default styles;
