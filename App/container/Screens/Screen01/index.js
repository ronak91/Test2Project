import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  BackHandler,
  I18nManager
} from "react-native";
import { Container, Button } from "native-base";
import { Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import MyHeader from "../../../components/Header";

export default class Screen01 extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Home");
      //Alert.alert("Back Pressed");
      return true;
    });
  }

  render() {
    const title = "SIGN IN";
    const { navigation } = this.props;
    let isBack = true;
    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png"
    };
    var that = this;
    return (
      <Container>
        <ImageBackground style={styles.backgroundImage} source={BG_Image}>
          <MyHeader navigation={navigation} title={title} isBack={isBack} />
          <View style={styles.containMainBg}>
            <View style={styles.containFbBg}>
              <Button
                iconRight
                style={styles.fbButton}
                onPress={() => alert("FaceBook")}
              >
                <FontAwesome name="facebook" size={28} color="#ffffff" />
                <Text style={styles.fbButtonText}>Sign in with facebook</Text>
              </Button>
            </View>
            <View style={styles.containEmail}>
              <Input
                ref="email"
                style={styles.inputEmail}
                editable={true}
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Email"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholderTextColor="rgba(0,0,0,0.20)"
              />
            </View>
            <View style={styles.containPassword}>
              <Input
                ref="password"
                style={styles.inputEmail}
                editable={true}
                keyboardType="default"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder="Password"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholderTextColor="rgba(0,0,0,0.20)"
                secureTextEntry={true}
              />
            </View>
            <Button style={styles.signInBtn} onPress={() => alert("SignIn")}>
              <Text style={styles.signInBtnText}>Sign In</Text>
            </Button>
            <Text
              style={styles.forgotPassword}
              onPress={() => alert("Forgot Password")}
            >
              Forgot your password?
            </Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
