
import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import images from '../../../../utils/images';
import theme from '../../../../utils/theme';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({

  main: {
    height: theme.HEIGHT,
    width: theme.WIDTH,
    backgroundColor: "#F2F2F2",
    flexDirection: 'column'
  },

  imgContainer: {
    width: (theme.WIDTH) * 0.48,
    height: (theme.HEIGHT) * 0.622,
    marginRight: 30,
  },
  header: {
    backgroundColor: 'transparent',
  	height: 65,
  	width: theme.WIDTH,
  	flexDirection: 'row',
  	...Platform.select({
  		ios: {
  			paddingTop: 5,
  		},
  		android: {
        paddingTop: 5,
      }
  	}),
  },

  left: {
    flex: 1, 
  },

  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    flex: 1,
    alignItems: 'center',
  },

});

export default styles;
