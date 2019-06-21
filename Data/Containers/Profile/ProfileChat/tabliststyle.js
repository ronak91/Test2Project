
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../../Themes/';

const styles = StyleSheet.create({

  main: {
    width: Metrics.WIDTH,
  },

  listContent: {
    marginHorizontal:(Metrics.WIDTH * 0.015),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'flex-start',
  },

  rowMain:{
    marginHorizontal:(Metrics.WIDTH * 0.015),
  },

  cardImage: {
    height:(Metrics.HEIGHT*0.27),
    width:(Metrics.HEIGHT*0.21),
    ...Platform.select({
  		ios: {
        backgroundColor: 'gray',
  		},
  	}),
    borderRadius: 3
  },

  imageText: {
    margin:(Metrics.HEIGHT*0.012),
    color: Colors.snow,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.sfuiDisplayRegular,
    bottom:0,
    position: 'absolute',
  },

});

export default styles;
