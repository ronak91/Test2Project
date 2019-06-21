
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  header: {
    backgroundColor: Colors.transparent,
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: Colors.transparent,
    paddingTop: (Metrics.WIDTH * 0.02),
  },

  left: {
    flex: 1,
  },

  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTxt: {
    color: Colors.snow
  },

  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: Metrics.HEADER_TITLE_COLOR,
    fontFamily: Fonts.type.sfuiDisplayBold,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : Fonts.moderateScale(17),
    letterSpacing:0.7
  },

  content: {
    backgroundColor: Colors.snow,
  },

  rowMain: {
    marginLeft:(Metrics.WIDTH * 0.08),
  },

  listContent: {
    height:(Metrics.HEIGHT*0.095),
    marginVertical: (Metrics.HEIGHT*0.01),
    flexDirection: 'row'
  },

  profile: {
    height: (Metrics.HEIGHT*0.07),
    width: (Metrics.HEIGHT*0.07),
    borderRadius: (Metrics.HEIGHT*0.035),
    marginRight: (Metrics.WIDTH*0.03),
    alignSelf: 'center'
  },

  subRow: {
    width:(Metrics.WIDTH*0.73)
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(17),
    color: Colors.black
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  time: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    color: '#8f8f94',
    marginRight: (Metrics.WIDTH*0.02)
  },

  arrowForward: {
    fontSize: Fonts.moderateScale(22),
    color:'#c7c7cc'
  },

  recentMsg: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    color: '#8f8f94',
    marginTop: (Platform.OS === 'ios')?(Metrics.HEIGHT*0.003):0,
    textAlign: 'left'
  },

  iconSize: {
    height: (Metrics.HEIGHT * 0.035),
    width: (Metrics.HEIGHT * 0.035),
    resizeMode: 'contain'
  },

  swipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height:(Metrics.HEIGHT * 0.12)
  },

  separatorStyle: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  }

});

export default styles;
