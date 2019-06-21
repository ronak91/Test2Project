import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  screenBg: {
    flex: 1,
    width: Metrics.WIDTH,
    height: Metrics.WIDTH,
    backgroundColor: "black"
  },

  logostyle: {
    alignSelf: "center",
    marginTop: 30,
    width: 130,
    height: 100
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "transparent",
    width: 30
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
  right: {
    flex: 0.5,
    backgroundColor: "transparent"
  },
  body: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "transparent"
  },

  textTitle: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    alignSelf: "center",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    textAlign: "center",
    justifyContent: "center"
  },

  container: {
    alignItems: "center",
    flex: 1
  },
  headertext: {
    fontFamily: Fonts.Bariol,
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    width: Metrics.WIDTH * 0.9,
    color: "#ffffff",
    marginTop: Metrics.HEIGHT * 0.1
  },
  desctext: {
    fontFamily: "SFUIDisplay-Regular",
    backgroundColor: "transparent",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    width: Metrics.WIDTH * 0.9,
    color: Colors.txtgrey,
    marginTop: Metrics.WIDTH * 0.05
  },
  form: {
    alignSelf: "center",
    marginTop: Metrics.WIDTH * 0.03
  },
  inputemail: {
    textAlign: "center",
    fontFamily: Fonts.SFUIDisplayRegular,
    color: "white"
  },

  buttongetstarted: {
    backgroundColor: "#0691ce",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    width: Metrics.WIDTH * 0.8,
    marginTop: 20
  },
  buttongettext: {
    alignSelf: "center",
    fontFamily: "SFUIDisplay-Semibold",
    color: "white"
  },

  backicon: {
    width: 10,
    height: 18,
    marginLeft: 20,
    marginTop: 5
  },
  item: {
    justifyContent: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    marginTop: Metrics.WIDTH * 0.01,
    height: Metrics.WIDTH * 0.12
  },
  btnget: {
    backgroundColor: "#0691ce",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.8,
    marginTop: Metrics.WIDTH * 0.05,
    height: Metrics.WIDTH * 0.12,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default styles;
