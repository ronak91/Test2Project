import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  ImageBackground,
  BackHandler,
  ListView,
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
import Ionicons from "react-native-vector-icons/Ionicons";

// Screen Styles
import styles from "./styles";

import { View } from "react-native-animatable";
import { Images } from "../../../Themes/";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const dataUpperRowObjects = [
  {
    id: 1,
    cardImage: Images.livingRoom
  },
  {
    id: 2,
    cardImage: Images.bedRoom
  },
  {
    id: 3,
    cardImage: Images.tvStand
  },
  {
    id: 4,
    cardImage: Images.bathRoom
  },
  {
    id: 5,
    cardImage: Images.bookCase
  },
  {
    id: 6,
    cardImage: Images.diningRoom
  }
];

export default class DrawerTopIcon extends Component {
  componentWillMount() {
    // setTimeout(() => {this.drawer.open()}, 1000);
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Drawer");
      return true;
    });
  }

  constructor(props) {
    super(props);

    const cardImageOne =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_living_room1_dnine.jpg";
    const cardImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_living_room2_dnine.jpg";
    const cardImageThree =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_living_room3_dnine.jpg";
    const cardImageFour =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_living_room4_dnine.jpg";
    const cardImageFive =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_book_dnine.jpg";
    const cardImageSix =
      "https://antiqueruby.aliansoftware.net//Images/drawer/image_animal_cat_dnine.jpg";

    const profileImageOne =
      "https://antiqueruby.aliansoftware.net//Images/drawer/snap_user2_ptwentynine_p28.png";
    const profileImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/drawer/snap_user3_ptwentynine_p28.png";
    const profileImageThree =
      "https://antiqueruby.aliansoftware.net//Images/drawer/snap_user4_ptwentynine_p28.png";

    const dataLowerRowObjects = [
      {
        id: 1,
        cardBgImage: { uri: cardImageOne },
        likeCount: 2,
        likeUserImages: [{ img: { uri: profileImageOne } }]
      },
      {
        id: 2,
        cardBgImage: { uri: cardImageTwo },
        likeCount: 5,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      },
      {
        id: 3,
        cardBgImage: { uri: cardImageThree },
        likeCount: 10,
        likeUserImages: [{ img: { uri: profileImageThree } }]
      },
      {
        id: 4,
        cardBgImage: { uri: cardImageFour },
        likeCount: 12,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      },
      {
        id: 5,
        cardBgImage: { uri: cardImageFive },
        likeCount: 7,
        likeUserImages: [{ img: { uri: profileImageThree } }]
      },
      {
        id: 6,
        cardBgImage: { uri: cardImageSix },
        likeCount: 6,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      }
    ];

    this.state = {
      isLoading: true,
      selectedLots: 1,
      dataSourceUpper: ds.cloneWithRows(dataUpperRowObjects),
      dataSourceLower: ds.cloneWithRows(dataLowerRowObjects)
    };
  }

  onTabPress(id) {
    this.setState({
      selectedLots: id,
      dataSourceUpper: ds.cloneWithRows(dataUpperRowObjects)
    });
  }

  _renderUpperRow(rowData) {
    return (
      <TouchableOpacity
        style={styles.upperRowMain}
        onPress={() => this.onTabPress(rowData.id)}
      >
        {this.state.selectedLots == rowData.id ? (
          <View style={styles.upperRowSelectedMain}>
            <Image source={rowData.cardImage} style={styles.upperListImage} />
          </View>
        ) : (
          <View style={styles.upperRowMain}>
            <Image source={rowData.cardImage} style={styles.upperListImage} />
          </View>
        )}
      </TouchableOpacity>
    );
  }

  _renderLowerRow(rowData) {
    return (
      <View
        style={styles.lowerRowMain}
        animation="zoomIn"
        duration={1100}
        delay={200}
      >
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>
          <View style={styles.cardContent}>
            <TouchableOpacity onPress={() => alert("Like")}>
              <Image source={Images.heartWhiteIcon} style={styles.likeImage} />
            </TouchableOpacity>
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
              <View style={styles.profileContainer}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.profileView}>
                      <Image style={styles.profileImg} source={item.img} />
                    </View>
                  );
                })}
              </View>
            </Right>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Drawer")}
              style={styles.backArrow}
            >
              {I18nManager.isRTL ? (
                <Ionicons
                  name="ios-arrow-round-forward-outline"
                  size={30}
                  color="#ffffff"
                />
              ) : (
                <Ionicons
                  name="ios-arrow-round-back-outline"
                  size={30}
                  color="#ffffff"
                />
              )}
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Title style={styles.headerTitle}>Category</Title>
          </Body>

          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search")}>
              <Icon name="ios-search" style={styles.iconColor} />
            </TouchableOpacity>
          </Right>
        </Header>

        <View style={styles.listViewBg}>
          <ListView
            contentContainerStyle={styles.upperListContent}
            dataSource={this.state.dataSourceUpper}
            renderRow={this._renderUpperRow.bind(this)}
            enableEmptySections
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <ListView
          contentContainerStyle={styles.lowerListContent}
          dataSource={this.state.dataSourceLower}
          renderRow={this._renderLowerRow.bind(this)}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
        />
      </Container>
    );
  }
}
