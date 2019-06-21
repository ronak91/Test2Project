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
import Swiper from "react-native-swiper";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Dropdown from "../../../Components/Dropdown/dropdown/";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

// Screen Styles
import styles from "./styles";
import { Images, Metrics } from "../../../Themes/";

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({ rowHasChanged });

const likedPosts = [];
const AllPosts = [];
const blogs = [];
var rerloadlog = [];
var tempdata = [];
var dataSourceObjects = [];
var listViewHeight = 0;

function handleFirstConnectivityChange(isConnected) {
  NetInfo.isConnected.removeEventListener(
    "connectionChange",
    handleFirstConnectivityChange
  );
}

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogCount: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ],
      latestBlog: [],
      filterdata: [],
      isLoading: true,
      donecategoryCall: false,
      internetConnection: false,
      CatNAME: "",
      CatID: "",
      searchText: "",
      isSearching: false,
      dot_index: 0,
      paginationCount: 0,
      dataSourceBlog: ds.cloneWithRows(blogs)
    };
  }

  _handleBack() {
    newArray1 = [];
    AsyncStorage.removeItem("SmsInboxList");
    AsyncStorage.multiSet([["SmsInboxList", JSON.stringify(blogs)]]);
    this.props.navigation.navigate("CategoryList");
  }

  componentWillMount() {
    var that = this;
    this.setState({
      isLoading: true
    });

    AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME"]).then(data => {
      this.setState({
        CatID: data[1][1],
        CatNAME: data[2][1]
      });
      console.log(this.state.CatID);
    });

    AsyncStorage.multiGet(["LikedPostList", "CatID", "CatNAME"]).then(data => {
      var myArray = JSON.parse(data[0][1]);
      console.log("getLikedPosts");
      console.log(data[0][1]);
      this.setState({
        CatID: data[1][1],
        CatNAME: data[2][1]
      });
      console.log(this.state.CatID);
      var temp = [];

      for (var i = 0; i < myArray.length; i++) {
        temp.push({
          id: myArray[i].id
        });
      }
      likedPosts = temp;
    });

    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("CategoryList");
      return true;
    });
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
    timeAgo = Day + " " + timeMonth + " " + Year;
    //  console.log(timeAgo);
    return timeAgo;
  };
  // Time Calculation

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    setTimeout(() => {
      this._getPostList();
    }, 4000);
  }

  _getPostList() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    const config = {
      method: "GET"
    };

    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.setState({ isLoading: true });
        console.log(this.state.CatID);
        var categoryid = this.state.CatID.toString();
        console.log(categoryid);
        fetch(
          "http://antiquerubyreact.aliansoftware.net/wordpress-blog/api/get_category_posts/?id="+categoryid,
          config
        )
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            console.log(responseJson.posts.length);
            tempData = [];
            tempLatestblog = [];
            var i;
            var categoryID = "";

            for (i = 0; i < responseJson.posts.length; i++) {
              tempData.push({
                id: responseJson.posts[i].id,
                catID: responseJson.posts[i].categories[0].id,
                title: responseJson.posts[i].title,
                content: responseJson.posts[i].content,
                excerpt: responseJson.posts[i].excerpt,
                date: responseJson.posts[i].date,
                img: responseJson.posts[i].thumbnail,
                author: responseJson.posts[i].author.name,
                bgColor: "#92dcff"
              });
            }

            for (var j = 0; j < tempData.length; j++) {
              var isLiked = false;
              lasttitle = "";

              var SampleText = tempData[j].title.toString();
              resultArray = SampleText.split(" ");
              for (var i = 0; i < resultArray.length; i++) {
                var NewText = "";
                var changeText = resultArray[i].toString();
                NewText = changeText.replace("&amp;", "&");
                lasttitle = `${lasttitle} ${NewText}`;
              }

              if (likedPosts.length != 0) {
                for (var i = 0; i < likedPosts.length; i++) {
                  if (likedPosts[i].id == tempData[j].id) {
                    console.log(likedPosts[i].id);
                    console.log(tempData[j].id);
                    isLiked = true;
                  }
                }
              } else {
                isLiked: false;
              }

              if (j < 3) {
                tempLatestblog.push({
                  index: j,
                  id: tempData[j].id,
                  title: lasttitle,
                  excerpt: tempData[j].excerpt,
                  date: tempData[j].date
                });
              }

              dataSourceObjects.push({
                index: j,
                id: tempData[j].id,
                title: lasttitle,
                excerpt: tempData[j].excerpt,
                content: tempData[j].content,
                date: tempData[j].date,
                img: tempData[j].img,
                author: tempData[j].author,
                bgColor: "#92dcff",
                isLiked: isLiked
              });
            }

            rerloadlog = dataSourceObjects;
            latestBlog = tempLatestblog;

            console.log(dataSourceObjects);

            this.setState({
              latestBlog: tempLatestblog,
              dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
              doneApiCall: true,
              internetConnection: true,
              isLoading: false
            });
          })
          .catch(error => {
            this.setState({
              isLoading: false
            });
            console.error(error);
          });
      } else {
        this.setState({
          isLoading: false,
          internetConnection: true
        });
        //alert("please check your Internet");
      }
    });
  }

  onChangeText = (newText) => {
    // insert your logic here
    console.log(newText);
    tempdata = [];
    var interval = 0;
    this.setState({
      filterdata: [],
    });
    //filterdata = dataSourceObjects;
    console.log(dataSourceObjects);
    this.setState({ isLoading: true });


    for(var i=0;i < dataSourceObjects.length;i++){
        var ismatch = false;

        //var isInt = myString.search(intRegex);
        var searchtext = newText.toLowerCase();

        //check into title
        var SampleText0 = dataSourceObjects[i].title.toString();
        console.log(SampleText0);
        var lowercase0 = SampleText0.toLowerCase();
        var resultArray0 = lowercase0.split(" ");
        if(resultArray0.includes(searchtext)) { ismatch = true; console.log(ismatch); }

        //check author author
        var SampleText = dataSourceObjects[i].author.toString();
        console.log(SampleText);
        var lowercase01 = SampleText.toLowerCase();
        console.log(lowercase01);
        var resultArray01 = lowercase01.split(" ");
        if(resultArray01.includes(searchtext)) { ismatch = true; console.log(ismatch); }

        //check into all excerpt
        var SampleText01 = dataSourceObjects[i].excerpt.toString();
        var lowercase01 = SampleText01.toLowerCase();
        var resultArray02 = lowercase01.split(" ");
        if(resultArray02.includes(searchtext)) { ismatch = true; console.log(ismatch); }

        //check into content
        var SampleText02 = dataSourceObjects[i].content.toString();
        var lowercase02 = SampleText02.toLowerCase();
        var resultArray03 = SampleText02.split(" ");
        if(resultArray03.includes(searchtext)){  ismatch = true; console.log(ismatch); }

        if(ismatch){
          tempdata.push({
            index: interval,
            id: dataSourceObjects[i].id,
            title: dataSourceObjects[i].title,
            excerpt: dataSourceObjects[i].excerpt,
            content: dataSourceObjects[i].content,
            date: dataSourceObjects[i].date,
            img: dataSourceObjects[i].img,
            author: dataSourceObjects[i].author,
            isLiked: dataSourceObjects[i].isLiked,
          });
          interval++;
        }
    }
    this.setState({
      filterdata: tempdata,
    });
    console.log(this.state.filterdata);

    if(newText == ""){
      this.setState({
        searchText: newText,
        isSearching: false,
        isLoading: false,
        dataSourceBlog: ds.cloneWithRows(dataSourceObjects),
      });
    }else{
      setTimeout(() => {
        this.setState({
          searchText: newText,
          isSearching: true,
          isLoading: false,
          dataSourceBlog: ds.cloneWithRows(this.state.filterdata),
        });
      }, 2000);

    }

  }

  _renderRow(rowData) {
    return (
      <View
        style={
          rowData.id == rerloadlog.length - 1
            ? styles.rowTrendingLast
            : styles.rowTrending
        }
      >
        <Image source={{ uri: rowData.img }} style={styles.trendingListImg} />
        <TouchableOpacity onPress={() => this._handleNavigation(rowData.id)}>
          <Text numberOfLines={2} style={styles.trendingDescription}>
            {rowData.title}
          </Text>
        </TouchableOpacity>
        <Text style={styles.trendingDate}>
          {" "}
          {this._dateConvert(rowData.date)}{" "}
        </Text>
      </View>
    );
  }

  onContentSize(contentWidth, contentHeight) {
    listViewHeight = contentHeight;
  }

  _handleNavigation(post_id) {
    var postID = post_id.toString();
    AsyncStorage.multiSet([["postID", postID]]);
    this.props.navigation.navigate("CategoryDetail");
  }

  _renderRowBlog(rowData) {
    return (
      <View>
        {rowData.index % 2 === 0 ? (
          <View
            style={[styles.evenOddBlogBg, { backgroundColor: '#92dcff' }]}
          >
            <ImageBackground
              source={{ uri: rowData.img }}
              style={styles.evenOddImgBg}
            >
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <FontAwesome name="heart" size={20} color="#da3c47" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.02 }]}
                >
                  <SimpleLineIcons name="heart" size={20} color="#fff" />
                </TouchableOpacity>
              )}
            </ImageBackground>

            <View style={styles.evenReadMoreBg}>
              <View>
                  <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                    {rowData.title}
                  </Text>
                  <Text style={styles.dateReadMoreTxt}>
                    {this._dateConvert(rowData.date)}
                  </Text>
                  <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                    {rowData.title}
                  </Text>
                  <TouchableOpacity
                    style={styles.readMoreTxtBg}
                    onPress={() => this._handleNavigation(rowData.id)}>
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
          </View>
        ) : (
          <View
            style={[styles.evenOddBlogBg, { backgroundColor: '#baff88' }]}>
            <View style={styles.oddReadMoreBg}>
               <View>
                    <Text numberOfLines={2} style={styles.titleReadMoreTxt}>
                      {rowData.title}
                    </Text>
                    <Text style={styles.dateReadMoreTxt}>
                      {this._dateConvert(rowData.date)}
                    </Text>
                    <Text numberOfLines={3} style={styles.descriptionReadMoreTxt}>
                      {rowData.title}
                    </Text>
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
              source={{ uri: rowData.img }}
              style={styles.evenOddImgBg}
            >
              {rowData.isLiked == true ? (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.42 }]}
                >
                  <FontAwesome name="heart" size={20} color="red" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.onLikeClick(rowData.id)}
                  style={[styles.heart, { paddingLeft: Metrics.WIDTH * 0.42 }]}
                >
                  <SimpleLineIcons name="heart" size={20} color="#fff" />
                </TouchableOpacity>
              )}
            </ImageBackground>
          </View>
        )}
      </View>
    );
  }

  swipeRight() {
    this.refs.swiper.scrollBy(1);
    // if (I18nManager.isRTL) {
    //   this.refs.swiper.scrollBy(-1);
    // } else {
    //   this.refs.swiper.scrollBy(1);
    // }
    if (this.state.paginationCount == 9) {
      this.setState({ paginationCount: 0 });
    } else {
      this.setState({ paginationCount: this.state.paginationCount + 1 });
    }
  }

  swipeLeft() {
    // if (I18nManager.isRTL) {
    this.refs.swiper.scrollBy(-1);
    // } else {
    //   this.refs.swiper.scrollBy(-1);
    // }

    // this.setState({ paginationCount: this.state.paginationCount - 1 });
    if (this.state.paginationCount == 0) {
      this.setState({ paginationCount: 9 });
    } else {
      this.setState({ paginationCount: this.state.paginationCount - 1 });
    }
  }

  render() {
    // console.log("dataSourceblog==");
    // console.log(" " + this.state.dataSourceBlog.getRowCount());
    const { blogCount } = this.state;
    StatusBar.setBarStyle("light-content", true);
    var that = this;

    return (
      <View style={styles.mainView}>
        <Header androidStatusBarColor={"#0e1130"} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this._handleBack()}
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
            <Text style={styles.textTitle}>{this.state.CatNAME}</Text>
          </Body>

          <Right style={styles.right} transparent />
        </Header>

        <Content>
          <View style={styles.searchViewBg}>
            <View style={styles.searchBg}>
              <Input
                style={styles.searchInput}
                placeholder="Search for News"
                placeholderTextColor="#555567"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                selectionColor="#6d6d71"
                onChangeText={this.onChangeText}
                value={this.state.searchText}
                ref={comp => { this.textInputRef = comp; }}
              />
              <EvilIcons name={"search"} size={24} color="#8e8e93" />

            </View>
            <View style={styles.searchYellowBlog} />
          </View>

          <View>
            {this.state.isLoading ? (
              <View style={styles.imageOverlay}>
                <Spinner color="black" />
              </View>
            ) : this.state.internetConnection == true ? (
               <View>
                {this.state.doneApiCall == true ? (
                  <View>
                    { this.state.isSearching != true ? (
                      <View>
                        <Text style={styles.trendingTxt}>Trending</Text>
                        <View style={styles.listTrending}>
                          <ListView
                            dataSource={this.state.dataSourceBlog}
                            renderRow={this._renderRow.bind(this)}
                            pageSize={4}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                          />
                        </View>
                        <Text style={styles.latestBlogTxt}>Latest Blogs</Text>
                        <View style={styles.sliderBG}>
                          <View style={styles.dotListBg}>
                            {this.state.latestBlog.map((item, value) => {
                              return (
                                <View style={styles.rowDot} key={value}>
                                  <View
                                    style={
                                      item.index == this.state.dot_index
                                        ? [styles.dot, { backgroundColor: "white" }]
                                        : [
                                            styles.dot,
                                            {
                                              backgroundColor: "transparent",
                                              borderWidth: 0.5,
                                              borderColor: "white"
                                            }
                                          ]
                                    }
                                  />
                                </View>
                              );
                            })}
                          </View>
                          <View style={styles.rowLatestBlogBg}>
                            <Swiper
                              showsButtons={false}
                              autoplay={true}
                              horizontal={true}
                              loop={true}
                              dot={<View />}
                              activeDot={<View />}
                              onIndexChanged={index =>
                                this.setState({ dot_index: index })
                              }
                            >
                              {this.state.latestBlog.map((item, key) => {
                                return (
                                  <View style={styles.rowlatestBlog} key={key}>
                                    <Text style={styles.latestBlogTitleDateTxt}>
                                      {item.title}
                                    </Text>
                                    <Text style={styles.latestBlogDescTxt}>
                                      {item.title}
                                    </Text>
                                    <Text style={styles.latestBlogTitleDateTxt1}>
                                      {this._dateConvert(item.date)}
                                    </Text>
                                  </View>
                                );
                              })}
                            </Swiper>
                          </View>
                        </View>
                      </View>
                    ) : null
                    }
                    <Text style={styles.blogTxt}>Blogs</Text>
                    <Swiper
                      style={{ height: listViewHeight }}
                      ref="swiper"
                      showsButtons={false}
                      autoplay={false}
                      horizontal={true}
                      loop={false}
                      dot={<View />}
                      activeDot={<View />}
                      index={0}
                      scrollEnabled={false}
                    >
                      {blogCount.map((itemBlog, key) => {
                        return (
                          <View
                            style={{
                              width: Metrics.WIDTH,
                              height: listViewHeight,
                              backgroundColor: "white"
                            }}
                            key={key}
                          >
                            <ListView
                              ref="listView"
                              dataSource={this.state.dataSourceBlog}
                              renderRow={this._renderRowBlog.bind(this)}
                              onContentSizeChange={this.onContentSize}
                              scrollEnabled={false}
                              enableEmptySections
                              pageSize={4}
                            />
                          </View>
                        );
                      })}
                    </Swiper>
                    <View style={styles.footerStyle}>
                      <TouchableOpacity
                        onPress={() =>
                          I18nManager.isRTL
                            ? this.swipeRight()
                            : this.swipeLeft()
                        }
                      >
                        <Image
                          source={Images.paginationLeftArrow}
                          style={styles.paginationArrow}
                        />
                      </TouchableOpacity>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.paginationCountBg}
                      >
                        {blogCount.map((itemCount, index) => {
                          return (
                            <View key={index}>
                              <Text
                                style={
                                  itemCount.id == this.state.paginationCount
                                    ? [
                                        styles.paginationCountTxt,
                                        { color: "#ffc700" }
                                      ]
                                    : [
                                        styles.paginationCountTxt,
                                        { color: "black" }
                                      ]
                                }
                              >
                                {itemCount.id + 1}
                              </Text>
                            </View>
                          );
                        })}
                      </ScrollView>

                      <TouchableOpacity
                        onPress={() =>
                          I18nManager.isRTL
                            ? this.swipeLeft()
                            : this.swipeRight()
                        }
                      >
                        <Image
                          source={Images.paginationRightArrow}
                          style={styles.paginationArrow}
                        />
                      </TouchableOpacity>
                    </View>
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
                }}>
                <Text style={styles.noInternetText}>
                  No Internet Connection
                </Text>
                <TouchableOpacity
                  style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                  onPress={() => this._getPostList()}
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

  onLikeClick(listId) {
    var temp = [];
    var temp1 = [];
    temp = likedPosts;
    temp1 = likedPosts;
    var ismatch = false;

    if (temp.length != 0) {
      ismatch = false;

      for (var t = 0; t < temp.length; t++) {
        if (temp[t].id == listId) {
          console.log("ID Removed");
          var toRemove = listId;
          console.log(toRemove);
          var index = temp1.indexOf(toRemove);
          temp1.splice(t, 1);
          ismatch = true;
          break;
        }
      }

      if (ismatch == false) {
        console.log("ID Added");
        temp1.push({
          id: listId
        });
      }
    } else {
      console.log("ID Added");
      temp1.push({
        id: listId
      });
    }

    console.log(temp1);

    for (var i = 0; i < rerloadlog.length; i++) {
      if (rerloadlog[i].id == listId) {
        if (rerloadlog[i].isLiked) {
          rerloadlog[i].isLiked = false;
        } else {
          rerloadlog[i].isLiked = true;
        }
      }
    }

    console.log(rerloadlog);

    this.setState({
      dataSourceBlog: ds.cloneWithRows(rerloadlog)
    });
    AsyncStorage.multiSet([["LikedPostList", JSON.stringify(temp1)]]);
    //}
  }
}
