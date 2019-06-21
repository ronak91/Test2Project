
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
      flex: 1,
    },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  HeaderStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  backArrow: {
    width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
  header: {
  	backgroundColor: '#2d324f',
  	width: Metrics.WIDTH,
  	flexDirection: 'row',
    borderBottomColor: 'transparent',
  	...Platform.select({
  		ios: {
  			paddingTop: 5,
  		},
  		android: {
  			paddingTop: (Metrics.HEIGHT*0.035),
      }
  	}),
    elevation: 0,
    justifyContent: 'center'
  },
  userimg:{
    height:(Metrics.HEIGHT * 0.13),
    width:(Metrics.HEIGHT * 0.13),
    borderRadius:(Metrics.HEIGHT * 0.065),
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: (Metrics.HEIGHT * 0.020)
  },
  followTxtBg: {
    backgroundColor: "#0691ce",
    borderRadius: 20,
    width: (Metrics.WIDTH) * 0.35,
    alignSelf: 'center',
    margin: 17,
    height: (Metrics.HEIGHT) * 0.05,
    justifyContent: 'center'
  },

  followTxtBgtrans: {
    backgroundColor: "transparent",
    borderRadius: 20,
    width: (Metrics.WIDTH) * 0.35,
    alignSelf: 'center',
    margin: 17,
    borderWidth: 2,
    borderColor: '#0691ce',
    height: (Metrics.HEIGHT) * 0.05,
    justifyContent: 'center'
  },
  followTxt: {
    color: "#fff",
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.SFUIDisplayMedium,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  left: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },

  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
  },

  headerTitle: {
    color: 'white',
    fontFamily: Fonts.type.SFUIDisplayBold,
    paddingTop: (Platform.OS === 'ios')? 15 : 0,
    fontSize : 17,
    letterSpacing:0.7,
    marginVertical: (Metrics.HEIGHT * 0.01)
  },
  profile:{backgroundColor: '#2d324f',
  width: Metrics.WIDTH,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomColor: '#2d324f',
  ...Platform.select({
    ios: {
      paddingTop: 5,
    },
    android: {
      paddingTop: (Metrics.HEIGHT*0.035),
    }
  }),
},


  label: {
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.SFUIDisplayRegular,
  },
  name:{
    fontSize:18,
    fontFamily: Fonts.type.SFUIDisplaySemibold,
    color:'white'
  },
  address:{
    fontSize:12,
    fontFamily:'SFUIDisplay-Regular',
    color:'#fff8',
    textAlign: 'center',
    marginVertical: (Metrics.HEIGHT * 0.005),
    width: Metrics.WIDTH*0.5
  },


  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },
  imgview:{width: (Metrics.WIDTH) * 0.042,},


  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.025),
    marginVertical:(Metrics.HEIGHT * 0.015),
    paddingBottom: (Metrics.HEIGHT * 0.030),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },

  rowMain:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Metrics.WIDTH * 0.445),
    height: (Metrics.WIDTH * 0.445),
    alignItems:'center',
    margin:(Metrics.WIDTH * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
  },

  imageBG: {
    width: (Metrics.WIDTH * 0.445),
    height: (Metrics.WIDTH * 0.445)
  },

  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom:0,
    position: 'absolute',
    marginLeft: (Metrics.WIDTH * 0.03),
    marginRight: (Metrics.WIDTH * 0.04)
  },

  profileContainer: {
    flexDirection:'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: (Metrics.HEIGHT * 0.01)
  },

  profileImg: {
    width: (Metrics.WIDTH * 0.065),
    height: (Metrics.WIDTH * 0.065),
    borderRadius: (Metrics.WIDTH * 0.0325),
    borderWidth: 1,
    borderColor: "#FFFFFF",
    resizeMode: 'cover',
  },

  likeCountText: {
    fontFamily: Fonts.type.SFUIDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: 5,
    color: "#FFFFFF",
    alignSelf: 'center',
    justifyContent: 'center'
  },

  likeImage: {
    ...Platform.select({
        ios: {
            marginBottom: (Metrics.HEIGHT * 0.015),
        },
        android: {
            marginBottom: (Metrics.HEIGHT * 0.015),
        }
    }),
    width: (Metrics.HEIGHT * 0.0225),
    height: (Metrics.HEIGHT * 0.0225),
    resizeMode: 'contain',
  },

  tabUnderLine:{
    backgroundColor: '#0691ce',
  },
  tabUnderLineTrans:{
    backgroundColor: 'transparent'
  },

});

export default styles;
