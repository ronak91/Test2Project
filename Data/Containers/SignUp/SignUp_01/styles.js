
import { Platform, StyleSheet, Dimensions,I18nManager } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: 'transparent',
  },

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    position: 'relative'
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
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
  backArrow: {
    width: 30,
    alignItems: 'center',
  },
  main: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: 'transparent'
  },

  titleBar: {
    width: (Metrics.WIDTH),
    backgroundColor: 'transparent',
    marginBottom: 45,
  },

  textTitle: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
    textAlign: 'center'
  },

  profileImage: {
    width: Metrics.HEIGHT*0.15,
    height: Metrics.HEIGHT*0.15,
    borderRadius: Metrics.HEIGHT*0.075,
    borderColor: "white",
    borderWidth: 3,
    alignSelf: 'center',
    marginBottom: Metrics.HEIGHT*0.08
  },

  inputLabel: {
    alignSelf: 'center',
    width: (Metrics.WIDTH * 0.85) ,
    backgroundColor: 'transparent',
  },

  textLabel: {
    fontSize: Fonts.moderateScale(14),
    color: Colors.whites,
    ...I18nManager.isRTL ?
    ({
      textAlign:'right',
    })
      :
    ({
      textAlign:'left'
    }),

  },

  textInput: {
    fontSize: Fonts.moderateScale(16),
    color: 'white',
    fontFamily: Fonts.type.SFUIDisplayRegular,
    marginTop: -10,

  },

  buttonRegister: {
    backgroundColor: Colors.loginGreen,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width:(Metrics.WIDTH * 0.85),
    height:(Metrics.HEIGHT * 0.065),
    shadowOffset:{width: 2,  height: 5},
    shadowColor: '#116384',
    shadowOpacity: 1.0,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    marginTop: (Metrics.HEIGHT * 0.065),

  },

  textWhite: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
  },

  textPolicyDescription:{
    color: "white",
    fontSize: Fonts.moderateScale(11),
    fontFamily: Fonts.type.SFUIDisplayRegular,
    alignSelf: 'center'
  },

  textTermsCondition:{
    color: "white",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
  },
  tandc:{
    flexDirection: 'row',
    width: (Metrics.WIDTH),
    justifyContent: 'center'
  },
  and:{
    color: "white",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayRegular,
  },
  tandcondi:{
    marginTop: Metrics.HEIGHT*0.08
  }
});


export default styles;
