import { StyleSheet, PixelRatio, Platform, I18nManager } from 'react-native';
const deviceScreen = require('Dimensions').get('window')
import { Fonts, Metrics, Colors } from '../../../Themes/';

module.exports = StyleSheet.create({
  scrollView: {
    backgroundColor: '#B99BC4',
  },
  container: {
    flex: 1,
    backgroundColor: '#C5B9C9',
  },
  controlPanel: {
    flex: 1,
    backgroundColor:'transparent',
  },
  controlPanelText: {
    color:'white',
  },
  menuimageBg:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  menuClose:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.10,
    paddingTop: Fonts.moderateScale(10),
    paddingLeft: I18nManager.isRTL ? 0 : Fonts.moderateScale(25),
    paddingRight: I18nManager.isRTL ? Fonts.moderateScale(25) : 0,
    marginBottom: Fonts.moderateScale(10),
  },
  menuListSec:{
    width: Metrics.WIDTH * 0.84,
    alignSelf: 'center',
  },
  menuList:{
    width: Metrics.WIDTH * 0.42,
    height: Metrics.WIDTH * 0.35,
    padding: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItemText:{
    marginTop: Fonts.moderateScale(6),
    color: '#ffffff',
    fontFamily: 'SFUIDisplay-Regular'
  },
  msgCountSec:{
  },
  menumsgCount:{
    backgroundColor: '#ef4836',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ef4836',
    overflow: 'hidden',
    color: 'white',
    borderRadius: 7,
    width: 14,
    height: 14,
    fontSize: 9,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1111
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
	backArrow:{
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
  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: '#2d324f',
  },

});
