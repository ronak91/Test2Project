
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    width: (Metrics.WIDTH),
    height:Metrics.HEIGHT*0.5,
    backgroundColor: "#FFFFFF",
    flexDirection: 'column',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  rowdetail:{
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  names:{
    marginLeft: 15,
    flexDirection: 'column'
  },
  prodetail:{
    flexDirection:'column',
    justifyContent:'center'
  },
  followbtn:{
    justifyContent: 'center',
    marginRight: (Metrics.WIDTH) * 0.045,
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.HEIGHT) * 0.034,
    borderWidth: 1,
    borderColor: "#6091ce",
    borderRadius: 20
  },
  txtfollow:{
    color: "#6091ce",
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(12)
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
},

  profileImg: {
    width: (Metrics.WIDTH) * 0.10,
    height: (Metrics.WIDTH) * 0.10,
    borderRadius: (Metrics.WIDTH) * 0.05
  },

  nameTxt: {
      color: "#363636",
      fontSize: Fonts.moderateScale(14),
      fontFamily: Fonts.type.SFUIDisplayMedium,
      textAlign: 'left'
  },

  designationTxt: {
      color: "#b7b7b7",
      fontSize: Fonts.moderateScale(12),
      marginTop: 2,
      textAlign: 'left'
  },

  followBg: {
    borderColor: "#0691ce",
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    width: (Metrics.WIDTH) * 0.40,
    height: (Metrics.HEIGHT) * 0.06,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.02,
    marginBottom: (Metrics.HEIGHT) * 0.02,
  },

  followTxt: {
    fontFamily: Fonts.type.SFUIDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    color: "#0691ce",
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: (Metrics.WIDTH) * 0.28,
  }

});

export default styles;
