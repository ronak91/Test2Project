import { Platform, StyleSheet, Dimensions } from "react-native";

// Screen Styles
import { Fonts, Metrics } from "../../../Themes";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainSec: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
  },

  header: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.08
      },
      android: {
        height: 66,
        paddingTop: Metrics.HEIGHT * 0.02
      }
    }),
    elevation: 0
  },
  backArrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  left: {
    flex: 0.5,
    backgroundColor: "transparent"
  },

  body: {
    flex: 2,
    alignItems: "center"
  },

  right: {
    flex: 0.5
  },

  headerTitle: {
    color: "#fff",
    fontFamily: "SFUIDisplay-Semibold",
    fontSize: Fonts.moderateScale(18)
  },

  iconColor: {
    color: "#fff"
  },

  contentSec: {
    height: Metrics.HEIGHT * 0.92,
    width: Metrics.WIDTH
  }
});

export default styles;
