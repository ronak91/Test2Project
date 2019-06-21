import React, { Component } from "react";
import {
  Alert,
  Text,
  Image,
  StatusBar,
  Platform,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body
} from "native-base";
import { Input } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import MyHeader from "../../../components/Header";

export default class Screen02 extends Component {
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
    const title = "SIGN UP";
    const { navigation } = this.props;
    let isBack = true;
    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png"
    };

    var that = this;

    return (
      <Container>
        <MyHeader navigation={navigation} title={title} isBack={isBack} />
        <View style={styles.containMainBg}>
          <ScrollView>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Full name"
                placeholderTextColor="#b7b7b7"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                tintColor="#0691ce"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#b7b7b7"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="email-address"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                tintColor="#0691ce"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#b7b7b7"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                tintColor="#0691ce"
              />

              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                placeholderTextColor="#b7b7b7"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                tintColor="#0691ce"
              />

              <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={() => alert("Sign Up")}
              >
                <Text style={styles.textWhite}>Sign Up</Text>
              </TouchableOpacity>

              <View style={styles.tcview}>
                <Text style={styles.textPolicyDescription}>
                  Clicking register means that you agree to the
                </Text>
                <View style={styles.tandcView}>
                  <TouchableOpacity onPress={() => alert("Terms & Condition")}>
                    <Text style={styles.textTermsCondition}>
                      Terms & Conditions
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.ands}> and </Text>
                  <TouchableOpacity onPress={() => alert("Privacy Policy")}>
                    <Text style={styles.textTermsCondition}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.viewAlreadyHaveAccount}
                onPress={() => alert("Already have an Account?")}
              >
                <Text style={styles.textAlreadyHaveAccount}>
                  Already have an Account?
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}
