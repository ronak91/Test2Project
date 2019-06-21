
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
// Screen Styles
import styles from './styles';
import Tablist from './Tablist.js'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Images, Colors, Fonts, Metrics } from '../../../Themes/';

const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_profile_fifteen.png';
const headerBG = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_cover_ptwentytwo.png';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const MusicRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const PhotoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const VideoRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;
const BooksRoute = () => <View style={[ styles.container, { backgroundColor: 'transparent' } ]}><Tablist/></View>;


export default class ProfileChat extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

  constructor(props) {
 		super(props);

 		this.state = {
      isFollow: true,
      index: 0,
      routes: [
        {id:0, key: 'musics', title: 'Musics'},
        {id:1, key: 'photos', title: 'Photos'},
        {id:2, key: 'videos', title: 'Videos'},
        {id:3, key: 'books', title: 'Books'},
      ],
    };
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
                            style={styles.tabBarView} />;

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
     <ScrollView>
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
         </ImageBackground>
         <View style={styles.profileContent} >
           <View style={{flexDirection:'row'}}>
             <Image source={{uri:ProfileImage}} style={styles.profileImage}/>
             <View style={styles.profileInfo}>
               <Text style={styles.name}>Johnie Cornwall</Text>
               <Text style={styles.post}>Graphic design</Text>
             </View>
           </View>
           <View style={styles.socialIcons}>
             <TouchableOpacity onPress={()=> alert("Message")} style={styles.normalButton}>
                 <FontAwesome name="comment-o" size={16} color='#0691ce' style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>this.setState({isFollow: !this.state.isFollow})} style={(this.state.isFollow) ? styles.activeButton : styles.normalButton}>
                <SimpleLineIcons name="user-follow" size={15} color={(this.state.isFollow)?'white':'#0691ce'} style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
             </TouchableOpacity>
           </View>
         </View>

         <View style={styles.aboutProfile}>
           <View style={{flexDirection: 'row'}}>
             <Entypo name="location-pin" size={18} color='#0691ce'/>
             <Text style={styles.aboutText}>1201 Westlake Avenue, Suite 205 Seattle, WA 98121 USA</Text>
           </View>
           <View style={styles.mailContainer}>
             <Zocial name="email" size={14} color='#0691ce' />
             <Text style={styles.aboutText}>kristan_eppinger@gmail.com</Text>
           </View>
           <View style={styles.separatorStyle} />
           <View>
             <Text style={styles.status}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
           </View>
         </View>

         <View style={styles.profileDetailMain}>
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
         </View>
       </View>
       <TabViewAnimated
         style={styles.container}
         navigationState={this.state}
         renderScene={this._renderScene}
         renderHeader={this._renderHeader}
         onIndexChange={this._handleIndexChange}
         initialLayout={initialLayout}/>
         </ScrollView>
    </Container>

    );
  }
}
