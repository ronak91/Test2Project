
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: 'white',
  },

  imgContainer: {
    width: Metrics.WIDTH,
    height: ((Metrics.HEIGHT)*0.40),
  },

  main: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: 'white'
  },

  titleBar: {
    width: (Metrics.WIDTH),
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 20
  },

  textTitle: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    marginTop: 5,
    alignSelf: 'center',
    marginTop: -1
  },

  backArrow: {
    width: 30,
    alignItems: 'center',
  },

  textInput: {
    borderWidth: 0.5,
    borderColor: Colors.greys,
    borderRadius: 5,
    alignSelf: 'center',
    height:  (Metrics.WIDTH * 0.12),
    width: (Metrics.WIDTH * 0.85),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    color:Colors.loginBlue,
    marginTop: (Metrics.WIDTH * 0.05),
    backgroundColor: 'transparent',
    paddingLeft: 15

  },

  buttonSignUp: {
    backgroundColor: Colors.loginGreen,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: (Metrics.WIDTH * 0.90),
    marginTop: Metrics.HEIGHT*0.050,
    height: Metrics.HEIGHT*0.07,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:{width: 0,  height: 3},
    shadowColor: Colors.shadows,
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1

  },

  textWhite: {
    color: "white",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
  },

  textPolicyDescription:{
    color:Colors.darktext,
    fontSize: Fonts.moderateScale(11),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    alignSelf: 'center'
  },

  textTermsCondition:{
    color: Colors.loginBlue,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
  },

  textAlreadyHaveAccount: {
    borderWidth: 0.5,
    borderColor:Colors.greys,
    borderRadius: 20,
    color:Colors.darktext,
    backgroundColor: "transparent",
    textAlign: 'center',
    alignSelf: 'center',
    width: ((Metrics.WIDTH * 0.90) - 30),
    paddingTop: 10,
    paddingBottom: 10 ,
    marginBottom: 20
  },

  header: {
    backgroundColor: Metrics.PRIMARY_COLOR,
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop:10
			}
    }),
		elevation: 0
  },

	left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },

  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },

  right: {
    flex: 0.5
  },

  headerTitle: {
    color: Metrics.BLACK,
 		fontFamily: Fonts.type.SFUIDisplaySemibold,
		// fontFamily: 'SFUIText-Light',
		fontSize: Fonts.moderateScale(18),
  },

  tandcView:{
    flexDirection: 'row',
    width: (Metrics.WIDTH),
    justifyContent: 'center',
    marginTop: Metrics.HEIGHT*0.05,
  },
  ands:{
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
  },


});


export default styles;
