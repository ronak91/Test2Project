import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2d324f",

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
          height: 56,
      },
      android: {
        height: 66,
				paddingTop:(Metrics.HEIGHT * 0.02)
			}
    }),
		elevation: 0
  },
  backArrow: {
    width:30,
   justifyContent: 'center',
   alignItems: 'center'
  },
	left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },

  body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: '#2d324f'
  },

  right: {
    flex: 0.5,
  },

  headerTitle: {
    color: "#fff",
 		fontFamily: Fonts.type.sfuiDisplaySemibold,
		fontSize: Fonts.moderateScale(18),
  },

  iconColor: {
    color: "#fff",
    height: (Metrics.WIDTH * 0.05),
    width: (Metrics.WIDTH * 0.05),

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

  upperListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    alignContent:'center',
    justifyContent: 'space-between',
    backgroundColor: '#0e1022'
  },

  upperRowMain:{
    width: (Metrics.WIDTH * 0.33),
    height: (Metrics.WIDTH * 0.33),
    justifyContent:'center',
    margin:(Metrics.WIDTH * 0.001),
    alignItems:'center',
    alignContent:'center',
    backgroundColor: '#11142a'
  },

  upperRowSelectedMain:{
    width: (Metrics.WIDTH * 0.33),
    height: (Metrics.WIDTH * 0.33),
    justifyContent:'center',
    margin:(Metrics.WIDTH * 0.001),
    alignItems:'center',
    alignContent:'center',
    backgroundColor: '#d9b63e'
  },

  upperListTitle: {
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginTop: (Metrics.HEIGHT * 0.008),
    color: "#FFFFFF"
  },

  upperListImage:{
    height: (Metrics.HEIGHT * 0.05),
    width: (Metrics.WIDTH * 0.10),
    resizeMode: 'contain'
  },

  lowerListContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal:(Metrics.WIDTH * 0.040),
    marginVertical:(Metrics.HEIGHT * 0.015),
    alignItems:'flex-start',
    alignContent:'flex-start',
    justifyContent: 'space-between',
    paddingBottom: (Metrics.HEIGHT * 0.030)
  },

  lowerRowMain:{
    backgroundColor:'rgba(0,0,0,0.5)',
    width: (Metrics.WIDTH * 0.440),
    height: (Metrics.WIDTH * 0.445),
    marginBottom: (Metrics.WIDTH * 0.010),
    marginTop: (Metrics.WIDTH * 0.010),
    alignItems:'center',
    alignItems:'flex-start',
    alignContent:'flex-start',
    backgroundColor: '#11142a',
  },

  imageBG: {
    width: (Metrics.WIDTH * 0.440),
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
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginLeft: 5,
    color: "#FFFFFF",
    backgroundColor: 'transparent',
    ...Platform.select({
        ios: {
            marginBottom: (Metrics.HEIGHT * 0.01)
        },
        android: {
            marginBottom: (Metrics.HEIGHT * 0.005)
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
    width: (Metrics.HEIGHT * 0.0225),
    height: (Metrics.HEIGHT * 0.0225),
    resizeMode: 'contain',
  },

  listViewBg: {
    backgroundColor: '#0e1022',
    elevation: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 8,
      width: 0,
    },
    zIndex: 999
  },

  profileView:{
    width: (Metrics.WIDTH) * 0.042
  }

});

export default styles;
