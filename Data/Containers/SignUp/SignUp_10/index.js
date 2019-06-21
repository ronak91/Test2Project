import React, { PropTypes, Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
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
  Body,
  Header,
  Left
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Screen Styles
import styles from "./styles";

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
            <TouchableOpacity onPress={() => alert("Done")}>
              <Text style={styles.textNext}>Done</Text>
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.formview}>
          <Form style={styles.inputLabel}>
            <Item floatingLabel last>
              <Label style={styles.lbl}>
                <Text style={styles.textLabel}>FULL NAME</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                keyboardType="default"
              />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.lbl}>
                <Text style={styles.textLabel}>EMAIL</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.lbl}>
                <Text style={styles.textLabel}>PASSWORD</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                keyboardType="default"
              />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.lbl}>
                <Text style={styles.textLabel}>CONFIRM PASSWORD</Text>
              </Label>
              <Input
                style={styles.textInput}
                textAlign={I18nManager.isRTL ? "right" : "left"}
                secureTextEntry={true}
                keyboardType="default"
              />
            </Item>
          </Form>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.textPolicyDescription}>
              By registering, you agree to our
            </Text>
            <View style={styles.tandcview}>
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
        </View>
      </Container>
    );
  }
}
