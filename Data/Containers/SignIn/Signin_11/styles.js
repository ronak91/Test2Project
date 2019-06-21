
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';
// Screen Styles

const styles = StyleSheet.create({

  container: {
    // backgroundColor: theme.BACKGROUND_COLOR,
  },
  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    marginTop: 10,
    marginLeft: 5
  },
	backgroundImage: {
    width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
    backgroundColor:'white',
    flex:4,
    zIndex:0.8,
		position: 'absolute'
	},
  header: {
    backgroundColor: Colors.transparent,
    height: 55,
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
  logo10: {
    height: Metrics.HEIGHT*0.15,
    width: Metrics.WIDTH*0.35,
    alignSelf:'center',
    marginTop: Metrics.HEIGHT*0.01,
  },

  headertext: {
    fontFamily: 'Bariol',
    backgroundColor:'transparent',
    textAlign:'center',
    alignSelf:'center',
    fontSize:Fonts.moderateScale(33),
    width : Metrics.WIDTH * .90,
    marginTop: Metrics.HEIGHT*0.12,
    color:'white',
  },

  gsButton:
	{
		backgroundColor: "#0691ce",
		height:Metrics.HEIGHT*0.1,
		width: Metrics.WIDTH*0.9,
		borderRadius: 5,
		justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
		position: 'absolute',
		bottom:Metrics.HEIGHT*0.12,
	},

	gsButtonText:{
		color: "white",
		fontSize:Fonts.moderateScale(17),
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},



});

export default styles;
