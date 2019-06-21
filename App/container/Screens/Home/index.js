import React, { Component } from "react";
import { Alert, Text, View, BackHandler, ScrollView } from "react-native";
import { Container, Button } from "native-base";
import styles from "./styles";
import MyHeader from "../../../components/Header";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      //that.props.navigation.navigate('Home')
      Alert.alert("Back Pressed");
      return true;
    });
  }

  render() {
    const title = "Welcome to React";
    let isBack = false;
    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png"
    };

    var that = this;

    return (
      <Container>
        <View style={styles.backgroundImage}>
          <MyHeader
            navigation={this.props.navigation}
            title={title}
            isBack={isBack}
          />
          <View style={styles.containMainBg}>
            <Button
              iconRight
              style={styles.Button}
              onPress={() => this.props.navigation.navigate("Screen01")}
            >
              <Text style={styles.fbButtonText}>SignIn Example</Text>
            </Button>

            <Button
              iconRight
              style={styles.Button1}
              onPress={() => this.props.navigation.navigate("Screen02")}
            >
              <Text style={styles.fbButtonText}>SignUp Example</Text>
            </Button>

            <Button
              iconRight
              style={styles.Button2}
              onPress={() => this.props.navigation.navigate("Screen03")}
            >
              <Text style={styles.fbButtonText}>ListView Example</Text>
            </Button>

            <Button
              iconRight
              style={styles.Button3}
              onPress={() => this.props.navigation.navigate("Screen04")}
            >
              <Text style={styles.fbButtonText}>Blog Example</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
