import React, { Component } from "react";
import {
  View,
  ListView,
  Image,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  Linking,
  BackHandler,
  Alert,
  Platform
} from "react-native";
import {
  Spinner,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Input
} from "native-base";
import { connect } from "react-redux";
import styles from "./styles";

class MainScreen extends React.Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      Alert.alert(
        "Quit App?",
        "Are you sure you want to exit App?",
        [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => true }
        ],
        { cancelable: true }
      );
      return true;
    });
  }

  _moveToAntiqueruby() {
    AsyncStorage.multiSet([["FirstAntiqueruby", "true"]]);
    this.props.navigation.navigate("DrawerStackAntiqueruby");
  }

  _moveToECommerce() {
    AsyncStorage.multiSet([["FirstECommerce", "true"]]);
    this.props.navigation.navigate("DrawerStackECommerce");
  }

  _moveToBlog() {
    AsyncStorage.multiSet([["FirstBlog", "true"]]);
    this.props.navigation.navigate("DrawerStackBlog");
  }

  render() {
    var that = this;
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left} />

          <Body style={styles.body}>
            <Title>Antiqueruby</Title>
          </Body>

          <Right style={styles.right} />
        </Header>

        <View style={styles.mainView}>
          <View style={styles.btnsec}>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => this._moveToAntiqueruby()}
            >
              <Text style={styles.buttonText}>General Material UI</Text>
            </TouchableOpacity>

            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => this._moveToECommerce()}
              >
                <Text style={styles.buttonText}>ECommerce Material UI</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => this.props.navigation.navigate("SelectStyle")}
              >
                <Text style={styles.buttonText}>Music Material UI</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => this._moveToBlog()}
              >
                <Text style={styles.buttonText}>Blog Material UI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default MainScreen;
