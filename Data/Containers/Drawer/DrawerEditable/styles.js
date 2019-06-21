import { Platform, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  drawercontainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "white"
  },

  headerSec: {
    backgroundColor: "#2d324f",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.045,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "center"
  },

  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  textTitle: {
    color: "#fff",
    fontSize: Fonts.moderateScale(16),
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  right: {
    flex: 0.5
  },

  mainview: {
    backgroundColor: "#2d324f",
    height: Metrics.HEIGHT,
    paddingHorizontal: Metrics.WIDTH * 0.06,
    flexDirection: "column"
  },

  headertxt: {
    fontSize: Fonts.moderateScale(32),
    textAlign: "center",
    color: "white"
  },

  listrow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: Metrics.HEIGHT * 0.04
  },

  rowtxt: {
    color: "white",
    fontSize: Fonts.moderateScale(20),
    backgroundColor: "transparent",
    marginLeft: Metrics.HEIGHT * 0.025,
    textAlign: "center",
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  rowCountText: {
    color: "white",
    fontSize: Fonts.moderateScale(17),
    backgroundColor: "transparent",
    textAlign: "center",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingLeft: Metrics.HEIGHT * 0.015,
    paddingRight: Metrics.HEIGHT * 0.015
  },

  rowCountBg: {
    backgroundColor: "#d9b63e",
    borderRadius: 20,
    marginLeft: Metrics.HEIGHT * 0.025,
    justifyContent: "center",
    alignItems: "center",
    height: Metrics.HEIGHT * 0.045
  },

  headerMenu: {
    backgroundColor: "#2d324f",
    height: 56,
    marginLeft: -(Metrics.WIDTH * 0.05),
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        height: 66,
        paddingTop: Metrics.HEIGHT * 0.02
      }
    }),
    elevation: 0
  },

  header: {
    backgroundColor: "#2d324f",

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: 56
      },
      android: {
        height: 66,
        paddingTop: Metrics.HEIGHT * 0.02
      }
    }),
    elevation: 0
  },

  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  body: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#2d324f"
  },

  right: {
    flex: 0.5
  },

  headerTitle: {
    color: "#fff",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(18)
  },

  iconColor: {
    color: "#fff"
  },

  forgotPassword: {
    color: "#0691ce",
    fontSize: Fonts.moderateScale(17),
    height: Metrics.HEIGHT * 0.05,
    width: Metrics.WIDTH,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    top: Metrics.HEIGHT * 0.44,
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  profileContainer: {
    bottom: Metrics.HEIGHT * 0.035,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute"
  },

  profileImage: {
    height: Metrics.HEIGHT * 0.055,
    width: Metrics.HEIGHT * 0.055,
    borderRadius: Metrics.HEIGHT * 0.0275,
    borderWidth: Metrics.WIDTH * 0.006,
    borderColor: "white"
  },

  profileDetail: {
    marginLeft: Metrics.WIDTH * 0.015
  },

  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Metrics.WIDTH * 0.35
  },

  name: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(14),
    color: "white",
    backgroundColor: "transparent"
  },

  place: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(10),
    color: "#797a87",
    backgroundColor: "transparent",
    marginTop: Metrics.HEIGHT * 0.0005,
    textAlign: "left"
  },

  filterHeader: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.2
  },

  filterIcon: {
    transform: [{ rotate: "270deg" }],
    height: Metrics.HEIGHT * 0.045,
    width: Metrics.HEIGHT * 0.045,
    borderRadius: Metrics.HEIGHT * 0.0225,
    marginLeft: Metrics.WIDTH * 0.05,
    backgroundColor: "#424761",
    alignItems: "center",
    justifyContent: "center"
  },

  filter: {
    color: "#fff",
    fontSize: Fonts.moderateScale(22),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  filterImg: {
    marginLeft: Metrics.WIDTH * 0.045,
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.195
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.2
      }
    }),
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.HEIGHT * 0.06
  },

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: Metrics.HEIGHT * 0.045
  },

  rowMain: {
    borderRadius: Metrics.HEIGHT * 0.025,
    marginBottom: Metrics.HEIGHT * 0.015,
    paddingHorizontal: Metrics.HEIGHT * 0.025,
    paddingVertical: Metrics.HEIGHT * 0.009,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#282d47"
  },

  listItem: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    marginRight: Metrics.HEIGHT * 0.015,
    overflow: "hidden",
    width: Metrics.WIDTH * 0.5,
    textAlign: "left"
  },

  bottomView: {
    height: Metrics.HEIGHT * 0.4,
    flexDirection: "column"
  },

  addView: {
    width: Metrics.WIDTH * 0.25,
    height: Metrics.HEIGHT * 0.045,
    borderRadius: Metrics.HEIGHT * 0.025,
    paddingHorizontal: Metrics.WIDTH * 0.025,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#22a7f0"
  },

  addText: {
    color: "white",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18)
  },

  modalView: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#0006",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },

  modal: {
    width: Metrics.WIDTH * 0.9,
    flexDirection: "column",
    backgroundColor: "white"
  },

  addItemTitle: {
    color: "#000",
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.015,
    marginTop: Metrics.HEIGHT * 0.015,
    marginBottom: Metrics.HEIGHT * 0.035,
    fontFamily: Fonts.type.sfuiDisplayRegular
  },

  addItemBg: {
    marginLeft: Metrics.HEIGHT * 0.015,
    marginRight: Metrics.HEIGHT * 0.015,
    borderColor: "#000",
    borderWidth: 0.8,
    borderRadius: 5,
    marginBottom: Metrics.HEIGHT * 0.045
  },

  inputEmail: {
    color: "#000",
    marginLeft: Metrics.HEIGHT * 0.015,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingTop: Metrics.HEIGHT * 0.01,
    paddingBottom: Metrics.HEIGHT * 0.01
  },

  buttonBg: {
    width: Metrics.WIDTH * 0.445,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: Metrics.HEIGHT * 0.015,
    paddingBottom: Metrics.HEIGHT * 0.015,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16)
  },

  deleteText: {
    marginLeft: Metrics.HEIGHT * 0.015,
    marginRight: Metrics.HEIGHT * 0.015,
    color: "#22a7f0",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginBottom: Metrics.HEIGHT * 0.045
  },

  rowVerticalDivider: {
    width: 1,
    height: Metrics.HEIGHT * 0.04,
    backgroundColor: "#202439",
    marginRight: Metrics.HEIGHT * 0.008
  },

  bottomViewBg: {
    height: 1,
    backgroundColor: "#424761",
    marginTop: Metrics.HEIGHT * 0.03,
    marginBottom: Metrics.HEIGHT * 0.03
  },

  dialogHorizontalDivider: {
    height: 2,
    backgroundColor: "#22a7f0"
  },

  dialogVerticalDivider: {
    width: 2,
    backgroundColor: "#22a7f0"
  }
});

export default styles;
