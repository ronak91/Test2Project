import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';
import {  Fonts,Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  header: {
    backgroundColor: "#0e1130",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Metrics.HEIGHT * 0.02),
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center',
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    }),
  },

  mainView:{
    paddingTop: Metrics.HEIGHT * 0.04,
    paddingBottom: Metrics.HEIGHT * 0.04,
    paddingLeft: Metrics.WIDTH * 0.045,
    paddingRight: Metrics.WIDTH * 0.045
  },

  textRowQue:{
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaRegular,
    color: '#362f2d',
    textAlign: 'left'
  },

  textRowAns:{
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    color: '#111111',
    textAlign: 'left'
  },

  stepView:{
    flexDirection: 'row',
    marginLeft: Metrics.WIDTH * 0.09,
    alignItems: 'center',
  },

  textPhoneNo:{
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    color: '#ffc700'
  },

  arrowView:{
    width: Metrics.HEIGHT * 0.024,
    height : Metrics.HEIGHT * 0.024,
    backgroundColor: '#ffc700',
    borderRadius: Metrics.HEIGHT * 0.012,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: (I18nManager.isRTL) ? 0 : Metrics.HEIGHT * 0.003,
    marginRight: (I18nManager.isRTL) ? 0 : Metrics.HEIGHT * 0.022,
    paddingRight: (I18nManager.isRTL) ? Metrics.HEIGHT * 0.003 : 0,    
  }

});

export default styles;
