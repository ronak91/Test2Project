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
  Title
} from "native-base";
// Screen Styles
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
/**
 *  Profile Screen
 */
export default class ProfileDiscovery extends Component {
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
      "https://antiqueruby.aliansoftware.net//Images/profile/image_bg_profile_seven.png";
    const profileImg =
      "https://antiqueruby.aliansoftware.net//Images/social/card_sc15.png";

    return (
      <Container style={styles.main}>
        <ImageBackground source={{ uri: bgImage }} style={styles.imgContainer}>
          <LinearGradient
            locations={[0.6, 1]}
            colors={["transparent", "black"]}
            style={styles.gred}
          >
            <Header androidStatusBarColor={"transparent"} style={styles.header}>
              <Left style={styles.right}>
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
                <Title style={styles.title}>Discovery</Title>
              </Body>

              <Right style={styles.right}>
                <Button transparent />
              </Right>
            </Header>
            <View style={styles.profile}>
              <View style={styles.desc}>
                <Text style={styles.name}>Johnie Cornwall</Text>
                <View style={styles.address}>
                  <Ionicons
                    name="md-pin"
                    color="#0691ce"
                    style={{ fontSize: 21 }}
                  />
                  <Text style={styles.addresstxt}>Seattle,US</Text>
                </View>
              </View>
              <Text style={styles.descTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ullamcorper, nulla id efficitur dignissim, odio nisl porta
                tortor, sit amet dictum quam massa sit amet justo
              </Text>
              <View style={styles.bottomicon}>
                <TouchableOpacity
                  onPress={() => alert("Like")}
                  style={styles.likeBg}
                >
                  <FontAwesome
                    name="heart"
                    size={25}
                    color="white"
                    style={styles.hearticon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => alert("Comment")}
                  style={styles.commentBg}
                >
                  <Ionicons
                    name="md-chatboxes"
                    size={25}
                    color="white"
                    style={styles.hearticon}
                  />
                </TouchableOpacity>
                <Right>
                  <TouchableOpacity
                    style={styles.followBg}
                    onPress={() => alert("Follow")}
                  >
                    <Text style={styles.followTxt}>FOLLOW</Text>
                  </TouchableOpacity>
                </Right>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </Container>
    );
  }
}
