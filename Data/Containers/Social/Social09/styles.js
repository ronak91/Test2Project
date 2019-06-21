
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  left:{
    paddingTop: 5,
    flex: 1,
  },

  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: Colors.snow,
    fontSize: Fonts.moderateScale(25)
  },

  titleText:{
    color: Colors.snow,
  },

  right:{
    flex: 1
  },

  header: {
    backgroundColor: '#2d324f',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  rowBg: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    marginLeft: (Metrics.WIDTH * 0.03),
    marginTop: (Metrics.HEIGHT) * 0.015
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
  },

  rowNameTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(17),
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  rowTimeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'
  },

  dividerHorizontal: {
    width: ((Metrics.WIDTH) * 0.99) + 5,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: "#D7D7D7",
    alignSelf: 'flex-end',
  },

  bottomMainView:{
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.10,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',

  },

  bottomView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    marginLeft: (Metrics.WIDTH) * 0.035,
    marginRight: (Metrics.WIDTH) * 0.035,
  },

  commentText:{
    backgroundColor: "#FAFAFA",
    marginLeft: (Metrics.WIDTH) * 0.03,
    padding: (Metrics.HEIGHT) * 0.0012,
    borderRadius: 5,
    borderWidth: (Metrics.HEIGHT) * 0.001,
    borderColor: "#c8c9cd",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#c7c7cc",
    width: (Metrics.WIDTH) * 0.7
  },

  micImg:{
    width: (Metrics.HEIGHT) * 0.045,
    height: (Metrics.HEIGHT) * 0.045,
    marginLeft: (Metrics.WIDTH) * 0.03,
    marginTop: (Metrics.HEIGHT) * 0.007,
  },

  nameTimeMainView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.045,
    width: (Metrics.WIDTH) * 0.77
  },

  nameTimeView:{
    flexDirection: 'row'
  },

  listMainView:{
    width: (Metrics.WIDTH)
  },

});

export default styles;
