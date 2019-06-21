
import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView,TextInput, BackHandler, I18nManager} from 'react-native';
import { Container, Button,Right,Left,ListItem,Content,Body,Header,Icon,Title} from 'native-base';
import Swiper from 'react-native-swiper';
// Screen Styles
import styles from './styles';
import { View} from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images,Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
 const profileImageOne = "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
 const profileImageTwo = "https://antiqueruby.aliansoftware.net//Images/social/card_sc15.png";
 const profileImageThree = "https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc12.png";
 const profileImageFour = "https://antiqueruby.aliansoftware.net//Images/social/people_four_soeighteen.png";
 const profileImageFive = "https://antiqueruby.aliansoftware.net//Images/social/people_five_soeighteen.png";
 const profileImageSix = "https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png";
 const profileImageSeven = "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
 const profileImageEight = "https://antiqueruby.aliansoftware.net//Images/social/people_eight_soeighteen.png";
 const profileImageNine = "https://antiqueruby.aliansoftware.net//Images/social/people_nine_soeighteen.png";

export default class Social18 extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    this.state = {
      data: [
        {
          id: 1,
          profileImage: {uri:profileImageOne},
          name: 'Johnie Cornwall',
          post: 'Senior Design Director',
          isSelected: true
        },
        {
          id: 2,
          profileImage: {uri:profileImageTwo},
          name: 'Renaldo Rozman',
          post: 'Lead 3D Artist',
          isSelected: false
        },
        {
          id: 3,
          profileImage: {uri:profileImageThree},
          name: 'Argelia Bee',
          post: 'Copywriter',
          isSelected: false
        },
        {
          id: 4,
          profileImage: {uri:profileImageFour},
          name: 'Kimiko Hoyle',
          post: 'Marketing & Creative Services',
          isSelected: false
        },
        {
          id: 5,
          profileImage: {uri:profileImageFive},
          name: 'Elene Jeppesen',
          post: 'Creative Leader',
          isSelected: false
        },
        {
          id: 6,
          profileImage: {uri:profileImageSix},
          name: 'Lyndon Benavente',
          post: 'Senior Design Director',
          isSelected: false
        },
        {
          id: 7,
          profileImage: {uri:profileImageSeven},
          name: 'Elfrieda Esser',
          post: 'UX/UI Designer',
          isSelected: false
        },
        {
          id: 8,
          profileImage: {uri:profileImageEight},
          name: 'Devin Newberg',
          post: 'Marketing Designer',
          isSelected: false
        },
        {
          id: 9,
          profileImage: {uri:profileImageNine},
          name: 'Joey Gumm',
          post: 'Interactive Art Director',
          isSelected: false
        },
      ]
    };
 	}

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('#2d324f',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    var data = [
      {
        id: 1,
        profileImage: {uri:profileImageOne},
        name: 'Johnie Cornwall',
        post: 'Senior Design Director',
        isSelected: 'true'
      },
      {
        id: 2,
        profileImage: {uri:profileImageOne},
        name: 'Renaldo Rozman',
        post: 'Lead 3D Artist',
        isSelected: 'false'
      },
      {
        id: 3,
        profileImage: {uri:profileImageTwo},
        name: 'Argelia Bee',
        post: 'Copywriter',
        isSelected: 'false'
      },
      {
        id: 4,
        profileImage: {uri:profileImageThree},
        name: 'Kimiko Hoyle',
        post: 'Marketing & Creative Services',
        isSelected: 'false'
      },
      {
        id: 5,
        profileImage: {uri:profileImageFour},
        name: 'Elene Jeppesen',
        post: 'Creative Leader',
        isSelected: 'false'
      },
      {
        id: 6,
        profileImage: {uri:profileImageFive},
        name: 'Lyndon Benavente',
        post: 'Senior Design Director',
        isSelected: 'false'
      },
      {
        id: 7,
        profileImage: {uri:profileImageSix},
        name: 'Elfrieda Esser',
        post: 'UX/UI Designer',
        isSelected: 'false'
      },
      {
        id: 8,
        profileImage: {uri:profileImageSeven},
        name: 'Devin Newberg',
        post: 'Marketing Designer',
        isSelected: 'false'
      },
      {
        id: 9,
        profileImage: {uri:profileImageEight},
        name: 'Joey Gumm',
        post: 'Interactive Art Director',
        isSelected: 'false'
      },
    ]

    return(
      <Container style={styles.main}>
        <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>that.props.navigation.navigate('Social')}>
              {
                (I18nManager.isRTL)
                ?
                    <FontAwesome name="angle-right" size={25} color='white'/>
                :
                    <FontAwesome name="angle-left" size={25} color='white'/>
              }
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>People</Text>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity onPress={()=>alert("Search")}>
                <Ionicons name="ios-search" size={25} color='white'/>
              </TouchableOpacity>
            </Right>
        </Header>
        <Content>
        <View style={styles.listMainView} animation="zoomInDown" duration={1100} delay={1400}>
        {
          this.state.data.map((item, index) => {
           return (
             <View style={styles.rowBg} key={index}>
               <View style={styles.rowView}>
                 <Image source={item.profileImage} style={styles.profileImg}/>
                 <View style={styles.namePostView}>
                    <Text style={styles.rowNameTxt}>{item.name}</Text>
                    <Text style={styles.rowDesignationTxt}>{item.post}</Text>
                 </View>
                 <View style={{justifyContent: 'center'}}>
                   {
                     (item.isSelected == true) ?
                      <TouchableOpacity style={styles.followBgSelected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.followTxtSelected}>Follow</Text></TouchableOpacity> :
                      <TouchableOpacity style={styles.followBgNotSelected} onPress = {() => this._fnChangeItem(item.id)}><Text style={styles.followTxtNotSelected}>Follow</Text></TouchableOpacity>
                   }
                 </View>
               </View>
               <View style={ (index === data.length - 1) ? null : styles.dividerHorizontal}/>
            </View>
            )
          })
        }
        </View>
        </Content>
      </Container>

    );
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
                 profileImage: this.state.data[i].profileImage,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: !this.state.data[i].isSelected
               },
             );
           } else {
             newArray1.push({
                 id: this.state.data[i].id,
                 profileImage: this.state.data[i].profileImage,
                 name: this.state.data[i].name,
                 post: this.state.data[i].post,
                 isSelected: this.state.data[i].isSelected
               },
             );
           }
         }

        this.setState({ data: newArray1 });
         console.log("pragnesh");
         console.log(newArray1);
       }
     }
  }
}
