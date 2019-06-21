import React, { Component } from "react";
import {
  TouchableHighlight,
  Dimensions,
  ImageBackground,
  Image,
  View,
  StatusBar,
  Platform,
  BackHandler,
  I18nManager,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Text,
  Content,
  Button,
  Input,
  Body,
  Header,
  Left,
  Right,
  Title,
  Item,
  Label
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";

export default class App extends Component<{}> {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("SignUp");
      return true;
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      emailId: "john_doe@gmail.com",
      txtPassword: ""
    };
  }

  _resendAction = () => {
    alert("Resend");
  };

  _onPressSignUp = () => {
    alert("Sign Up");
  };

  _onPressSignIn = () => {
    alert("Sign In");
  };

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    let pic = {
      uri: "https://antiqueruby.aliansoftware.net/Images/signup/ic_back_s07.jpg"
    };

    let profileImage = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signup/profile_pic_suseven.png"
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
        <Content bounces={false}>
          <View style={styles.pageContent}>
            <Image source={profileImage} style={styles.profileStyle} />
            <Text style={styles.textemailStyle}>{this.state.emailId}</Text>
            <Item floatingLabel style={styles.borderWidth}>
              <Label style={styles.lbl}>Enter Code</Label>
              <Input
                style={styles.textInputStyle}
                value={this.state.txtPassword}
                editable={true}
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="rgba(255,255,255,0.5)"
                onChangeText={txtPassword => this.setState({ txtPassword })}
              />
            </Item>
            <Text style={styles.lightTextStyle}>
              We’ve sent the confirmation code to your email. Please check your
              inbox
            </Text>
            <Text style={styles.textButtonStyle} onPress={this._resendAction}>
              {" "}
              Resend{" "}
            </Text>
            {/* For Testing */}
            <TouchableHighlight info>
              <Button style={styles.buttonStyle} onPress={this._onPressSignUp}>
                <Text autoCapitalize="words" style={styles.buttonText}>
                  Sign Up
                </Text>
              </Button>
            </TouchableHighlight>
          </View>
          <View style={styles.footerSec}>
            <Text style={styles.textInputStyle}>Already have an account? </Text>
            <TouchableHighlight info>
              <Text style={styles.textInputStyle} onPress={this._onPressSignIn}>
                Sign In
              </Text>
            </TouchableHighlight>
          </View>
        </Content>
      </ImageBackground>
    );
  }
}
