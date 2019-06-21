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
  Label,
  ListItem,
  InputGroup
} from "native-base";
import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./styles";
import { Colors } from "../../../Themes/";

/**
 *  Profile Screen
 */
export default class Signup_11 extends Component {
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
    let logo = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/signup/ic_logo_mountify_s11.png"
    };
    let bg = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/signup/home_screen_s11.png"
    };
    return (
      <Container>
        <ImageBackground style={styles.mainbg} source={bg}>
          <Content>
            <View style={styles.logosec}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <Icon name="md-close" style={styles.backicon} />
              </TouchableOpacity>
              <ImageBackground source={logo} style={styles.logo} />
            </View>
            <View style={styles.slidesec}>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    placeholder="Full Name"
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    placeholder="Email"
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Date Of Birth"
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.inputgroup}>
                <InputGroup style={styles.txtsec}>
                  <Input
                    inlineLabel
                    label="NAME"
                    placeholder="Gender"
                    style={styles.txtinput}
                    placeholderTextColor={Colors.txtsky}
                  />
                </InputGroup>
              </View>
              <View style={styles.tcmain}>
                <Text style={styles.textPolicyDescription}>
                  Clicking Sign Up means that you agree to the
                </Text>
                <View style={styles.tcview}>
                  <TouchableOpacity onPress={() => alert("Terms & Conditions")}>
                    <Text style={styles.textTermsCondition}>
                      Terms & Conditions
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.and}> and </Text>
                  <TouchableOpacity onPress={() => alert("Privacy Policy")}>
                    <Text style={styles.textTermsCondition}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Content>
          <TouchableOpacity
            onPress={() => alert("Sign Up")}
            style={styles.btnsec}
          >
            <Text autoCapitalize="words" style={styles.btntxt}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </Container>
    );
  }
}
