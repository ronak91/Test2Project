import { Platform, StyleSheet, Dimensions } from 'react-native';
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  FlagIcon: {
    width: Metrics.WIDTH * 0.08,
    height: Metrics.WIDTH * 0.08,
    resizeMode: 'contain',
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

  textDone:{
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  shippingAddressView:{
    backgroundColor: '#f3f3f3',
    ...Platform.select({
      ios: {
        paddingTop: Metrics.HEIGHT * 0.007,
        paddingBottom: Metrics.HEIGHT * 0.007,
      },
      android: {
        paddingTop: Metrics.HEIGHT * 0.010,
        paddingBottom: Metrics.HEIGHT * 0.010,
      }
    }),
    paddingLeft : Metrics.WIDTH * 0.05,
    paddingRight : Metrics.WIDTH * 0.05,
  },

  shippingAddressText:{
    color: '#959595',
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left',
  },

  shippingAddressDivider:{
    height: Metrics.HEIGHT * 0.003,
    backgroundColor: '#e1e1e1',
  },

  addressText:{
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left',
  },

  addressDivider:{
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: '#e1e1e1',
    marginLeft: Metrics.HEIGHT * 0.1,
    marginRight: Metrics.HEIGHT * 0.022
  },

  rowMain: {
    marginLeft: Metrics.WIDTH * 0.015,
    padding: Metrics.HEIGHT * 0.010,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Metrics.WIDTH
  },

  checkArrow:{
        paddingRight: Metrics.HEIGHT * 0.025,
  },

  chBox: {
    width: Metrics.WIDTH * 0.08,
    height: Metrics.WIDTH * 0.08,
  },

  addressTextBg: {

    width: Metrics.WIDTH * 0.75,
    marginLeft: Metrics.WIDTH * 0.050
  }

});

export default styles;
