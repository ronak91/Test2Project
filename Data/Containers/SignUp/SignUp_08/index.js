import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Footer,
  Left,
  Body,
  Title,
  Content,
  Form,
  Label
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";

export default class Signup_08 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("SignUp");
      return true;
    });
  }
  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/signup/signup_back_08.png"
    };

    return (
      <ImageBackground source={BG_Image} style={styles.mainbg}>
        <Container style={{ backgroundColor: "transparent" }}>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body} />
            <Right style={styles.right} />
          </Header>
          <View style={styles.slidesec}>
            <Text style={styles.headertext}>
              Connect and discovery our Awesome UI Kit
            </Text>
            <Text style={styles.desctext}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </Text>
          </View>

          <View style={styles.btnsec}>
            <View iconRight style={styles.buttonlogin}>
              <FontAwesome name="facebook-f" size={27} color="white" />
              <TouchableOpacity onPress={() => alert("Sign In with Facebook")}>
                <Text autoCapitalize="words" style={styles.ButtonText}>
                  Sign in with facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View iconRight style={styles.buttonlogin}>
              <FontAwesome name="twitter" size={27} color="white" />
              <TouchableOpacity onPress={() => alert("Sign In with Twitter")}>
                <Text autoCapitalize="words" style={styles.ButtonText}>
                  Sign in with twitter
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view3}>
            <TouchableOpacity onPress={() => alert("Sign In")}>
              <Text autoCapitalize="words" style={styles.bottomtext}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ImageBackground>
    );
  }
}
