import { StyleSheet, PixelRatio, Platform } from "react-native";
const deviceScreen = require("Dimensions").get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5B9C9"
  },
  drawercontainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#2d324f"
  },
  headerSec: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25)
      }
    }),
    elevation: 0
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
    marginTop: 5,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },
  right: {
    flex: 0.5
  },
  mainText: {
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

  /*Menu Section START*/
  menuContainer: {
    backgroundColor: "#11142a",
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
    // paddingTop: Fonts.moderateScale(25),
  },
  menucontrolPanel: {
    // flex: 1,
    paddingTop: Fonts.moderateScale(25),
    paddingLeft: Fonts.moderateScale(20)
  },
  userProfiles: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  userImageStyle: {
    width: Metrics.WIDTH * 0.2,
    height: Metrics.WIDTH * 0.2,
    borderRadius: Metrics.WIDTH * 0.1,
    borderWidth: 2,
    borderColor: Colors.snow
    // marginLeft: 40
  },
  userDetailsStyle: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    height: 50,
    justifyContent: "center",
    marginLeft: 10
  },
  userDetailsText: {
    fontSize: Fonts.moderateScale(15),
    color: Colors.snow
  },
  menumainview: {
    marginLeft: Metrics.HEIGHT * 0.045,
    marginTop: Metrics.HEIGHT * 0.15,
    marginBottom: Metrics.HEIGHT * 0.15
  },
  listrow: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginBottom: 15
  },
  rowtxt: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    backgroundColor: "transparent",
    marginLeft: Fonts.moderateScale(15),
    textAlign: "center",
    fontFamily: Fonts.type.sfuiDisplayLight
  },
  notiCountSec: {
    backgroundColor: "#d9b63e",
    marginLeft: Fonts.moderateScale(10),
    marginTop: Fonts.moderateScale(3),
    borderRadius: Fonts.moderateScale(10),
    height: Fonts.moderateScale(17),
    width: Fonts.moderateScale(40),
    alignItems: "center",
    justifyContent: "center"
  },
  notiCount: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(13)
  },
  profileContainer: {
    bottom: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: Metrics.HEIGHT * 0.045,
    left: Metrics.HEIGHT * 0.035
  },
  profileBody: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profileImage: {
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.HEIGHT * 0.1,
    borderRadius: Metrics.HEIGHT * 0.05,
    borderWidth: 2.5,
    borderColor: "white"
  },
  profileDetail: {
    marginLeft: Metrics.WIDTH * 0.04
  },
  profileDetailStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Metrics.WIDTH * 0.5
  },
  name: {
    fontFamily: Fonts.type.sfuiDisplayMedium,
    fontSize: Fonts.moderateScale(18),
    color: Colors.snow,
    backgroundColor: "transparent"
  },
  rowicon: {
    tintColor: Colors.snow,
    height: Metrics.HEIGHT * 0.035,
    resizeMode: "contain",
    alignSelf: "center",
    alignItems: "center"
  },
  rowiconBg: {
    marginLeft: Metrics.WIDTH * 0.05,
    height: Metrics.HEIGHT * 0.035
  },
  place: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(13),
    color: "#797a87",
    backgroundColor: "transparent",
    marginTop: Metrics.HEIGHT * 0.004,
    textAlign: "left"
  },
  headerMenu: {
    backgroundColor: "#11142a",
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
  }
  /*Menu Section END*/
});
