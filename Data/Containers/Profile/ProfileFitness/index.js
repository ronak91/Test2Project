
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ScrollView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Header, Left, Body, Title, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Metrics } from '../../../Themes/';
// Screen Styles
import styles from './styles';

const coverBg = 'https://antiqueruby.aliansoftware.net//Images/profile/ic_mainbg_p28.png';

export default class ProfileFitness extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      isFavorite: false,
      selectedLots: 2,
    };
 	}

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Profile')
      return true;
    });
  }

  onImagePress(id) {
    this.setState({
      selectedLots: id
    });

    if(id>1){
      const offsetX = (id * (Metrics.WIDTH * 0.07));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
    else{
      const offsetX = ((Metrics.WIDTH * 0));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var data = [
      {
        id: 1,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user1__p28.png',
      },
      {
        id: 2,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user2_ptwentynine_p28.png',
      },
      {
        id: 3,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user3_ptwentynine_p28.png',
      },
      {
        id: 4,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user4_ptwentynine_p28.png',
      },
      {
        id: 5,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user5_ptwentynine_p28.png',
      },
      {
        id: 6,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user6_ptwentynine_p28.png',
      },
      {
        id: 7,
        friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user7_ptwentynine_p28.png',
      },
    ]

    return(
      <Container>
        <ImageBackground source={{uri:coverBg}} style={styles.imgContainer}>
          <Header
            androidStatusBarColor={'transparent'}
            style={styles.header}>

            {/* Take up the space */}
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={styles.backArrow2}/>
              </TouchableOpacity>
            </Left>

            {/* Title */}
            <Body style={styles.body}>
              <Title style={styles.headerTitle}>
                Discovery
              </Title>
            </Body>

            {/* Right Icon */}
            <Right style={styles.right}>
              <Button transparent>
              </Button>
            </Right>
          </Header>
          <View style={styles.slidesec}>
            <View style={styles.nameBg}>
              <Text style={styles.nameTxt}>Johnie Cornwall</Text>
              <TouchableOpacity  onPress={()=>this.setState({isFavorite: !this.state.isFavorite})} style={(this.state.isFavorite) ? styles.activeButton : styles.normalButton}>
                <FontAwesome name="heart" size={22} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={styles.addressBg}>
              <View style={styles.mappinBg}>
                <Entypo name="location-pin" size={25} color="#0691ce"/>
              </View>
              <Text style={styles.addressTxt}>Seattle,US</Text>
            </View>
            <LinearGradient locations={[0.01,0.6]} colors={['transparent', 'rgba(0,0,0,0.7)']} style={styles.shadowBg}>
              <View style={styles.descrtiptionBg}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.descriptionTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </Text>
                </ScrollView>
              </View>
              <View>
                <ScrollView horizontal={true} ref='imageList' showsHorizontalScrollIndicator={false} style={styles.profileImgScrollBg}>
                {
                  data.map((item, index)=>{
                    return(
                      <TouchableOpacity key={index} style={styles.profileImgBg} onPress={()=>this.onImagePress(item.id)}>
                        <Image source={{uri:item.friendProfile}} style={(this.state.selectedLots == item.id) ? styles.activeImage : styles.normalImage}/>
                      </TouchableOpacity>
                    )
                  })
                }
                </ScrollView>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Container>

    );
  }
}
