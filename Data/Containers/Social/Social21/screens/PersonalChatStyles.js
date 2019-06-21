import { Platform, StyleSheet, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: Colors.transparent,
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: Colors.transparent,
    paddingTop: (Metrics.WIDTH * 0.02),
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftMsg: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    color: Colors.snow
  },

  body: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1.1,
    alignItems: 'center',
    marginRight: (Metrics.WIDTH * 0.02),
    paddingTop: (Platform.OS === 'ios')? 5 : 0,
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
    paddingTop: (Metrics.HEIGHT*0.04),
  },

  rowMain: {
    marginHorizontal:(Metrics.WIDTH * 0.03),
  },

  iconSize: {
    width: (Metrics.HEIGHT * 0.03),
    fontSize: Fonts.moderateScale(30),
    color: Colors.snow
  },

  iconSizeFooter: {
    height: (Metrics.HEIGHT * 0.04),
    width: (Metrics.HEIGHT * 0.04),
    resizeMode: 'contain'
  },

  footerStyle: {
    borderTopWidth: 1,
    borderColor:'#848d99',
    backgroundColor: Colors.snow
  },

  footerLeft: {
    flex:0.6,
    alignItems: 'center'
  },

  footerLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  messageBox: {
    height:(Metrics.HEIGHT * 0.045),
    width:(Metrics.WIDTH * 0.69),
    borderWidth: 1,
    borderColor: '#c7c7cc',
    borderRadius: 4
  },

  footerRight: {
    flex:0.6,
    alignItems: 'center'
  },

  footerRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightChatMain: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginRight: (Metrics.WIDTH * 0.03),
    marginLeft: (Metrics.WIDTH * 0.07)
  },

  leftChatMain: {
    flexDirection: 'row',
    marginRight: (Metrics.WIDTH * 0.25)
  },

  rightChatBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (Metrics.HEIGHT*0.012),
    paddingHorizontal: (Metrics.WIDTH * 0.05),
    borderRadius: 16,
    marginRight: (Metrics.HEIGHT*0.028),
    zIndex:10
  },

  leftChatBox: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: (Metrics.HEIGHT*0.012),
    paddingHorizontal: (Metrics.WIDTH * 0.05),
    backgroundColor:'#e5e5ea',
    borderRadius: 16,
    zIndex:10
  },

  rightIndicatorMain: {
    alignSelf: 'flex-end',
    height:(Metrics.HEIGHT*0.025),
    width:(Metrics.HEIGHT*0.025),
    position: 'absolute',
    right:0,
    flexDirection: 'row'
  },

  leftIndicatorMain: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },

  rightIndicator: {
    alignSelf: 'flex-end',
    resizeMode:'contain',
    height:(Metrics.HEIGHT*0.025),
    width:(Metrics.HEIGHT*0.025),
    marginRight: (Metrics.HEIGHT*0.019),
    position: 'absolute',
    zIndex:5,
    right:0,
    bottom:1,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },

  leftIndicator: {
    resizeMode:'contain',
    height:(Metrics.HEIGHT*0.025),
    width:(Metrics.HEIGHT*0.025),
    marginLeft: (Platform.OS == 'ios')?(Metrics.HEIGHT*0.036):(Metrics.HEIGHT*0.0365),
    position: 'absolute',
    zIndex:5,
    bottom:1,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
  },

  profile: {
    resizeMode:'cover',
    height:(Metrics.HEIGHT*0.04),
    width:(Metrics.HEIGHT*0.04),
    borderRadius:(Metrics.HEIGHT*0.02),
    margin: 1
  },

  msgSentTxt: {
    color:Colors.snow,
    backgroundColor: Colors.transparent,
    fontSize: Fonts.moderateScale(16)
  },

  msgReceiveTxt: {
    color:Colors.black,
    fontSize: Fonts.moderateScale(16)
  },

  listBg: {
    paddingBottom: (Metrics.HEIGHT*0.05)
  },

  headetTxt: {
    color: Colors.snow
  }

});

export default styles;
