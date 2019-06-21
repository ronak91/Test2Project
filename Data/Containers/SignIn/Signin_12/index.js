import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Content,
  Form,
  Footer,
  Header,
  Left,
  Right,
  Body,
  Title
} from "native-base";
import Swiper from "react-native-swiper";

import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";
import { Metrics } from "../../../Themes/";

export default class App extends Component {
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

    return (
      <ImageBackground
        source={{
          uri:
            "https://antiqueruby.aliansoftware.net//Images/signin/bgstwelve.png"
        }}
        style={{ height: Metrics.HEIGHT }}
      >
        <Container>
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
            <Body style={styles.body}>
              <Text style={styles.textTitle} />
            </Body>
            <Right style={styles.right} />
          </Header>
          <View style={styles.view01}>
            <Image
              source={{
                uri:
                  "https://antiqueruby.aliansoftware.net//Images/signin/minifylogostwelve.png"
              }}
              style={styles.logostyle}
            />
          </View>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2.5}
            activeDot={<View style={styles.activedots} />}
            dot={<View style={styles.dots} />}
          >
            <View style={styles.slide1}>
              <Text style={styles.headertext}>
                Connect and discovery our Awesome UI Kit
              </Text>
              <Text style={styles.desctext}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </Text>
            </View>
            <View style={styles.slide1}>
              <Text style={styles.headertext}>
                Connect and discovery our Awesome UI Kit
              </Text>
              <Text style={styles.desctext}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </Text>
            </View>
            <View style={styles.slide1}>
              <Text style={styles.headertext}>
                Connect and discovery our Awesome UI Kit
              </Text>
              <Text style={styles.desctext}>
                Lorem qsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod
              </Text>
            </View>
          </Swiper>
          <Footer>
            <TouchableOpacity
              style={styles.footerLogin}
              onPress={() => alert("Login")}
            >
              <Text autoCapitalize="words" style={styles.footerText}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerSignup}
              onPress={() => alert("Sign Up")}
            >
              <Text autoCapitalize="words" style={styles.footerText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}
