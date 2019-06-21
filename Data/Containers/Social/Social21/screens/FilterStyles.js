
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: Colors.transparent,
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: Colors.transparent,
    paddingTop: (Metrics.WIDTH * 0.05),
  },

  headerBG: {
    height: (Metrics.HEIGHT * 0.1),
    width: Metrics.WIDTH,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1.5
  },

  body: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1.1,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios')? 5 : 0,
  },

  headerTxt: {
    color: Colors.snow
  },

  leftMsg: {
   fontFamily: Fonts.type.sfuiDisplayRegular,
   fontSize: Fonts.moderateScale(14),
   color: Colors.snow
  },

  content: {
    backgroundColor: '#f2f2f2',
    height: (Metrics.HEIGHT)
  },

  iconSize: {
    width: (Metrics.HEIGHT * 0.03),
    fontSize: Fonts.moderateScale(30),
    color: Colors.snow
  },

  styleGradient: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.48),
    borderRadius: (Metrics.HEIGHT * 0.02),
  },

  leftBtnRadius: {
    borderTopLeftRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderBottomLeftRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
    borderTopRightRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
    borderBottomRightRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
  },


  rightBtnRadius: {
   borderTopRightRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
   borderBottomRightRadius: I18nManager.isRTL ? 0 : (Metrics.HEIGHT * 0.02),
   borderTopLeftRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
   borderBottomLeftRadius: I18nManager.isRTL ? (Metrics.HEIGHT * 0.02) : 0,
 },



  segmentTabSec: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.48),
    borderRadius: (Metrics.HEIGHT * 0.02),
    backgroundColor: Colors.transparent,
  },

  selectedSegmentTab: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.16),
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'visible'
  },

  segmentTab: {
    height: (Metrics.HEIGHT * 0.038),
    width: (Metrics.WIDTH * 0.16),
    backgroundColor: '#e6e6e6',
    borderColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
		overflow: 'hidden'
  },

  activeTab: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow
  },

  normalTab: {
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: '#666666'
  },

  listHeader: {
    width:(Metrics.WIDTH),
    height:(Metrics.HEIGHT*0.065),
    marginLeft:(Metrics.WIDTH*0.05),
    alignItems:'flex-start',
    justifyContent:'center'
  },

  listHeaderText: {
    color:'#9f9f9f',
    fontFamily:Fonts.type.sfuiDisplayRegular,
    fontSize:Fonts.moderateScale(18)
  },

  listMain: {
    backgroundColor: 'white',
    paddingLeft: (Metrics.WIDTH*0.005)
  },

  listGenderMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 0.5
  },

  listTitle: {
    color:'#4c4c4c',
    fontFamily:Fonts.type.sfuiDisplayRegular,
    fontSize:Fonts.moderateScale(18)
  },

  listAgeMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: '#e5e5e5',
    borderBottomWidth: 1
  },

  listAgeRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listRightText: {
    color:'#a5a5a5',
    fontFamily:Fonts.type.sfuiDisplayRegular,
    fontSize:Fonts.moderateScale(18)
  },

  arrowForword: {
    color:'#c7c7cc',
    paddingLeft: (Metrics.WIDTH*0.02),
    fontSize: Fonts.moderateScale(30)
  },

  markerStyle: {
    height:(Metrics.HEIGHT*0.035),
    width: (Metrics.HEIGHT*0.035),
    backgroundColor:'#f87362',
    borderWidth: 0.5,
    borderColor: '#fa6982'
  },

  containerStyle: {
    alignSelf: 'center',
    height:5
  },

  trackStyle: {
    height: (Metrics.HEIGHT*0.005),
    borderRadius: 4
  },

  listDistanceMain: {
    justifyContent: 'space-between',
    height:(Metrics.HEIGHT*0.08),
    borderColor: Colors.transparent
  },

  listDistanceRight: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  arrowBack: {
    color:'#c7c7cc',
    paddingRight: (Metrics.WIDTH*0.02),
    fontSize: Fonts.moderateScale(30)
  },
});

export default styles;
