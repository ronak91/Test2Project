
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#2d324f',
    height: (Metrics.HEIGHT * 0.1),
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    marginTop: (Metrics.HEIGHT) * 0.007
  },

  body: {
    flex: 3.7,
    flexDirection:'row',
    backgroundColor: Colors.snow,
    borderRadius:5,
    height: (Metrics.HEIGHT * 0.055),
    marginTop: (Metrics.HEIGHT * 0.012)
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular,

  },

  right: {
    flex: 0.5,
    marginLeft: (Metrics.WIDTH) * 0.06,
    backgroundColor: 'transparent'
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  userGroupIcon: {
    width: (Metrics.WIDTH) * 0.09,
    height: (Metrics.WIDTH) * 0.09,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    marginTop: (Metrics.HEIGHT) * 0.007
  },

  rowBg: {
    width: (Metrics.WIDTH) * 0.92,
    alignSelf: 'center' ,
    backgroundColor: Colors.snow,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    justifyContent: 'center',
    shadowOffset:{width: 3,  height: 3},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
  },

  moreIcon: {
    marginTop: -(Metrics.HEIGHT) * 0.015
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
    textAlign: 'left'
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginTop: (Metrics.HEIGHT) * 0.015,
    textAlign: 'left'
  },

  dividerHorizontal: {
    width: (Metrics.WIDTH) * 0.95,
    height: 1,
    backgroundColor: "#F2F2F2",
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.022
  },

  likeCommentShareText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    marginLeft: (Metrics.WIDTH) * 0.025,
    color: "#6f6f6f"
  },

  likeCommentShareImage: {
    width: (Metrics.WIDTH) * 0.06,
    height: (Metrics.HEIGHT) * 0.03,
    resizeMode: 'contain'
  },

  dividerVertical: {
    width: (Metrics.WIDTH) * 0.003,
    height: (Metrics.HEIGHT) * 0.04,
    backgroundColor: "#F2F2F2",
    alignSelf: 'flex-end'
  },

  searchText:{
    flex:2,
    height:(Metrics.HEIGHT) * 0.066,
    marginLeft: (Metrics.WIDTH) * 0.02,
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#c3c3c3",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },

  profilePicView:{
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    padding: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    alignItems: 'center',
    shadowOffset:{width: 2,  height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },

  headerText:{
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18),
    color: "#bfbfbf",
    marginLeft: (Metrics.HEIGHT) * 0.015
  },

  searchHeaderView:{
    borderRadius: 5,
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    backgroundColor: 'green'
  },

  rowHeaderView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015,
    width: (Metrics.WIDTH) * 0.84,
    alignSelf: 'center',
  },

  rowHeaderNameView:{
    flexDirection: 'column',
    marginLeft: (Metrics.WIDTH) * 0.03
  },

  rowDescriptionView:{
    width: (Metrics.WIDTH) * 0.84,
    alignSelf: 'center'
  },

  postDescImg:{
    width: (Metrics.WIDTH) * 0.84,
    height: (Metrics.HEIGHT) * 0.20,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.015,
    resizeMode: 'cover'
  },

  likeCommentShareView:{
    flexDirection: 'row',
    marginTop: (Metrics.HEIGHT) * 0.015,
    marginBottom: (Metrics.HEIGHT) * 0.015,
    marginLeft: (Metrics.WIDTH) * 0.045
  },

  likeView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.21,
    alignItems: 'center'
  },

  commentView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.33,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.06
  },

  shareView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH) * 0.21,
    alignItems: 'center',
    marginLeft: (Metrics.WIDTH) * 0.06
  },

  searchView:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft: (Metrics.WIDTH) * 0.03,
    backgroundColor: 'transparent',
    height:30
  },

  cameraView:{
    marginRight: (Metrics.HEIGHT) * 0.007
  },

  mainListView:{
    width: (Metrics.WIDTH)
  }

});

export default styles;
