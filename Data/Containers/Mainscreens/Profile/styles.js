import { Platform, StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  },

  buttonText: {
  	fontSize:18,
  	color:'white',
  },

  btnsec:{
  	alignItems: 'center',
  	alignSelf: 'center',
  },

  btnStyle: {
    marginTop: 15,
  	height: (height*0.07),
  	width: (width*0.88),
  	backgroundColor: 'grey',
  	borderRadius: 20,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  btnStyles: {
    marginTop: 15,
    marginBottom: 15,
  	height: (height*0.07),
  	width: (width*0.88),
  	backgroundColor: 'grey',
  	borderRadius: 20,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  header: {
    backgroundColor: 'grey',

    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        height: 56,
      },
      android: {
        height: 66,
				paddingTop:10
			}
    }),
		elevation: 0
  },

	left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },

  body: {
		flex: 2,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },

  right: {
    flex: 0.5
  },
});




export default styles;
