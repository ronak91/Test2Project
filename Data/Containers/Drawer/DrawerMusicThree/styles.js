
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21243a'
  },
  backArrow: {
    width:30,
		justifyContent: 'center',
		alignItems: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    height: 70,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0
  },
  left: {
    flex: 0.5,
		backgroundColor: 'transparent',
  },
  right: {
    flex: 0.5
  },
  mainScroll:{
    height:Metrics.HEIGHT,
    backgroundColor: '#21243a',
    marginTop: Metrics.HEIGHT*0.02,
  },
  mainview:{
    width:Metrics.WIDTH*1.65,
    height:Metrics.HEIGHT,
    marginLeft: Metrics.WIDTH*0.05,
  },
  maintxt:{
    fontSize: Fonts.moderateScale(25),
    color: 'white',
    width:Metrics.WIDTH*0.8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.WIDTH*0.1,
    backgroundColor: '#21243a',
    marginRight: Metrics.WIDTH*0.1,
	  fontFamily: Fonts.type.SFUIDisplayBold,
  },
  txtmusic:{
    color: 'white',
	  fontFamily: Fonts.type.SFUIDisplayBold,
    backgroundColor: 'transparent'
  },
  popbig:{
    backgroundColor: '#f29ac2',
    width:Metrics.HEIGHT*0.2,
    height:Metrics.HEIGHT*0.2,
    borderRadius: Metrics.HEIGHT*0.1,
    marginTop: Metrics.HEIGHT*0.135,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  oldies:{
     backgroundColor: '#ff308e',
     width:Metrics.HEIGHT*0.14,
     height:Metrics.HEIGHT*0.14,
     borderRadius: Metrics.HEIGHT*0.070,
     marginLeft:  Metrics.HEIGHT*0.12,
     marginTop: Metrics.HEIGHT*0.01,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center'
  },
  reggae:{
      backgroundColor: '#8e44ad',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginTop: Metrics.HEIGHT*0.34,
      position: 'absolute',
      marginLeft:  Metrics.HEIGHT*0.06,
      justifyContent: 'center',
      alignItems: 'center'
   },
   electronic:{
      backgroundColor: '#a01252',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.21,
      marginTop: Metrics.HEIGHT*0.13,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   rock:{
      backgroundColor: '#ff308e',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.19,
      marginTop: Metrics.HEIGHT*0.275,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   popsmall:{
      backgroundColor: '#f971af',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.125,
      marginTop: Metrics.HEIGHT*0.48,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   latin:{
      backgroundColor: '#bb0c45',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.245,
      marginTop: Metrics.HEIGHT*0.405,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   country:{
     backgroundColor: '#ff308e',
     width:Metrics.HEIGHT*0.2,
     height:Metrics.HEIGHT*0.2,
     borderRadius: Metrics.HEIGHT*0.1,
     marginTop: Metrics.HEIGHT*0.546,
     marginLeft:  Metrics.HEIGHT*0.243,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',

   },
   countryimg:{
     width:Metrics.HEIGHT*0.1,
     height:Metrics.HEIGHT*0.1,
     position: 'absolute'
   },
   classical:{
      backgroundColor: '#f971af',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.323,
      marginTop: Metrics.HEIGHT*0.22,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   heavymetal:{
     backgroundColor: '#ff308e',
     width:Metrics.HEIGHT*0.2,
     height:Metrics.HEIGHT*0.2,
     borderRadius: Metrics.HEIGHT*0.1,
     marginTop: Metrics.HEIGHT*0.022,
     marginLeft:  Metrics.HEIGHT*0.335,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center'
   },
   kpop:{
      backgroundColor: '#ff308e',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.377,
      marginTop: Metrics.HEIGHT*0.349,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   randb:{
      backgroundColor: '#f971af',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.42,
      marginTop: Metrics.HEIGHT*0.483,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   opera:{
      backgroundColor: '#ff308e',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.465,
      marginTop: Metrics.HEIGHT*0.195,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   folk:{
      backgroundColor: '#a01252',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.52,
      marginTop: Metrics.HEIGHT*0.33,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   blues:{
      backgroundColor: '#f29ac2',
      width:Metrics.HEIGHT*0.12,
      height:Metrics.HEIGHT*0.12,
      borderRadius: Metrics.HEIGHT*0.06,
      marginLeft:  Metrics.HEIGHT*0.562,
      marginTop: Metrics.HEIGHT*0.472,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   jazz:{
     backgroundColor: '#8e44ad',
     width:Metrics.HEIGHT*0.24,
     height:Metrics.HEIGHT*0.24,
     borderRadius: Metrics.HEIGHT*0.12,
     marginLeft:  Metrics.HEIGHT*0.54,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',
   },
   techno:{
      backgroundColor: '#bb0c45',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.63,
      marginTop: Metrics.HEIGHT*0.24,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   rap:{
      backgroundColor: '#8e44ad',
      width:Metrics.HEIGHT*0.15,
      height:Metrics.HEIGHT*0.15,
      borderRadius: Metrics.HEIGHT*0.075,
      marginLeft:  Metrics.HEIGHT*0.662,
      marginTop: Metrics.HEIGHT*0.379,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   funk:{
      backgroundColor: '#ff308e',
      width:Metrics.HEIGHT*0.13,
      height:Metrics.HEIGHT*0.13,
      borderRadius: Metrics.HEIGHT*0.065,
      marginLeft:  Metrics.HEIGHT*0.748,
      marginTop: Metrics.HEIGHT*0.166,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },
   disco:{
      backgroundColor: '#ff308e',
      width:Metrics.HEIGHT*0.14,
      height:Metrics.HEIGHT*0.14,
      borderRadius: Metrics.HEIGHT*0.07,
      marginLeft:  Metrics.HEIGHT*0.785,
      marginTop: Metrics.HEIGHT*0.295,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
   },


});
export default styles;
