import { Platform, StyleSheet, Dimensions, I18nManager } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    backgroundColor: "transparent",
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

  backk: {
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.31
      },
      android: {
        height: Metrics.HEIGHT * 0.32
      }
    })
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
    flex: 3,
    alignItems: "center"
  },

  textTitle: {
    color: Colors.snow,
    fontFamily: Fonts.type.helveticaNeueLight,
    fontSize: Fonts.moderateScale(20)
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
      }
    })
  },

  likeBtn: {
    width: Metrics.WIDTH * 0.09,
    height: Metrics.WIDTH * 0.09,
  },

  backBtn: {
    width: Metrics.WIDTH * 0.089,
    height: Metrics.WIDTH * 0.089,
  },

  backview: {
    backgroundColor: "red",
    paddingLeft: Metrics.HEIGHT * 0.03,
    paddingTop: Metrics.HEIGHT * 0.02,
    justifyContent: "flex-end",
    alignItems: I18nManager.isRTL ? "flex-end" : "flex-start"
  },

  maincontent: {
    paddingLeft: Metrics.HEIGHT * 0.06,
    paddingTop: Metrics.HEIGHT * 0.03,
    paddingRight: Metrics.HEIGHT * 0.06
  },

  fashion: {
    textAlign: "left",
    fontFamily: Fonts.MyriadPro,
    color: "#b2b2b2",
    fontSize: Fonts.moderateScale(12)
  },

  desc: {
    color: "#0e1130",
    textAlign: I18nManager.isRTL ? "right" : "left",
    paddingTop: Metrics.HEIGHT * 0.02,
    lineHeight: Metrics.HEIGHT * 0.04,
    fontFamily: Fonts.helveticaRegular,
    fontSize: Fonts.moderateScale(22),
    textAlign: "left"
  },

  likeview: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.02,
    alignItems: "center"
  },

  hearttext: {
    fontSize: Fonts.moderateScale(12),
    marginLeft: I18nManager.isRTL ? 0 : Metrics.HEIGHT * 0.02,
    paddingRight: I18nManager.isRTL ? Metrics.HEIGHT * 0.02 : 0,
    color: "#111111"
  },

  commentview: {
    paddingLeft: Metrics.HEIGHT * 0.03,
    marginTop: -(Metrics.HEIGHT * 0.008)
  },

  descc: {
    paddingTop: Metrics.HEIGHT * 0.02,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(11)
      },
      android: {
        fontSize: Fonts.moderateScale(12)
      }
    }),

    color: "#111111",
    lineHeight: Metrics.HEIGHT * 0.03,
    fontFamily: Fonts.helveticaRegular,
    textAlign: "left"
  },

  comment: {
    textAlign: "left",
    fontSize: Fonts.moderateScale(22),
    color: "#0e1130",
    paddingHorizontal: Metrics.WIDTH * 0.04,
    paddingTop: Metrics.HEIGHT * 0.02,
    fontFamily: Fonts.helveticaRegular,
    fontWeight: "bold"
  },

  commentvieww: {
    paddingTop: Metrics.HEIGHT * 0.03
  },

  listview: {
    marginTop: Metrics.HEIGHT * 0.03
  },

  containerline: {
    width: Metrics.WIDTH * 0.4,
    borderWidth: 1,
    borderColor: "#b2b2b2"
  },

  listdecview: {
    paddingVertical: Metrics.HEIGHT * 0.02,
    alignItems: "center"
  },

  img: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.15,
        height: Metrics.WIDTH * 0.15,
        borderRadius: Metrics.WIDTH * 0.075
      },
      android: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.WIDTH * 0.2,
        borderRadius: Metrics.WIDTH * 0.1,
        backgroundColor: "#fff"
      }
    }),
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#efefef"
  },

  prouser: {
    width: Metrics.WIDTH * 0.93,
    borderWidth: 1,
    borderColor: "#b2b2b2",
    ...Platform.select({
      ios: {
        marginTop: Metrics.HEIGHT * 0.02
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.04
      }
    }),

    paddingBottom: Metrics.HEIGHT * 0.02
  },

  namedateview: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Metrics.WIDTH * 0.06
  },

  name: {
    color: "#c1c1c1",
    fontFamily: Fonts.MyriadPro,
    fontSize: Fonts.moderateScale(12),
    paddingTop: Metrics.HEIGHT * 0.01
  },

  floatingView: {
    alignSelf: "center",
    width: Metrics.WIDTH * 0.89,
    justifyContent: "center",
    paddingTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

  sendmsg: {
    backgroundColor: "#ffc700",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.05
      },
      android: {
        height: Metrics.HEIGHT * 0.06
      }
    }),

    marginTop: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.9,
    marginBottom: Metrics.HEIGHT * 0.04,
    borderRadius: 3,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  html: {
    marginLeft: 12,
    marginRight: 12,
    flex: 1
  }
});

export default styles;
