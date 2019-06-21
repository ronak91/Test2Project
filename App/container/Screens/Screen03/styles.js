import { Platform, StyleSheet, Dimensions } from "react-native";
import Metrics from "../../Themes/Metrics";
import Colors from "../../Themes/Colors";
import Fonts from "../../Themes/Fonts";

const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },
  containMainBg: {
    backgroundColor: "#fff",
    height: Metrics.HEIGHT * 0.85,
    width: Metrics.WIDTH,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    elevation: 3,
    position: "absolute",
    bottom: 5
  },
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between"
  },
  maincontent: {
    ...Platform.select({
      ios: { marginTop: Metrics.WIDTH * 0.15 },
      android: {
        marginTop: Metrics.WIDTH * 0.2
      }
    })
  },
  rowMain: {
    backgroundColor: "white",
    width: Metrics.WIDTH * 0.3333,
    height: Metrics.WIDTH * 0.35,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#dcdcdc",
    borderWidth: Metrics.WIDTH * 0.001
  },

  barndIcon: {
    resizeMode: "contain",
    height: Metrics.WIDTH * 0.12,
    width: Metrics.WIDTH * 0.2
  }
});

export default styles;
