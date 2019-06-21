import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body
} from "native-base";
import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./tabliststyle";
const { width, height } = Dimensions.get("window");
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

/**
 *  Profile Screen
 */
export default class Tablist extends Component {
  constructor(props) {
    super(props);

    const cardImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/card_01_sc14.png";
    const cardImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/card_02_sc14.png";
    const cardImageThree =
      "https://antiqueruby.aliansoftware.net//Images/social/card_03_sc14.png";
    const cardImageFour =
      "https://antiqueruby.aliansoftware.net//Images/social/card_04_sc14.png";
    const cardImageFive =
      "https://antiqueruby.aliansoftware.net//Images/social/card_05_sc14.png";
    const cardImageSix =
      "https://antiqueruby.aliansoftware.net//Images/social/card_06_sc14.png";
    const profileImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png";
    const profileImageTwo =
      "https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png";
    const profileImageThree =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_suggested_user_three_sone.png";

    const dataObjects = [
      {
        id: 1,
        cardBgImage: { uri: cardImageOne },
        likeCount: 12,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      },
      {
        id: 2,
        cardBgImage: { uri: cardImageTwo },
        likeCount: 1,
        likeUserImages: [{ img: { uri: profileImageThree } }]
      },
      {
        id: 3,
        cardBgImage: { uri: cardImageThree },
        likeCount: 1,
        likeUserImages: [{ img: { uri: profileImageTwo } }]
      },
      {
        id: 4,
        cardBgImage: { uri: cardImageFour },
        likeCount: 2,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } }
        ]
      },
      {
        id: 5,
        cardBgImage: { uri: cardImageFive },
        likeCount: 2,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } }
        ]
      },
      {
        id: 6,
        cardBgImage: { uri: cardImageSix },
        likeCount: 5,
        likeUserImages: [
          { img: { uri: profileImageOne } },
          { img: { uri: profileImageTwo } },
          { img: { uri: profileImageThree } }
        ]
      }
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      isLoading: true,
      dataSource: ds.cloneWithRows(dataObjects)
    };
  }

  _renderRow(rowData) {
    return (
      <View style={styles.rowMain}>
        <ImageBackground source={rowData.cardBgImage} style={styles.imageBG}>
          <View style={styles.cardContent}>
            <TouchableOpacity
              style={styles.likeImage}
              onPress={() => alert("Like")}
            >
              <FontAwesome name="heart" size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.likeCountText}>{rowData.likeCount}</Text>
            <Right>
              <View style={styles.profileContainer}>
                {rowData.likeUserImages.map((item, index) => {
                  return (
                    <View key={index} style={styles.profileImgView}>
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
    return (
      <Container style={styles.main}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          enableEmptySections
          pageSize={4}
        />
      </Container>
    );
  }
}
