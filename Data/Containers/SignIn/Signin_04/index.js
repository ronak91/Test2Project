import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
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
  Left,
  Body,
  Title,
  Form
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";
import { Images } from "../../../Themes/";

export default class Signin_04 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
      return true;
    });
  }

  render() {
    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/image_bg_signin_four.jpg"
    };
    let ic_logo = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountify_signin_four.png"
    };
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container>
        <ImageBackground style={styles.backgroundImage} source={BG_Image}>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("Home")}
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
          <View style={styles.logosec}>
            <Image source={ic_logo} style={styles.logostyle} />
          </View>
          <Form style={styles.form}>
            <Item rounded style={styles.inputStyle}>
              <Input
                placeholderTextColor="#ffffff"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.inputmain}
              />
            </Item>
            <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
              <Input
                placeholderTextColor="#ffffff"
                placeholder="Password"
                secureTextEntry={true}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                style={styles.inputmain}
              />
            </Item>
            <TouchableOpacity
              info
              style={styles.signInbtn}
              onPress={() => alert("Signin Clicked")}
            >
              <Text autoCapitalize="words" style={styles.buttongetstarted}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Forgot Password")}>
              <Text autoCapitalize="words" style={styles.buttongettext}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </Form>
          <View style={styles.bottomView}>
            <TouchableOpacity
              style={styles.fbButton}
              onPress={() => alert("Facebook button Clicked")}
            >
              <View iconRight style={styles.fbview}>
                <FontAwesome name="facebook" size={30} color="white" />
                <Text autoCapitalize="words" style={styles.fbButtonText}>
                  Sign in with facebook
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bottomText}>
              <Text style={styles.bottomText01}>
                Don&apos;t have an account?
              </Text>
              <TouchableOpacity onPress={() => alert("Sign Up")}>
                <Text style={styles.bottomText02}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
