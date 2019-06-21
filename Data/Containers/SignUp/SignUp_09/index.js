import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
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
  Left,
  Icon,
  Header,
  Body
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Screen Styles
import styles from "./styles";
/**
 *  Profile Screen
 */
export default class SignUp_10 extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("SignUp");
      return true;
    });
  }
  render() {
    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
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
                color="#6f6f6f"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Sign Up</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Next")}>
              <Text style={styles.textNext}>Next</Text>
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.formview}>
          <Form style={styles.inputLabel}>
            <Item underline style={styles.itememail}>
              <Icon active name="ios-person-outline" style={styles.iconitem} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Full Name"
                style={styles.inputemail}
              />
            </Item>

            <Item underline style={styles.itememail}>
              <Icon active name="ios-mail-outline" style={styles.iconitem} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                placeholder="Email"
                style={styles.inputemail}
              />
            </Item>

            <Item underline style={styles.itempassword}>
              <Icon active name="ios-unlock-outline" style={styles.iconitem} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Password"
                style={styles.inputpassword}
              />
            </Item>

            <Item underline style={styles.itemconpassword}>
              <Icon active name="ios-unlock-outline" style={styles.iconitem} />
              <Input
                placeholderTextColor="#b7b7b7"
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                style={styles.inputpassword}
              />
            </Item>
          </Form>

          <Text style={styles.textPolicyDescription}>
            By registering, you agree to our
          </Text>
          <View style={styles.tandc}>
            <TouchableOpacity onPress={() => alert("Terms & Condition")}>
              <Text style={styles.textTermsCondition}>Terms & Conditions</Text>
            </TouchableOpacity>
            <Text style={styles.and}> and </Text>
            <TouchableOpacity onPress={() => alert("Privacy Policy")}>
              <Text style={styles.textTermsCondition}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
