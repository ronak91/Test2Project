import { Platform, StyleSheet, Dimensions } from 'react-native';
import {  Fonts,Metrics, Colors } from '../../../Themes/';

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
        paddingTop: (Metrics.HEIGHT * 0.02),
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.05
      }
    }),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center',
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    }),
  },

  alertBg: {
		width: Metrics.WIDTH * 0.04,
		height: Metrics.WIDTH * 0.04,
		borderRadius: Metrics.WIDTH * 0.02,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Metrics.WIDTH * 0.020),
		marginTop: -(Metrics.WIDTH * 0.018)
	},

	alertTxt: {
		fontSize: Fonts.moderateScale(8),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		color: Colors.snow,
	},

  bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow
	},

  heartBg: {
		width: Metrics.WIDTH * 0.056,
		height: Metrics.WIDTH * 0.056,
		borderRadius: Metrics.WIDTH * 0.028,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: Colors.snow,
		alignItems: 'center',
		justifyContent: 'center',
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center'
	},

  mainView:{
    height: Metrics.HEIGHT * 0.9,
  },

  mainRow:{
    flexDirection:'row',
    paddingTop: Metrics.HEIGHT * 0.018,
    paddingBottom: Metrics.HEIGHT * 0.025,
    paddingLeft: Metrics.WIDTH * 0.045,
    paddingRight: Metrics.WIDTH * 0.045
  },

  labelText:{
    color: '#a3a3a3',
    width: Metrics.WIDTH * 0.4,
    fontSize: Fonts. moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left'
  },

  infoText:{
    width: Metrics.WIDTH * 0.5,
    fontSize: Fonts. moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
    textAlign: 'left'
  },

  dividerHorizontal:{
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: '#e1e1e1',
    marginLeft: Metrics.WIDTH * 0.045,
    marginRight: Metrics.WIDTH * 0.045,
  },

  changePasswordView:{
    marginTop: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.WIDTH * 0.045
  },

  editInfoMainView:{
    bottom: 0,
    position:'absolute',
    width:Metrics.WIDTH
  },

  editDivider:{
    height: Metrics.HEIGHT * 0.001,
    backgroundColor: '#e1e1e1'
  },

  editInfoView:{
    padding: Metrics.HEIGHT * 0.015,
    margin: Metrics.HEIGHT * 0.015,
    flex: 1,
    backgroundColor: '#ffc700',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  editInfoText:{
    color:'#0e1130',
    fontSize: Fonts. moderateScale(16),
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  floatingView: {
		alignSelf: 'center',
		width: Metrics.WIDTH * 0.94,
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT * 0.015,
	},

	inputemail: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
	},
	textLabel: {
		fontFamily: Fonts.type.SFUIDisplayRegular,
		color: '#959595',
		fontSize: Fonts.moderateScale(15),
		marginLeft: 10,
		fontSize: 10,
	},

	forgotPasswordTxt: {
		color: '#0691ce',
		fontSize: Fonts.moderateScale(16),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},
});

export default styles;
