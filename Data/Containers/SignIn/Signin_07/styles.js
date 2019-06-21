
import { Platform, StyleSheet, Dimensions,I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
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
  inputFieldSec:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.33,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.snow,
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.84,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
  chboxConatiner: {
    flexDirection: 'row',
    width: (Metrics.WIDTH * 0.84),
    height: Metrics.HEIGHT * 0.10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  chboxRemember: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  textRememberMe: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Fonts.moderateScale(10),
  },
  textForgotPwd: {
    color: Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    textAlign: 'right',
  },
  buttonSignIn: {
    backgroundColor: "#4cd964",
    borderRadius: Metrics.HEIGHT * 0.04,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.84,
    height: Metrics.HEIGHT * 0.08,
  },
  textWhite: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
  connectWith: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  connectSec:{
    width: Metrics.WIDTH * 0.84,
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: {
    width: Metrics.WIDTH * 0.28,
    backgroundColor: Colors.snow,
    height: 0.5,
  },
  textConnectWith: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    paddingLeft: 3,
    paddingRight: 3
  },
  fbTwitter: {
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.84,
    height: Metrics.HEIGHT * 0.20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnFb: {
    backgroundColor: "#3b5998",
    ...I18nManager.isRTL ?
    ({
      borderTopRightRadius: Metrics.HEIGHT * 0.04,
     borderBottomRightRadius: Metrics.HEIGHT * 0.04,
    })
      :
    ({
      borderTopLeftRadius: Metrics.HEIGHT * 0.04,
      borderBottomLeftRadius: Metrics.HEIGHT * 0.04,
    }),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#3b5998',
    width: Metrics.WIDTH * 0.41,
    height: Metrics.HEIGHT * 0.08,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fbText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Fonts.moderateScale(5),
  },
  btnTwitter: {
    backgroundColor: "#55acee",
    borderColor: '#55acee',
    borderWidth: 1,
    ...I18nManager.isRTL ?
    ({
      borderTopLeftRadius: Metrics.HEIGHT * 0.04,
      borderBottomLeftRadius: Metrics.HEIGHT * 0.04,
    })
      :
    ({
      borderTopRightRadius: Metrics.HEIGHT * 0.04,
     borderBottomRightRadius: Metrics.HEIGHT * 0.04,
    }),
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.41,
    height: Metrics.HEIGHT * 0.08,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lable:{
    fontFamily:'SFUIDisplay-Regular',
    color: 'red',
    backgroundColor: 'green'
  },
  twitterText: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    marginLeft: Fonts.moderateScale(5),
  },

});
export default styles;
