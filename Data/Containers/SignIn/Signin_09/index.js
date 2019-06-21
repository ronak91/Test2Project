import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
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
  Form,
  Label
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";
export default class SignIn_09 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
      return true;
    });
  }

  render() {
    let pic = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/background_snine.png"
    };
    let ic_logo = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/logo_mountify_snine.png"
    };

    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container>
        <ImageBackground source={pic} style={styles.backgroundImage}>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle} />
            </Body>
            <Right style={styles.right} />
          </Header>

          <View style={styles.mainLogoSec}>
            <Image source={ic_logo} style={styles.mainLogo} />
          </View>

          <View style={styles.inputFieldSec}>
            <Form style={styles.formStyle}>
              <Item
                floatingLabel
                textAlign={I18nManager.isRTL ? "right" : "left"}
                style={styles.emailText}
              >
                <Label
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={{ color: "red", right: 0 }}
                >
                  Email
                </Label>
                <Input
                  keyboardType="email-address"
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={styles.inputText}
                />
              </Item>
              <Item floatingLabel style={styles.passwordText}>
                <Label
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={{ fontFamily: "SFUIDisplay-Regular", paddingTop: 1 }}
                >
                  Password
                </Label>
                <Input
                  secureTextEntry={true}
                  textAlign={I18nManager.isRTL ? "right" : "left"}
                  style={styles.inputText}
                />
              </Item>
              <TouchableOpacity
                style={styles.TouchableOpacityStyle}
                onPress={() => alert("Sign In")}
              >
                <Text style={styles.TouchableOpacityText}>Sign In</Text>
              </TouchableOpacity>
            </Form>
          </View>

          <View style={styles.view03}>
            <View style={styles.bottomText}>
              <Text style={styles.bottomText01}>
                Don&apos;t have an account?
              </Text>
              <TouchableOpacity
                style={styles.signUpTxtBg}
                onPress={() => alert("Sign Up")}
              >
                <Text style={styles.bottomText02}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
