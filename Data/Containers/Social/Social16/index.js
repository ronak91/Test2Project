
import React, { Component } from 'react';
import { Text, Image, StatusBar, Platform, ImageBackground, Dimensions, TouchableOpacity, ListView, FlatList, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Right, Left, ListItem, Content, Header, Body, Title, Icon, Segment } from 'native-base';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images,Metrics } from '../../../Themes/';


const cardImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_onessixteen.png";
const cardImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_twossixteen.png";
const cardImageThree = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_threessixteen.png";
const cardImageFour = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_fourssixteen.png";
const cardImageFive = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_fivessixteen.png";
const cardImageSix = "https://antiqueruby.aliansoftware.net//Images/social/ic_photo_sixssixteen.png";
const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/profile_onessixteen.png";
const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/profile_twossixteen.png";
const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/profile_threessixteen.png";
const profileOne = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_onesixteen.png";
const profileTwo = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_twossixteen.png";
const profileThree = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_threessixteen.png";
const profileFour = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_foursixteen.png";
const profileFive = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_fivessixteen.png";
const profileSix = "https://antiqueruby.aliansoftware.net//Images/social/people_profile_sixssixteen.png";

export default class Social16 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    const dataObjects = [
      {
        id: 1,
        cardBgImage: {uri:cardImageOne},
        likeCount: 12,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
          {img:{uri:profileImageThree}},
        ]
      },
      {
        id: 2,
        cardBgImage: {uri:cardImageTwo},
        likeCount: 1,
        likeUserImages: [
          {img:{uri:profileImageThree}},
        ]
      },
      {
        id: 3,
        cardBgImage: {uri:cardImageThree},
        likeCount: 1,
        likeUserImages: [
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 4,
        cardBgImage: {uri:cardImageFour},
        likeCount: 2,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 5,
        cardBgImage: {uri:cardImageFive},
        likeCount: 2,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
        ]
      },
      {
        id: 6,
        cardBgImage: {uri:cardImageSix},
        likeCount: 5,
        likeUserImages: [
          {img:{uri:profileImageOne}},
          {img:{uri:profileImageTwo}},
          {img:{uri:profileImageThree}},
        ]
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
			segment: 1,
      data: [
        {
          id: 1,
          name: 'Johnie Cornwall',
          post: 'Visual Designer',
          isSelected: true,
          profileImg: {uri:profileOne},
        },
        {
          id: 2,
          name: 'Albertine Bence',
          post: 'Copywriter',
          isSelected: false,
          profileImg: {uri:profileTwo},
        },
        {
          id: 3,
          name: 'Hettie Devine',
          post: 'Lead 3D Artist',
          isSelected: false,
          profileImg: {uri:profileThree},
        },
        {
          id: 4,
          name: 'Gino Muriel',
          post: 'Senior Product Designer',
          isSelected: false,
          profileImg: {uri:profileFour},
        },
        {
          id: 5,
          name: 'Jaymie Pamplin',
          post: 'Art Director',
          isSelected: false,
          profileImg: {uri:profileFive},
        },
        {
          id: 6,
          name: 'Wilson Bashaw',
          post: 'UX/UI Designer',
          isSelected: false,
          profileImg: {uri:profileSix},
        },
      ],
    };
 	}

	_renderPhoto(rowData) {
    return(
      <View style={styles.rowMain}>
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>

          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.likeImage} onPress={()=>alert("Like")}>
              <FontAwesome name="heart" size={15} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
            <View style={styles.profileContainer}>
              {
                rowData.likeUserImages.map((item, index)=>{
                  return(
                    <View key={index} style={styles.profileImageView}>
                      <Image style={styles.profileImg} source={item.img}/>
                    </View>
                  )
                })
              }
            </View>
            </Right>
          </View>

        </ImageBackground>
      </View>
    )
  }

  _fnChangeItem(listId){
     // const newArray = this.state.data;
     const newArray = this.state.data;

     for(var i = 0 ; i< this.state.data.length; i++){
       if(this.state.data[i].id == listId){
         // alert(listId + ' prag ' +this.state.data[i].id)
         const newArray1 = [];

         for(var i = 0 ; i< this.state.data.length; i++){
           if(this.state.data[i].id == listId){

             newArray1.push({
                 id: this.state.data[i].id,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: !this.state.data[i].isSelected,
                 profileImg: this.state.data[i].profileImg,
               },
             );
           } else {
             newArray1.push({
                 id: this.state.data[i].id,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: this.state.data[i].isSelected,
                 profileImg: this.state.data[i].profileImg,
               },
             );
           }
         }

        this.setState({ data: newArray1 });
         console.log(newArray1);
       }
     }
  }

  _renderActiveComponent = () => {

    const { segment } = this.state;

    // Everyone Friends
    if(segment === 1) {
       return (
          <View style={styles.timesheetList}>
            <ListView
               contentContainerStyle={styles.listContentPhoto}
               dataSource={this.state.dataSource}
               renderRow={this._renderPhoto.bind(this)}
               enableEmptySections
               pageSize={4}/>
          </View>

       )
    }

    // Nearby Friends
    if(segment === 2) {
      return (
        <Content>
        <View style={styles.peopleMainView}>
        <View style={styles.listContentPeople}>
        {
          this.state.data.map((item, index) => {
            return (
              <View style={styles.rowMainPeople} key={index}>
                <View style={styles.imageShadow}>
                  <Image source={item.profileImg} style={styles.userImage}/>
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.post}>{item.post}</Text>
                {
                  (item.isSelected == true) ?
                  <TouchableOpacity style={styles.followBgSelected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.followTxtSelected}>Follow</Text></TouchableOpacity> :
                  <TouchableOpacity style={styles.followBgNotSelected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.followTxtNotSelected}>Follow</Text></TouchableOpacity>
                }
              </View>
            )
          })
        }
        </View>
        </View>
        </Content>
      )
    }
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    return(
      <Container style={styles.main}>

      <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
            {
              (I18nManager.isRTL)
              ?
                  <MaterialIcons name="chevron-right" size={25} color='white'/>
              :
                  <MaterialIcons name="chevron-left" size={25} color='white'/>
            }
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Timeline</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={()=>alert("Search")}>
              <Ionicons name="ios-search" size={25} color='white'/>
            </TouchableOpacity>
          </Right>
      </Header>

          <View style={styles.segmentView}>
            <Segment style={styles.segmentTabSec}>

                <Button
                  style={this.state.segment === 1 ? styles.selectedSegmentTab : styles.segmentTab}
                  active={(this.state.segment === 1) ? true : false}
                  onPress={() => this.setState({segment: 1})} >
                  <Text style={this.state.segment === 1 ? styles.activeTab : styles.normalTab}>Photo</Text>
                </Button>

                <Button
                  style={this.state.segment === 2 ? styles.selectedSegmentTab : styles.segmentTab}
                  active={(this.state.segment === 2) ? true : false}
                  onPress={() => this.setState({segment: 2})} >
                  <Text style={this.state.segment === 2 ? styles.activeTab : styles.normalTab}>People</Text>
                </Button>

            </Segment>
          </View>

        <View style={styles.segmentsScreenSec}>
          {this._renderActiveComponent()}
        </View>
      </Container>

    );
  }
}
