import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Themes/";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
  },

  headerView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Metrics.HEIGHT * 0.06,
    paddingBottom: Metrics.HEIGHT * 0.025,
    paddingHorizontal: Metrics.WIDTH * 0.04
  },

  headerImage: {
    width: Metrics.HEIGHT * 0.1,
    height: Metrics.HEIGHT * 0.1,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: Metrics.WIDTH * 0.01,
      height: Metrics.HEIGHT * 0.01
    },
    ...Platform.select({
      android: {
        elevation: 6
      }
    })
  },

  headerTitle: {
    color: "white",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(16)
  },

  headerSubTitle: {
    color: "white",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(12),
    marginTop: 5
  },

  musicCoverImage: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.4
  },

  playerTop: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.15,
    marginTop: Metrics.WIDTH * 0.015,
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center"
  },

  playerTopTitle: {
    color: "white",
    fontFamily: Fonts.type.helveticaRegular,
    fontSize: Fonts.moderateScale(20),
    fontWeight: "bold",
    marginBottom: Metrics.WIDTH * 0.005
  },

  bottomWithSeekbar: {
    width: Metrics.WIDTH * 0.82,
    height: Metrics.HEIGHT * 0.05,
    alignItems: "center",
    alignSelf: "center"
  },

  seekBar: {
    height: Metrics.HEIGHT * 0.04,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },

  playerTimeStart: {
    color: "white"
  },

  playerTimeEnd: {
    color: "white"
  },

  containerStyle: {
    alignSelf: "center",
    height: 5
  },

  trackStyle: {
    height: Metrics.HEIGHT * 0.005,
    borderRadius: 4
  },

  markerStyle: {
    height: Metrics.HEIGHT * 0.02,
    width: Metrics.HEIGHT * 0.02,
    backgroundColor: "#f87362",
    borderWidth: 0.5,
    borderColor: "#fa6982"
  },

  bottomControler: {
    width: Metrics.WIDTH * 0.48,
    height: Metrics.HEIGHT * 0.05,
    marginTop: Metrics.WIDTH * 0.15,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row"
  },

  musicBar: {
    flex: 1
  },

  playBtns: {
    width: Metrics.WIDTH * 0.16,
    alignItems: "center"
  },

  musicTimeView: {
    flexDirection: "row",
    height: Metrics.WIDTH * 0.05,
    width: Metrics.WIDTH * 0.8,
    justifyContent: "space-between"
  },

  shuffleView: {
    width: Metrics.WIDTH * 0.2,
    alignItems: "center",
    paddingRight: Metrics.WIDTH * 0.04
  },

  shuffleImg: {
    width: Metrics.WIDTH * 0.08,
    paddingVertical: Metrics.HEIGHT * 0.005,
    alignItems: "center"
  },

  songNameView: {
    width: Metrics.WIDTH * 0.6,
    alignItems: "center"
  },

  repeateView: {
    width: Metrics.WIDTH * 0.2,
    alignItems: "center",
    paddingLeft: Metrics.WIDTH * 0.02
  },

  sliderStyle: {
    backgroundColor: "#fff",
    height: Metrics.WIDTH * 0.008
  },

  sliderTrack: {
    height: Metrics.HEIGHT * 0.007,
    backgroundColor: '#0004',
  },

	slider: {
	 height: Metrics.HEIGHT * 0.007,
	 width: Metrics.WIDTH * 0.8,
	 alignSelf: 'center',
 },
});

export default styles;
