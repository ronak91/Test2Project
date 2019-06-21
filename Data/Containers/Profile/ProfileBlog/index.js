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
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";
/**
 *  Profile Screen
 */
export default class ProfileBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Profile");
      return true;
    });
  }
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    const bgImage =
      "https://antiqueruby.aliansoftware.net//Images/profile/home_background_p08.png";
    const profileImg =
      "https://antiqueruby.aliansoftware.net//Images/profile/user_image_p08.png";

    return (
      <Container style={styles.main}>
        <ImageBackground source={{ uri: bgImage }} style={styles.imgContainer}>
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

          <View style={styles.profileDataBg}>
            <Image source={{ uri: profileImg }} style={styles.profileImg} />
            <View style={styles.mainview}>
              <View style={styles.personalInfoBg}>
                <View style={styles.detail}>
                  <Text style={styles.nameTxt}>Kristan Eppinger</Text>
                  <Text style={styles.designationTxt}>Graphic design</Text>
                </View>
                <Right>
                  <TouchableOpacity
                    style={styles.followBg}
                    onPress={() => alert("FOLLOW")}
                  >
                    <Text style={styles.followTxt}>FOLLOW</Text>
                  </TouchableOpacity>
                </Right>
              </View>
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
              <View style={styles.desc}>
                <ReadMore
                  numberOfLines={5}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <Text style={styles.descTxt}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis semper non quam sed scelerisque. Vestibulum pharetra
                    dignissim nibh, ut tincidunt magna hendrerit sit amet.
                    Integer sit amet venenatis sem, sit amet ullamcorper nisi.
                    Vivamus dictum facilisis velit, quis commodo magna iaculis
                    sed.
                  </Text>
                </ReadMore>
              </View>
            </View>
          </View>
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
