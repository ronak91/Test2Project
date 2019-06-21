
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// Screen Styles
import styles from './styles';
import Tablist from './Tablist.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';
import Swiper from 'react-native-swiper';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from '../../../Components/react-native-scrollable-tab-view';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_fifteen.png';
const headerBG = 'https://antiqueruby.aliansoftware.net//Images/profile/image_bg_profile_fifteen.jpg';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const MusicRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const PhotoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const VideoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const BooksRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;


export default class ProfilePortfolio extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

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


  _renderLabel = ({route}) => {
    return(
      <View>
        <Text style={(route.id == this.state.index)?styles.activeLabel:styles.normalLabel}>{route.title}</Text>
      </View>
    )
  }

  _getLabelText = ({ route }) => route.title;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
                            {...props}
                            renderLabel={this._renderLabel}
                            indicatorStyle={{backgroundColor: "transparent"}}
                            style={styles.tabView} />;

  _renderScene = SceneMap({
    musics: MusicRoute,
    photos: PhotoRoute,
    videos: VideoRoute,
    books: BooksRoute,
  });

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    return(
     <Container>
       <View>
         <ImageBackground source={{uri:headerBG}} style={styles.headerImageBG}>

           <Header style={styles.header}>
               <Left style={styles.left}>
                 <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Profile')}>
                   <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                 </TouchableOpacity>
               </Left>
               <Body style={styles.body}>
                 <Text style={styles.textTitle}>Profiles</Text>
               </Body>
               <Right style={styles.right}>
                 <TouchableOpacity onPress={()=>alert("Setting")}>
                   <Image source={Images.setting} style={styles.settingIcon}/>
                 </TouchableOpacity>
               </Right>
           </Header>

           <TouchableOpacity style={styles.chooseImage} onPress={()=>alert("Choose image")}>
             <SimpleLineIcons name="camera" size={20} color='white' />
           </TouchableOpacity>
         </ImageBackground>
         <View style={styles.profileContent} >
           <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
           <TouchableOpacity style={styles.changeImage} onPress={()=>alert("Change image")}>
             <SimpleLineIcons name="camera" color='white' style={{backgroundColor: Colors.transparent, fontSize: Fonts.moderateScale(16)}} />
           </TouchableOpacity>
         </View>
         <View style={styles.profileDetailMain}>
           <Text style={styles.name}>Johnie Cornwall</Text>
           <Text style={styles.post}>Graphic design</Text>
           <View style={styles.socialButtons}>
             <TouchableOpacity style={(this.state.isFollow) ? styles.activeButton : styles.normalButton} onPress={()=>this.setState({isFollow: !this.state.isFollow})}>
               <Text style={(this.state.isFollow) ? styles.activeButtonTxt : styles.normalButtonTxt}>{(this.state.isFollow) ? 'FOLLOWING' : 'FOLLOW'}</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.normalButton} onPress={()=>alert("Create Message")}>
               <Text style={styles.normalButtonTxt}>MESSAGE</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.separatorStyle}/>
           <View style={styles.followContainer}>
             <View style={styles.followSec}>
               <Text style={styles.followCount}>1434</Text>
               <Text style={styles.followText}>Followers</Text>
             </View>
             <View style={styles.verticalSeparator} />
             <View style={styles.followSec}>
               <Text style={styles.followCount}>1121</Text>
               <Text style={styles.followText}>Following</Text>
             </View>
             <View style={styles.verticalSeparator} />
             <View style={styles.followSec}>
               <Text style={styles.followCount}>4507</Text>
               <Text style={styles.followText}>Likes</Text>
             </View>
           </View>
           <View style={styles.separatorStyle}/>
         </View>
       </View>
       <ScrollableTabView
         initialPage={0}
         tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
         tabBarBackgroundColor={'transparent'}
         tabBarActiveTextColor={'#0691ce'}
         tabBarInactiveTextColor={'#b7b7b7'}
         tabBarTextStyle={styles.tabText}
         renderTabBar={() => <ScrollableTabBar
                               style={{shadowColor: '#000',
                               shadowOffset: { width: 0, height: 0 },
                               shadowOpacity: 0,
                               shadowRadius: 0,
                               elevation: 0,
                               borderWidth: 0,
                               borderColor: 'transparent'}}/>}
         >


           <View tabLabel='Photos'>
             <ListView
             horizontal={true}
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
           </View>

           <View tabLabel='Videos'>
             <ListView
             horizontal={true}
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
           </View>

           <View tabLabel='Events'>
             <ListView
             horizontal={true}
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
           </View>

           <View tabLabel='Books'>
             <ListView
                 horizontal={true}
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this._renderSeparator}
                enableEmptySections
                pageSize={4}/>
           </View>

       </ScrollableTabView>
    </Container>

    );
  }
}
