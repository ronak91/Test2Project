import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
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
  Title,
  Left,
  Icon,
  Body
} from "native-base";
// Screen Styles
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class SignUp_01 extends Component {
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
      "https://antiqueruby.aliansoftware.net//Images/signup/ic_signup_bg_s01.png";
    const profileImageUri =
      "https://antiqueruby.aliansoftware.net//Images/signup/profile_pic_suseven.png";
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

          <Image
            style={styles.profileImage}
            source={{ uri: profileImageUri }}
          />
          <Form style={styles.inputLabel}>
            <Item floatingLabel>
              <Label>
                <Text style={styles.textLabel}>Email</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel>
              <Label>
                <Text style={styles.textLabel}>Password</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                keyboardType="default"
              />
            </Item>
            <Item floatingLabel>
              <Label>
                <Text style={styles.textLabel}>Confirm Password</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                keyboardType="default"
              />
            </Item>
          </Form>

          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => alert("Register Now")}
          >
            <Text style={styles.textWhite}>Register now</Text>
          </TouchableOpacity>

          <View style={styles.tandcondi}>
            <Text style={styles.textPolicyDescription}>
              Clicking register means that you agree to the
            </Text>
            <View style={styles.tandc}>
              <TouchableOpacity onPress={() => alert("Terms & Conditions")}>
                <Text style={styles.textTermsCondition}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
              <Text style={styles.and}> and </Text>
              <TouchableOpacity onPress={() => alert("Privacy Policy")}>
                <Text style={styles.textTermsCondition}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
