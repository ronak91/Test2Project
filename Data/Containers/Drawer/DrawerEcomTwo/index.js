import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  ImageBackground,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title
} from "native-base";
import Modal from "react-native-modal";
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0
  }
};
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Drawer from "react-native-drawer";
import MyControlPanel from "./ControlPanel";
import tweens from "./tweens";
import styles from "./styles";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";

/**
 *  Profile Screen
 */
export default class Drawer_17 extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      drawerType: "overlay",
      openDrawerOffset: 50,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: "linear",
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "right"
    };
  }

  setDrawerType(type) {
    this.setState({
      drawerType: type
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    });
  }

  openDrawer() {
    this.drawer.open();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  _handleFb = () => {
    alert("FaceBook");
  };

  componentWillMount() {
    setTimeout(() => {
      this.drawer.open();
    }, 1000);
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Drawer");
      return true;
    });
  }

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    var rightButton = (
      <Button transparent onPress={this._handleBack}>
        <Icon
          name="ios-create-outline"
          style={{ color: "#fff", fontSize: 30 }}
          onPress={this.functionRedirect}
        />
      </Button>
    );

    let BG_Image = {
      uri:
        "https://antiqueruby.aliansoftware.net/Images/signin/ic_back01_sone.png"
    };

    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    var that = this;

    var controlPanel = (
      <MyControlPanel
        closeDrawer={() => {
          this.drawer.close();
        }}
      />
    );

    return (
      <View style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}
        >
          <Container style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={BG_Image}>
              <Header style={styles.headerSec}>
                <Left style={styles.left}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Drawer")}
                    style={styles.backArrow}
                  >
                    {I18nManager.isRTL ? (
                      <FontAwesome name="angle-right" size={30} color="white" />
                    ) : (
                      <FontAwesome name="angle-left" size={30} color="white" />
                    )}
                  </TouchableOpacity>
                </Left>

                <Body style={styles.body}>
                  <View style={{ flexDirection: "column", marginTop: 10 }}>
                    <Title style={{ color: "white" }}>Category</Title>
                    <TouchableOpacity onPress={() => this._showModal()}>
                      <Icon
                        name="ios-arrow-down-outline"
                        style={{
                          color: "white",
                          alignItems: "center",
                          alignSelf: "center",
                          justifyContent: "center"
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </Body>

                <Right style={styles.right}>
                  <TouchableOpacity
                    onPress={() => this.openDrawer()}
                    style={styles.backArrow}
                  >
                    <Icon name="ios-menu" style={{ color: "white" }} />
                  </TouchableOpacity>
                </Right>
              </Header>
              <Modal
                style={styles.bottomModal}
                isVisible={this.state.isModalVisible}
                onBackdropPress={() => this._hideModal()}
              >
                <View style={styles.triangles} />
                <View style={styles.mainviews}>
                  <View style={styles.headerbottom}>
                    <Text
                      STYLE={{
                        color: "#292d48",
                        textAlign: "center",
                        justifyContent: "center"
                      }}
                    >
                      Filter
                    </Text>
                  </View>
                  <View style={styles.horizontalline} />
                  <View style={styles.semirow}>
                    <TouchableOpacity onPress={() => alert("Living Room")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.livingRoomBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>Living Room</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.verticalline} />
                    <TouchableOpacity onPress={() => alert("Dining Room")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.diningRoomBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>Dining Room</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.verticalline} />
                    <TouchableOpacity onPress={() => alert("Bookcase")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.bookCaseBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>Bookcase</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.horizontalline} />
                  <View style={styles.semirow}>
                    <TouchableOpacity onPress={() => alert("Bedroom")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.bedRoomBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>Bedroom</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.verticalline} />
                    <TouchableOpacity onPress={() => alert("TV Stands")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.tvStandBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>TV Stands</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.verticalline} />
                    <TouchableOpacity onPress={() => alert("Bathroom")}>
                      <View style={styles.listrows}>
                        <Image
                          source={Images.bathRoomBlue}
                          style={styles.rowicon}
                        />
                        <Text style={styles.rowtxt}>Bathroom</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Text style={styles.forgotPassword}>Drawer Ecom Two</Text>
            </ImageBackground>
          </Container>
        </Drawer>
      </View>
    );
  }
}
