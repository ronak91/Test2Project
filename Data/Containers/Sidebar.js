import React, { Component } from "react";
import {
  AsyncStorage,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  BackHandler
} from "react-native";
import {
  Header,
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  top,
  Left,
  Right,
  Title,
  Body
} from "native-base";
// Styles
import { Images } from "../Themes";
import styles from "./styles";
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 1,
      activeMenu: "SignUp"
    };
  }

  componentWillMount() {
    AsyncStorage.multiGet([
      "langId",
      "siteLink",
      "siteText",
      "copyrighttext",
      "levelTitle"
    ]).then(data => {
      this.setState({
        langId: data[0][1],
        siteLink: data[1][1],
        siteText: data[2][1],
        copyrighttext: data[3][1],
        levelTitle: data[4][1]
      });
    });
  }

  _handlePress(screenName) {
    var tempVar = "";
    // if(screenName == 'Home') {
    //   tempVar = Images.ic_select
    // }
    //  else if(screenName == 'SelectNewChildToPlayScreen'){
    //   tempVar = Images.ic_selectnewchildActive
    // } else if(screenName == 'ViewScoreScreen'){
    //   tempVar = Images.ic_ViewScoreActive
    // } else if(screenName == 'SettingsScreen'){
    //   tempVar = Images.ic_settingActive
    // }
    this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
    this.props.navigation.navigate(screenName);
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.props.navigation.navigate('FirstScreen');
        return true;
    });
 }


componentWillUnmount(){
    console.log("false");
    AsyncStorage.multiSet([
        ['FirstAntiqueruby', "false"],
    ]);
}

  render() {
    const { activeMenuImage } = this.state;
    // var txtselectgame = (this.state.langId == 1 ? LANGUAGE.English.selectgame : LANGUAGE.Epsenol.selectgame)
    // var txtviewcurrentuserandchild = (this.state.langId == 1 ? LANGUAGE.English.viewcurrentuserandchild : LANGUAGE.Epsenol.viewcurrentuserandchild)
    // var txtviewscorestitle = (this.state.langId == 1 ? LANGUAGE.English.viewscorestitle : LANGUAGE.Epsenol.viewscorestitle)
    // var txtlogout = (this.state.langId == 1 ? LANGUAGE.English.logout : LANGUAGE.Epsenol.logout)
    // var txtselectnewchildtoplay = (this.state.langId == 1 ? LANGUAGE.English.selectnewchildtoplay : LANGUAGE.Epsenol.selectnewchildtoplay)
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container>
        <Content style={{ backgroundColor: "#1a191f" }}>
          <View>
            <Header style={styles.header}>
              <Image source={Images.drawer_antiquruby_logo} style={styles.headerimg} />
            </Header>
            <View style={{backgroundColor: 'grey',marginTop: 8,height: 0.3}}></View>
            <View style={styles.mainview}>
              <TouchableOpacity onPress={() => this._handlePress("Drawer")}>
                <View style={styles.listrow}>
                  <Image source={Images.mnavigation} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Navigations</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._handlePress("Social")}>
                <View style={styles.listrow}>
                  <Image source={Images.msocial} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Social</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._handlePress("Home")}>
                <View style={styles.listrow}>
                  <Image source={Images.msignin} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Sign In</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._handlePress("SignUp")}>
                <View style={styles.listrow}>
                  <Image source={Images.msignup} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Sign Up</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._handlePress("Profile")}>
                <View style={styles.listrow}>
                  <Image source={Images.muser} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Profile</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this._handlePress("Walkthrough")}
              >
                <View style={styles.listrow}>
                  <Image source={Images.mwalkthrough} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Walkthrough</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._handlePress("AdMob")}>
                <View style={styles.listrow}>
                  <Image source={Images.admob} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>AdMob</Text>
                </View>
              </TouchableOpacity>

              {/*<TouchableOpacity
                onPress={() => this._handlePress("SocialLogin")}
              >
                <View style={styles.listrow}>
                  <Image source={Images.admob} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Social Login</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this._handlePress("FirebaseChatScreen")}
              >
                <View style={styles.listrow}>
                  <Image source={Images.admob} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>FirebaseChat</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this._handlePress("SocialGallery")}
              >
                <View style={styles.listrow}>
                  <Image source={Images.admob} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Social Gallary</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this._handlePress("GoogleMaps")}>
                <View style={styles.listrow}>
                  <Image source={Images.admob} style={styles.rowicon} />
                  <Text style={styles.rowtxt}>Google Maps</Text>
                </View>
              </TouchableOpacity>*/}
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
