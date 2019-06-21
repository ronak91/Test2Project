
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop: Fonts.moderateScale(15)
			}
    }),
		elevation: 0
  },
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
  },
	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
    width: 30
  },
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
	right: {
    flex: 0.5
  },
  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  logoSec:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogoMountify: {
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.20,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: (Metrics.WIDTH * 0.42),
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    width: (Metrics.WIDTH * 0.84),
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
  buttonSignIn: {
    backgroundColor: "#4cda64",
    borderRadius: 20,
    marginTop: 28,
    padding: 12,
    alignSelf: 'center',
    width: (Metrics.WIDTH * 0.84),
  },
  signInText: {
    color: Colors.snow,
    textAlign: "center",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
  textForgotPsssword: {
    textAlign: 'center',
    fontSize: Fonts.moderateScale(14),
    color: Colors.snow,
    marginBottom: 30,
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
  signInWithFbBg: {
    backgroundColor: "#3b5998",
    borderRadius: (Metrics.WIDTH * 0.42),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Metrics.WIDTH * 0.84),
    alignSelf: 'center',
    marginBottom: 30,
    flexDirection: 'row'
  },
  signInWithFbText: {
    color: Colors.snow,
    textAlign: "center",
    fontSize: Fonts.moderateScale(16),
    padding: 3,
    left: 5,
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
});
export default styles;
