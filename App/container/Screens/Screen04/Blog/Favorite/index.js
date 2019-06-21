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
  I18nManager,
  ListView,
  ScrollView,
  AsyncStorage,
  NetInfo
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
  Title,
  Content,
  Spinner
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });
import { Images, Metrics } from "../../../../Themes/";
import styles from "./styles";
const myArray = [];
const demo = [];
const blogs = [];
var rerloadlog = [];
var likedPosts = [];
var allLikedposts = [];

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleTxt: "",
      isLoading: true,
      doneApiCall: false,
      internetConnection: false,
      favlist: false,
      newfavoriteList: [],
      dataSourceBlog: ds.cloneWithRows(blogs)
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  // Time Calculation
  _dateConvert = receivedTimeStamp => {
    // Date Formate "2018-07-17T21:00:17"

    var timeAgo = " ";
    var timeMonth = " ";

    const TimeStamp = receivedTimeStamp.split(" ")[0];

    const Year = TimeStamp.split("-")[0];
    const Month = TimeStamp.split("-")[1];
    const Day = TimeStamp.split("-")[2];

    if (Month == "01" || Month == "1") {
      timeMonth = "January";
    } else if (Month == "02" || Month == "2") {
      timeMonth = "February";
    } else if (Month == "03" || Month == "3") {
      timeMonth = "March";
    } else if (Month == "04" || Month == "4") {
      timeMonth = "April";
    } else if (Month == "05" || Month == "5") {
      timeMonth = "May";
    } else if (Month == "06" || Month == "6") {
      timeMonth = "June";
    } else if (Month == "07" || Month == "7") {
      timeMonth = "July";
    } else if (Month == "08" || Month == "8") {
      timeMonth = "August";
    } else if (Month == "09" || Month == "9") {
      timeMonth = "September";
    } else if (Month == "10") {
      timeMonth = "October";
    } else if (Month == "11") {
      timeMonth = "November";
    } else if (Month == "12") {
      timeMonth = "December";
    }
    timeAgo = Day + " " + timeMonth; //+ " " + Year;  '// uncomment it if you want to add year

    //  console.log(timeAgo);

    return timeAgo;
  };
  // Time Calculation

  componentWillMount() {
    this.setState({ isLoading: true });

    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("CategoryList");
      return true;
    });

    AsyncStorage.multiGet(["LikedPostList", "AllLikedPosts"]).then(data => {
      var myArray = JSON.parse(data[0][1]);
      console.log("getLikedPosts");
      console.log(data[0][1]);
      console.log(data[1][1]);
      var Alllike = JSON.parse(data[1][1]);
      var temp = [];
      var templike = [];

      for (var i = 0; i < Alllike.length; i++) {
        templike.push({
          index: i,
          id: Alllike[i].id,
          title: Alllike[i].title,
          excerpt: Alllike[i].excerpt,
          content: Alllike[i].content,
          date: Alllike[i].date,
          img: Alllike[i].img,
          author: Alllike[i].author,
          bgColor: Alllike[i].bgColor,
          isLiked: Alllike[i].isLiked
        });
      }
      allLikedposts = templike;

      for (var i = 0; i < myArray.length; i++) {
        temp.push({
          id: myArray[i].id
        });
      }
      likedPosts = temp;
    });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    setTimeout(() => {
      this._getFavPostList();
    }, 4000);
  }

  // Function to Get favorite List
  _getFavPostList() {
    this.setState({ isLoading: true });

    console.log(allLikedposts);
    console.log(allLikedposts.length);
    dataSourceObjects = [];
    tempData = [];
    tempLatestblog = [];
    var i;

    temp = likedPosts;

    for (i = 0; i < allLikedposts.length; i++) {
      tempData.push({
        index: i,
        id: allLikedposts[i].id,
        title: allLikedposts[i].title,
        excerpt: allLikedposts[i].excerpt,
        content: allLikedposts[i].content,
        date: allLikedposts[i].date,
        img: allLikedposts[i].img,
        author: allLikedposts[i].author,
        bgColor: allLikedposts[i].bgColor,
        isLiked: true
      });
    }

    for (var j = 0; j < tempData.length; j++) {
      var isLiked = "";
      lasttitle = "";

      var SampleText = tempData[j].title.toString();
      resultArray = SampleText.split(" ");
      for (var i = 0; i < resultArray.length; i++) {
        var NewText = "";
        var changeText = resultArray[i].toString();
        NewText = changeText.replace("&amp;", "&");
        lasttitle = `${lasttitle} ${NewText}`;
      }

      dataSourceObjects.push({
        index: j,
        id: tempData[j].id,
        catTitle: tempData[j].catTitle,
        title: lasttitle,
        excerpt: tempData[j].excerpt,
        content: tempData[j].content,
        date: tempData[j].date,
        img: tempData[j].img,
        bgColor: "#92dcff",
        isLiked: tempData[j].isLiked
      });
    }

    rerloadlog = dataSourceObjects;

    console.log("FAVDATASRCBLOG==");
    console.log(dataSourceObjects);

    this.setState({
      favlist: true,
      latestBlog: tempLatestblog,
      dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
      doneApiCall: true,
      internetConnection: true,
      isLoading: false
    });

    if (likedPosts.length == 0) {
      this.setState({
        favlist: false
      });
    }
  }

  // Dislike Function
  _renderDeleteItem(index, postId) {
    console.log("delete index");
    console.log(index);
    console.log(postId);
    console.log("array before remove==");
    console.log(rerloadlog);
    var newData = rerloadlog.slice();
    console.log("copy array==");
    console.log(newData);

    //copy array and rearrange index

    newData.splice(index, 1); //remove element
    for (var i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }

    rerloadlog = newData;
    this.setState({ dataSourceBlog: ds.cloneWithRows(rerloadlog) });

    console.log("array after remove==");
    console.log(newData);

    var temp = [];
    var temp1 = [];
    var templikePosts = [];
    var templikePosts1 = [];
    temp = likedPosts;
    temp1 = likedPosts;
    templikePosts = allLikedposts;
    templikePosts1 = allLikedposts;
    var ismatch = false;

    if (temp.length != 0) {
      ismatch = false;

      for (var t = 0; t < temp.length; t++) {
        if (temp[t].id == postId) {
          console.log("ID Removed");
          var toRemove = postId;
          console.log(toRemove);
          var index = temp1.indexOf(toRemove);
          temp1.splice(t, 1);
          ismatch = true;
          break;
        }
      }

      for (var o = 0; o < templikePosts.length; o++) {
        if (templikePosts[o].id == postId) {
          console.log("ID Removed");
          var toRemove = postId;
          console.log(toRemove);
          var index = templikePosts1.indexOf(toRemove);
          templikePosts1.splice(t, 1);
          break;
        }
      }
    }

    AsyncStorage.multiSet([["AllLikedPosts", JSON.stringify(templikePosts1)]]);
    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);

    // rerloadlog = [];
    // rerloadlog = newData;
    // this.setState({ dataSourceBlog: ds.cloneWithRows(rerloadlog) });

    likedPosts = [];
    likedPosts = temp1;

    if (temp1 == 0) {
      this.setState({ favlist: false });
    }
  }

  backArrowfun() {
    myArray = [];
    AsyncStorage.removeItem("SmsInboxList");
    this.props.navigation.navigate("CategoryList");
  }

  _handleNavigation(post_id) {
    var postID = post_id.toString();
    AsyncStorage.multiSet([["postID", postID], ["arriveFrom", "favorite"]]);

    this.props.navigation.navigate("CategoryDetail");
  }

  _renderRowBlog(rowData) {
    console.log("id::");
    console.log(rowData.id);
    return (
      <View>
        {rowData.index % 2 === 0 ? (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#92dcff" }]}
            onPress={() => this._handleNavigation(rowData.id)}
          >
            <ImageBackground
              source={
                rowData.img == undefined
                  ? Images.No_image_found
                  : { uri: rowData.img }
              }
              style={styles.evenOddImgBg}
            >
              <TouchableOpacity
                onPress={() =>
                  this._renderDeleteItem(rowData.index, rowData.id)
                }
                style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
              >
                <Image style={styles.likeBtn} source={Images.heart_selected} />
              </TouchableOpacity>
            </ImageBackground>

            <View style={styles.evenReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(rowData.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
              <Text numberOfLines={1} style={styles.titleAuthorNameTxt1}>
                {"Auther Name : "}{rowData.author}
              </Text>
              */}
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.evenOddBlogBg, { backgroundColor: "#baff88" }]}
            onPress={() => this._handleNavigation(rowData.id)}
          >
            <View style={styles.oddReadMoreBg}>
              <View>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.dateReadMoreTxt}>
                  {this._dateConvert(rowData.date)}
                </Text>
                <TouchableOpacity
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.readMoreTxtBg}
                  onPress={() => this._handleNavigation(rowData.id)}
                >
                  <Text style={styles.readMoreTxt}>Read More</Text>
                  {I18nManager.isRTL ? (
                    <Image
                      source={Images.readMoreLeftArrow}
                      style={styles.readMoreArrow}
                    />
                  ) : (
                    <Image
                      source={Images.readMoreArrow}
                      style={styles.readMoreArrow}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {/* Author Name
                <Text numberOfLines={1} style={styles.titleAuthorNameTxt}>
                  {"Auther Name : "}{rowData.author}
                </Text>
                */}
            </View>
            <ImageBackground
              source={
                rowData.img == undefined
                  ? Images.No_image_found
                  : { uri: rowData.img }
              }
              style={styles.evenOddImgBg}
            >
              <TouchableOpacity
                onPress={() =>
                  this._renderDeleteItem(rowData.index, rowData.id)
                }
                style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.39 }]}
              >
                <Image style={styles.likeBtn} source={Images.heart_selected} />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainView}>
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.backArrowfun()}
            >
              <Ionicons
                name={
                  I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"
                }
                size={35}
                color="white"
                style={{ paddingRight: 10 }}
              />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.textTitle}>Favorites</Text>
          </Body>

          <Right style={styles.right} transparent />
        </Header>
        <Content>
          <View>
            {this.state.isLoading ? (
              <View style={styles.imageOverlay}>
                <Spinner color="black" />
              </View>
            ) : this.state.internetConnection == true ? (
              <View>
                {this.state.doneApiCall == true ? (
                  <View>
                    {this.state.favlist == true ? (
                      <ListView
                        dataSource={this.state.dataSourceBlog}
                        renderRow={this._renderRowBlog.bind(this)}
                        onContentSizeChange={this.onContentSize}
                        scrollEnabled={false}
                        enableEmptySections
                        pageSize={4}
                      />
                    ) : (
                      <View
                        style={{
                          height: Metrics.HEIGHT,
                          width: Metrics.WIDTH,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "transparent"
                        }}
                      >
                        <Text style={styles.noInternetText}>No Data Found</Text>
                      </View>
                    )}
                  </View>
                ) : null}
              </View>
            ) : (
              <View
                style={{
                  height: Metrics.HEIGHT,
                  width: Metrics.WIDTH,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent"
                }}
              >
                <Text style={styles.noInternetText}>
                  No Internet Connection
                </Text>
                <TouchableOpacity
                  style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                  onPress={() => this._getFavPostList()}
                >
                  <Text style={styles.ReloadText}>Reload</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Content>
      </View>
    );
  }
}
