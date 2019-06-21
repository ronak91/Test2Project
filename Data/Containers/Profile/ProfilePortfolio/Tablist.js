
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './tabliststyle';
import { View} from 'react-native-animatable';

/**
 *  Profile Screen
 */
export default class Tablist extends Component {

  constructor(props) {
 		super(props);

    const cardImageOne = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_natural_one_pfifteen.png';
    const cardImageTwo = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_natural_two_pfifteen.png';
    const cardImageThree = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_natural_three_pfifteen.png';
    const cardImageFour = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_natural_four_pfifteen.png';

    const dataObjects = [
      {
        id: 1,
        cardBgImage: {uri:cardImageOne},
        imageTitle: 'Nature Cave',
      },
      {
        id: 2,
        cardBgImage: {uri:cardImageTwo},
        imageTitle: 'Sunrise Over River',
      },
      {
        id: 3,
        cardBgImage: {uri:cardImageThree},
        imageTitle: 'Green Meadow',
      },
      {
        id: 4,
        cardBgImage: {uri:cardImageFour},
        imageTitle: 'Nature Cave',
      },
    ]

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
			isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}


  _renderRow(rowData) {
    return(
      <View style={styles.rowMain}>
        <Image style={styles.cardImage} source={rowData.cardBgImage}/>
        <Text style={styles.imageText}>{rowData.imageTitle}</Text>
      </View>
    )

  }

  render(){

    return(
      <Container style={styles.main}>
        <ListView
           horizontal={true}
           contentContainerStyle={styles.listContent}
           dataSource={this.state.dataSource}
           renderRow={this._renderRow.bind(this)}
           enableEmptySections
           showsVerticalScrollIndicator={false}
           pageSize={4}/>
      </Container>
    );
  }
}
