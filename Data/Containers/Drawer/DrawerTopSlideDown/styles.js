import { StyleSheet, PixelRatio, Platform, I18nManager } from "react-native";
const deviceScreen = require("Dimensions").get("window");
import { Fonts, Metrics, Colors } from "../../../Themes/";

module.exports = StyleSheet.create({
  scrollView: {
    backgroundColor: "#B99BC4"
  },
  container: {
    flex: 1,
    backgroundColor: "#C5B9C9"
  },
  controlPanel: {
    flex: 1,
    backgroundColor: "transparent"
  },
  controlPanelText: {
    color: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 25
  },
  controlPanelWelcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 25,
    color: "white",
    fontWeight: "bold"
  },
  categoryLabel: {
    fontSize: 15,
    textAlign: "left",
    left: 10,
    padding: 10,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: "#d6d7da",
    padding: 10,
    alignItems: "center"
  },
  lastRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: "#d6d7da",
    padding: 10,
    alignItems: "center"
  },
  rowLabel: {
    left: 10,
    fontSize: 15,
    flex: 1
  },
  rowInput: {
    right: 10
  },
  sliderMetric: {
    right: 10,
    width: 30
  },
  slider: {
    width: 150,
    height: 30,
    margin: 10
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: "#d6d7da"
  },
  label: {
    fontSize: 20,
    textAlign: "left",
    margin: 0
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderColor: "#eeeeee",
    borderWidth: 1,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: "#aaaaaa",
    marginRight: 20,
    marginLeft: 20,
    alignSelf: "center"
  },
  linearGradient: {
    width: 360,
    height: 200,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  menucontrolPanel: {
    flex: 1,
    backgroundColor: "transparent"
  },
  menuimageBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    paddingTop: 25
  },
  menusearchSec: {
    width: Metrics.WIDTH * 0.84,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  searchBorder: {
    borderColor: "#3379b5",
    backgroundColor: "#0a5ca4"
  },
  searchInputField: {
    height: Platform.OS === "ios" ? 38 : 45,
    paddingLeft: 15,
    textAlign: I18nManager.isRTL ? "right" : "left"
  },
  menuListSec: {
    width: Metrics.WIDTH * 0.84,
    alignSelf: "center",
    marginTop: 25
  },
  menuList: {
    width: Metrics.WIDTH * 0.84,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  menuItemText: {
    marginLeft: 7,
    color: "#ffffff",
    fontFamily: "SFUIDisplay-Regular"
  },
  msgCountSec: {
    position: "absolute",
    right: 0,
    bottom: 10
  },
  menumsgCount: {
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    borderRadius: 6,
    width: 20,
    height: 12,
    fontSize: 8
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
    width: 30,
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
  drawercontainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#2d324f"
  }
});
