
import React, { Component } from 'react';
import { Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, ListView } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Title, Icon, List, ListItem, Text, Item, Input, Segment } from 'native-base';
// Screen Styles
import styles from './FilterStyles';
import theme from '../../../../utils/theme';
import images from '../../../../utils/images';
import { moderateScale } from '../../../../utils/fontScaling';
const { width, height } = Dimensions.get('window');
import { View} from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Actions } from 'react-native-router-flux';

export default class PersonalChat extends Component {

  constructor(props) {
 		super(props);

    this.state = {
      segment: 1,
      distance: 10,
		  multiSliderPrice: [18, 25],
      isSelected: false,
    };
 	}


  multiSliderValuesChange = (values) => {this.setState({multiSliderPrice: values,});}


  _renderDecValue = () => {
    var dis = this.state.distance;
    dis -= 1;
    this.setState({distance: dis});
  }

  _renderIncValue = () => {
    var dis = this.state.distance;
    dis += 1;
    this.setState({distance: dis});
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <ImageBackground source={images.gradientBG} style={styles.headerBG}>
          <Header
              androidStatusBarColor={theme.PRIMARY_COLOR}
              style={styles.header}>

              {/* Take up the space */}
              <Left style={{flex:1.5}}>
                <TouchableOpacity onPress={Actions.pop} style={styles.left}>
                  <Icon name="ios-arrow-back-outline" style={styles.iconSize}/>
                  <Text style={styles.leftMsg}>Nearby</Text>
                </TouchableOpacity>
              </Left>

              {/* Title */}
              <Body style={styles.body}>
                <Title style={{color: theme.HEADER_TITLE_COLOR}}>
                  Filter
                </Title>
              </Body>

              {/* Right Icon */}
              <Right style={styles.right}>
                <TouchableOpacity onPress={()=> alert("Done")} style={styles.left}>
                  <Text style={styles.leftMsg}>Done</Text>
                </TouchableOpacity>
              </Right>
          </Header>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Filter</Text>
          </View>
          <List style={styles.listMain}>

            <ListItem style={styles.listGenderMain}>
              <View>
                <Text style={styles.listTitle}>Gender</Text>
              </View>
              <LinearGradient locations={[0.1, 0.75]} colors={['#f87362', '#fa6982']} style={styles.styleGradient}>
              {
                (Platform.OS == 'ios')
                ?
                <Segment style={styles.segmentTabSec}>
                  <Button
                    style={[styles.leftBtnRadius, this.state.segment === 1 ? styles.selectedSegmentTab : styles.segmentTab]}
                    active={(this.state.segment === 1) ? true : false}
                    onPress={() => this.setState({segment: 1})} >
                    <Text style={this.state.segment === 1 ? styles.activeTab : styles.normalTab}>All</Text>
                  </Button>

                  <Button
                    style={this.state.segment === 2 ? styles.selectedSegmentTab : styles.segmentTab}
                    active={(this.state.segment === 2) ? true : false}
                    onPress={() => this.setState({segment: 2})} >
                    <Text style={this.state.segment === 2 ? styles.activeTab : styles.normalTab}>Male</Text>
                  </Button>

                  <Button
                    style={[styles.rightBtnRadius, this.state.segment === 3 ? styles.selectedSegmentTab : styles.segmentTab]}
                    active={(this.state.segment === 3) ? true : false}
                    onPress={() => this.setState({segment: 3})} >
                    <Text style={this.state.segment === 3 ? styles.activeTab : styles.normalTab}>Female</Text>
                  </Button>
                </Segment>
                :
                <Segment style={styles.segmentTabSec}>
                  <TouchableOpacity
                    style={[styles.leftBtnRadius, this.state.segment === 1 ? styles.selectedSegmentTab : styles.segmentTab]}
                    active={(this.state.segment === 1) ? true : false}
                    onPress={() => this.setState({segment: 1})} >
                    <Text style={this.state.segment === 1 ? styles.activeTab : styles.normalTab}>All</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={this.state.segment === 2 ? styles.selectedSegmentTab : styles.segmentTab}
                    active={(this.state.segment === 2) ? true : false}
                    onPress={() => this.setState({segment: 2})} >
                    <Text style={this.state.segment === 2 ? styles.activeTab : styles.normalTab}>Male</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.rightBtnRadius, this.state.segment === 3 ? styles.selectedSegmentTab : styles.segmentTab]}
                    active={(this.state.segment === 3) ? true : false}
                    onPress={() => this.setState({segment: 3})} >
                    <Text style={this.state.segment === 3 ? styles.activeTab : styles.normalTab}>Female</Text>
                  </TouchableOpacity>
                </Segment>
              }
              </LinearGradient>
            </ListItem>


            <ListItem style={styles.listAgeMain}>
              <View>
                <Text style={styles.listTitle}>Age</Text>
              </View>
              <TouchableOpacity style={styles.listAgeRight} onPress={()=>this.setState({isSelected: !this.state.isSelected})}>
                <Text style={styles.listRightText}>{this.state.multiSliderPrice[0]} - {this.state.multiSliderPrice[1]}</Text>
                <Icon name="ios-arrow-forward"  style={styles.arrowForword}/>
              </TouchableOpacity>

              {
                (this.state.isSelected)
                ?
                <MultiSlider
                  values={this.state.multiSliderPrice}
                  sliderLength={100}
                  onValuesChange={this.multiSliderValuesChange}
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap
                  snapped
                  selectedStyle={{backgroundColor: '#fa6982'}}
                  unselectedStyle={{backgroundColor: '#fa698270'}}
                  markerStyle={styles.markerStyle}
                  containerStyle={styles.containerStyle}
                  trackStyle={styles.trackStyle}
                />
                :
                null
              }
            </ListItem>


            <ListItem style={styles.listDistanceMain}>
              <View>
                <Text style={styles.listTitle}>Distance</Text>
              </View>
              <View style={styles.listDistanceRight}>
                <TouchableOpacity onPress={this._renderDecValue}><Icon name="ios-arrow-back"  style={styles.arrowBack}/></TouchableOpacity>
                <Text style={styles.listRightText}>{this.state.distance} km</Text>
                <TouchableOpacity onPress={this._renderIncValue}><Icon name="ios-arrow-forward"  style={styles.arrowForword}/></TouchableOpacity>
              </View>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}
