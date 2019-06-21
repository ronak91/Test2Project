import React, { Component } from "react";
import {
  TouchableHighlight,
  Modal,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Button,
  Input,
  CheckBox,
  Body,
  Footer,
  Header,
  Left,
  Right,
  Title
} from "native-base";
// Screen Styles
import styles from "./styles";
const { width, height } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Fonts, Metrics, Colors } from "../../../Themes/";

export default class App extends Component {
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
    let pic = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/signup/image_bg_signup_four.jpg"
    };

    let logo13 = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountifysthirteen.png"
    };
    return (
      <ImageBackground source={pic} style={styles.screenBg}>
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
        <Container style={styles.container}>
          <Image source={logo13} style={styles.logostyle} />
          <View style={styles.view2}>
            <Item underline style={styles.itememail}>
              <Input
                placeholderTextColor={Colors.lighttxt}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Full Name"
                style={styles.inputemail}
              />
            </Item>
            <Item underline style={styles.itememail}>
              <Input
                placeholderTextColor={Colors.lighttxt}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.inputemail}
              />
            </Item>
            <Item underline style={styles.itememail}>
              <Input
                placeholderTextColor={Colors.lighttxt}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Password"
                style={styles.inputpassword}
              />
            </Item>
            <Item underline style={styles.itememail}>
              <Input
                placeholderTextColor={Colors.lighttxt}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                style={styles.inputpassword}
              />
            </Item>
          </View>
          <TouchableHighlight
            info
            style={styles.buttondialogsignup}
            onPress={() => alert("Sign Up")}
          >
            <Text autoCapitalize="words" style={styles.buttonsignin}>
              Sign Up
            </Text>
          </TouchableHighlight>

          <View style={styles.bottomTxtBg}>
            <Text autoCapitalize="words" style={styles.buttontext}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={styles.signInTxtBg}
              onPress={() => alert("Sign In")}
            >
              <Text style={styles.buttontext}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ImageBackground>
    );
  }
}
