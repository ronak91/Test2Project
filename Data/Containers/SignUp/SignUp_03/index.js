import React, { PropTypes, Component } from "react";
import {
  Text,
  StatusBar,
  Platform,
  View,
  Image,
  TextInput,
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
import { Fonts, Metrics, Colors } from "../../../Themes/";

export default class SignUp_03 extends Component {
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

    const imageUri =
      "https://antiqueruby.aliansoftware.net//Images/signup/title_pic_s03.png";
    return (
      <Container style={styles.container}>
        <ImageBackground style={styles.imgContainer} source={{ uri: imageUri }}>
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
        </ImageBackground>

        <ScrollView>
          <TextInput
            style={styles.textInput}
            placeholder="Full name"
            placeholderTextColor={Colors.shadows}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={Colors.loginBlue}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={Colors.shadows}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="email-address"
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={Colors.loginBlue}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={Colors.shadows}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={true}
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={Colors.loginBlue}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.shadows}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={true}
            textAlign={I18nManager.isRTL ? "right" : "left"}
            tiniColor={Colors.loginBlue}
          />

          <TouchableOpacity
            style={styles.buttonSignUp}
            onPress={() => alert("Sign Up")}
          >
            <Text style={styles.textWhite}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.tandcView}>
            <TouchableOpacity onPress={() => alert("Terms & Condition")}>
              <Text style={styles.textTermsCondition}>Terms & Conditions</Text>
            </TouchableOpacity>
            <Text style={styles.ands}> and </Text>
            <TouchableOpacity onPress={() => alert("Privacy Policy")}>
              <Text style={styles.textTermsCondition}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
