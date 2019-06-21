import React, { Component } from "react";
import {
  AsyncStorage,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ImageBackground,
  ScrollView,
  TextInput
} from "react-native";
import {
  Header,
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  top,
  Left,
  Right,
  Title,
  Body,
  Item,
  Input
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Styles
import styles from "./styles";

const ProfileImage =
  "https://antiqueruby.aliansoftware.net//Images/drawer/profile_dtfive.jpg";
const bottomImage =
  "https://antiqueruby.aliansoftware.net//Images/drawer/musicpicdtsix.png";
const bgImage =
  "https://antiqueruby.aliansoftware.net//Images/drawer/backimgdtsix.png";

const onlineUserOne =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user1_dtewntynine.jpg";
const onlineUserTwo =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user2_dtewntynine.jpg";
const onlineUserThree =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user3_dtewntynine.jpg";
const onlineUserFour =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user4_dtewntynine.jpg";
const onlineUserFive =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user5_dtewntynine.jpg";
const onlineUserSix =
  "https://antiqueruby.aliansoftware.net//Images/drawer/online_user6_dtewntynine.jpg";

const recentUserOne =
  "https://antiqueruby.aliansoftware.net//Images/drawer/recent_user1_dtewntynine.jpg";
const recentUserTwo =
  "https://antiqueruby.aliansoftware.net//Images/drawer/recent_user2_dtewntynine.jpg";
const recentUserThree =
  "https://antiqueruby.aliansoftware.net//Images/drawer/recent_user3_dtewntynine.jpg";

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: "SignUp",
      dataOnlineUser: [
        {
          id: 1,
          profileImg: { uri: onlineUserOne },
          name: "Weston Paulk",
          status: "online"
        },
        {
          id: 2,
          profileImg: { uri: onlineUserTwo },
          name: "Vannessa Nusbaum",
          status: "mobile"
        },
        {
          id: 3,
          profileImg: { uri: onlineUserThree },
          name: "Sidney Straube",
          status: "online"
        },
        {
          id: 4,
          profileImg: { uri: onlineUserFour },
          name: "Elois Valencia",
          status: "online"
        },
        {
          id: 5,
          profileImg: { uri: onlineUserFive },
          name: "Sarai Boysen",
          status: "mobile"
        },
        {
          id: 6,
          profileImg: { uri: onlineUserSix },
          name: "Rogelio Wayt",
          status: "online"
        }
      ],
      dataRecentUser: [
        {
          id: 1,
          profileImg: { uri: recentUserOne },
          name: "Ronna Klenke",
          time: "10 mins"
        },
        {
          id: 2,
          profileImg: { uri: recentUserTwo },
          name: "Derick Merrill",
          time: "14 mins"
        },
        {
          id: 3,
          profileImg: { uri: recentUserThree },
          name: "Jerome Fiske",
          time: "25 mins"
        }
      ]
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet([
      "langId",
      "siteLink",
      "siteText",
      "copyrighttext",
      "levelTitle"
    ]).then(data => {
      this.setState({
        langId: data[0][1],
        siteLink: data[1][1],
        siteText: data[2][1],
        copyrighttext: data[3][1],
        levelTitle: data[4][1]
      });
    });
  }

  _handlePress(screenName) {
    var tempVar = "";
    this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
    this.props.navigation.navigate(screenName);
  }

  render() {
    const { activeMenuImage } = this.state;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.headerBg}>
            <View style={styles.searchBarBg}>
              {/*<Image source={images.searchGreyDrwer} style={styles.searchIcon}/>*/}
              <Ionicons name="ios-search" size={18} color="#868588" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#6d6d71"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"
              />
            </View>
            <View style={styles.headerDivider} />
            <View style={styles.headerTitleBg}>
              <Text style={styles.headerTitleTxt}>ONLINE USERS</Text>
              <TouchableOpacity onPress={() => alert("EDIT")}>
                <Text style={styles.headerTitleTxt}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Content>
            {this.state.dataOnlineUser.map((item, index) => {
              return (
                <View key={index} style={styles.listBg}>
                  <View style={styles.menuListItem}>
                    <View style={styles.nameProfileBg}>
                      <Image
                        style={styles.profileImg}
                        source={item.profileImg}
                      />
                      <TouchableOpacity onPress={() => alert(item.name)}>
                        <Text style={styles.nameTxt}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                    {item.status == "online" ? (
                      <View style={styles.onlineStatusIcon} />
                    ) : (
                      <FontAwesome name="mobile" size={22} color="#737179" />
                    )}
                  </View>
                  <View
                    style={
                      index === this.state.dataOnlineUser.length - 1
                        ? null
                        : styles.listDivider
                    }
                  />
                </View>
              );
            })}
            <View style={styles.recentUserBg}>
              <Text style={styles.recentlyTxt}>RECENTLY</Text>
            </View>
            {this.state.dataRecentUser.map((item, index) => {
              return (
                <View key={index} style={styles.listRecentBg}>
                  <View style={styles.menuListItem}>
                    <View style={styles.nameProfileBg}>
                      <Image
                        style={styles.profileImg}
                        source={item.profileImg}
                      />
                      <TouchableOpacity onPress={() => alert(item.name)}>
                        <Text style={styles.nameTxt}>{item.name}</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.timeTxt}>{item.time}</Text>
                  </View>
                  <View
                    style={
                      index === this.state.dataRecentUser.length - 1
                        ? null
                        : styles.listDivider
                    }
                  />
                </View>
              );
            })}
          </Content>
        </View>
      </Container>
    );
  }
}
