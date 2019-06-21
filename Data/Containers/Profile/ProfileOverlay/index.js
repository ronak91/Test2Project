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
  Title
} from "native-base";
import ReadMore from "react-native-read-more-text";
import LinearGradient from "react-native-linear-gradient";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Images, Colors, Fonts, Metrics } from "../../../Themes/";

/**
 *  Profile Screen
 */
const bgImage =
  "https://antiqueruby.aliansoftware.net//Images/profile/background_p20.png";
const profileImgOne =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_user1.png";
const profileImgTwo =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_user2.png";
const profileImgThree =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_user3.png";
const profileImgFour =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_user4.png";
const profileImgFive =
  "https://antiqueruby.aliansoftware.net//Images/profile/ic_user5.png";

export default class ProfileOverlay extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }

  constructor(props) {
    super(props);

    const friendsObject = [
      {
        id: 1,
        profileImage: { uri: profileImgOne },
        socialImage: "facebook",
        color: "#4c70aa"
      },
      {
        id: 2,
        profileImage: { uri: profileImgTwo },
        socialImage: "twitter",
        color: "#00b6ee"
      },
      {
        id: 3,
        profileImage: { uri: profileImgThree },
        socialImage: "twitter",
        color: "#00b6ee"
      },
      {
        id: 4,
        profileImage: { uri: profileImgFour },
        socialImage: "facebook",
        color: "#4c70aa"
      },
      {
        id: 5,
        profileImage: { uri: profileImgFive },
        socialImage: "twitter",
        color: "#00b6ee"
      }
    ];

    const hobbiesObject = [
      {
        id: 1,
        hobbieName: "Game"
      },
      {
        id: 2,
        hobbieName: "Music"
      },
      {
        id: 3,
        hobbieName: "Sport"
      },
      {
        id: 4,
        hobbieName: "Fashion"
      },
      {
        id: 5,
        hobbieName: "Diy"
      },
      {
        id: 6,
        hobbieName: "Movie"
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      friendsSource: ds.cloneWithRows(friendsObject),
      hobbiesSource: ds.cloneWithRows(hobbiesObject)
    };
  }

  _renderFriendsRow(rowData) {
    var count = rowData.getRowCount;
    return (
      <View style={styles.friendView}>
        <Image style={styles.friendsImg} source={rowData.profileImage} />
        <TouchableOpacity
          style={[styles.socialBg, { backgroundColor: rowData.color }]}
        >
          <FontAwesome name={rowData.socialImage} size={10} color="#ffffff" />
        </TouchableOpacity>
        {/*<Image style={styles.friendSocialIcon} source={rowData.socialImage}/>*/}
        <View style={{ marginRight: Metrics.HEIGHT * 0.02 }} />
      </View>
    );
  }

  _renderHobbiesRow(rowData) {
    return (
      <TouchableOpacity
        onPress={() => alert(rowData.hobbieName)}
        style={[
          styles.hobbiesView,
          { marginRight: rowData.id == 6 ? 0 : Metrics.HEIGHT * 0.015 }
        ]}
      >
        <Text style={styles.hobbyText}>{rowData.hobbieName}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    var that = this;

    return (
      <Container style={styles.main}>
        <ImageBackground source={{ uri: bgImage }} style={styles.imgContainer}>
          <LinearGradient
            locations={[0.01, 0.4, 0.6]}
            colors={["transparent", "rgba(45, 50, 79, 0.9)", "black"]}
            style={styles.gradient}
          >
            <Content>
              <Header style={styles.header}>
                <Left style={styles.left}>
                  <TouchableOpacity
                    style={styles.backArrow}
                    onPress={() => that.props.navigation.navigate("Profile")}
                  >
                    <FontAwesome
                      name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                      size={25}
                      color="white"
                    />
                  </TouchableOpacity>
                </Left>
                <Body style={styles.body} />
                <Right style={styles.right} />
              </Header>
              <Text style={styles.nameTxt}>Johnie Cornwall</Text>
              <Text style={styles.designationTxt}>Graphic Design</Text>
              <View style={styles.followBg}>
                <View style={styles.followerView}>
                  <Text style={styles.followCountTxt}>134</Text>
                  <Text style={styles.followLabelTxt}>Followers</Text>
                </View>
                <View style={styles.extraView} />
                <View style={styles.followerView}>
                  <Text style={styles.followCountTxt}>112</Text>
                  <Text style={styles.followLabelTxt}>Following</Text>
                </View>
                <View style={styles.extraView} />
                <View style={styles.followerView}>
                  <Text style={styles.followCountTxt}>450</Text>
                  <Text style={styles.followLabelTxt}>Likes</Text>
                </View>
                <View style={styles.extraView} />
                <TouchableOpacity
                  style={styles.followBtnView}
                  onPress={() => alert("FOLLOW")}
                >
                  <Text style={styles.followTxt}>FOLLOW</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dividerHorizontal} />
              <Text style={styles.aboutMeTxt}>ABOUT ME</Text>
              <View style={styles.descView}>
                <ReadMore
                  numberOfLines={4}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <Text style={styles.aboutMeDescriptionTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis semper non quam sed scelerisque. Vestibulum pharetra
                    dignissim nibh, ut tincidunt magna hendrerit sit amet.
                    Integer sit amet venenatis sem, sit amet ullamcorper nisi.
                    Vivamus dictum facilisis velit, quis commodo magna iaculis
                    sed.
                  </Text>
                </ReadMore>
              </View>
              <Text style={styles.aboutMeTxt}>FRIENDS</Text>
              <ListView
                style={styles.friendListView}
                horizontal={true}
                dataSource={this.state.friendsSource}
                renderRow={this._renderFriendsRow.bind(this)}
                showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.aboutMeTxt}>HOBBIES</Text>
              <ListView
                style={styles.hobbiesListView}
                horizontal={true}
                dataSource={this.state.hobbiesSource}
                renderRow={this._renderHobbiesRow.bind(this)}
                showsHorizontalScrollIndicator={false}
              />
            </Content>
          </LinearGradient>
        </ImageBackground>
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
