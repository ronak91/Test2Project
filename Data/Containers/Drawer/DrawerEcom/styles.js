
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  container: {

  },
  backgroundImage: {
    flex: 1,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    position: 'absolute'
  },
  backArrow: {
    width: 30,
    
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  header: {
    backgroundColor: '#1a191f',
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
  forgotPassword:{
    color: "#0691ce",
    fontSize: Fonts.moderateScale(17),
    height: (Metrics.HEIGHT * 0.05),
    width: (Metrics.WIDTH),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    top:(Metrics.HEIGHT * 0.44),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },
  bottomModal: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    ...Platform.select({
      ios: {
        marginTop:65
      },
      android: {
        marginTop:45
      }
    }),

  },
  mainview:{
    alignItems: 'flex-start',
    height: 300,
    backgroundColor: 'white',
    borderRadius:10,
    width: Metrics.WIDTH*0.9,
  },
  headerbottom:{
    height: 50,
    width: Metrics.WIDTH*0.9,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semirow:{
    width: Metrics.WIDTH,
    height:125,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  horizontalline:{
    height: 0.5,
    backgroundColor: '#f2f2f2',
    width: Metrics.WIDTH*0.9
  },
  verticalline:{
    height: 125,
    backgroundColor: '#f2f2f2',
    width: 0.5
  },
  listrow:{
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.WIDTH*0.3,
    height: 125
  },



  headertxt:{
    fontSize: Fonts.moderateScale(32),
    textAlign: 'center',
    color:'white'
  },
  screenBg: {
  	flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT,
  	position: 'absolute'
  },
  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },

  badgetext:{
    color:'white',
    fontSize: Fonts.moderateScale(13),
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  badgeview:{
    backgroundColor: '#d9b63e',
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  modalbg:{
    flex: 1,
  	width: Metrics.WIDTH,
  	height: Metrics.HEIGHT*0.5,
     margin:-(Metrics.WIDTH*0.001),
  },
  rowicon:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20,
    tintColor: '#36343f',
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  rowtxt:{
    color:'#919cae',
    fontSize: Fonts.moderateScale(15),
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginTop: 12,
    fontFamily: Fonts.type.sfuiDisplayLight
  },


  linebg:{
    backgroundColor: 'rgba(61,61,61,0.9)',
    height:0.5,
    width: Metrics.WIDTH*0.6
  },
  imageLogoMountify: {
    alignSelf: 'center',
    width: 100,
    height: 80,
    marginBottom: 20
  },


  userpic:{
    width: (Metrics.WIDTH) * 0.13,
    height: (Metrics.WIDTH) * 0.13,
    borderRadius: (Metrics.WIDTH)* 0.065,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignSelf: 'center',
    marginLeft: (Metrics.WIDTH) * 0.1,
  },
  closeview:{
    borderTopLeftRadius:180,
    height:90,
    width: 90,
    backgroundColor: '#d9b63e',
    position: 'absolute',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0
  },
  mainclose:{
    // backgroundColor: "red",
    height:70,
    width: 50,

    // alignItems: 'flex-start',
  },
  closeicon:{
    color:'white',
    fontSize: Fonts.moderateScale(80),
    backgroundColor: 'transparent',
    alignSelf: 'flex-start'
    // textAlign: 'right',
  },


  lefts: {
    flex: 1,
		 backgroundColor: 'transparent',
     marginRight: 15,
     marginTop: 15,
     alignSelf: 'flex-end',
     justifyContent: 'flex-end'
  },
  headerModal: {
    backgroundColor: 'rgba(5,6,6,0.5)',

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
			}
    }),
		elevation: 0
  },
  triangles:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'
  },

  headerNameView:{
    flexDirection: 'column',
    marginTop: 10
  },

  headerTitle:{
    color:'white'
  },

  headerArrow:{
    color:'white',
    alignItems:'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  filterText:{
    color:'#292d48',
    textAlign:'center',
    justifyContent:'center'
  }
});
export default styles;
