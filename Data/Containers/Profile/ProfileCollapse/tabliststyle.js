
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.10,
    height: (Metrics.WIDTH) * 0.10,
    borderRadius: (Metrics.WIDTH) * 0.05
  },

  nameTxt: {
      color: "#363636",
      fontSize: Fonts.moderateScale(14),
      fontFamily: Fonts.type.sfuiDisplayMedium,
      textAlign: 'left'
  },

  designationTxt: {
      color: "#b7b7b7",
      fontSize: Fonts.moderateScale(12),
      marginTop: (Metrics.HEIGHT) * 0.002,
      textAlign: 'left'
  },

  mainRow:{
    flexDirection: 'row',
    margin: (Metrics.HEIGHT) * 0.015,

    alignItems: 'center'
  },

  nameDesignationMainView:{
    marginLeft: (Metrics.WIDTH) * 0.045,
    flexDirection: 'column'
  },

  nameDesignationView:{
    flexDirection:'column',
    justifyContent:'center'
  },

  dividerHorizontal:{
    width: (Metrics.WIDTH) * 0.95,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor:'#e6e6e6',
    justifyContent:'center',
    alignSelf:'center'
  }

});

export default styles;
