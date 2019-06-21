
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    height: (Metrics.HEIGHT),
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  drawercontainer:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: Colors.snow,
  },

  headerSec: {
    backgroundColor: "#2d324f",
		height: Metrics.HEIGHT * 0.12,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.045),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
  },

	left: {
		flex: 0.5,
  },

	backArrow: {
		justifyContent: 'center',
		alignItems: 'center'
  },

	body: {
		flex: 3,
		alignItems: 'center',
  },

	right: {
    flex: 0.5,
  },


  mainview:{
    backgroundColor: '#36343f'
  },

  listrow:{
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },

  rowicon:{
    backgroundColor: Colors.transparent,
    tintColor: Colors.snow,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },

  rowtxt:{
    color:'white',
    fontSize: Fonts.moderateScale(23),
    backgroundColor: Colors.transparent,
    marginLeft: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.sfuiDisplayLight,
  },

	headerD: {
    backgroundColor: '#312f38',
    height: 66,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				paddingTop:10
			}
    }),
		elevation: 0
  },


  leftD: {
    flex: 1.5,
		 backgroundColor: Colors.transparent,
  },

  rightD: {
    flex: 1.5
  },

	backgroundImage: {
		flex: 1,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		position: 'absolute'
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
		backgroundColor: Colors.transparent,
		top:(Metrics.HEIGHT * 0.44),
 		fontFamily: Fonts.type.sfuiDisplayRegular,
	},

  row:{
    height: 100,
    backgroundColor: '#36343f',
    flexDirection: 'row'
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
		 backgroundColor: Colors.transparent,
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
  mainviews:{
    alignItems: 'flex-start',
    height: 300,
    backgroundColor: Colors.snow,
    borderRadius:10,
    width: Metrics.WIDTH*0.9,
  },
  headerbottom:{
    height: 50,
    width: Metrics.WIDTH*0.9,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  semirow:{
    width: Metrics.WIDTH,
    height:125,
    backgroundColor: Colors.transparent,
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

  listrows:{
    backgroundColor: Colors.transparent,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.WIDTH*0.3,
    height: 125
  },

  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: Colors.transparent
  },

  rowicon:{
    backgroundColor: Colors.transparent,
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
    backgroundColor: Colors.transparent,
    textAlign: 'left',
    marginTop: 12,
    fontFamily: Fonts.type.sfuiDisplayLight,
  },

  triangles:{
    width: 0,
    height: 0,
    backgroundColor: Colors.transparent,
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: Colors.transparent,
    borderRightColor: Colors.transparent,
    borderBottomColor: Colors.snow
  },

  sideBarContainer: {
    zIndex: 11,
    backgroundColor: '#36343f'
  },

  myCartTxt: {
    color:Colors.snow,
    fontSize: Fonts.moderateScale(23)
  },

  itemCountBg: {
    backgroundColor: '#22a7f0',
    marginLeft: 10,
    borderRadius: 10,
    height: 17,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  countTxt: {
    color:'white',
    fontSize: Fonts.moderateScale(13)
  },

  listBg: {
    height: Metrics.HEIGHT*0.55
  },

  bottomViewBg: {
    backgroundColor: '#29282e',
    height: 1,
    width: Metrics.WIDTH
  },

  subTotalBg: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  subTotalTxt: {
    color:Colors.snow,
    fontSize: Fonts.moderateScale(20),
    marginVertical: 15,
    marginHorizontal: 15
  },

  bottomDivider: {
    backgroundColor: '#29282e',
    height: 1,
    width: Metrics.WIDTH
  },

  checkoutBg: {
    backgroundColor: '#22a7f0',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  checkoutTxt: {
    color:'white',
    fontSize: Fonts.moderateScale(20)
  },

  itemBg: {
    backgroundColor: '#36343f'
  },

  rowBg: {
    height: 100,
    backgroundColor: '#36343f',
    flexDirection: 'row',
    alignItems: 'center'
  },

  itemImage: {
    height: 75,
    width: 75,
    margin: 15
  },

  itemNamePriceBg: {
    flexDirection: 'column',
    height: 50,
    backgroundColor: Colors.transparent
  },

  itemTitleTxt: {
    color:Colors.snow,
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  itemPriceTxt: {
    backgroundColor: Colors.transparent,
    color: '#22a7f0',
    fontFamily: Fonts.type.sfuiDisplayMedium,
  },

  closeIcon: {
    color: '#5e5d65',
    alignSelf: 'center',
    position: 'absolute',
    right: 20
  },

  listDivider: {
    backgroundColor: '#29282e',
    height: 1,
    marginLeft: 15
  }

});

export default styles;
