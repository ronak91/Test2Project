import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View,
  ListView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  Content,
  Body,
  Header,
  Icon,
  Title,
  RegularText
} from "native-base";
import ReadMore from "react-native-read-more-text";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";

const bgImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/image_bg_profile_nine.jpg";
const profileImg =
  "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p08.png";
const profileImageTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/card_propic_02_p11.png";
const profileImageThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_suggested_user_two_profile_nine.png";

export default class ProfileBlogTwo extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }
  constructor(props) {
    super(props);
    const profileImages = [
      {
        id: 1,
        profileImage: { uri: profileImg }
      },
      {
        id: 2,
        profileImage: { uri: profileImageTwo }
      },
      {
        id: 3,
        profileImage: { uri: profileImageThree }
      }
    ];

    const profileDetails = [
      {
        id: 1,
        profileImage: { uri: profileImg },
        name: "Johnie Cornwall",
        status: "followed you",
        isTimeStatusOn: "true",
        timeStatus: "Just now",
        description: ""
      },
      {
        id: 2,
        profileImage: { uri: profileImageTwo },
        name: "Michal Lampley",
        status: "commented your post",
        isTimeStatusOn: "false",
        timeStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        profileImage: { uri: profileImg },
        name: "Johnie Cornwall",
        status: "followed you",
        isTimeStatusOn: "true",
        timeStatus: "Just now",
        description: ""
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      profileSource: ds.cloneWithRows(profileImages),
      profileDetailsSource: ds.cloneWithRows(profileDetails)
    };
  }

  _renderProfileImageRow(rowData) {
    return (
      <View>
        <Image
          style={
            rowData.id == "1"
              ? styles.suggestedPeopleImg
              : styles.suggestedPeopleImgOther
          }
          source={rowData.profileImage}
        />
      </View>
    );
  }

  _renderProfileDetailRow(rowData) {
    return (
      <View style={styles.mainviewrow}>
        <Image source={rowData.profileImage} style={styles.mainimgrow} />
        <View style={styles.row}>
          <View style={styles.details}>
            <Text style={styles.name}>{rowData.name}</Text>
            <Text style={styles.status}>{rowData.status}</Text>
          </View>
          {rowData.isTimeStatusOn == "true" ? (
            <View style={styles.details}>
              <Ionicons name="ios-time-outline" size={15} color="#b7b7b7" />
              <Text style={styles.time}>{rowData.timeStatus}</Text>
            </View>
          ) : (
            <Text style={styles.descrow}>{rowData.description}</Text>
          )}
        </View>
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Image source={{ uri: bgImage }} style={styles.imgContainer} />
        <Header androidStatusBarColor={"transparent"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Title style={styles.title}>Profiles</Title>
          </Body>

          <Right style={styles.left}>
            <Button transparent />
          </Right>
        </Header>
        <Content>
          <View style={styles.profileDataBg}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />
            <View style={styles.mainview}>
              <View style={styles.personalInfoBg}>
                <Text style={styles.nameTxt}>Kristan Eppinger</Text>
                <Text style={styles.designationTxt}>Graphic design</Text>
                <TouchableOpacity
                  style={styles.followBg}
                  onPress={() => alert("FOLLOW")}
                >
                  <Text style={styles.followTxt}>FOLLOW</Text>
                </TouchableOpacity>
                <View style={styles.dividerHorizontal} />
                <View style={styles.countBg}>
                  <View style={styles.titleCountBg}>
                    <Text style={styles.countTxt}>1434</Text>
                    <Text style={styles.titleTxt}>Followers</Text>
                  </View>
                  <View style={styles.titleCountBg}>
                    <Text style={styles.countTxt}>1121</Text>
                    <Text style={styles.titleTxt}>Following</Text>
                  </View>
                  <View style={styles.titleCountBg}>
                    <Text style={styles.countTxt}>4507</Text>
                    <Text style={styles.titleTxt}>Likes</Text>
                  </View>
                </View>
                <View style={styles.dividerHorizontal} />
                <Text style={styles.descTxt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  semper non quam sed scelerisque.
                </Text>
              </View>
            </View>
            <View style={styles.SuggestedPeopleBg}>
              <View style={styles.suggestConnectionBg}>
                <Text style={styles.suggestConnectionTxt}>
                  Suggest connections
                </Text>
                <Text style={styles.peopleTxt}>People that you may know</Text>
              </View>
              <View>
                <ListView
                  horizontal={true}
                  dataSource={this.state.profileSource}
                  renderRow={this._renderProfileImageRow.bind(this)}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            <View style={styles.detailProfileBg}>
              <ListView
                dataSource={this.state.profileDetailsSource}
                renderRow={this._renderProfileDetailRow.bind(this)}
                scrollEnabled={false}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.viewMoreLessTxt} onPress={handlePress}>
        View more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.viewMoreLessTxt} onPress={handlePress}>
        View less
      </Text>
    );
  };
}
