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
import styles from "./styles";
export default class Signup_15 extends Component {
  SignUp = () => {
    alert("Sign Up");
  };

  login = () => {
    alert("Login");
  };
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
      uri: "https://antiqueruby.aliansoftware.net//Images/signup/backg_sp15.png"
    };

    return (
      <Container>
        <View style={styles.main}>
          <View style={styles.logosec}>
            <ImageBackground source={BG_Image} style={styles.logo15}>
              <TouchableOpacity
                style={styles.backarrow}
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={styles.back}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={31}
                  color="white"
                />
              </TouchableOpacity>
              <View style={styles.btns}>
                <TouchableOpacity
                  style={styles.btnback}
                  onPress={() => alert("Sign Up")}
                >
                  <Text autoCapitalize="words" style={styles.loginbutton}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnback}
                  onPress={() => alert("Login")}
                >
                  <Text autoCapitalize="words" style={styles.signupbutton}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.slidemain}>
            <Form style={styles.inputLabel}>
              <Item style={styles.itememail}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Full Name"
                  style={styles.inputemail}
                />
              </Item>

              <Item style={styles.itememail}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Email"
                  style={styles.inputemail}
                />
              </Item>

              <Item style={styles.itememail}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.inputemail}
                />
              </Item>

              <Item style={styles.itememail}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  style={styles.inputemail}
                />
              </Item>

              <Item style={styles.itememail}>
                <Input
                  placeholderTextColor="#b7b7b7"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  placeholder="Gender"
                  style={styles.inputemail}
                />
              </Item>
            </Form>
          </View>

          <View style={styles.btnsec}>
            <TouchableHighlight
              info
              style={styles.buttonsignup}
              onPress={() => this.SignUp()}
            >
              <Text autoCapitalize="words" style={styles.loginbutton}>
                SIGN UP
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Container>
    );
  }
}
