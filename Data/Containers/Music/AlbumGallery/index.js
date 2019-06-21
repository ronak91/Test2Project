import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  ListView,
  ImageBackground,
  ScrollView,
  Picker,
  I18nManager,
  Dimensions
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
} from "native-base";
import styles from "./styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, Metrics, Colors, Images } from "../../../Themes/";
import Entypo from "react-native-vector-icons/Entypo";
import LinearGradient from "react-native-linear-gradient";
import { CachedImage } from "react-native-cached-image";
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";

export default class AlbumGallery extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: 1,
          musicimg: Images.galleryImgThree,
          songtitle: "Smooth Jazz",
          song: "354 Songs"
        },
        {
          id: 2,
          musicimg: Images.galleryImgTwo,
          songtitle: "Rock & Roll",
          song: "4264 Songs"
        },
        {
          id: 3,
          musicimg: Images.galleryImgOne,
          songtitle: "Instrumental",
          song: "92 Songs"
        },
        {
          id: 4,
          musicimg: Images.galleryImgFour,
          songtitle: "Country Music",
          song: "271 Songs"
        },
        {
          id: 1,
          musicimg: Images.galleryImgThree,
          songtitle: "Smooth Jazz",
          song: "354 Songs"
        },
        {
          id: 2,
          musicimg: Images.galleryImgTwo,
          songtitle: "Rock & Roll",
          song: "4264 Songs"
        }
      ]),
      index: 0,
    };
  }

  componentWillMount(){

		var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('SelectStyle')
      return true;
    });

	}

  _renderRow(rowData) {
    var that = this;

    return (
      <TouchableOpacity style={styles.listMainview} onPress={() => that.props.navigation.navigate("Album")}>
        <CachedImage source={rowData.musicimg} style={styles.img}>
          <TouchableOpacity onPress={() => alert('Play')} style={styles.play}>
            <Entypo
              name="controller-play"
              size={23}
              color={"#FFFFFF"}
            />
        </TouchableOpacity>
        </CachedImage>
        <Text style={styles.songtitle}>{rowData.songtitle}</Text>
        <Text style={styles.song}>{rowData.song}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainview}>
        <LinearGradient
          colors={["#0066ff", "#29cfff"]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.75, y: 0.0 }}
          locations={[0.0, 1.0]}
          style={styles.bgImg}
        >
          <Header androidStatusBarColor={'transparent'} style={styles.header}>
            <Left style={styles.left}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => this.props.navigation.navigate("SelectStyle")}>
                <MaterialIcons
                  name= {'arrow-back'}
                  size= {24}
                  color= "white"
									style= {{ paddingRight: 10 }}
                />
              </TouchableOpacity>
            </Left>
            <Body style={styles.body}>
                <Text style={styles.textTitle}>Genres</Text>
            </Body>
            <Right style={styles.right}>
              <TouchableOpacity
                style={styles.backArrow}
                onPress={() => alert("Search")}>
                <Ionicons
                  name= {'ios-search'}
                  size= {24}
                  color= "white"
                />
              </TouchableOpacity>
            </Right>
          </Header>

          <ScrollableTabView
            initialPage={1}
            tabBarUnderlineStyle={styles.tabUnderLine}
            tabBarBackgroundColor={"transparent"}
            tabBarActiveTextColor={"white"}
            tabBarInactiveTextColor={"rgba(255,255,255,0.4)"}
            tabBarTextStyle={styles.tabText}
            renderTabBar={() => <ScrollableTabBar />}
          >

            <View tabLabel="ALL GENRES">
              <ListView
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections
                pageSize={4} />
            </View>

            <View tabLabel="POPULAR">
              <ListView
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections
                pageSize={4} />
            </View>

            <View tabLabel="SUGGESTED">
              <ListView
                contentContainerStyle={styles.listContent}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                enableEmptySections
                pageSize={4} />
            </View>

          </ScrollableTabView>

        </LinearGradient>
      </View>
    );
  }
}
