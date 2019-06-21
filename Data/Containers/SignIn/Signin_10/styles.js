import { Platform, StyleSheet, Dimensions } from "react-native";
// Screen Styles
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  backgroundImage: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    flex: 4,
    backgroundColor: "#ffffff",
    zIndex: 0.8,
    position: "absolute"
  },

  header: {
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
    alignItems: "center",
    width: 30
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },
  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },
  right: {
    flex: 0.5
  },
  view01: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: "center"
  },
  logo10: {
    padding: 20,
    width: Metrics.WIDTH * 0.3,
    height: Metrics.HEIGHT * 0.13,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.05
  },
  view02: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.1
  },
  headertext: {
    fontFamily: "PlayfairDisplay-Bold",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: Fonts.moderateScale(30),
    width: Metrics.WIDTH * 0.9,
    color: "white"
  },
  view03: {
    height: Metrics.HEIGHT * 0.3,
    width: Metrics.WIDTH * 0.9,
    alignSelf: "center",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0
  },
  fbButton: {
    backgroundColor: Colors.facebook,
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.05
  },
  fbview: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  fbButtonText: {
    color: "white",
    fontSize: Fonts.moderateScale(17),
    left: 10,
    fontFamily: "SFUIDisplay-Regular",
    alignItems: "center",
    alignSelf: "center"
  },
  twButton: {
    backgroundColor: Colors.twitter,
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.WIDTH * 0.9,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: Metrics.HEIGHT * 0.03
  },
  twview: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  twButtonIcon: {
    height: 18,
    width: 18,
    alignItems: "center",
    alignSelf: "center"
  },
  twButtonText: {
    color: "white",
    fontSize: 17,
    left: 10,
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "SFUIDisplay-Regular"
  }
});

export default styles;
