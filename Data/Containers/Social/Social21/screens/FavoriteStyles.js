
import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: "#fa6b7b",
  	height: (Metrics.HEIGHT * 0.1),
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: "#fa6b7b",
    paddingTop: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex:1
  },

  body: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: (Metrics.WIDTH * 0.01),
    paddingTop: (Metrics.WIDTH * 0.025)
  },

  searchIcon: {
    width: 17,
    height: 17,
  },

  filterTxt: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
  },

  rowMain:{
      backgroundColor:'rgba(0,0,0,0.5)',
      width: (Metrics.WIDTH * 0.50),
      height:(Metrics.HEIGHT * 0.28),
      alignItems:'center',
      alignItems:'flex-start',
      alignContent:'flex-start',
  },

  imgContainer: {
    width: (Metrics.WIDTH * 0.50),
    height:(Metrics.HEIGHT * 0.28),
  },

  shadowBg: {
    width: (Metrics.WIDTH * 0.50),
    height:(Metrics.HEIGHT * 0.28),
    bottom: 0,
    position:'absolute',
  },

  profileImage: {
    width: (Metrics.WIDTH) * 0.08,
    height: (Metrics.WIDTH) * 0.08,
    borderRadius: (Metrics.WIDTH) * 0.04,
    borderColor: Colors.snow,
    borderWidth: 1,
    marginTop: 1
  },

  likeIconBg: {
    width: Metrics.WIDTH * 0.062,
    height: Metrics.WIDTH * 0.062,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nameTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginTop: -1
  },

  watchIcon: {
    width: Metrics.WIDTH * 0.028,
    height: Metrics.WIDTH * 0.028,
    backgroundColor: Colors.transparent,
    marginTop: Metrics.WIDTH * 0.006,
  },

  watchDistanceTxt: {
    fontSize: Fonts.moderateScale(12),
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    backgroundColor: Colors.transparent,
    marginLeft: Metrics.WIDTH * 0.01,
  },

  bottomView: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH * 0.03),
    marginRight: (Metrics.WIDTH * 0.03),
    bottom: (Metrics.WIDTH * 0.03),
    position:'absolute'
  },

  nameWatchBg:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH * 0.03),
    marginTop: (Metrics.WIDTH * 0.01)
  },

  listBg: {
    width: Metrics.WIDTH
  },

  headerTxt: {
    color: Colors.snow
  }


});

export default styles;
