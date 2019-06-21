import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  View,
  TextInput,
  BackHandler
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header,
  Title,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Fonts, Metrics, Colors } from "../../../Themes/";
// Screen Styles
import styles from "./styles";
import Images from "../../../Themes/Images";
import ContainTabNearBy from "./ContainTabNearBy.js";
import ContainTabCategory from "./ContainTabCategory.js";
import ContainTabDiscovery from "./ContainTabDiscovery.js";
import ContainTabGift from "./ContainTabGift.js";
import ContainTabProfile from "./ContainTabProfile.js";

/**
 *  Profile Screen
 */
export default class DrawerEcomTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Discovery"
    };
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Drawer");
      return true;
    });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case "Home":
        return <ContainTabNearBy {...this.props} />;
        break;
      case "Category":
        return <ContainTabCategory {...this.props} />;
        break;
      case "Discovery":
        return <ContainTabDiscovery {...this.props} />;
        break;
      case "Gift":
        return <ContainTabGift {...this.props} />;
        break;
      case "Profile":
        return <ContainTabProfile {...this.props} />;
        break;
      default:
    }
  }

  render() {
    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#FFFFFF", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <View style={styles.header}>
          <View style={styles.searcgBarBg}>
            {/*<Image source={images.searchDarkGreayIcon} style={styles.searchIcon}/>*/}
            <Ionicons
              name="ios-search"
              size={22}
              color="#a0a0a0"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="I'm looking for..."
              placeholderTextColor="#a0a0a0"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="default"
              selectionColor="#a0a0a0"
            />
          </View>
          <TouchableOpacity
            style={styles.cartImgBg}
            onPress={() => alert("Cart")}
          >
            <Image style={styles.cartImage} source={Images.cart_icon} />
          </TouchableOpacity>
        </View>
        <Content>{this.renderSelectedTab()}</Content>
        <Footer>
          <FooterTab style={styles.footerTabBg}>
            <Button
              vertical
              onPress={() => this.setState({ selectedTab: "Home" })}
            >
              {this.state.selectedTab == "Home" ? (
                <Image source={Images.activeHome} style={styles.tabIcon} />
              ) : (
                <Image source={Images.normalHome} style={styles.tabIcon} />
              )}
              <Text
                style={
                  this.state.selectedTab == "Home"
                    ? [
                        styles.activeTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                    : [
                        styles.normalTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                }
              >
                Nearby
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => this.setState({ selectedTab: "Category" })}
            >
              {this.state.selectedTab == "Category" ? (
                <Image source={Images.activeCategory} style={styles.tabIcon} />
              ) : (
                <Image source={Images.normalCategory} style={styles.tabIcon} />
              )}
              <Text
                style={
                  this.state.selectedTab == "Category"
                    ? [
                        styles.activeTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                    : [
                        styles.normalTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                }
              >
                Category
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => this.setState({ selectedTab: "Discovery" })}
            >
              {this.state.selectedTab == "Discovery" ? (
                <Ionicons
                  name="ios-albums-outline"
                  size={24}
                  color="#00bff3"
                  style={{ justifyContent: "center" }}
                />
              ) : (
                <Ionicons name="ios-albums-outline" size={24} color="#929292" />
              )}
              <Text
                style={
                  this.state.selectedTab == "Discovery"
                    ? styles.activeTabText
                    : styles.normalTabText
                }
              >
                Discovery
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => this.setState({ selectedTab: "Gift" })}
            >
              {this.state.selectedTab == "Gift" ? (
                <Image source={Images.activeGift} style={styles.tabIcon} />
              ) : (
                <Image source={Images.normalGift} style={styles.tabIcon} />
              )}
              <Text
                style={
                  this.state.selectedTab == "Gift"
                    ? [
                        styles.activeTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                    : [
                        styles.normalTabText,
                        { marginTop: Metrics.WIDTH * 0.01 }
                      ]
                }
              >
                Gift
              </Text>
            </Button>
            <Button
              vertical
              onPress={() => this.setState({ selectedTab: "Profile" })}
            >
              {this.state.selectedTab == "Profile" ? (
                <EvilIcons name="user" size={30} color="#00bff3" />
              ) : (
                <EvilIcons name="user" size={30} color="#929292" />
              )}
              <Text
                style={
                  this.state.selectedTab == "Profile"
                    ? styles.activeTabText
                    : styles.normalTabText
                }
              >
                Profile
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
