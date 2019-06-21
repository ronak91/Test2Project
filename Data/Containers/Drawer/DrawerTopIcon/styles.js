import { Platform, StyleSheet, Dimensions } from "react-native";

// Screen Styles
import { Fonts, Metrics, Colors } from "../../../Themes/";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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

  upperListContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "#11142a",
    paddingTop: Metrics.HEIGHT * 0.017,
    paddingBottom: Metrics.HEIGHT * 0.017,
    paddingLeft: Metrics.HEIGHT * 0.008,
    paddingRight: Metrics.HEIGHT * 0.008
  },

  upperRowMain: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.17,
        height: Metrics.WIDTH * 0.17
      },
      android: {
        width: Metrics.WIDTH * 0.22,
        height: Metrics.WIDTH * 0.22
      }
    }),
    justifyContent: "center",
    marginRight: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.01,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#23273d"
  },

  upperRowSelectedMain: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.17,
        height: Metrics.WIDTH * 0.17
      },
      android: {
        width: Metrics.WIDTH * 0.22,
        height: Metrics.WIDTH * 0.22
      }
    }),
    justifyContent: "center",
    marginRight: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.01,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#d9b63e"
  },

  upperListImage: {
    height: Metrics.HEIGHT * 0.05,
    width: Metrics.WIDTH * 0.1,
    resizeMode: "contain"
  },

  lowerListContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: Metrics.WIDTH * 0.04,
    marginVertical: Metrics.HEIGHT * 0.015,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingBottom: Metrics.HEIGHT * 0.03
  },

  lowerRowMain: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: Metrics.WIDTH * 0.445,
    height: Metrics.WIDTH * 0.445,
    marginBottom: Metrics.WIDTH * 0.01,
    marginTop: Metrics.WIDTH * 0.01,
    alignItems: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "#11142a"
  },

  imageBG: {
    width: Metrics.WIDTH * 0.445,
    height: Metrics.WIDTH * 0.445
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 0,
    position: "absolute",
    marginLeft: Metrics.WIDTH * 0.03,
    marginRight: Metrics.WIDTH * 0.04
  },

  profileContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: Metrics.HEIGHT * 0.01
  },

  profileImg: {
    width: Metrics.WIDTH * 0.065,
    height: Metrics.WIDTH * 0.065,
    borderRadius: Metrics.WIDTH * 0.0325,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: "cover"
  },

  likeCountText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.01,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        marginBottom: Metrics.HEIGHT * 0.01
      },
      android: {
        marginBottom: Metrics.HEIGHT * 0.005
      }
    })
  },

  likeImage: {
    ...Platform.select({
      ios: {
        marginBottom: Metrics.HEIGHT * 0.015
      },
      android: {
        marginBottom: Metrics.HEIGHT * 0.015
      }
    }),
    width: Metrics.HEIGHT * 0.0225,
    height: Metrics.HEIGHT * 0.0225,
    resizeMode: "contain"
  },

  listViewBg: {
    backgroundColor: "#0e1022",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 8,
      width: 0
    },
    zIndex: 999
  },

  profileView: {
    width: Metrics.WIDTH * 0.042
  }
});

export default styles;
