
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
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },
  backArrow:{
  	width: 30,
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start',
  },
  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
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

  label: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.sfuiDisplayRegular,
  },


  /*Tab Style START*/
  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },


  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.025),
    marginVertical:(Metrics.HEIGHT * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between',
    paddingBottom: (Metrics.HEIGHT * 0.030)
  },

  rowMain:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Metrics.WIDTH * 0.440),
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
    borderColor: Colors.snow,
    resizeMode: 'cover',
  },

  likeCountText: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: (Metrics.WIDTH * 0.015),
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

  profileImgView:{
    width: (Metrics.WIDTH) * 0.042
  },

  tabUnderLine:{
    backgroundColor: Colors.snow
  },
  tabUnderLineTrans:{
    backgroundColor: 'transparent'
  },
  /*Tab Style END*/

});

export default styles;
