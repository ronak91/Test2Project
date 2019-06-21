import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
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

export default class Signin_03 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
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
        "https://antiqueruby.aliansoftware.net/Images/signin/signin_header_bg_sthree.png"
    };
    let Profile_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/profile_image_sthree.png"
    };

    return (
      <Container>
        <ImageBackground style={styles.ImageBackground} source={BG_Image}>
          <Header style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <FontAwesome
                  name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                  size={30}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
              <Text style={styles.textTitle}>Sign In</Text>
            </Body>
            <Right style={styles.right} />
          </Header>
        </ImageBackground>
        <View style={styles.userProfileSec}>
          <Image style={styles.profile} source={Profile_Image} />
        </View>
        <Content style={styles.content}>
          <Form style={styles.form}>
            <Item>
              <Input
                keyboardType="email-address"
                placeholder="Email"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholderTextColor="#b7b7b7"
                style={styles.input1}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholderTextColor="#b7b7b7"
                style={styles.input1}
              />
              <TouchableOpacity
                style={styles.forgotlabelBg}
                onPress={() => alert("Forgot Password")}
              >
                <Label style={styles.forgotlabel}>Forgot password?</Label>
              </TouchableOpacity>
            </Item>
          </Form>
        </Content>
        <Footer>
          <TouchableOpacity
            style={styles.btnSec}
            onPress={() => alert("Sign In")}
          >
            <Text autoCapitalize="words" style={styles.buttontext}>
              Sign In
            </Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}
