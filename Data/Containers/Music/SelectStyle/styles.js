import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header:{
    height: Metrics.HEIGHT * 0.13,
    justifyContent: 'center',
    alignItems: 'center'
  },

  select:{
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(23),
    color: Colors.snow,
  },

  choose:{
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal:(Metrics.WIDTH * 0.05),
    marginTop:(Metrics.HEIGHT * 0.10),
  },

  musicname:
  {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    textAlign: 'center',
    backgroundColor: "transparent"
  },

  next:{
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(14),
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: Metrics.HEIGHT * 0.02,
  },

  nextview:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.10,
  },

  txtBg:{
    marginBottom: Metrics.HEIGHT * 0.01,
    marginHorizontal:  Metrics.WIDTH * 0.01,
    borderRadius:  Metrics.HEIGHT * 0.006,
    paddingVertical:  Metrics.HEIGHT * 0.02,
    paddingHorizontal:  Metrics.WIDTH * 0.03,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: 'center',
  },

  selectedButton: {
    backgroundColor: "#fff",
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: Metrics.HEIGHT * 0.005,
    },
    elevation: Fonts.moderateScale(8),
  },

  gradientStyle:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  arrow:{
    paddingTop: Metrics.HEIGHT * 0.07,
    paddingLeft:Metrics.WIDTH * 0.03
  }
});

export default styles;
