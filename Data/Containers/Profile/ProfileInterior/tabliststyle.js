
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#e6e6e6",
    flexDirection: 'column'
  },


  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.025),
    marginVertical:(Metrics.HEIGHT * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },

  rowMain:{
    backgroundColor:'transparent',
    width: (Metrics.WIDTH * 0.445),
    alignItems:'center',
    margin:(Metrics.WIDTH * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    flexDirection: 'column',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#6F6F6F',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },

  cardBgImage: {
    width: (Metrics.WIDTH * 0.445),
    height: (Metrics.HEIGHT * 0.24),
    borderRadius: 5,
    backgroundColor: Colors.snow
  },

  cardContent: {
    flexDirection: 'column',
    width: (Metrics.WIDTH * 0.445),
    backgroundColor: "#FFFFFF",
    marginTop: -5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  titleTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(17),
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'left'
  },

  addressBg: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: 'row'
  },

  mapPin: {
      width: 10,
      height: 16,
      resizeMode: 'contain'
  },

  addressTxt: {
    color: "#adadad",
    fontSize: Fonts.moderateScale(14),
    marginLeft: 10
  },

  dividerHorizontal: {
      width: (Metrics.WIDTH * 0.445),
      height: 1,
      marginTop: 20,
      backgroundColor: "#f2f2f2"
  },

  profileBg: {
    marginTop: 5,
    marginLeft: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },

  profileImg: {
      width: (Metrics.WIDTH) * 0.10,
      height: (Metrics.WIDTH) * 0.10,
      borderRadius: (Metrics.WIDTH) * 0.05,
      alignSelf: 'flex-start',
  },

  nameTimeBg: {
      flexDirection: 'column',
      marginLeft: 10,
      justifyContent: 'center'
  },

  nameTxt: {
    color: "#363636",
    width: (Metrics.WIDTH) * 0.28,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'left'
  },

  timeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(13),
    textAlign: 'left'
  }

});

export default styles;
