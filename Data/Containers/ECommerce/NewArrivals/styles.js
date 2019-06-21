import { Platform, StyleSheet, Dimensions } from 'react-native';
import {  Fonts,Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  header: {
    backgroundColor: "#0e1130",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: (Metrics.HEIGHT * 0.02),
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.05
      }
    }),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(20),
    alignSelf: 'center',
    fontFamily: Fonts.type.helveticaNeueLight,
  },

  right: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.02
      }
    }),
  },

  alertBg: {
		width: Metrics.WIDTH * 0.04,
		height: Metrics.WIDTH * 0.04,
		borderRadius: Metrics.WIDTH * 0.02,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -(Metrics.WIDTH * 0.020),
		marginTop: -(Metrics.WIDTH * 0.018)
	},

	alertTxt: {
		fontSize: Fonts.moderateScale(8),
		fontFamily: Fonts.type.sfuiDisplayMedium,
		color: Colors.snow,
	},

  bagIcon: {
		marginLeft: Metrics.WIDTH * 0.04,
		color: Colors.snow
	},

  heartBg: {
		width: Metrics.WIDTH * 0.056,
		height: Metrics.WIDTH * 0.056,
		borderRadius: Metrics.WIDTH * 0.028,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: Colors.snow,
		alignItems: 'center',
		justifyContent: 'center',
	},

	heartIcon: {
		color: Colors.snow,
		alignSelf: 'center'
	},

  rightLeftView: {
    flexDirection: 'row',
  },

  sortFilterMainView: {
    height: Metrics.HEIGHT * 0.08,
    backgroundColor: 'rgba(255,255,255, 0.75)',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },

  sortFilterView: {
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.5,
    justifyContent: 'center',
    alignItems: 'center',

  },

  sortImg: {
    height: Metrics.HEIGHT * 0.04,
    width: Metrics.WIDTH * 0.03,
    marginRight: Metrics.WIDTH * 0.03,
    resizeMode: 'contain'
  },

  filterImg: {
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.WIDTH * 0.05,
    marginRight: Metrics.WIDTH * 0.03,
    resizeMode: 'contain'
  },

  sortFilterText: {
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    color: '#0e1130',
  },

  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: Metrics.HEIGHT * 0.01,
  },

  rowMain: {
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.445,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    margin:(Metrics.WIDTH * 0.0165),
  },

  itemImage: {
    width: Metrics.WIDTH * 0.445,
    height: Metrics.WIDTH * 0.64,
  },

  itemTitle: {
    width: Metrics.WIDTH * 0.445,
    color: '#0e1130',
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueLight,
    marginTop: Metrics.HEIGHT * 0.015,
    textAlign: 'left'
  },

  itemPrice: {
    width: Metrics.WIDTH * 0.445,
    color: '#ff0000',
    fontSize: Fonts.moderateScale(15),
    fontFamily: Fonts.type.helveticaNeueBold,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.01,
    textAlign: 'left'
  },

  modalView:{
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    backgroundColor: "#0006",
    paddingTop: Metrics.HEIGHT * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
  },

  modal: {
    width: (Metrics.WIDTH) * 0.90,
    backgroundColor: Colors.snow,
    borderRadius: 5,
   },

   modalHeader: {
     backgroundColor: "#ebebeb",
     justifyContent: 'space-between',
     flexDirection: 'row',
     paddingBottom: Metrics.WIDTH * 0.024,
     paddingTop: Metrics.WIDTH * 0.024,
     paddingLeft: Metrics.WIDTH * 0.03,
     paddingRight: Metrics.WIDTH * 0.03,
     borderTopLeftRadius: 5,
     borderTopRightRadius: 5
   },

   modalBottomView: {
     width: (Metrics.WIDTH) * 0.90,
     backgroundColor: Colors.snow,
     paddingLeft: Metrics.WIDTH * 0.03,
     paddingRight: Metrics.WIDTH * 0.03,
     borderBottomLeftRadius: 5,
     borderBottomRightRadius: 5,
   },

   cancelApplyTxt: {
     color: "#ffc700",
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.sfuiDisplayLight
   },

   shareTxt: {
     color: "#0e1130",
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.sfuiDisplayLight
   },

   modalRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingTop: Metrics.WIDTH * 0.03,
     paddingBottom: Metrics.WIDTH * 0.03
   },

   socialTxt: {
     fontSize: Fonts.moderateScale(15),
     fontFamily: Fonts.type.sfuiDisplayLight,
     marginLeft: Metrics.WIDTH * 0.04
   },

   modalDivider: {
     width: Metrics.WIDTH * 0.87,
     height: 1,
     backgroundColor: "#ebebeb",
   },

   upArrow: {
    //  marginTop: Metrics.HEIGHT * 0.23,
     marginLeft: Metrics.WIDTH * 0.5,
   },

   sortUpArrow: {
    //  marginTop: Metrics.HEIGHT * 0.23,
     marginRight: Metrics.WIDTH * 0.5,
   },

  categoryBottomView: {
    width: (Metrics.WIDTH) * 0.90,
    backgroundColor: Colors.snow,
    paddingLeft: Metrics.WIDTH * 0.03,
    paddingRight: Metrics.WIDTH * 0.03,
  },

  categoryListBg: {
    backgroundColor: Colors.snow,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: Metrics.WIDTH * 0.01,
    minHeight: Metrics.HEIGHT * 0.28,
    // maxHeight: Metrics.HEIGHT * 0.6,
  },

  modalOpenView: {
    flexDirection: 'column',
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    alignItems: 'center'
  }

});

export default styles;
