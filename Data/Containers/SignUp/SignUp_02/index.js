import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Content,
  Right,
  Form,
  Item,
  Label,
  Input,
  Header,
  Left,
  Body,
  Title
} from "native-base";

import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";

export default class SignUp_02 extends Component {
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
      StatusBar.setBackgroundColor("#0691ce", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
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
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Sign Up</Text>
          </Body>
          <Right style={styles.right} />
        </Header>

        <ScrollView>
          <View style={{ marginTop: 30 }}>
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
                  <Text style={styles.textTermsCondition}>Privacy Policy</Text>
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
      </Container>
    );
  }
}
