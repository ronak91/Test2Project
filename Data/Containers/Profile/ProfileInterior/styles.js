
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "transparent",
    flexDirection: 'column'
  },
  tabheader:{
    backgroundColor: "#0691ce",
    width: (Metrics.WIDTH) * 0.15,
    marginLeft: 15
  },
  mainimg:{
    width: Metrics.WIDTH,
    height: (Metrics.HEIGHT) * 0.30
  },
  title:{
    color: "#fff",
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    textAlign: 'center'
  },
  left: {
    flex:1
  },
  body:{
    flex:2,
    alignItems:'center'
  },
  userimg:{
    position:'absolute',
    bottom: -50,
    width: (Metrics.WIDTH) * 0.34,
    height: (Metrics.WIDTH) * 0.34,
    borderRadius: (Metrics.WIDTH)* 0.17,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center'
  },
  userinfo:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  header: {
    backgroundColor: 'transparent',
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    borderBottomColor: 'transparent',
    ...Platform.select({
        ios: {
          paddingTop: 12,
        },
        android: {
          paddingTop: 15
        }
    }),
  },

  ShowProfileTxt: {
    color: "#fff",
    backgroundColor: "#2d324f",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.40
  },

  modal: {
      width: (Metrics.WIDTH) * 0.80,
      height: (Metrics.HEIGHT) * 0.66,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (Metrics.HEIGHT)  * 0.15,
      flexDirection: 'column'
   },
   backArrow: {
     width: 30,
 		justifyContent: 'center',
 		alignItems: 'flex-start'
   },
   followerFollowingBg: {
     width: (Metrics.WIDTH) * 0.33,
     marginTop: 10,
     backgroundColor: 'transparent',
     flexDirection: 'column'
   },

   followerFollowingCountTxt: {
     color: "#363636",
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.SFUIDisplayMedium,
     textAlign: 'center',
   },

   followerFollowingTxt: {
     color: "#959595",
     fontSize: Fonts.moderateScale(12),
     fontFamily: Fonts.type.SFUIDisplayRegular,
     textAlign: 'center',
     marginTop: -5
   },

   nameTxts: {
     color: "#6f6f6f",
     fontSize: Fonts.moderateScale(18),
     fontFamily: Fonts.type.SFUIDisplayMedium,
     alignSelf: 'center',
     ...Platform.select({
   		ios: {
   			marginTop: 20,
   		},
   		android: {
        marginTop: 15
      }
   	}),
   },

   designationTxt: {
     color: "#b7b7b7",
     fontSize: Fonts.moderateScale(12),
     fontFamily: Fonts.type.SFUIDisplayRegular,
     alignSelf: 'center',
   },

   followTxtBg: {
     backgroundColor: "#0691ce",
     borderRadius: 20,
     width: (Metrics.WIDTH) * 0.45,
     alignSelf: 'center',
     marginTop: 17
   },

   followTxt: {
     color: "#fff",
     fontSize: Fonts.moderateScale(18),
     fontFamily: Fonts.type.SFUIDisplayMedium,
     alignSelf: 'center',
     paddingTop: 5,
     paddingBottom: 5,
   },

   dividerHorizontal: {
     backgroundColor: "#e6e6e6",
     height: 0.8,
     width: Metrics.WIDTH,
     marginTop: 20
   },

   label: {
     fontSize: Fonts.moderateScale(16),
     fontFamily: Fonts.type.SFUIDisplayRegular,
     color: "#595959"
   },

   container: {
       flex: 1,
     },


     /*Tab Style START*/
     main: {
       height: Metrics.HEIGHT,
       width: Metrics.WIDTH,
       backgroundColor: "#e6e6e6",
       flexDirection: 'column'
     },


     listContent: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       marginHorizontal:(Metrics.WIDTH * 0.025),
       marginVertical:(Metrics.HEIGHT * 0.015),
       paddingBottom: (Metrics.HEIGHT * 0.03),
       alignItems:'flex-start',
       alignContent:'flex-start',
       justifyContent: 'space-between'
     },

     rowMain:{
       backgroundColor:'transparent',
       width: (Metrics.WIDTH * 0.445),
       alignItems:'center',
       margin:(Metrics.WIDTH * 0.015),
       alignItems:'flex-start',
       alignContent:'flex-start',
       flexDirection: 'column',
       shadowOffset:{width: 3,  height: 3},
       shadowColor: '#6F6F6F',
       shadowOpacity: 0.5,
       shadowRadius: 2,
       elevation: 5
     },

     cardBgImage: {
       width: (Metrics.WIDTH * 0.445),
       height: (Metrics.HEIGHT * 0.24),
       borderRadius: 5,
       backgroundColor: Colors.snow
     },

     cardContent: {
       flexDirection: 'column',
       width: (Metrics.WIDTH * 0.445),
       backgroundColor: "#FFFFFF",
       marginTop: -5,
       borderBottomLeftRadius: 5,
       borderBottomRightRadius: 5
     },

     titleTxt: {
       color: "#6f6f6f",
       fontSize: Fonts.moderateScale(17),
       marginLeft: 10,
       marginRight: 10,
       marginTop: 10,
       textAlign: 'left'
     },

     addressBg: {
       marginLeft: 10,
       marginRight: 10,
       marginTop: 10,
       flexDirection: 'row'
     },

     mapPin: {
         width: 10,
         height: 16,
         resizeMode: 'contain'
     },

     addressTxt: {
       color: "#adadad",
       fontSize: Fonts.moderateScale(14),
       marginLeft: 10
     },

     dividerHorizontal: {
         width: (Metrics.WIDTH * 0.445),
         height: 1,
         marginTop: 20,
         backgroundColor: "#f2f2f2"
     },

     profileBg: {
       marginTop: 5,
       marginLeft: 10,
       flexDirection: 'row',
       marginBottom: 20,
     },

     profileImg: {
         width: (Metrics.WIDTH) * 0.10,
         height: (Metrics.WIDTH) * 0.10,
         borderRadius: (Metrics.WIDTH) * 0.05,
         alignSelf: 'flex-start',
     },

     nameTimeBg: {
         flexDirection: 'column',
         marginLeft: 10,
         justifyContent: 'center'
     },

     nameTxt: {
       color: "#363636",
       width: (Metrics.WIDTH) * 0.28,
       fontSize: Fonts.moderateScale(14),
       textAlign: 'left'
     },

     timeTxt: {
       color: "#b7b7b7",
       fontSize: Fonts.moderateScale(13),
       textAlign: 'left'
     },
     tabUnderLine:{
       backgroundColor: '#0691ce',
     },
     tabUnderLineTrans:{
       backgroundColor: 'transparent'
     },
     /*Tab Style END*/

});

export default styles;
