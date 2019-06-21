
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#2d324f',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  menuIconWhite: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },
  backArrow:{
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  right: {
    flex: 0.5
  },

  container: {
      flex: 1,
    },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  segmentTabSec: {
    height: (Metrics.HEIGHT * 0.042),
    width: (Metrics.WIDTH * 0.55),
    marginTop: (Metrics.HEIGHT * 0.01),
    marginBottom: (Metrics.HEIGHT * 0.02),
    borderRadius: (Metrics.HEIGHT * 0.042),
    borderWidth:2,
    borderColor: '#1e2235',
    backgroundColor: '#1e2235'
  },

  selectedSegmentTab: {
    height: (Metrics.HEIGHT * 0.042),
    width: (Metrics.WIDTH * 0.275),
    borderRadius: (Metrics.HEIGHT * 0.042),
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.transparent,
    borderWidth:2,
		overflow: 'hidden'
  },

  segmentTab: {
    height: (Metrics.HEIGHT * 0.042),
    width: (Metrics.WIDTH * 0.275),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.transparent,
    borderWidth:2,
		overflow: 'hidden'
  },

  activeTab: {
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: '#2d324f'
  },

  normalTab: {
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: '#2d324f'
  },

  listContentPhoto: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.025),
    marginVertical:(Metrics.HEIGHT * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between',
  },

  rowMain:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Metrics.WIDTH * 0.44),
    height: (Metrics.WIDTH * 0.445),
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
    borderColor: Colors.snow,
    resizeMode: 'cover',
  },

  likeCountText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: (Metrics.WIDTH) * 0.015,
    color: Colors.snow,
    ...Platform.select({
        ios: {
            marginBottom: (Metrics.HEIGHT * 0.01)
        },
        android: {
            marginBottom: (Metrics.HEIGHT * 0.01)
        }
    }),

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
  },

  listContentPeople: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between'
  },

  rowMainPeople: {
    width: (Metrics.WIDTH * 0.5),
    height: (Metrics.WIDTH * 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    borderColor: '#d7d7d7',
    borderWidth: 0.5
  },

  imageShadow: {
    width: (Metrics.HEIGHT * 0.1),
    height: (Metrics.HEIGHT * 0.1),
    borderRadius: (Metrics.HEIGHT * 0.05),
  	elevation: 5,
  	shadowColor: '#000',
  	shadowOpacity: 0.1,
  	shadowRadius: (Metrics.WIDTH * 0.01),
  	shadowOffset: {
  		height: 0,
  		width: 0
  	},
  },

  userImage: {
    width: (Metrics.HEIGHT * 0.1),
    height: (Metrics.HEIGHT * 0.1),
    resizeMode: 'cover',
    borderRadius: (Metrics.HEIGHT * 0.05),
    borderWidth: 2,
    borderColor: Colors.snow,
  },

  name: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: '#6f6f6f',
    marginTop: (Metrics.HEIGHT * 0.01)
  },

  post: {
    fontSize:Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: '#b7b7b7',
    marginTop: (Metrics.HEIGHT * 0.002)

  },

  followBgNotSelected: {
    width: (Metrics.WIDTH) * 0.16,
    height: (Metrics.HEIGHT) * 0.030,
    borderRadius: (Metrics.HEIGHT) * 0.045,
    borderWidth: 1,
    borderColor: "#0691ce",
    justifyContent:'center',
    marginTop: (Metrics.HEIGHT * 0.02)
  },

  followBgSelected: {
    width: (Metrics.WIDTH) * 0.16,
    height: (Metrics.HEIGHT) * 0.030,
    borderRadius: (Metrics.HEIGHT) * 0.045,
    backgroundColor: "#0691ce",
    justifyContent:'center',
    marginTop: (Metrics.HEIGHT * 0.02)
  },

  followTxtSelected: {
    fontSize: Fonts.moderateScale(11),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
    alignSelf: 'center',
  },

  followTxtNotSelected: {
    fontSize: Fonts.moderateScale(11),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#0691ce",
    alignSelf: 'center',
  },

  segmentsScreenSec:{
    flex: 1
  },

  timesheetList:{

  },

  profileImageView:{
    width: (Metrics.WIDTH) * 0.042
  },

  peopleMainView:{
    width: Metrics.WIDTH
  },

  segmentView:{
    backgroundColor: '#2d324f',
    width: Metrics.WIDTH,
    alignItems:'center'
  },

});

export default styles;
