import { Platform, StyleSheet, Dimensions } from "react-native";

// Screen Styles
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2d324f",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.03,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },
  backArrow: {
    width: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent
  },

  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.001,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: "column"
  },

  lastRowBg: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    justifyContent: "center"
  },

  rowBg: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    justifyContent: "center",
    marginBottom: Metrics.HEIGHT * 0.025
  },

  profileImg: {
    width: Metrics.WIDTH * 0.12,
    height: Metrics.WIDTH * 0.12,
    borderRadius: Metrics.WIDTH * 0.06,
    alignSelf: "flex-start"
  },

  rowNameTxt: {
    color: "#363636",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    textAlign: "left"
  },

  rowTimeTxt: {
    color: "#b7b7b7",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  rowDescTxt: {
    color: "#6f6f6f",
    fontSize: Fonts.moderateScale(13),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: "left"
  },

  dividerHorizontal: {
    width: Metrics.WIDTH * 0.9,
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: "#F2F2F2",
    alignSelf: "center"
  },

  likeCommentText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.WIDTH * 0.02,
    color: "#6f6f6f"
  },

  likeCommentImage: {
    width: Metrics.WIDTH * 0.06,
    height: Metrics.HEIGHT * 0.03,
    resizeMode: "contain"
  },

  dividerVertical: {
    width: Metrics.WIDTH * 0.003,
    height: Metrics.HEIGHT * 0.04,
    backgroundColor: "#F2F2F2",
    alignSelf: "flex-end"
  },

  // searchViewBg:{
  //   backgroundColor: "#c8c8cb",
  //   width: (Metrics.WIDTH),
  //   height: (Metrics.HEIGHT) * 0.09,
  //   justifyContent: 'center'
  // },
  //
  // searchView:{
  //   backgroundColor: Colors.snow,
  //   borderRadius: 5,
  //   paddingTop: (Metrics.HEIGHT) * 0.008,
  //   paddingBottom: (Metrics.HEIGHT) * 0.008,
  //   marginLeft: (Metrics.WIDTH) * 0.02,
  //   marginRight: (Metrics.WIDTH) * 0.02,
  //   flexDirection: 'row',
  //   justifyContent: 'center'
  // },

  searchText: {
    color: "#a8a8a8",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Metrics.WIDTH * 0.03
  },

  listMainView: {
    width: Metrics.WIDTH,
    backgroundColor: "#f2f2f2"
  },

  postDescImg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.35,
    alignSelf: "center",
    resizeMode: "stretch"
  },

  postInfoView: {
    backgroundColor: Colors.snow,
    flexDirection: "row",
    width: Metrics.WIDTH * 0.92,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.022,
    marginBottom: Metrics.HEIGHT * 0.022
  },

  postNameTimeView: {
    flexDirection: "column",
    marginLeft: Metrics.WIDTH * 0.04,
    width: Metrics.WIDTH * 0.5,
    alignSelf: "center"
  },

  likeCommentView: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.006
  },

  searchViewBg: {
    backgroundColor: "#e9e9e9",
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.08,
    justifyContent: "center",
    alignItems: "center"
  },

  searchView: {
    backgroundColor: Colors.snow,
    borderRadius: 5,
    width: Metrics.WIDTH * 0.95,
    height: Metrics.HEIGHT * 0.06,
    alignItems: "center",
    flexDirection: "row"
  },

  searchText: {
    color: "#8e8e93",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Metrics.WIDTH * 0.03
  }
});

export default styles;
