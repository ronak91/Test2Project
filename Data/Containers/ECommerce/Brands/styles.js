import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  header: {
    backgroundColor: "#0e1130",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: Metrics.HEIGHT * 0.02
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Metrics.WIDTH * 0.01
  },

  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: "center",
    fontFamily: Fonts.type.helveticaNeueLight
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    })
  },

  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between"
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

  searchInput: {
    color: "#6d6d71",
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    ...Platform.select({
      ios: {}
    })
  }
});

export default styles;
